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
  () => queryContent<Pick<Presta, '_path' | 'title' | 'description' | 'tags'>>(localePath('prestations'))
    .only(['_path', 'title', 'description', 'tags'])
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
      <div v-for="presta in prestations" :key="presta._path" class="card-presta">
        <ul>
          <li v-for="tag in presta.tags" :key="tag" property="keywords" class="tag">
            {{ tag }}
          </li>
        </ul>
        <Component :is="titleTag">
          {{ presta.title }}
        </Component>
        <p class="lead">
          {{ presta.description }}
        </p>
        <AppMore :path="presta._path" :label="presta.title" />
      </div>
    </div>
  </section>
</template>
