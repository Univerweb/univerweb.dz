<script setup lang="ts">
const { t } = useI18n()
const breadcrumb = useBreadcrumb('blog')

useSeoMeta({
  title: t('blog.title'),
  description: t('blog.desc'),
  ogTitle: t('blog.title'),
  ogDescription: t('blog.desc'),
})

useHead({
  script: [breadcrumb],
})
</script>

<template>
  <main>
    <BlogCardGroup />
    <LazyAppRequest />
  </main>
</template>
