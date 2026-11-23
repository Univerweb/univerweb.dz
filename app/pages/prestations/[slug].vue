<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { baseUrl } = useUrl()

const [{ data: service }, { data: related }] = await Promise.all([
  useAsyncData(
    () => `service-${locale.value}-${slug}`,
    () => queryCollection(`service_${locale.value}`)
      .select('path', 'seo', 'title', 'description', 'alt', 'createdAt', 'updatedAt', 'intro', 'solutions', 'features', 'process', 'faq')
      .path(localePath(path))
      .first(),
    { watch: [locale] },
  ),

  useAsyncData(
    () => `service-related-${locale.value}-${slug}`,
    () => queryCollection(`service_${locale.value}`)
      .select('icon', 'title', 'description', 'cta', 'path')
      .where('path', '<>', path)
      .all(),
    { watch: [locale] },
  ),
])

if (!service.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
    fatal: true,
  })
}

useSeo({
  page: { name: 'prestations', slug: true },
  title: () => service.value!.seo.title!,
  description: () => service.value!.seo.description!,
  ogTitle: () => service.value!.seo.title!,
  breadcrumbTitle: () => service.value!.title,
  ogImageAlt: () => service.value!.alt,
  ogImageWidth: 2800,
  ogImageHeight: 1575,
})

useSchemaOrg([
  defineWebPage({
    '@type': ['WebPage', 'FAQPage'],
    'datePublished': () => schemaDate(service.value!.createdAt),
    'dateModified': () => schemaDate(service.value!.updatedAt),
  }),
  defineService({
    name: () => service.value!.title,
    serviceType: () => service.value!.title,
    description: () => service.value!.description,
    provider: { '@id': baseUrl('/#identity') },
    areaServed: 'DZ',
  }),
  ...service.value.faq.questions.map(faq => defineQuestion({
    name: faq.question,
    acceptedAnswer: faq.answer,
  })),
])

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const beforeEnter = (el: Element) => {
  const elHTMLElement = el as HTMLElement
  elHTMLElement.style.height = '0'
  elHTMLElement.style.overflow = 'hidden'
}

const enter = (el: Element) => {
  const elHTMLElement = el as HTMLElement
  elHTMLElement.style.height = elHTMLElement.scrollHeight + 'px'
}

const afterEnter = (el: Element) => {
  const elHTMLElement = el as HTMLElement
  elHTMLElement.style.height = 'auto'
  elHTMLElement.style.overflow = 'visible'
}

const beforeLeave = (el: Element) => {
  const elHTMLElement = el as HTMLElement
  elHTMLElement.style.height = elHTMLElement.scrollHeight + 'px'
}

const leave = (el: Element) => {
  const elHTMLElement = el as HTMLElement
  nextTick(() => {
    elHTMLElement.style.height = '0'
    elHTMLElement.style.overflow = 'hidden'
  })
}
</script>

<template>
  <main v-if="service" class="prestations">
    <article aria-labelledby="service-title">
      <header class="container intro">
        <AppBack path="prestations" :label="t('navigation.menu.prestations')" />
        <h1 id="service-title">
          {{ service.title }}
        </h1>
      </header>

      <AppPicture
        :picture="service"
        type="banner"
        class="banner"
      />

      <div class="container intro">
        <p class="lead">
          {{ service.description }}
        </p>
        <p v-for="(paragraph, index) in service.intro" :key="index">
          {{ paragraph }}
        </p>
      </div>

      <section class="container split features" aria-labelledby="solutions">
        <h2 id="solutions">
          {{ service.solutions.title }}
        </h2>
        <div>
          <template v-for="solution in service.solutions.list" :key="solution.title">
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </template>
        </div>
      </section>

      <section class="container split tags-group" aria-labelledby="features">
        <h2 id="features">
          {{ service.features.title }}
        </h2>
        <ul class="tags">
          <li v-for="tag in service.features.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </section>

      <section class="container row" aria-labelledby="process">
        <h2 id="process" class="col col--1-5">
          {{ service.process.title }}
        </h2>
        <ol class="col steps">
          <li v-for="process in service.process.steps" :key="process.title" class="big-count">
            <h3>{{ process.title }}</h3>
            <p>{{ process.description }}</p>
          </li>
        </ol>
      </section>

      <section class="container row faq" aria-labelledby="faq">
        <h2 id="faq" class="col col--1-5">
          {{ service.faq.title }}
        </h2>
        <div class="col">
          <div v-for="(faq, index) in service.faq.questions" :key="index" class="question">
            <h3>
              <button :id="`faq-header-${index + 1}`" :aria-expanded="activeIndex === index" :aria-controls="`faq-panel-${index + 1}`" @click="toggle(index)">
                <span>
                  {{ faq.question }}
                </span>
                <span class="icon" aria-hidden="true">
                  <span :class="{ expanded: activeIndex === index }" />
                  <span />
                </span>
              </button>
            </h3>
            <Transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave">
              <div
                v-show="activeIndex === index"
                :id="`faq-panel-${index + 1}`"
                :aria-labelledby="`faq-header-${index + 1}`"
                :aria-hidden="activeIndex !== index"
                class="intro"
              >
                <p>
                  {{ faq.answer }}
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </section>
    </article>

    <aside class="container row" aria-labelledby="other">
      <h2 id="other" class="col col--1-5">
        {{ t('headings.otherTurnkey') }}
      </h2>
      <div class="col card-group">
        <PrestationCard v-for="card in related" :key="card.path" title-tag="h3" :card />
      </div>
    </aside>

    <LazyAppRequest />
  </main>
</template>
