<script setup lang="ts">
import type { Post } from '../../types'

export interface Props {
  headlineTag?: string
  limit?: number
  more?: boolean
  titleTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
  limit: 0,
  more: false,
  titleTag: 'h2',
})

const { locale, t } = useI18n()

const { data: posts } = await useAsyncData(
  'blog',
  () => queryContent<Post>('blog', locale.value).sort({ _id: -1 }).limit(props.limit).find(),
)
</script>

<template>
  <section class="container">
    <div class="intro">
      <Component :is="headlineTag" class="h1">
        {{ t('blog.headline') }}
      </Component>
    </div>

    <div v-if="posts?.length" class="details details-card">
      <BlogListItem v-for="post in posts" :key="post.slug" :post="post" :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" to="blog" />
  </section>
</template>
