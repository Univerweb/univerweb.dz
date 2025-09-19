<script setup lang="ts">
const { locale } = useI18n()

const { data: prestations } = await useAsyncData(
  () => `prestations-${locale.value}`,
  () => queryCollection(`prestations_${locale.value}`)
    .select('title', 'description', 'headline')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'prestations',
  title: () => prestations.value!.title,
  description: () => prestations.value!.title,
})
</script>

<template>
  <main v-if="prestations">
    <PrestationCardGroup :headline="prestations.headline" />
    <LazyAppRequest />
  </main>
</template>
