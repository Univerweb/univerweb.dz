<script setup lang="ts">
const { t } = useI18n()
const seo = useSeo()

useSeoMeta({
  title: t('works.title'),
  description: t('works.desc'),
  ogTitle: t('works.title'),
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': seo.breadcrumbItemOne },
          { '@type': 'ListItem', 'position': 2, 'name': t('works.title') },
        ],
      },
    },
  ],
})
</script>

<template>
  <main>
    <AppList />
    <LazyAppRequest />
  </main>
</template>
