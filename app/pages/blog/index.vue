<script setup lang="ts">
const { locale } = useI18n()

const { data: blogPage } = await useAsyncData(
  () => `blog-page-${locale.value}`,
  () => queryCollection(`blog_page_${locale.value}`)
    .select('headline')
    .first(),
  { watch: [locale] },
)
</script>

<template>
  <main v-if="blogPage">
    <ArticleCardGroup :headline="blogPage.headline" />
    <LazyAppRequest />
  </main>
</template>
