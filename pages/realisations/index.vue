<script setup lang="ts">
const { locale, t } = useI18n()
const seoItem = useSeoItem()

const { data: works } = await useAsyncData('WorksPage', () =>
  queryContent(locale.value, 'realisations').only(['title', 'desc', 'headline', 'tags', 'lead', '_path']).sort({ _id: -1 }).find(),
)

useHead({
  title: t('works.title'),

  meta: [
    { name: 'description', content: t('works.desc') },
    { property: 'og:title', content: t('works.title') },
    { property: 'og:description', content: t('works.desc') },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': seoItem },
          { '@type': 'ListItem', 'position': 2, 'name': t('works.title') },
        ],
      },
    },
  ],
})
</script>

<template>
  <main v-if="works">
    <WorkList :works="works" />
    <AppRequest />
  </main>
</template>
