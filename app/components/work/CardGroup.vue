<script setup lang="ts">
interface Props {
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
const { locale, t } = useI18n()

const { data: works } = await useAsyncData(`works${path}`, () => {
  return queryCollection(`work_${locale.value}`)
    .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'lead')
    .order('stem', 'DESC')
    .limit(props.limit)
    .all()
}, { watch: [locale] })
</script>

<template>
  <section id="realisations" class="container">
    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('realisations.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <WorkCard v-for="work in works" :key="work.path" :work="work" :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" path="realisations" :label="t('home.actions.exploreProjects')" class="intro-justify" />
  </section>
</template>
