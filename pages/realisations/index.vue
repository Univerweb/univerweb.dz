<script setup lang="ts">
const { t } = useI18n()
const seoItem = useSeoItem()

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
  <main>
    <WorkList />
    <AppRequest />
  </main>
</template>
