<script setup lang="ts">
import type { Blog, Nav } from '../../types'

const localePath = useLocalePath()
const { locale, t } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path, params: { slug } } = useRoute()
const img = useImage()
const ogImagePath = img(`blog/${slug}_banner.jpg`, { width: 2400, height: 1256, quality: 80 })

const { data: post } = await useAsyncData(
  `post${path}`,
  () => queryContent()
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'author', 'body'])
    .where({ _path: path })
    .findOne() as Promise<Blog>,
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const { data: surround } = await useAsyncData(
  `surround${path}`,
  async () => {
    const [prev, next] = await queryContent(localePath('blog'))
      .only(['_path', 'title'])
      .findSurround(path) as Nav[]

    return { prev, next }
  },
  { watch: [localePath] },
)

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  ogType: 'article',
  ogImage: `${baseUrl}${ogImagePath}`,
  twitterTitle: post.value.title,
  twitterDescription: post.value.description,
  twitterImage: `${baseUrl}${ogImagePath}`,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': localeBaseUrl },
          { '@type': 'ListItem', 'position': 2, 'name': t('blog.title'), 'item': `${baseUrl}${localePath('blog')}` },
          { '@type': 'ListItem', 'position': 3, 'name': post.value.title },
        ],
      },
    },
  ],
})
</script>

<template>
  <main v-if="post" class="blog">
    <article vocab="https://schema.org/" typeof="Article">
      <span property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="`${baseUrl}${path}`" />
      </span>
      <span property="publisher" typeof="Organization">
        <span property="name" :content="t('name')" />
        <span property="url" :content="baseUrl" />
      </span>
      <span property="articleSection" :content="t('blog.title')" />
      <span property="description" :content="post.description" />

      <div class="container intro">
        <AppBack path="blog" menu="menu[4].label" />
        <h1 property="headline">
          {{ post.title }}
        </h1>
        <div class="meta">
          <time property="dateCreated datePublished" :datetime="post.createdAt.toString()">
            {{ new Intl.DateTimeFormat(locale.toString(), { dateStyle: 'long', numberingSystem: 'latn' }).format(new Date(post.createdAt)) }}
          </time>
          <time property="dateModified" :datetime="post.updatedAt.toString()" :content="post.updatedAt.toString()" />
          {{ t('blog.by') }}
          <span v-if="post.author && post.author.name && post.author.url" property="author" typeof="Person" class="author">
            <a :href="post.author.url" rel="author" target="_blank" property="url" :content="post.author.url">
              <span property="name">@{{ post.author.name }}</span>
            </a>
          </span>
          <span v-else property="author" typeof="Organization" class="author">
            <span property="name">@{{ t('name') }}</span>
            <span property="url" :content="baseUrl" />
          </span>
          <ul class="tags">
            <li v-for="tag in post.tags" :key="tag" property="keywords">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <div class="container container-banner">
        <AppPicture
          :picture="post"
          sizes="295px xs:607px sm:719px md:928px lg:1200px"
        />
      </div>

      <ContentRendererMarkdown :value="post" class="container container-content" />

      <LazyBlogShare :title="post.title" :url="`${baseUrl}${path}`" />
    </article>

    <LazyAppNav :prev="surround!.prev" :next="surround!.next" />

    <LazyAppRequest />
  </main>
</template>

<style lang="scss">
.blog {
  h1 {
    margin-block-end: 24px;
  }

  .meta {
    font-weight: 500;
    color: var(--text-secondary);
    transition: color $transition;

    .author {
      color: var(--text-primary);
      transition: color $transition;
    }

    @media (min-width: $sm) {
      ul {
        position: relative;
        display: inline-flex;
        margin-inline-start: 12px;
        padding-inline-start: 12px;

        &::before {
          content: '';
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
  }

  .container-banner {
    padding-block: 0;

    .banner {
      position: relative;
      aspect-ratio: 16/9;

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
    font-size: 18px;
    line-height: 1.6;

    * {
      grid-column: 1 / 13;

      @media (min-width: $lg) {
        grid-column: 2 / 12;
      }

      @media (min-width: $xl) {
        grid-column: 3 / 11;
      }
    }

    h2 {
      font-size: 24px;
      margin-block: 36px 12px;
      letter-spacing: 0;
    }

    h3 {
      margin-block-start: 12px;
      letter-spacing: 0;
    }

    p {
      color: var(--text-secondary);
      transition: color $transition;

      &.lead {
        color: var(--text-primary);
        line-height: 1.6;
        letter-spacing: normal;
      }
    }

    a[rel='nofollow'] {
      text-decoration: underline;

      &:hover {
        color: $primary;
      }
    }

    ul,
    ol {
      color: var(--text-secondary);
      transition: color $transition;
      margin-block: 0 12px;
      padding: 0;
      list-style: none;

      &:is(ol) {
        counter-reset: ol;
      }

      li {
        padding-inline-start: 1rem;
        margin-bottom: 6px;

        &:last-child {
          margin-bottom: 0;
        }

        &:is(ol li) {
          padding-inline-start: 1.3rem;
        }

        &::before {
          content: '\002022';
          margin-inline-start: -0.875rem;
          float: inline-start;

          &:is(ol li) {
            counter-increment: ol;
            content: counters(ol, '.') '.';
            margin-inline-start: -1.2rem;
          }
        }
      }
    }
  }
}
</style>
