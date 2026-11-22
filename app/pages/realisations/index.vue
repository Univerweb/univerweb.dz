<script setup lang="ts">
const { locale } = useI18n()
const { baseUrl } = useUrl()
const { path } = useRoute()

const { data: realisations } = await useAsyncData(
  () => `realisations-${locale.value}`,
  () => queryCollection(`realisations_${locale.value}`)
    .select('title', 'description', 'headline', 'lead')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'realisations',
  title: () => realisations.value!.title,
  description: () => realisations.value!.description,
})

const { data: items } = await useAsyncData(
  () => `realisations-items-${locale.value}`,
  () => queryCollection(`project_${locale.value}`)
    .select('path', 'title')
    .order('stem', 'DESC')
    .all(),
  { watch: [locale] },
)

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
    'mainEntity': { '@id': `${baseUrl(path)}#itemlist` },
  }),
  defineItemList({
    '@id': `${baseUrl(path)}#itemlist`,
    'itemListElement': () => (items.value ?? []).map(item => ({
      name: item.title,
      url: baseUrl(item.path),
    })),
  }),
])
</script>

<template>
  <main v-if="realisations">
    <RealisationCardGroup :realisations />
    <LazyAppRequest />
  </main>
</template>
