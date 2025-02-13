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
  </main>
</template>
