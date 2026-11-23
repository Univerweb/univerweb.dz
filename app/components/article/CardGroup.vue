<script setup lang="ts">
const props = defineProps<{
  limit?: number
  headlineTag?: string
  titleTag?: string
  blog: {
    headline: string
    lead: string
    cta?: {
      label: string
      path: string
    }
  }
}>()

const { path } = useRoute()
const { locale } = useI18n()

const { data: articles } = await useAsyncData(
  `articles-${path}`,
  () => queryCollection(`article_${locale.value}`)
    .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt', 'alt', 'tags', 'author')
    .order('stem', 'DESC')
    .limit(props.limit || 0)
    .all(),
  { watch: [locale] },
)
</script>

<template>
  <section id="blog" class="container" aria-labelledby="blog-title">
    <div class="intro column-center">
      <component :is="headlineTag || 'h1'" id="blog-title" class="h1">
        {{ blog.headline }}
      </component>
      <p class="lead">
        {{ blog.lead }}
      </p>
    </div>

    <div class="card-group">
      <ArticleCard v-for="card in articles" :key="card.path" :card :title-tag="titleTag || 'h2'" />
    </div>

    <LazyAppMore v-if="blog.cta" :path="blog.cta.path" :label="blog.cta.label" class="column-center" />
  </section>
</template>
