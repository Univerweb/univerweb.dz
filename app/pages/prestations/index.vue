<script setup lang="ts">
const { locale } = useI18n()
const { baseUrl } = useUrl()
const { path } = useRoute()

const { data: prestations } = await useAsyncData(
  () => `prestations-${locale.value}`,
  () => queryCollection(`prestations_${locale.value}`)
    .select('title', 'description', 'headline', 'lead')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'prestations',
  title: () => prestations.value!.title,
  description: () => prestations.value!.description,
})

const { data: items } = await useAsyncData(
  () => `prestations-items-${locale.value}`,
  () => queryCollection(`service_${locale.value}`)
    .select('path', 'title')
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
  <main v-if="prestations">
    <PrestationCardGroup :prestations />
    <LazyAppRequest />
  </main>
</template>
