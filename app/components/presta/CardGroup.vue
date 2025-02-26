<script setup lang="ts">
import type { Presta } from '@/types'

interface Props {
  headlineTag?: string
  titleTag?: string
}

withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
  titleTag: 'h2',
})

const { path } = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()

const { data: prestations } = await useAsyncData(
  `prestations${path}`,
  () => queryContent<Presta>(localePath('prestations'))
    .only(['_path', 'title', 'label', 'lead', 'features'])
    .find(),
  { watch: [localePath] },
)
</script>

<template>
  <section id="prestations" class="container">
    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('presta.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <PrestaCard v-for="presta in prestations" :key="presta._path" :presta="presta" :title-tag="titleTag" />
    </div>
  </section>
</template>
