<script setup lang="ts">
const { locale } = useI18n()

const { data: realisationsPage } = await useAsyncData(
  () => `realisations-page-${locale.value}`,
  () => queryCollection(`realisations_page_${locale.value}`)
    .select('title', 'description', 'headline')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'realisations',
  title: () => realisationsPage.value!.title,
  description: () => realisationsPage.value!.description,
})
</script>

<template>
  <main v-if="realisationsPage">
    <RealisationCardGroup :headline="realisationsPage.headline" />
    <LazyAppRequest />
  </main>
</template>
