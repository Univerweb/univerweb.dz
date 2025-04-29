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

const { path } = useRoute()
const { locale, t } = useI18n()

const { data: posts } = await useAsyncData(`posts${path}`, () => {
  return queryCollection(`post_${locale.value}`)
    .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'author')
    .order('stem', 'DESC')
    .limit(props.limit)
    .all()
}, { watch: [locale] })
</script>

<template>
  <section id="blog" class="container">
    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('blog.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <PostCard v-for="post in posts" :key="post.path" :post="post" :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" path="blog" :label="t('home.cta.blog')" class="intro-justify" />
  </section>
</template>
