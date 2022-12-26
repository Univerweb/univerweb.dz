<template>
  <main>
    <AppWorks :headline="headline" :works="works!" />
    <AppRequest />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()

const worksPagePath = `${locale.value}/works`
const worksPath = `${locale.value}/works_slug`
const globalPath = `${locale.value}/global`
const baseURL = config.public.baseURL

const { data: worksPage } = await useAsyncData('worksPage', () => queryContent(worksPagePath).only(['title', 'desc', 'headline']).findOne())
const { data: works } = await useAsyncData('works', () => queryContent(worksPath).only(['title', 'tags', 'lead']).sort({ _id: -1 }).find())
const { data: global } = await useAsyncData('global', () => queryContent(globalPath).only(['name']).findOne())

const title = worksPage.value!.title
const desc = worksPage.value!.desc
const headline = worksPage.value!.headline
const name = global.value!.name
const item = locale.value !== 'fr' ? `${baseURL}/${locale.value}` : `${baseURL}/`

useHead({
  title,

  meta: [
    { name: 'description', content: desc },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc }
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: name, item: item },
          { '@type': 'ListItem', position: 2, name: title }
        ]
      }
    }
  ]
})
</script>
