<template>
  <main v-if="home && works">
    <HomeWelcome :headline="home.headline" :lead="home.lead" />
    <AppWorks :headline="works[0].headline" :works="works" :h1="h1" :like-h1="likeH1" :h2="h2" :more="more" />
    <AppRequest :home="likeH1" />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const { data: home } = await useAsyncData('HomeWelcome', () => queryContent(locale.value, 'home').only(['headline', 'lead']).findOne())
const { data: works } = await useAsyncData('HomeWorks', () =>
  queryContent(locale.value, 'realisations').only(['headline', 'title', 'tags', 'lead']).limit(6).sort({ _id: -1 }).find()
)

defineProps({
  h1: {
    type: String,
    default: 'h2'
  },
  likeH1: {
    type: String,
    default: 'h1'
  },
  h2: {
    type: String,
    default: 'h3'
  },
  more: {
    type: String,
    default: 'div'
  }
})
</script>
