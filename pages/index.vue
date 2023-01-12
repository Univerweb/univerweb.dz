<script setup lang="ts">
const { locale } = useI18n()

const { data: works } = await useAsyncData('HomeWorks', () =>
  queryContent(locale.value, 'realisations').only(['headline', 'title', 'tags', 'lead', '_path']).limit(6).sort({ _id: -1 }).find(),
)
</script>

<template>
  <main v-if="works">
    <AppWelcome />
    <WorkList :works="works" h1="h2" like-h1="h1" h2="h3" more="div" />
    <AppRequest home="h1" />
  </main>
</template>
