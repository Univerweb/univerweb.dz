<script setup lang="ts">
import type { Blog } from '../../types'

defineProps<{
  article: Blog
  titleTag: string
}>()

const { t } = useI18n()
const { baseUrl } = useUrl()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`${article._path}`)" class="card" vocab="https://schema.org/" typeof="Article">
    <span property="publisher" typeof="Organization">
      <meta property="name" :content="t('name')">
      <meta property="url" :content="baseUrl">
    </span>
    <span v-if="article.author && article.author.name && article.author.url" property="author" typeof="Person">
      <meta property="name" :content="article.author.name">
      <meta property="url" :content="article.author.url">
    </span>
    <span v-else property="author" typeof="Organization">
      <meta property="name" :content="t('name')">
      <meta property="url" :content="baseUrl">
    </span>
    <time property="dateCreated datePublished" :datetime="article.createdAt.toString()" />
    <time property="dateModified" :datetime="article.updatedAt.toString()" />
    <meta property="articleSection" :content="t('blog.title')">

    <AppPicture
      :picture="article"
      type="thumbnail"
      sizes="342px xs:348px md:460px xl:584px"
    />

    <div class="overlay" />

    <div class="inner">
      <ul>
        <li v-for="tag in article.tags" :key="tag" property="keywords" class="h3 tag">
          {{ tag }}
        </li>
      </ul>
      <Component :is="titleTag" property="headline">
        {{ article.title }}
      </Component>
      <p property="description" class="lead">
        {{ article.description }}
      </p>
    </div>
  </NuxtLink>
</template>
