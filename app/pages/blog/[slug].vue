<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { localeBaseUrl, baseUrl } = useUrl()
const head = useLocaleHead()

const [{ data: article }, { data: surround }] = await Promise.all([
  useAsyncData(
    () => `article-${locale.value}-${slug}`,
    () => queryCollection(`blog_item_${locale.value}`)
      .select('path', 'title', 'description', 'alt', 'createdAt', 'updatedAt', 'tags', 'author', 'body')
      .path(computed(() => localePath(path)).value)
      .first(),
    { watch: [locale] },
  ),

  useAsyncData(
    `article-surround-${locale.value}-${slug}`,
    () => queryCollectionItemSurroundings(`blog_item_${locale.value}`, path),
    { watch: [locale] },
  ),
])

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
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
    <article vocab="https://schema.org/" typeof="Article" aria-labelledby="title">
      <header class="container intro">
        <meta property="description" :content="article.description">
        <meta property="articleSection" :content="t('navigation.menu.blog')">
        <meta property="dateModified" :content="new Date(article.updatedAt).toISOString()">
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

    <LazyArticleShare :title="article.title" :path="baseUrl(path)" />

    <LazyAppNav :prev="surround?.[0]" :next="surround?.[1]" :aria-label="t('blog.ariaLabels.nav')" />
  </main>
</template>
