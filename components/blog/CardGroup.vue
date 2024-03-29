<script setup lang="ts">
import type { Blog } from '../../types'

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

const localePath = useLocalePath()
const { t } = useI18n()

const { data: articles } = await useAsyncData(
  localePath('blog'),
  () => queryContent<Blog>(localePath('blog'))
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
      <BlogCard v-for="article in articles" :key="article._path" :article="article" :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="more" path="blog" label="home.moreLabel.blog" class="intro-justify" />
  </section>
</template>
