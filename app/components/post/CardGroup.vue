<script setup lang="ts">
import type { Post } from '@/types'

export interface Props {
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
const localePath = useLocalePath()
const { t } = useI18n()

const { data: posts } = await useAsyncData(
  `posts${path}`,
  () => queryContent<Post>(localePath('blog'))
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'author'])
    .sort({ _id: -1, $numeric: true })
    .limit(props.limit)
    .find(),
  { watch: [localePath] },
)
</script>

<template>
  <section id="blog" class="container">
    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('blog.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <PostCard v-for="post in posts" :key="post._path" :post="post" :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" path="blog" :label="t('home.moreLabel.blog')" class="intro-justify" />
  </section>
</template>
