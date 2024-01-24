<script setup lang="ts">
import type { Blog } from '../../types'

const { t } = useI18n()
const { path } = useRoute()

const { data: posts } = await useAsyncData(
  `posts${path}`,
  () => queryContent(path)
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'author', 'body'])
    .sort({ _id: -1, $numeric: true })
    .find() as Promise<Blog[]>,
)
</script>

<template>
  <section id="blog" class="container">
    <div class="intro">
      <h1 class="h1">
        {{ t('blog.headline') }}
      </h1>
    </div>

    <div class="card-group">
      <BlogCard v-for="post in (posts as Blog[])" :key="post._path" :card="post" title-tag="h2" />
    </div>
  </section>
</template>
