<script setup lang="ts">
defineProps({
  h1: {
    type: String,
    default: 'h2',
  },
  likeH1: {
    type: String,
    default: 'h1',
  },
  h2: {
    type: String,
    default: 'h3',
  },
  more: {
    type: String,
    default: 'div',
  },
})

const { locale } = useI18n()

const { data: works } = await useAsyncData('HomeWorks', () =>
  queryContent(locale.value, 'realisations').only(['headline', 'title', 'tags', 'lead', '_path']).limit(7).sort({ _id: -1 }).find(),
)
</script>

<template>
  <main v-if="works">
    <HomeWelcome />
    <AppWorks :headline="works[0].headline" :works="works" :h1="h1" :like-h1="likeH1" :h2="h2" :more="more" />
    <AppRequest :home="likeH1" />
  </main>
</template>
