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
const { baseUrl } = useUrl()
const localePath = useLocalePath()

const { data: works } = await useAsyncData(`realisations-${path}`, () => {
  return queryCollection(`work_${locale.value}`)
    .select('path', 'stem', 'seo', 'title', 'description', 'createdAt', 'updatedAt', 'category')
    .order('stem', 'DESC')
    .limit(props.limit)
    .all()
}, { watch: [locale] })
</script>

<template>
  <section id="realisations" class="container" vocab="https://schema.org/" typeof="CollectionPage">
    <meta property="name" :content="t('navigation.menu[0].label')">
    <link property="url" :href="baseUrl(localePath('realisations'))">

    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('realisations.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <WorkCard v-for="card in works" :key="card.path" :card :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" path="realisations" :label="t('home.actions.exploreProjects')" class="intro-justify" />
  </section>
</template>
