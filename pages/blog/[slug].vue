<script setup lang="ts">
import { createError } from 'h3'
import type { Post } from '../../types'

const { locale, t } = useI18n()
const seo = useSeo()
const route = useRoute()
const path = `/blog/${locale.value}/${route.params.slug}`

const { data: _post, error } = await useAsyncData(`blog-${locale.value}-${route.params.slug}`, () => {
  return queryContent()
    .where({ _path: path })
    .only(['title', 'desc', 'slug', 'createdAt', 'updatedAt', 'tags', 'author', 'body'])
    .findOne()
})

const post = _post.value as Post

if (error.value) {
  showError(
    createError({
      statusCode: 404,
      statusMessage: 'Not Found',
    }),
  )
}

const createdAt = new Intl.DateTimeFormat(locale.value, { dateStyle: 'long' }).format(new Date(post.createdAt))
const createdAtIso = new Date(post.createdAt).toISOString()
const UpdatedAtIso = new Date(post.updatedAt).toISOString()

const [prev, next] = await queryContent('blog', locale.value)
  .only(['slug', 'title'])
  .findSurround({ _path: path })

useHead({
  title: post.title,
})
</script>

<template>
  <main id="main" class="blog">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${seo.baseUrl}${route.path}`">
      </div>
      <meta property="articleSection" :content="t('blog.title')">
      <meta property="description" :content="post.desc">

      <div class="container intro">
        <BlogBack />
        <h1 property="headline">
          {{ post.title }}
        </h1>
        <div class="meta">
          <time property="dateCreated datePublished" :datetime="createdAtIso">{{ createdAt }}</time>
          <time property="dateModified" :datetime="UpdatedAtIso" :content="UpdatedAtIso" />
          — {{ t('blog.by') }}
          <span v-if="post.author" property="author" typeof="Person" class="author">
            <span property="name">{{ post.author.name }}</span>
            <meta property="url" :content="post.author.url">
          </span>
          <span v-else property="author" typeof="Organization" class="author">
            <span property="name">{{ t('name') }}</span>
            <meta property="url" :content="seo.baseUrl">
          </span>
          <span property="publisher" typeof="Organization">
            <meta property="name" :content="t('name')">
            <meta property="url" :content="seo.baseUrl">
          </span>
          <ul>
            <li v-for="tag in post.tags" :key="tag" property="keywords">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <div class="container containerBanner">
        <div class="banner card">
          <AppImg
            property="image"
            :src="`/images/blog/${post.slug}_thumbnail.jpg`"
            :alt="post.desc"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
          />
        </div>
      </div>

      <ContentRenderer>
        <ContentRendererMarkdown :value="post" class="container" />
      </ContentRenderer>
    </article>

    <LazyBlogNav :prev="prev" :next="next" />

    <LazyAppRequest />
  </main>
</template>

<style lang="scss" scoped>
.blog {
  h1 {
    margin-bottom: 24px;
  }

  .meta {
    color: var(--textSecondary);
    font-family: var(--fontMedium);
    transition: color $transition;

    .author {
      position: relative;
      padding-right: 12px;
      margin-right: 12px;
      color: var(--textPrimary);

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 1px;
        height: 10px;
        margin-top: -5px;
        background-color: var(--textSecondary);
        opacity: 0.2;
      }
    }

    ul {
      display: inline-flex;
      gap: 6px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  .containerBanner {
    padding-block: 0;

    .banner {
      position: relative;
      aspect-ratio: 4/2;

      img {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
