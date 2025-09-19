<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  card: Pick<Collections['article_fr' | 'article_en' | 'article_ar'], 'path' | 'title' | 'description' | 'createdAt' | 'updatedAt' | 'alt' | 'tags' | 'author'>
  titleTag: string
}>()

const { t } = useI18n()
const { localeBaseUrl, baseUrl } = useUrl()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="card.path" class="card" vocab="https://schema.org/" typeof="Article" property="hasPart">
    <meta property="articleSection" :content="t('navigation.menu.blog')">
    <meta property="dateCreated datePublished" :content="new Date(card.createdAt).toISOString()">
    <meta property="dateModified" :content="new Date(card.updatedAt).toISOString()">
    <span property="publisher" typeof="Organization">
      <meta property="name" :content="t('site.name')">
      <link property="url" :href="localeBaseUrl">
    </span>
    <span v-if="card.author && card.author.name && card.author.url" property="author" typeof="Person">
      <meta property="name" :content="card.author.name">
      <link property="url" :href="card.author.url">
    </span>
    <span v-else property="author" typeof="Organization">
      <meta property="name" :content="t('site.name')">
      <link property="url" :href="localeBaseUrl">
    </span>
    <span property="isPartOf" typeof="CollectionPage">
      <meta property="name" :content="t('navigation.menu.blog')">
      <link property="url" :href="baseUrl(localePath('blog'))">
    </span>

    <AppPicture :picture="card" />

    <div class="overlay" />

    <div class="inner">
      <ul class="tags">
        <li v-for="tag in card.tags" :key="tag" property="keywords">
          {{ tag }}
        </li>
      </ul>
      <Component :is="titleTag" property="headline">
        {{ card.title }}
      </Component>
      <p property="description" class="lead">
        {{ card.description }}
      </p>
    </div>
  </NuxtLink>
</template>
