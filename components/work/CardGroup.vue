<script setup lang="ts">
import type { Work } from '../../types'

export interface Props {
  limit?: number
  headlineTag?: string
  more?: boolean
  titleTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  limit: 0,
  headlineTag: 'h1',
  titleTag: 'h2',
  more: false,
})

const { path } = useRoute()
const { t } = useI18n()

const { data: works } = await useAsyncData(
  path,
  () => queryContent<Work>(path)
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'body'])
    .sort({ _id: -1, $numeric: true })
    .limit(props.limit)
    .find(),
)
</script>

<template>
  <section id="realisations" class="container">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t('works.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <WorkCard v-for="work in works" :key="work._path" :work="work" :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" />
  </section>
</template>
