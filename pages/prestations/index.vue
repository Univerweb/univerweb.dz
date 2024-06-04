<script setup lang="ts">
import type { Presta } from '../../types'

const { path } = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const meta = useMeta('presta')
const breadcrumb = useBreadcrumb('presta')

const { data: prestations } = await useAsyncData(
  `prestations${path}`,
  () => queryContent<Presta>(localePath('prestations'))
    .only(['_path', 'title', 'description', 'tags', 'body'])
    .find(),
  { watch: [localePath] },
)

type Key = {
  [key: number]: string
}

const classTitle: Key = {
  0: 'intro-end',
  1: '',
  2: 'intro-end',
}

const classDescription: Key = {
  0: '7-12',
  1: '1-6',
  2: '7-12',
}

const classTags: Key = {
  0: '3-6',
  1: '7-10',
  2: '3-6',
}

useSeoMeta(meta)
useHead({ script: [breadcrumb] })
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
      <div :class="`intro ${classTitle[index]}`">
        <h2>
          {{ prestation.title }}
        </h2>
      </div>
      <div class="row row-center">
        <p :class="`lead col col--${classDescription[index]}`">
          {{ prestation.description }}
        </p>
        <ul :class="`col col--${classTags[index]}`">
          <li v-for="tag in prestation.tags" :key="tag" class="tag tag-bold">
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>

    <LazyAppRequest />
  </main>
</template>
