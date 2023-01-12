<script setup lang="ts">
const { locale, t } = useI18n()
const seoItem = useSeoItem()

const { data: works } = await useAsyncData('WorksPage', () =>
  queryContent(locale.value, 'realisations').only(['title', 'desc', 'headline', 'tags', 'lead', '_path']).sort({ _id: -1 }).find(),
)

useHead({
  title: works.value![0].title,

  meta: [
    { name: 'description', content: works.value![0].desc },
    { property: 'og:title', content: works.value![0].title },
    { property: 'og:description', content: works.value![0].desc },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': seoItem },
          { '@type': 'ListItem', 'position': 2, 'name': works.value![0].title },
        ],
      },
    },
  ],
})
</script>

<template>
  <main v-if="works">
    <WorkList :headline="works[0].headline" :works="works" />
    <AppRequest />
  </main>
</template>
