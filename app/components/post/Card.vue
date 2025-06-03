<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  post: Pick<Collections['post_fr' | 'post_en' | 'post_ar'], 'path' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'alt' | 'tags' | 'author'>
  titleTag: string
}>()

const { t } = useI18n()
const { localeBaseUrl, baseUrl } = useUrl()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="post.path" class="card" vocab="https://schema.org/" typeof="Article" property="hasPart">
    <meta property="articleSection" :content="t('navigation.menu[4].label')">
    <meta property="dateCreated datePublished" :content="new Date(post.createdAt).toISOString()">
    <meta property="dateModified" :content="new Date(post.updatedAt).toISOString()">
    <span property="publisher" typeof="Organization">
      <meta property="name" :content="t('site.name')">
      <link property="url" :href="localeBaseUrl">
    </span>
    <span v-if="post.author && post.author.name && post.author.url" property="author" typeof="Person">
      <meta property="name" :content="post.author.name">
      <link property="url" :href="post.author.url">
    </span>
    <span v-else property="author" typeof="Organization">
      <meta property="name" :content="t('site.name')">
      <link property="url" :href="localeBaseUrl">
    </span>
    <span property="isPartOf" typeof="CollectionPage">
      <meta property="name" :content="t('navigation.menu[4].label')">
      <link property="url" :href="baseUrl(localePath('blog'))">
    </span>

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
