<script setup lang="ts">
import type { Blog } from '../../types'

defineProps<{
  card: Blog
  titleTag: string
}>()

const { t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`${card._path}`)" class="card">
    <article vocab="https://schema.org/" typeof="Article">
      <span property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${config.public.baseURL}${localePath(`${card._path}`)}`">
      </span>
      <span property="publisher" typeof="Organization">
        <meta property="name" :content="t('name')">
        <meta property="url" :content="config.public.baseURL">
      </span>
      <span v-if="card.author && card.author.name && card.author.url" property="author" typeof="Person">
        <meta property="name" :content="card.author.name">
        <meta property="url" :content="card.author.url">
      </span>
      <span v-else property="author" typeof="Organization">
        <meta property="name" :content="t('name')">
        <meta property="url" :content="config.public.baseURL">
      </span>
      <time property="dateCreated datePublished" :datetime="card.createdAt.toString()" />
      <time property="dateModified" :datetime="card.updatedAt.toString()" />
      <meta property="articleSection" :content="t('blog.title')">

      <AppPicture
        :picture="card"
        type="thumbnail"
        sizes="xs:288px sm:607px md:354px lg:456px xl:588px"
        class-name="thumbnail"
      />

      <div class="overlay" />

      <div class="inner">
        <ul class="tags">
          <li v-for="tag in card.tags" :key="tag" property="keywords" class="h3">
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
    </article>
  </NuxtLink>
</template>
