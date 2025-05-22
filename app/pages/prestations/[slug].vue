<script setup lang="ts">
const { path } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { baseUrl } = useUrl()

const { data: presta } = await useAsyncData(`presta${path}`, () => {
  return queryCollection(`presta_${locale.value}`)
    .select('path', 'seo', 'title', 'description', 'intro', 'solutions', 'features', 'process', 'faq')
    .path(computed(() => localePath(path)).value)
    .first()
}, { watch: [locale] })

if (!presta.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const { data: prestaOther } = await useAsyncData(`presta-other${path}`, () => {
  return queryCollection(`presta_${locale.value}`)
    .select('path', 'title', 'description', 'cta')
    .where('path', '<>', path)
    .all()
}, { watch: [locale] })

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

useSeoSlug({
  title: () => `${presta.value!.seo.title}`,
  description: () => `${presta.value!.seo.description}`,
  width: 2800,
  height: 1575,
  category: 'prestations',
  currentPageTitle: () => presta.value!.title,
})
</script>

<template>
  <main v-if="presta" class="presta">
    <article vocab="https://schema.org/" typeof="Service" aria-labelledby="title">
      <header class="container intro">
        <span property="mainEntityOfPage" typeof="WebPage">
          <link property="url" :href="baseUrl(path)">
        </span>

        <AppBack path="prestations" :label="t('navigation.menu[1].label')" />
        <h1 id="title" property="name serviceType">
          {{ presta.title }}
        </h1>
      </header>

      <AppPicture
        :path
        type="banner"
        sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1400px"
        class="banner"
      />

      <section class="container row" aria-labelledby="description">
        <h2 id="description" class="col" property="description">
          {{ presta.description }}
        </h2>
        <div class="col col--1-9 lead">
          <p v-for="(paragraph, index) in presta.intro" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <section class="container row features" aria-labelledby="solutions">
        <h2 id="solutions" class="col col--1-5">
          {{ presta.solutions.title }}
        </h2>
        <div class="col col--6-13">
          <template v-for="solution in presta.solutions.list" :key="solution.title">
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </template>
        </div>
      </section>

      <section class="container row tags-group" aria-labelledby="features">
        <h2 id="features" class="col col--1-6">
          {{ presta.features.title }}
        </h2>
        <ul class="col col--7-12 tags">
          <li v-for="tag in presta.features.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </section>

      <section class="container row" aria-labelledby="process">
        <h2 id="process" class="col col--1-5">
          {{ presta.process.title }}
        </h2>
        <ol :class="`col row items-${presta.process.steps.length}`">
          <li v-for="(process, index) in presta.process.steps" :key="process.title" :class="`big-count item item-${index + 1}`">
            <h3>{{ process.title }}</h3>
            <p>{{ process.description }}</p>
          </li>
        </ol>
      </section>

      <section class="container row faq" vocab="https://schema.org/" typeof="FAQPage" aria-labelledby="faq">
        <h2 id="faq" class="col col--1-5">
          {{ presta.faq.title }}
        </h2>
        <div class="col">
          <div v-for="(faq, index) in presta.faq.questions" :key="index" class="question" property="mainEntity" typeof="Question">
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
        {{ t('prestations.other') }}
      </h2>
      <div class="col card-group">
        <PrestaCard v-for="other in prestaOther" :key="other.path" :presta="other" title-tag="h3" />
      </div>
    </aside>

    <LazyAppRequest />
  </main>
</template>
