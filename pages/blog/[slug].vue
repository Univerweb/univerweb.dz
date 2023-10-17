<script setup lang="ts">
import type { Blog, Nav } from '../../types'

const localePath = useLocalePath()
const { locale, t } = useI18n()
const breadcrumb = useBreadcrumb()
const config = useRuntimeConfig()
const { path, params: { slug } } = useRoute()

const { data: post } = await useAsyncData(`content-${path}`, () =>
  queryContent()
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'body'])
    .where({ _path: path })
    .findOne() as Promise<Blog>)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogType: 'article',
  ogImage: `${config.public.baseURL}/_ipx/w_1536&f_jpg&q_80/blog/${slug}_banner.jpg`,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': breadcrumb },
          { '@type': 'ListItem', 'position': 2, 'name': t('blog.title'), 'item': `${config.public.baseURL}${localePath('blog')}` },
          { '@type': 'ListItem', 'position': 3, 'name': post.value.title },
        ],
      },
    },
  ],
})

const { data: surround } = await useAsyncData(
  `surround-${path}`,
  async () => {
    const [prev, next] = await queryContent<Nav>(localePath('blog'))
      .only(['_path', 'title'])
      .findSurround(path)

    return {
      prev,
      next,
    }
  },
  { watch: [localePath] },
)
</script>

<template>
  <main v-if="post" class="blog">
    <article vocab="https://schema.org/" typeof="Article">
      <div property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="`${config.public.baseURL}${path}`" />
      </div>
      <span property="articleSection" :content="t('blog.title')" />
      <span property="description" :content="post.description" />

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
            <span property="url" :content="post.author.url" />
          </span>
          <span v-else property="author" typeof="Organization" class="author">
            <span property="name">{{ t('name') }}</span>
            <span property="url" :content="config.public.baseURL" />
          </span>
          <span property="publisher" typeof="Organization">
            <span property="name" :content="t('name')" />
            <span property="url" :content="config.public.baseURL" />
          </span>
          <ul class="tags">
            <li v-for="tag in post.tags" :key="tag" property="keywords">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <div class="container container-banner">
        <AppPicture :picture="post" sizes="xs:288px sm:592px md:672px lg:928px xl:1200px" />
      </div>

      <ContentRenderer>
        <ContentRendererMarkdown :value="post" class="container container-content" />
      </ContentRenderer>

      <LazyBlogShare :title="post.title" :url="`${config.public.baseURL}${path}`" />
    </article>

    <LazyAppNav :prev="surround!.prev" :next="surround!.next" />

    <LazyAppRequest />
  </main>
</template>

<style lang="scss">
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
      margin-inline-start: 12px;
      padding-inline-start: 12px;

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

    * {
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
