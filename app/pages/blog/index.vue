<script setup lang="ts">
const { locale } = useI18n()
const { baseUrl } = useUrl()
const { path } = useRoute()

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

const { data: items } = await useAsyncData(
  () => `blog-items-${locale.value}`,
  () => queryCollection(`article_${locale.value}`)
    .select('path', 'title')
    .order('stem', 'DESC')
    .all(),
  { watch: [locale] },
)

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
    'mainEntity': { '@id': `${baseUrl(path)}#itemlist` },
  }),
  defineItemList({
    '@id': `${baseUrl(path)}#itemlist`,
    'itemListElement': () => (items.value ?? []).map(item => ({
      name: item.title,
      url: baseUrl(item.path),
    })),
  }),
])
</script>

<template>
  <main v-if="blog">
    <ArticleCardGroup :blog />
    <LazyAppRequest />
  </main>
</template>
