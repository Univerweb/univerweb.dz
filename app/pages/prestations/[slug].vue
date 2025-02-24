<script setup lang="ts">
import type { Presta } from '../../types'

const localePath = useLocalePath()
const { t } = useI18n()
const { path } = useRoute()

const { data: presta } = await useAsyncData(
  `presta${path}`,
  () => queryContent<Presta>()
    .only(['title', 'description', 'faq'])
    .where({ _path: path })
    .findOne(),
)

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
</script>

<template>
  <main v-if="presta">
    <section vocab="https://schema.org/" typeof="Service">
      <div class="container intro">
        <AppBack :path="localePath('prestations')" :label="t('menu[1].label')" />
        <h1 property="name serviceType">
          {{ presta.title }}
        </h1>
        <p class="lead" property="description">
          {{ presta.description }}
        </p>
      </div>
    </section>

    <section v-if="presta.faq" class="container" vocab="https://schema.org/" typeof="FAQPage">
      <div class="intro">
        <h2>{{ t('presta.faq') }}</h2>
      </div>

      <div v-for="(faq, index) in presta.faq" :key="index" class="faq" property="mainEntity" typeof="Question">
        <h3 class="col">
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
    </section>

    <LazyAppRequest />
  </main>
</template>
