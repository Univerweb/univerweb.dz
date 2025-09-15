<script setup lang="ts">
const { locale } = useI18n()

const { data: realisationsPage } = await useAsyncData(
  () => `realisations-page-${locale.value}`,
  () => queryCollection(`realisations_page_${locale.value}`)
    .select('headline')
    .first(),
  { watch: [locale] },
)
</script>

<template>
  <main v-if="realisationsPage">
    <RealisationCardGroup :headline="realisationsPage.headline" />
    <LazyAppRequest />
  </main>
</template>
