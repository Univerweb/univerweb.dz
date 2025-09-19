<script setup lang="ts">
const { locale } = useI18n()

const { data: realisations } = await useAsyncData(
  () => `realisations-${locale.value}`,
  () => queryCollection(`realisations_${locale.value}`)
    .select('title', 'description', 'headline')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'realisations',
  title: () => realisations.value!.title,
  description: () => realisations.value!.title,
})
</script>

<template>
  <main v-if="realisations">
    <RealisationCardGroup :headline="realisations.headline" />
    <LazyAppRequest />
  </main>
</template>
