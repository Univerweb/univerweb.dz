<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { baseUrl } = useUrl()

const [{ data: service }, { data: related }] = await Promise.all([
  useAsyncData(
    () => `service-${locale.value}-${slug}`,
    () => queryCollection(`service_${locale.value}`)
      .select('path', 'seo', 'title', 'description', 'alt', 'intro', 'solutions', 'features', 'process', 'faq')
      .path(localePath(path))
      .first(),
    { watch: [locale] },
  ),

  useAsyncData(
    () => `service-related-${locale.value}-${slug}`,
    () => queryCollection(`service_${locale.value}`)
      .select('path', 'title', 'description', 'cta')
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
    <article vocab="https://schema.org/" typeof="Service" aria-labelledby="title">
      <header class="container intro">
        <span property="mainEntityOfPage" typeof="WebPage">
          <link property="url" :href="baseUrl(path)">
        </span>

        <AppBack path="prestations" :label="t('navigation.menu.prestations')" />
        <h1 id="title" property="name serviceType">
          {{ service.title }}
        </h1>
      </header>

      <AppPicture
        :picture="service"
        type="banner"
        sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1400px"
        class="banner"
      />

      <section class="container row" aria-labelledby="description">
        <h2 id="description" class="col" property="description">
          {{ service.description }}
        </h2>
        <div class="col col--1-9 lead">
          <p v-for="(paragraph, index) in service.intro" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <section class="container row features" aria-labelledby="solutions">
        <h2 id="solutions" class="col col--1-5">
          {{ service.solutions.title }}
        </h2>
        <div class="col col--6-13">
          <template v-for="solution in service.solutions.list" :key="solution.title">
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </template>
        </div>
      </section>

      <section class="container row tags-group" aria-labelledby="features">
        <h2 id="features" class="col col--1-6">
          {{ service.features.title }}
        </h2>
        <ul class="col col--7-12 tags">
          <li v-for="tag in service.features.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </section>

      <section class="container row" aria-labelledby="process">
        <h2 id="process" class="col col--1-5">
          {{ service.process.title }}
        </h2>
        <ol :class="`col row items-${service.process.steps.length}`">
          <li v-for="(process, index) in service.process.steps" :key="process.title" :class="`big-count item item-${index + 1}`">
            <h3>{{ process.title }}</h3>
            <p>{{ process.description }}</p>
          </li>
        </ol>
      </section>

      <section class="container row faq" vocab="https://schema.org/" typeof="FAQPage" aria-labelledby="faq">
        <h2 id="faq" class="col col--1-5">
          {{ service.faq.title }}
        </h2>
        <div class="col">
          <div v-for="(faq, index) in service.faq.questions" :key="index" class="question" property="mainEntity" typeof="Question">
            <h3>
              <button :id="`faq-header-${index + 1}`" :aria-expanded="activeIndex === index" :aria-controls="`faq-panel-${index + 1}`" @click="toggle(index)">
                <span property="name">
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
                class="row"
                property="acceptedAnswer"
                typeof="Answer"
              >
                <p class="col col--1-9" property="text">
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
        <PrestationCard v-for="card in related" :key="card.path" :card title-tag="h3" />
      </div>
    </aside>

    <LazyAppRequest />
  </main>
</template>
