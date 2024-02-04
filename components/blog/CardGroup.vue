<script setup lang="ts">
import type { Blog } from '../../types'

const localePath = useLocalePath()
const { t } = useI18n()

const { data: articles } = await useAsyncData(
  localePath('blog'),
  () => queryContent(localePath('blog'))
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'author', 'body'])
    .sort({ _id: -1, $numeric: true })
    .find() as Promise<Blog[]>,
  { watch: [localePath] },
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
      <BlogCard v-for="article in articles" :key="article._path" :article="article" title-tag="h2" />
    </div>
  </section>
</template>
