<script setup lang="ts">
import type { Post } from '../../types'

const { post } = defineProps<{
  post: Post
  titleTag: string
}>()

const { t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath(`${post._path}`)">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${config.public.baseURL}${localePath(`${post._path}`)}`">
      </div>
      <meta property="articleSection" :content="t('works.title')">
      <meta property="description" :content="post.description">
      <time property="dateCreated datePublished" :datetime="post.createdAt.toString()" />
      <time property="dateModified" :datetime="post.updatedAt.toString()" />
      <div property="author publisher" typeof="Organization">
        <meta property="name" :content="t('name')">
        <meta property="url" :content="config.public.baseURL">
      </div>

      <AppPicture
        :post="post"
        type="thumbnail"
        :img-attrs="{ property: 'image' }"
        sizes="xs:288px sm:607px md:354px lg:456px xl:588px"
        class-name="thumbnail"
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
        <ContentRendererMarkdown
          :value="post"
          :components="{ p: 'span' }"
          tag="p"
          property="articleBody"
          class="lead"
        />
      </div>
    </article>
  </NuxtLink>
</template>
