<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path } = useRoute()
const img = useImage()
const ogImage = img(localePath(`${path}_banner`, 'fr'), { format: 'webp', width: 2400, height: 1256 }, { provider: 'cloudinary' })

const { data: post } = await useAsyncData(`post${path}`, () => {
  return queryCollection(`post_${locale.value}`)
    .select('path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'author', 'body')
    .path(computed(() => localePath(path)).value)
    .first()
}, { watch: [locale] })

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const { data: postSurround } = await useAsyncData(`post-surround${path}`, () => {
  return queryCollectionItemSurroundings(`post_${locale.value}`, path)
}, { watch: [locale] })

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': () => t('name'), 'item': localeBaseUrl },
          { '@type': 'ListItem', 'position': 2, 'name': () => t('blog.title'), 'item': () => `${baseUrl}${localePath('blog')}` },
          { '@type': 'ListItem', 'position': 3, 'name': () => post.value!.title },
        ],
      },
    },
  ],
})

useSeoMeta({
  title: () => post.value!.title,
  description: () => post.value!.description,
  ogTitle: () => post.value!.title,
  ogDescription: () => post.value!.description,
  ogType: 'article',
  ogImage,
  twitterTitle: () => post.value!.title,
  twitterDescription: () => post.value!.description,
  twitterImage: ogImage,
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
        <AppBack path="blog" :label="t('menu[4].label')" />
        <h1 property="headline">
          {{ post.title }}
        </h1>
        <div class="meta">
          <time property="dateCreated datePublished" :datetime="new Date(post.createdAt).toISOString()">
            {{ new Intl.DateTimeFormat(locale.toString(), { dateStyle: 'long', numberingSystem: 'latn' }).format(new Date(post.createdAt)) }}
          </time>
          <time property="dateModified" :datetime="new Date(post.updatedAt).toISOString()" />
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

      <AppPicture
        :picture="post"
        type="banner"
        sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1200px"
        class="banner"
      />

      <div class="container row row-no-gap">
        <ContentRenderer :value="post" class="col col--2-12 col--3-11 content" />
      </div>

      <LazyPostShare :title="post.title" :url="`${baseUrl}${path}`" />
    </article>

    <LazyAppNav :prev="postSurround?.[0]" :next="postSurround?.[1]" />
  </main>
</template>
