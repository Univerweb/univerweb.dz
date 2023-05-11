<script setup lang="ts">
import type { Post } from '../../types'

const { post } = defineProps<{
  post: Post
  titleTag: string
}>()

const { t } = useI18n()
const seo = useSeo()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`/realisations/${post.slug}`)" class="item">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${seo.baseUrl}${localePath(`/realisations/${post.slug}`)}`">
      </div>
      <time property="dateCreated datePublished" :datetime="post.createdAt.toString()" />
      <time property="dateModified" :datetime="post.updatedAt.toString()" />
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="t('name')">
        <meta property="url" :content="seo.baseUrl">
      </div>
      <meta property="articleSection" :content="t('works.title')">
      <meta property="description" :content="post.desc">

      <AppImg
        property="image"
        :src="`/images/works/${post.slug}_thumbnail.jpg`"
        :alt="post.desc"
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
        <p property="articleBody" class="lead">
          {{ post.lead }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
