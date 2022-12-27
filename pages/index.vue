<template>
  <main>
    <HomeWelcome :headline="headline" :lead="lead" />
    <AppWorks :headline="worksHeadline" :works="slug" :h1="h1" :like-h1="likeH1" :h2="h2" :more="more" />
    <AppRequest :home="likeH1" />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const { data: home } = await useAsyncData('HomeWelcome', () => queryContent(locale.value, 'home').only(['headline', 'lead']).findOne())
const { data: works } = await useAsyncData('AppWorks', () =>
  queryContent(locale.value, 'realisations').only(['title', 'tags', 'lead']).limit(6).sort({ _id: -1 }).skip(1).find()
)

const headline = home.value!.headline
const lead = home.value!.lead
const worksHeadline = works.value![0].headline
const slug = works.value!

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
