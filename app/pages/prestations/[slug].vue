<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()
const { path } = useRoute()

const { data: presta } = await useAsyncData(`post${path}`, () => {
  return queryCollection(`presta_${locale.value}`)
    .select('path', 'title', 'seo', 'lead', 'intro', 'solutions', 'features', 'process', 'faq')
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
    <section vocab="https://schema.org/" typeof="Service">
      <div class="container intro">
        <AppBack :path="localePath('prestations')" :label="t('navigation.menu[1].label')" />
        <h1 property="name serviceType">
          {{ presta.title }}
        </h1>
      </div>

      <AppPicture
        :path
        type="banner"
        sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1400px"
        class="banner"
      />

      <div class="container row">
        <h2 class="col" property="description">
          {{ presta.lead }}
        </h2>
        <div class="col col--1-9 lead">
          <p v-for="(paragraph, index) in presta.intro" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div class="container row features">
        <h2 class="col col--1-5">
          {{ presta.solutions.title }}
        </h2>
        <div class="col col--6-13">
          <template v-for="solution in presta.solutions.list" :key="solution.title">
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </template>
        </div>
      </div>

      <div class="container row tags-group">
        <h2 class="col col--1-6">
          {{ presta.features.title }}
        </h2>
        <ul class="col col--7-12 tags">
          <li v-for="tag in presta.features.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </div>

      <div class="container row">
        <h2 class="col col--1-5">
          {{ presta.process.title }}
        </h2>
        <ol :class="`col row items-${presta.process.steps.length}`">
          <li v-for="(process, index) in presta.process.steps" :key="process.title" :class="`big-count item item-${index + 1}`">
            <h3>{{ process.title }}</h3>
            <p>{{ process.description }}</p>
          </li>
        </ol>
      </div>

      <div class="container row faq" vocab="https://schema.org/" typeof="FAQPage">
        <h2 class="col col--1-5">
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
      </div>
    </section>

    <LazyAppRequest />
  </main>
</template>
