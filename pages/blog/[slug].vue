<script setup lang="ts">
import { createError } from 'h3'
import type { Post } from '../../types'

const localePath = useLocalePath()
const { locale, t } = useI18n()
const seo = useSeo()
const route = useRoute()
const path = `/blog/${locale.value}/${route.params.slug}`

const { data: post, error } = await useAsyncData(
  `blog-${locale.value}-${route.params.slug}`,
  () => queryContent<Post>().where({ _path: path }).findOne(),
)

if (error.value) {
  showError(
    createError({
      statusCode: 404,
      statusMessage: 'Not Found',
    }),
  )
}

const [prev, next] = await queryContent('blog', locale.value)
  .only(['slug', 'title'])
  .findSurround({ _path: path })

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogTitle: post.value?.title,
  ogType: 'article',
  ogImage: `${seo.baseUrl}/_ipx/w_1536&f_jpg&q_80/blog/${post.value?.slug}.jpg`,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': seo.breadcrumbItemOne },
          { '@type': 'ListItem', 'position': 2, 'name': t('blog.title'), 'item': `${seo.baseUrl}${localePath('blog')}` },
          { '@type': 'ListItem', 'position': 3, 'name': post.value?.title },
        ],
      },
    },
  ],
})
</script>

<template>
  <main v-if="post" id="main" class="blog">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <meta property="id" :content="`${seo.baseUrl}${route.path}`">
      </div>
      <meta property="articleSection" :content="t('blog.title')">
      <meta property="description" :content="post.description">

      <div class="container intro">
        <AppBack path="blog" menu="menu.blog" />
        <h1 property="headline">
          {{ post.title }}
        </h1>
        <div class="meta">
          <time property="dateCreated datePublished" :datetime="post.createdAt.toString()">
            {{ new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(post.createdAt)) }}
          </time>
          <time property="dateModified" :datetime="post.updatedAt.toString()" :content="post.updatedAt.toString()" />
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

      <div class="container container-banner">
        <AppPicture
          :src="`/blog/${post.slug}.jpg`"
          class="banner"
          :img-attrs="{ property: 'image' }"
          :alt="post.description"
          sizes="xs:288px sm:592px md:672px lg:928px xl:1200px"
        />
      </div>

      <ContentRenderer>
        <ContentRendererMarkdown :value="post" class="container container-content" />
      </ContentRenderer>

      <LazyBlogShare :title="post.title" :url="`${seo.baseUrl}${route.path}`" />
    </article>

    <LazyAppNav :prev="prev" :next="next" path="blog" />

    <LazyAppRequest />
  </main>
</template>

<style lang="scss" scoped>
.blog {
  h1 {
    margin-bottom: 24px;
  }

  .meta {
    color: var(--text-secondary);
    font-family: var(--font-medium);
    transition: color $transition;

    .author {
      color: var(--text-primary);
    }

    ul {
      position: relative;
      display: inline-flex;
      gap: 6px;
      margin-block: 0;
      margin-inline-start: 12px;
      padding-inline-start: 12px;
      list-style: none;

      &::before {
        content: "";
        position: absolute;
        inset-inline-start: 0;
        top: 50%;
        width: 1px;
        height: 10px;
        margin-top: -5px;
        background-color: var(--text-secondary);
        opacity: 0.2;
      }
    }
  }

  .container-banner {
    padding-block: 0;

    .banner {
      position: relative;
      aspect-ratio: 4/2;

      img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .container-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    :deep(*) {
      grid-column: 1 / 13;
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }

      @media (min-width: $lg) {
        grid-column: 1 / 11;
      }

      @media (min-width: $xl) {
        grid-column: 1 / 9;
      }
    }
  }
}
</style>
