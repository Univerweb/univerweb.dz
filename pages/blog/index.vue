<script setup lang="ts">
const { t } = useI18n()
const breadcrumb = useBreadcrumb()

useSeoMeta({
  title: t('blog.title'),
  description: t('blog.desc'),
  ogTitle: t('blog.title'),
  ogDescription: t('blog.desc'),
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': breadcrumb },
          { '@type': 'ListItem', 'position': 2, 'name': t('blog.title') },
        ],
      },
    },
  ],
})
</script>

<template>
  <main>
    <AppList slug="blog" headline="blog.headline" list-item="BlogListItem" />
    <LazyAppRequest />
  </main>
</template>
