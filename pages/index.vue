<template>
  <main>
    <HomeWelcome :headline="home!.headline" :lead="home!.lead" />
    <AppWorks :headline="worksPage!.headline" :works="works!" :h1="h1" :like-h1="likeH1" :h2="h2" :more="more" />
    <AppRequest :home="likeH1" />
  </main>
</template>

<script setup lang="ts">
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

const { locale } = useI18n()

const homePath = `${locale.value}/home`
const worksPagePath = `${locale.value}/works`
const worksPath = `${locale.value}/works_slug`

const { data: home } = await useAsyncData('home', () => queryContent(homePath).only(['headline', 'lead']).findOne())
const { data: worksPage } = await useAsyncData('works', () => queryContent(worksPagePath).only(['headline']).findOne())
const { data: works } = await useAsyncData('works_slug', () => queryContent(worksPath).only(['title', 'tags', 'lead']).limit(6).sort({ _id: -1 }).find())
</script>
