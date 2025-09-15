<script setup lang="ts">
const { t } = useI18n()

useSeo({ page: 'blog' })
</script>

<template>
  <main>
    <ArticleCardGroup :headline="t('blog.headline')" />
    <LazyAppRequest />
  </main>
</template>
