<script setup lang="ts">
const { t } = useI18n()
const seo = useSeo()

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
          { '@type': 'ListItem', 'position': 1, 'name': seo.name, 'item': seo.breadcrumbItemOne },
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
    <LazyAppRequest />
  </main>
</template>
