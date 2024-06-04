<script setup lang="ts">
import type { Presta } from '../../types'

const localePath = useLocalePath()
const { t } = useI18n()
const { path } = useRoute()

const { data: prestation } = await useAsyncData(
  `prestation${path}`,
  () => queryContent<Presta>()
    .only(['title'])
    .where({ _path: path })
    .findOne(),
)

if (!prestation.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}
</script>

<template>
  <main v-if="prestation">
    <article vocab="https://schema.org/" typeof="Article">
      <div class="container intro">
        <AppBack :path="localePath('prestations')" :label="t('menu[1].label')" />
        <h1 property="headline">
          {{ prestation.title }}
        </h1>
      </div>
    </article>
  </main>
</template>
