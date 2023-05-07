<script setup lang="ts">
import type { Blog } from '../../types'

const { blog } = defineProps<{
  blog: Blog
  titleTag: string
}>()

const { locale, t } = useI18n()
const seo = useSeo()
const localePath = useLocalePath()

const createdAt = new Intl.DateTimeFormat(locale.value, { dateStyle: 'long' }).format(new Date(blog.createdAt))
const createdAtIso = new Date(blog.createdAt).toISOString()
const UpdatedAtIso = new Date(blog.updatedAt).toISOString()
</script>

<template>
  <NuxtLink :to="localePath(`/blog/${blog.slug}`)" class="item">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${seo.baseUrl}${localePath(`/blog/${blog.slug}`)}`">
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
        <p class="lead meta">
          <time property="dateCreated datePublished" :datetime="createdAtIso">
            {{ createdAt }}
          </time>
          <time property="dateModified" :datetime="UpdatedAtIso" :content="UpdatedAtIso" />
          —
          <span v-if="blog.author" property="author" typeof="Person">
            <span property="name">{{ blog.author.name }}</span>
            <meta property="url" :content="blog.author.url">
          </span>
          <span v-else property="author" typeof="Organization">
            <span property="name">{{ t('name') }}</span>
            <meta property="url" :content="seo.baseUrl">
          </span>
          <span property="publisher" typeof="Organization">
            <meta property="name" :content="t('name')">
            <meta property="url" :content="seo.baseUrl">
          </span>
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
