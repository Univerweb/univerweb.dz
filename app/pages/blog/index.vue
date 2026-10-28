<script setup lang="ts">
const { locale } = useI18n()

const { data: blog } = await useAsyncData(
  () => `blog-${locale.value}`,
  () => queryCollection(`blog_${locale.value}`)
    .select('title', 'description', 'headline', 'lead')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'blog',
  title: () => blog.value!.title,
  description: () => blog.value!.description,
})
</script>

<template>
  <main v-if="blog">
    <ArticleCardGroup :blog />
    <LazyAppRequest />
  </main>
</template>
