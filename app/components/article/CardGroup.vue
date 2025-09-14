<script setup lang="ts">
interface Props {
  limit?: number
  headlineTag?: string
  more?: boolean
  titleTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  limit: 0,
  headlineTag: 'h1',
  titleTag: 'h2',
  more: false,
})

const { locale, t } = useI18n()
const { baseUrl } = useUrl()
const localePath = useLocalePath()

const { data: articles } = await useAsyncData(
  () => `articles-${locale.value}`,
  () => queryCollection(`article_${locale.value}`)
    .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt', 'alt', 'tags', 'author')
    .order('stem', 'DESC')
    .limit(props.limit)
    .all(),
  { watch: [locale] },
)
</script>

<template>
  <section id="blog" class="container" vocab="https://schema.org/" typeof="CollectionPage">
    <meta property="name" :content="t('navigation.menu[4].label')">
    <link property="url" :href="baseUrl(localePath('blog'))">

    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('blog.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <ArticleCard v-for="card in articles" :key="card.path" :card :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" path="blog" :label="t('home.actions.learnMore')" class="intro-justify" />
  </section>
</template>
