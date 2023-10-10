<script setup lang="ts">
import type { Blog } from '../../types'

defineProps<{
  card: Blog
  titleTag: string
}>()

const { locale, t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`${card._path}`)" class="card">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${config.public.baseURL}${localePath(`${card._path}`)}`">
      </div>
      <meta property="articleSection" :content="t('blog.title')">
      <meta property="description" :content="card.description">

      <AppPicture
        :picture="card"
        type="thumbnail"
        sizes="xs:288px sm:607px md:354px lg:456px xl:588px"
        class-name="thumbnail"
      />

      <div class="overlay" />

      <div class="inner">
        <Component :is="titleTag" property="headline">
          {{ card.title }}
        </Component>
        <ul class="tags">
          <li v-for="tag in card.tags" :key="tag" property="keywords">
            {{ tag }}
          </li>
        </ul>
        <p class="lead meta">
          <time property="dateCreated datePublished" :datetime="card.createdAt.toString()">
            {{ new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(card.createdAt)) }}
          </time>
          <time property="dateModified" :datetime="card.updatedAt.toString()" :content="card.updatedAt.toString()" />
          — {{ t('blog.by') }}
          <span v-if="card.author" property="author" typeof="Person">
            <span property="name">{{ card.author.name }}</span>
            <meta property="url" :content="card.author.url">
          </span>
          <span v-else property="author" typeof="Organization">
            <span property="name">{{ t('name') }}</span>
            <meta property="url" :content="config.public.baseURL">
          </span>
          <span property="publisher" typeof="Organization">
            <meta property="name" :content="t('name')">
            <meta property="url" :content="config.public.baseURL">
          </span>
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
