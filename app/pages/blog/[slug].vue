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
    <article vocab="https://schema.org/" typeof="Article" aria-labelledby="title">
      <header class="container intro">
        <meta property="description" :content="post.description">
        <meta property="articleSection" :content="t('navigation.menu[4].label')">
        <meta property="dateModified" :content="new Date(post.updatedAt).toISOString()">
        <span property="mainEntityOfPage" typeof="WebPage">
          <link property="url" :href="baseUrl(path)">
        </span>
        <span property="publisher" typeof="Organization">
          <span property="name" :content="t('site.name')" />
          <link property="url" :href="localeBaseUrl">
        </span>

        <AppBack path="blog" :label="t('navigation.menu[4].label')" />
        <h1 id="title" property="headline">
          {{ post.title }}
        </h1>

        <dl class="meta">
          <dt id="published" class="visually-hidden">
            {{ t('blog.ariaLabelledby.published') }}
          </dt>
          <dd aria-labelledby="published">
            <NuxtTime property="dateCreated datePublished" :datetime="post.createdAt" :locale="head.htmlAttrs.lang" date-style="long" />
          </dd>
          <dt id="author" class="visually-hidden">
            {{ t('blog.ariaLabelledby.author') }}
          </dt>
          <dd aria-labelledby="author">
            {{ t('blog.by') }}
            <a v-if="post.author && post.author.name && post.author.url" :href="post.author.url" target="_blank" property="author" typeof="Person">
              <span property="name">@{{ post.author.name }}</span>
              <link property="url" :href="post.author.url">
            </a>
            <span v-else property="author" typeof="Organization">
              <span property="name">@{{ t('site.name') }}</span>
              <link property="url" :href="localeBaseUrl">
            </span>
          </dd>
          <dt id="keywords" class="visually-hidden">
            {{ t('blog.ariaLabelledby.keywords') }}
          </dt>
          <dd aria-labelledby="keywords">
            <ul class="tags">
              <li v-for="tag in post.tags" :key="tag" property="keywords">
                {{ tag }}
              </li>
            </ul>
          </dd>
        </dl>
      </header>

      <AppPicture
        :path
        type="banner"
        sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1200px"
        class="banner"
      />

      <section class="container row row-no-gap">
        <ContentRenderer :value="post" property="articleBody" class="col col--2-12 col--3-11 content" />
      </section>
    </article>

    <LazyPostShare :title="post.title" :path="baseUrl(path)" />

    <LazyAppNav :prev="postSurround?.[0]" :next="postSurround?.[1]" :aria-label="t('blog.ariaLabels.nav')" />
  </main>
</template>
