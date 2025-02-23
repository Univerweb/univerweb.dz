<script setup lang="ts">
import type { Post } from '@/types'

interface Props {
  limit?: number
  headlineTag?: string
  more?: boolean
  titleTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  limit: 0,
  headlineTag: 'h1',
  titleTag: 'h2',
  more: false,
})

const { path } = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const { baseUrl } = useUrl()

const { data: posts } = await useAsyncData(
  `posts${path}`,
  () => queryContent<Post>(localePath('blog'))
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'author'])
    .sort({ _id: -1, $numeric: true })
    .limit(props.limit)
    .find(),
  { watch: [localePath] },
)
</script>

<template>
  <section id="blog" class="container">
    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('blog.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <NuxtLink
        v-for="post in posts"
        :key="post._path"
        :to="post._path"
        class="card"
        vocab="https://schema.org/"
        typeof="Article"
      >
        <span property="publisher" typeof="Organization">
          <meta property="name" :content="t('name')">
          <meta property="url" :content="baseUrl">
        </span>
        <span v-if="post.author && post.author.name && post.author.url" property="author" typeof="Person">
          <meta property="name" :content="post.author.name">
          <meta property="url" :content="post.author.url">
        </span>
        <span v-else property="author" typeof="Organization">
          <meta property="name" :content="t('name')">
          <meta property="url" :content="baseUrl">
        </span>
        <time property="dateCreated datePublished" :datetime="post.createdAt.toString()" />
        <time property="dateModified" :datetime="post.updatedAt.toString()" />
        <meta property="articleSection" :content="t('blog.title')">

        <AppPicture :picture="post" />

        <div class="overlay" />

        <div class="inner">
          <ul>
            <li v-for="tag in post.tags" :key="tag" property="keywords" class="h3 tag">
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
    </div>

    <LazyAppMore v-if="more" path="blog" :label="t('home.moreLabel.blog')" class="intro-justify" />
  </section>
</template>
