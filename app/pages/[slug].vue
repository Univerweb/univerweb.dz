<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { localeBaseUrl, baseUrl } = useUrl()
const head = useLocaleHead()

const { data: legal } = await useAsyncData(
  () => `legal-${locale.value}-${slug}`,
  () => queryCollection(`legal_${locale.value}`)
    .select('title', 'description', 'createdAt', 'updatedAt', 'body')
    .path(computed(() => localePath(path)).value)
    .first(),
  { watch: [locale] },
)

if (!legal.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
    fatal: true,
  })
}

useSeo({
  page: 'legal',
  title: () => legal.value!.title,
  description: () => legal.value!.description,
})
</script>

<template>
  <main v-if="legal" class="legal blog">
    <article
      vocab="https://schema.org/"
      typeof="Article"
      aria-labelledby="article-title"
      class="container container-narrow"
    >
      <header>
        <meta property="description" :content="legal.description">
        <meta property="image" :content="baseUrl(`/images/univerweb${locale === 'ar' ? '-ar' : ''}.jpg`)">
        <meta property="datePublished" :content="new Date(legal.createdAt).toISOString()">
        <meta property="dateCreated" :content="new Date(legal.createdAt).toISOString()">
        <meta property="dateModified" :content="new Date(legal.updatedAt).toISOString()">
        <span property="publisher author" typeof="Organization">
          <meta property="name" :content="t('site.name')">
          <link property="url" :href="localeBaseUrl">
        </span>
        <span property="mainEntityOfPage" typeof="WebPage">
          <link property="url" :href="baseUrl(path)">
        </span>

        <h1 id="article-title" class="h2" property="headline">
          {{ legal.title }}
        </h1>

        <dl class="meta">
          <template v-if="legal.createdAt === legal.updatedAt">
            <dt>{{ t('blog.createdAt') }}&nbsp;</dt>
            <dd>
              <NuxtTime
                :datetime="legal.createdAt"
                :locale="head.htmlAttrs.lang"
                :date-style="locale === 'ar' ? 'long' : 'medium'"
              />
            </dd>
          </template>

          <template v-else>
            <dt>{{ t('blog.updatedAt') }}&nbsp;</dt>
            <dd>
              <NuxtTime
                :datetime="legal.updatedAt"
                :locale="head.htmlAttrs.lang"
                :date-style="locale === 'ar' ? 'long' : 'medium'"
              />
            </dd>
          </template>
        </dl>
      </header>

      <ContentRenderer :value="legal" property="articleBody" class="content" />
    </article>

    <LazyAppRequest />
  </main>
</template>
