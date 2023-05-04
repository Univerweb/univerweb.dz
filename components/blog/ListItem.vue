<script setup lang="ts">
import type { Blog } from '../../types'

defineProps<{
  blog: Blog
  titleTag: string
}>()

const { t } = useI18n()
const seo = useSeo()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`/blog/${blog.slug}`)" class="item">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${seo.baseUrl}${localePath(`/blog/${blog.slug}`)}`">
      </div>
      <meta property="dateCreated datePublished" :content="blog.createdAt">
      <meta property="dateModified" :content="blog.updatedAt">
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="t('name')">
        <meta property="url" :content="seo.baseUrl">
      </div>
      <meta property="articleSection" :content="t('blog.title')">
      <meta property="description" :content="blog.desc">

      <AppImg
        property="image"
        :src="`/images/blog/${blog.slug}_thumbnail.jpg`"
        :alt="blog.desc"
        width="588"
        height="624"
        sizes="xs:288px sm:607px md:354px lg:456px xl:588px"
      />

      <div class="overlay" />

      <div class="inner">
        <Component :is="titleTag" property="headline">
          {{ blog.title }}
        </Component>
        <ul class="tags">
          <li v-for="tag in blog.tags" :key="tag" property="keywords">
            {{ tag }}
          </li>
        </ul>
        <p property="articleBody" class="lead meta">
          {{ blog.createdAt }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
