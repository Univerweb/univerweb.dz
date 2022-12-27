<template>
  <main>
    <AppWorks :headline="headline" :works="slug" />
    <AppRequest />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()

const { data: works } = await useAsyncData('WorksPage', () =>
  queryContent(locale.value, 'realisations').only(['title', 'desc', 'headline', 'tags', 'lead']).sort({ _id: -1 }).skip(1).find()
)
const { data: global } = await useAsyncData('WorksGlobal', () => queryContent(locale.value, 'global').only(['name']).findOne())

const title = works.value![0].title
const desc = works.value![0].desc
const headline = works.value![0].headline
const slug = works.value!
const name = global.value!.name
const item = locale.value !== 'fr' ? `${config.public.baseURL}/${locale.value}` : `${config.public.baseURL}/`

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
