<script setup lang="ts">
import type { Presta } from '../../types'

const { path } = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()

const { data: prestations } = await useAsyncData(
  `prestations${path}`,
  () => queryContent<Presta>(localePath('prestations'))
    .only(['_path', 'title', 'description', 'tags', 'body'])
    .find(),
  { watch: [localePath] },
)

useSeoMeta(useMeta('presta'))
useHead({ script: [useBreadcrumb('presta')] })
</script>

<template>
  <main>
    <div class="container intro">
      <h1>{{ t('presta.headline') }}</h1>
      <p class="lead">
        {{ t('presta.lead') }}
      </p>
    </div>

    <div v-for="(prestation, index) in prestations" :key="index" class="container">
      <div :class="`intro ${['intro-end', '', 'intro-end'][index]}`">
        <h2>
          {{ prestation.title }}
        </h2>
      </div>
      <div class="row row-center">
        <p :class="`lead col col--${['7-12', '1-6', '7-12'][index]}`">
          {{ prestation.description }}
        </p>
        <ul :class="`col col--${['3-6', '7-10', '3-6'][index]}`">
          <li v-for="tag in prestation.tags" :key="tag" class="tag tag-bold">
            {{ tag }}
          </li>
        </ul>
      </div>
      <div class="row">
        <AppMore :path="prestation._path" :label="prestation.title" :class="`start col--${['7-12', '1-6', '7-12'][index]}`" />
      </div>
    </div>

    <LazyAppRequest />
  </main>
</template>
