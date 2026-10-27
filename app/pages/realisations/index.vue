<script setup lang="ts">
const { locale } = useI18n()

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
</script>

<template>
  <main v-if="realisations">
    <RealisationCardGroup :realisations />
    <LazyAppRequest />
  </main>
</template>
