<script setup lang="ts">
const seo = useSeo()

useHead({
  title: seo.works.title,

  meta: [
    { name: 'description', content: seo.works.desc },
    { property: 'og:title', content: seo.works.title },
    { property: 'og:description', content: seo.works.desc },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': seo.name, 'item': seo.breadcrumbItemOne },
          { '@type': 'ListItem', 'position': 2, 'name': seo.works.title },
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
