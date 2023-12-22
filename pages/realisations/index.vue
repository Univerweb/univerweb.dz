<script setup lang="ts">
const { t } = useI18n()
const breadcrumb = useBreadcrumb('works')

useSeoMeta({
  title: () => t('works.title'),
  description: t('works.desc'),
  ogTitle: t('works.title'),
})

useHead({
  script: [breadcrumb],
})
</script>

<template>
  <main>
    <AppCardGroup />
    <LazyAppRequest />
  </main>
</template>
