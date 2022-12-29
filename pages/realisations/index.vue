<template>
  <main v-if="works">
    <AppWorks :headline="works[0].headline" :works="works" />
    <AppRequest />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()

const { data: works } = await useAsyncData('WorksPage', () =>
  queryContent(locale.value, 'realisations').only(['title', 'desc', 'headline', 'tags', 'lead', '_path']).sort({ _id: -1 }).find()
)
const { data: global } = await useAsyncData('WorksGlobal', () => queryContent(locale.value, 'global').only(['name']).findOne())

useHead({
  title: works.value![0].title,

  meta: [
    { name: 'description', content: works.value![0].desc },
    { property: 'og:title', content: works.value![0].title },
    { property: 'og:description', content: works.value![0].desc }
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: global.value!.name,
            item: locale.value !== 'fr' ? `${config.public.baseURL}/${locale.value}` : `${config.public.baseURL}/`
          },
          { '@type': 'ListItem', position: 2, name: works.value![0].title }
        ]
      }
    }
  ]
})
</script>
