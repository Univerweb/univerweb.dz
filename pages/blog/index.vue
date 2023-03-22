<script setup lang="ts">
const { t } = useI18n()
const seo = useSeo()

useHead({
  title: t('blog.title'),

  meta: [
    { name: 'description', content: t('blog.desc') },
    { property: 'og:title', content: t('blog.title') },
    { property: 'og:description', content: t('blog.desc') },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': seo.breadcrumbItemOne },
          { '@type': 'ListItem', 'position': 2, 'name': t('blog.title') },
        ],
      },
    },
  ],
})
</script>

<template>
  <main>
    <BlogList />
    <LazyAppRequest />
  </main>
</template>
