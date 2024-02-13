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
  () => queryContent<Blog>()
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'author', 'body'])
    .where({ _path: path })
    .findOne(),
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
  </main>
</template>
