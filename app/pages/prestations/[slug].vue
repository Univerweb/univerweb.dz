<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path } = useRoute()
const img = useImage()
const ogImage = img(localePath(`${path}_banner`, 'fr'), { format: 'webp', width: 2800, height: 1575 }, { provider: 'cloudinary' })

const { data: presta } = await useAsyncData(`post${path}`, () => {
  return queryCollection(`presta_${locale.value}`)
    .select('path', 'title', 'description', 'lead', 'intro', 'solutions', 'features', 'process', 'faq')
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

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': () => t('name'), 'item': localeBaseUrl },
          { '@type': 'ListItem', 'position': 2, 'name': () => t('presta.title'), 'item': () => `${baseUrl}${localePath('prestations')}` },
          { '@type': 'ListItem', 'position': 3, 'name': () => presta.value!.title },
        ],
      },
    },
  ],
})

useSeoMeta({
  title: () => presta.value!.title,
  description: () => presta.value!.description,
  ogTitle: () => presta.value!.title,
  ogDescription: () => presta.value!.description,
  ogType: 'article',
  ogImage,
  twitterTitle: () => presta.value!.title,
  twitterDescription: () => presta.value!.description,
  twitterImage: ogImage,
})
</script>

<template>
  <main v-if="presta" class="presta">
    <section vocab="https://schema.org/" typeof="Service">
      <div class="container intro">
        <AppBack :path="localePath('prestations')" :label="t('menu[1].label')" />
        <h1 property="name serviceType">
          {{ presta.title }}
        </h1>
      </div>

      <AppPicture
        :picture="presta"
        :alt="presta.lead"
        type="banner"
        sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1400px"
        class="banner"
      />

      <div class="container">
        <div class="row">
          <h2 class="col" property="description">
            {{ presta.lead }}
          </h2>
          <div class="col col--1-9 lead">
            <p v-for="(paragraph, index) in presta.intro" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>

      <div class="container features">
        <div class="row">
          <h2 class="col col--1-5">
            {{ presta.solutions.title }}
          </h2>

          <div class="col col--6-13">
            <template v-for="solution in presta.solutions.list" :key="solution.title">
              <h3>{{ presta.title }}</h3>
              <p>{{ solution.description }}</p>
            </template>
          </div>
        </div>
      </div>

      <div class="container tags-group">
        <div class="row">
          <h2 class="col col--1-6">
            {{ presta.features.title }}
          </h2>

          <ul class="col col--7-12 tags">
            <li v-for="tag in presta.features.tags" :key="tag">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <h2 col class="col col--1-5">
            {{ presta.process.title }}
          </h2>

          <ol class="col row">
            <li v-for="(process, index) in presta.process.steps" :key="process.title" :class="`big-count col ${['col--1-6 col--1-3', 'col--7-12 col--4-6', 'col--1-6 col--7-9', 'col--7-12 col--10-12'][index % 4]}`">
              <h3>{{ process.title }}</h3>
              <p>{{ process.description }}</p>
            </li>
          </ol>
        </div>
      </div>

      <div class="container faq" vocab="https://schema.org/" typeof="FAQPage">
        <div class="row">
          <h2 col class="col col--1-5">
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
                <section
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
                </section>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LazyAppRequest />
  </main>
</template>
