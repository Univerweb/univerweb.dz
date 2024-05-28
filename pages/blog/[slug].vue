<script setup lang="ts">
import type { Post } from '../../types'

const localePath = useLocalePath()
const { locale, t } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path, params: { slug } } = useRoute()
const img = useImage()
const ogImage = img(`blog/${slug}_banner`, { format: 'webp', width: 2400, height: 1256 }, { provider: 'cloudinary' })

const { data: post } = await useAsyncData(
  `post${path}`,
  () => queryContent<Post>()
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

const { data: postSurround } = await useAsyncData(
  `post-surround${path}`,
  async () => {
    const [prev, next] = await queryContent<Pick<Post, '_path' | 'title'>>(localePath('blog'))
      .only(['_path', 'title'])
      .findSurround(path)

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
  ogImage,
  twitterTitle: post.value.title,
  twitterDescription: post.value.description,
  twitterImage: ogImage,
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
          <ul>
            <li v-for="tag in post.tags" :key="tag" property="keywords" class="tag">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <AppPicture
        :picture="post"
        type="banner"
        sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1200px"
        class="banner"
      />

      <div class="container row row-no-gap">
        <ContentRendererMarkdown :value="post" class="col col--2-12 col--3-11 content" />
      </div>

      <LazyPostShare :title="post.title" :url="`${baseUrl}${path}`" />
    </article>

    <LazyAppNav :prev="postSurround!.prev" :next="postSurround!.next" />
  </main>
</template>
