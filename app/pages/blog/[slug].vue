<script setup lang="ts">
const { path } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { localeBaseUrl, baseUrl } = useUrl()
const head = useLocaleHead()

const { data: article } = await useAsyncData(`article-${path}`, () => {
  return queryCollection(`article_${locale.value}`)
    .select('path', 'title', 'description', 'alt', 'createdAt', 'updatedAt', 'tags', 'author', 'body')
    .path(computed(() => localePath(path)).value)
    .first()
}, { watch: [locale] })

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

useSeo({
  pageSlug: 'blog',
  title: () => `${article.value!.title} | ${t('navigation.menu[4].label')}`,
  description: () => article.value!.description,
  ogTitle: () => article.value!.title,
  ogImageAlt: () => article.value!.alt,
})

const { data: postSurround } = await useAsyncData(`article-surround-${path}`, () => {
  return queryCollectionItemSurroundings(`article_${locale.value}`, path)
}, { watch: [locale] })
</script>

<template>
  <main v-if="article" class="blog">
    <article vocab="https://schema.org/" typeof="Article" aria-labelledby="title">
      <header class="container intro">
        <meta property="description" :content="article.description">
        <meta property="articleSection" :content="t('navigation.menu[4].label')">
        <meta property="dateModified" :content="new Date(article.updatedAt).toISOString()">
        <span property="publisher" typeof="Organization">
          <meta property="name" :content="t('site.name')">
          <link property="url" :href="localeBaseUrl">
        </span>
        <span property="isPartOf" typeof="CollectionPage">
          <meta property="name" :content="t('navigation.menu[4].label')">
          <link property="url" :href="baseUrl(localePath('blog'))">
        </span>
        <span property="mainEntityOfPage" typeof="WebPage">
          <link property="url" :href="baseUrl(path)">
        </span>

        <AppBack path="blog" :label="t('navigation.menu[4].label')" />
        <h1 id="title" property="headline">
          {{ article.title }}
        </h1>

        <dl class="meta">
          <dt id="published" class="visually-hidden">
            {{ t('blog.ariaLabelledby.published') }}
          </dt>
          <dd aria-labelledby="published">
            <NuxtTime property="dateCreated datePublished" :datetime="article.createdAt" :locale="head.htmlAttrs.lang" date-style="long" />
          </dd>
          <dt id="author" class="visually-hidden">
            {{ t('blog.ariaLabelledby.author') }}
          </dt>
          <dd aria-labelledby="author">
            {{ t('blog.by') }}
            <a v-if="article.author && article.author.name && article.author.url" :href="article.author.url" target="_blank" property="author" typeof="Person">
              <span property="name">@{{ article.author.name }}</span>
              <link property="url" :href="article.author.url">
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
              <li v-for="tag in article.tags" :key="tag" property="keywords">
                {{ tag }}
              </li>
            </ul>
          </dd>
        </dl>
      </header>

      <AppPicture
        :picture="article"
        type="banner"
        sizes="100vw xs:100vw sm:100vw md:100vw lg:100vw xl:1200px"
        class="banner"
      />

      <section class="container row row-no-gap">
        <ContentRenderer :value="article" property="articleBody" class="col col--2-12 col--3-11 content" />
      </section>
    </article>

    <LazyPostShare :title="article.title" :path="baseUrl(path)" />

    <LazyAppNav :prev="postSurround?.[0]" :next="postSurround?.[1]" :aria-label="t('blog.ariaLabels.nav')" />
  </main>
</template>
