<script setup lang="ts">
import type { Post } from '../../types'

const { post } = defineProps<{
  post: Post
  titleTag: string
}>()

const { locale, t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`/blog/${post.slug}`)" class="item">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${config.public.baseURL}${localePath(`/blog/${post.slug}`)}`">
      </div>
      <meta property="articleSection" :content="t('blog.title')">
      <meta property="description" :content="post.description">

      <AppPicture
        :src="`/blog/${post.slug}.jpg`"
        :img-attrs="{ property: 'image' }"
        :alt="post.description"
        width="588"
        height="624"
        sizes="xs:288px sm:607px md:354px lg:456px xl:588px"
      />

      <div class="overlay" />

      <div class="inner">
        <Component :is="titleTag" property="headline">
          {{ post.title }}
        </Component>
        <ul class="tags">
          <li v-for="tag in post.tags" :key="tag" property="keywords">
            {{ tag }}
          </li>
        </ul>
        <p class="lead meta">
          <time property="dateCreated datePublished" :datetime="post.createdAt.toString()">
            {{ new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(post.createdAt)) }}
          </time>
          <time property="dateModified" :datetime="post.updatedAt.toString()" :content="post.updatedAt.toString()" />
          — {{ t('blog.by') }}
          <span v-if="post.author" property="author" typeof="Person">
            <span property="name">{{ post.author.name }}</span>
            <meta property="url" :content="post.author.url">
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
