<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  post: Pick<Collections['post_fr' | 'post_en' | 'post_ar'], 'path' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'tags' | 'author'>
  titleTag: string
}>()

const { t } = useI18n()
const { baseUrl } = useUrl()
</script>

<template>
  <NuxtLink :to="post.path" class="card" vocab="https://schema.org/" typeof="Article">
    <span property="publisher" typeof="Organization">
      <meta property="name" :content="t('name')">
      <meta property="url" :content="baseUrl">
    </span>
    <span v-if="post.author && post.author.name && post.author.url" property="author" typeof="Person">
      <meta property="name" :content="post.author.name">
      <meta property="url" :content="post.author.url">
    </span>
    <span v-else property="author" typeof="Organization">
      <meta property="name" :content="t('name')">
      <meta property="url" :content="baseUrl">
    </span>
    <time property="dateCreated datePublished" :datetime="new Date(post.createdAt).toISOString()" />
    <time property="dateModified" :datetime="new Date(post.updatedAt).toISOString()" />
    <meta property="articleSection" :content="t('blog.title')">

    <AppPicture :picture="post" />

    <div class="overlay" />

    <div class="inner">
      <ul class="tags">
        <li v-for="tag in post.tags" :key="tag" property="keywords">
          {{ tag }}
        </li>
      </ul>
      <Component :is="titleTag" property="headline">
        {{ post.title }}
      </Component>
      <p property="description" class="lead">
        {{ post.description }}
      </p>
    </div>
  </NuxtLink>
</template>
