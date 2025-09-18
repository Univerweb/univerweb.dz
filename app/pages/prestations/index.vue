<script setup lang="ts">
const { locale } = useI18n()

const { data: prestationsPage } = await useAsyncData(
  () => `prestations-page-${locale.value}`,
  () => queryCollection(`prestations_page_${locale.value}`)
    .select('title', 'description', 'headline')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'prestations',
  title: () => prestationsPage.value!.title,
  description: () => prestationsPage.value!.title,
})
</script>

<template>
  <main v-if="prestationsPage">
    <PrestationCardGroup :headline="prestationsPage.headline" />
    <LazyAppRequest />
  </main>
</template>
