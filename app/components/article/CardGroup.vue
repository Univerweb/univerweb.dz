<script setup lang="ts">
const props = defineProps<{
  limit?: number
  headlineTag?: string
  headline: string
  titleTag?: string
  cta?: {
    label: string
    path: string
  }
}>()

const { locale, t } = useI18n()
const { baseUrl } = useUrl()
const localePath = useLocalePath()

const { data: blogItem } = await useAsyncData(
  () => `blog-item-${locale.value}`,
  () => queryCollection(`blog_item_${locale.value}`)
    .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt', 'alt', 'tags', 'author')
    .order('stem', 'DESC')
    .limit(props.limit || 0)
    .all(),
  { watch: [locale] },
)
</script>

<template>
  <section id="blog" class="container" vocab="https://schema.org/" typeof="CollectionPage">
    <meta property="name" :content="t('navigation.menu[4].label')">
    <link property="url" :href="baseUrl(localePath('blog'))">

    <div class="intro intro-justify">
      <Component :is="headlineTag || 'h1'" class="h1">
        {{ headline }}
      </Component>
    </div>

    <div class="card-group">
      <ArticleCard v-for="card in blogItem" :key="card.path" :card :title-tag="titleTag || 'h2'" />
    </div>

    <LazyAppMore v-if="cta" :path="cta.path" :label="cta.label" class="intro-justify" />
  </section>
</template>
