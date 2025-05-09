<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path } = useRoute()
const head = useLocaleHead()

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

useSeoSlug({
  title: () => `${post.value!.title} | ${t('navigation.menu[4].label')}`,
  description: () => post.value!.description,
  category: 'blog',
  currentPageTitle: () => post.value!.title,
})
</script>

<template>
  <main v-if="post" class="blog">
    <article vocab="https://schema.org/" typeof="Article">
      <span property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="baseUrl(path)" />
      </span>
      <span property="publisher" typeof="Organization">
        <span property="name" :content="t('site.name')" />
        <span property="url" :content="localeBaseUrl" />
      </span>
      <span property="articleSection" :content="t('navigation.menu[4].label')" />
      <span property="description" :content="post.description" />

      <div class="container intro">
        <AppBack path="blog" :label="t('navigation.menu[4].label')" />
        <h1 property="headline">
          {{ post.title }}
        </h1>
        <div class="meta">
          <NuxtTime property="dateCreated datePublished" :datetime="post.createdAt" :locale="head.htmlAttrs.lang" date-style="long" />
          <time property="dateModified" :datetime="new Date(post.updatedAt).toISOString()" />
          {{ t('blog.by') }}
          <span v-if="post.author && post.author.name && post.author.url" property="author" typeof="Person" class="author">
            <a :href="post.author.url" rel="author" target="_blank" property="url" :content="post.author.url">
              <span property="name">@{{ post.author.name }}</span>
            </a>
          </span>
          <span v-else property="author" typeof="Organization" class="author">
            <span property="name">@{{ t('site.name') }}</span>
            <span property="url" :content="localeBaseUrl" />
          </span>
          <ul class="tags">
            <li v-for="tag in post.tags" :key="tag" property="keywords">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <AppPicture
        :path
        type="banner"
        sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1200px"
        class="banner"
      />

      <div class="container row row-no-gap">
        <ContentRenderer :value="post" class="col col--2-12 col--3-11 content" />
      </div>

      <LazyPostShare :title="post.title" :path="baseUrl(path)" />
    </article>

    <LazyAppNav :prev="postSurround?.[0]" :next="postSurround?.[1]" :aria-label="t('blog.ariaLabels.nav')" />
  </main>
</template>
