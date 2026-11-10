<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { localeBaseUrl, baseUrl } = useUrl()
const head = useLocaleHead()

const [{ data: article }, { data: surround }] = await Promise.all([
  useAsyncData(
    () => `article-${locale.value}-${slug}`,
    () => queryCollection(`article_${locale.value}`)
      .select('path', 'title', 'description', 'alt', 'createdAt', 'updatedAt', 'tags', 'author', 'body')
      .path(computed(() => localePath(path)).value)
      .first(),
    { watch: [locale] },
  ),

  useAsyncData(
    () => `article-surround-${locale.value}-${slug}`,
    () => queryCollectionItemSurroundings(`article_${locale.value}`, path),
    { watch: [locale] },
  ),
])

if (!article.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
    fatal: true,
  })
}

useSeo({
  page: { name: 'blog', slug: true },
  title: () => `${article.value!.title} | ${t('navigation.menu.blog')}`,
  description: () => article.value!.description,
  ogTitle: () => article.value!.title,
  ogImageAlt: () => article.value!.alt,
})
</script>

<template>
  <main v-if="article" class="blog">
    <article vocab="https://schema.org/" typeof="Article" aria-labelledby="article-title">
      <header class="container intro">
        <meta property="description" :content="article.description">
        <meta property="articleSection" :content="t('navigation.menu.blog')">
        <span property="publisher" typeof="Organization">
          <meta property="name" :content="t('site.name')">
          <link property="url" :href="localeBaseUrl">
        </span>
        <span property="isPartOf" typeof="CollectionPage">
          <meta property="name" :content="t('navigation.menu.blog')">
          <link property="url" :href="baseUrl(localePath('blog'))">
        </span>
        <span property="mainEntityOfPage" typeof="WebPage">
          <link property="url" :href="baseUrl(path)">
        </span>

        <AppBack path="blog" :label="t('navigation.menu.blog')" />
        <ul class="tags">
          <li v-for="tag in article.tags" :key="tag" property="keywords">
            {{ tag }}
          </li>
        </ul>

        <h1 id="article-title" property="headline">
          {{ article.title }}
        </h1>

        <dl class="meta">
          <dt>{{ t('blog.createdAt') }}&nbsp;</dt>
          <dd>
            <NuxtTime
              property="dateCreated datePublished"
              :datetime="article.createdAt"
              :locale="head.htmlAttrs.lang"
              :date-style="locale === 'ar' ? 'long' : 'medium'"
            />
          </dd>

          <template v-if="article.createdAt !== article.updatedAt">
            <dt>{{ t('blog.updatedAt') }}&nbsp;</dt>
            <dd>
              <NuxtTime
                property="dateModified"
                :datetime="article.updatedAt"
                :locale="head.htmlAttrs.lang"
                :date-style="locale === 'ar' ? 'long' : 'medium'"
              />
            </dd>
          </template>

          <dt>{{ t('blog.author') }}&nbsp;</dt>
          <dd>
            <a
              v-if="article.author && article.author.name && article.author.url"
              :href="article.author.url"
              target="_blank"
              property="author"
              typeof="Person"
            >
              <span property="name">@{{ article.author.name }}</span>
              <link property="url" :href="article.author.url">
            </a>
            <span v-else property="author" typeof="Organization">
              <span property="name">@{{ t('site.name') }}</span>
              <link property="url" :href="localeBaseUrl">
            </span>
          </dd>
        </dl>
      </header>

      <AppPicture
        :picture="article"
        type="banner"
        class="banner"
      />

      <ContentRenderer
        :value="article"
        property="articleBody"
        class="container container-narrow content"
      />
    </article>

    <LazyArticleShare :title="article.title" :path="baseUrl(path)" />

    <LazyAppNav :prev="surround?.[0]" :next="surround?.[1]" :aria-label="t('ariaLabels.articleNavigation')" />

    <LazyAppRequest />
  </main>
</template>
