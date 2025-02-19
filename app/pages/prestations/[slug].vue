<script setup lang="ts">
import type { Presta } from '../../types'

const localePath = useLocalePath()
const { t } = useI18n()
const { path } = useRoute()

const { data: presta } = await useAsyncData(
  `presta${path}`,
  () => queryContent<Presta>()
    .only(['title', 'faq'])
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
</script>

<template>
  <main v-if="presta">
    <article vocab="https://schema.org/" typeof="Article">
      <div class="container intro">
        <AppBack :path="localePath('prestations')" :label="t('menu[1].label')" />
        <h1 property="headline">
          {{ presta.title }}
        </h1>
      </div>
    </article>

    <section v-if="presta.faq" class="container">
      <div class="intro">
        <h2>{{ t('presta.faq') }}</h2>
      </div>

      <div v-for="(faq, index) in presta.faq" :key="index" class="faq row">
        <h3 class="col">
          <button
            :id="`faq-header-${index + 1}`"
            :aria-expanded="activeIndex === index"
            :aria-controls="`faq-panel-${index + 1}`"
            @click="toggle(index)"
          >
            {{ faq.question }}
            <span class="icon" aria-hidden="true">
              <span :class="{ active: activeIndex === index }" />
              <span />
            </span>
          </button>
        </h3>

        <section
          v-show="activeIndex === index"
          :id="`faq-panel-${index + 1}`"
          :aria-labelledby="`faq-header-${index + 1}`"
          :aria-hidden="activeIndex !== index"
          class="col col--1-9"
        >
          <p>
            {{ faq.answer }}
          </p>
        </section>
      </div>
    </section>
  </main>
</template>
