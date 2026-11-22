<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const { baseUrl } = useUrl()
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

const author = article.value.author
const authorIsFounder = !!author && founder.sameAs.includes(author.url)

useSchemaOrg([
  defineArticle({
    '@type': 'BlogPosting',
    'headline': () => article.value!.title,
    'description': () => article.value!.description,
    'datePublished': () => article.value!.createdAt,
    'dateModified': () => article.value!.updatedAt,
    'keywords': () => article.value!.tags,
    'articleSection': () => t('navigation.menu.blog'),
    'author': authorIsFounder
      ? { '@id': baseUrl('/#founder') }
      : author
        ? { '@type': 'Person', 'name': author.name, 'url': author.url }
        : { '@id': baseUrl('/#identity') },
    'publisher': { '@id': baseUrl('/#identity') },
  }),
])
</script>

<template>
  <main v-if="article" class="blog">
    <article aria-labelledby="article-title">
      <header class="container intro">
        <AppBack path="blog" :label="t('navigation.menu.blog')" />
        <ul class="tags">
          <li v-for="tag in article.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>

        <h1 id="article-title">
          {{ article.title }}
        </h1>

        <dl class="meta">
          <div>
            <dt>{{ t('blog.createdAt') }}&nbsp;</dt>
            <dd>
              <NuxtTime
                :datetime="article.createdAt"
                :locale="head.htmlAttrs.lang"
                :date-style="locale === 'ar' ? 'long' : 'medium'"
              />
            </dd>
          </div>

          <div v-if="article.createdAt !== article.updatedAt">
            <dt>{{ t('blog.updatedAt') }}&nbsp;</dt>
            <dd>
              <NuxtTime
                :datetime="article.updatedAt"
                :locale="head.htmlAttrs.lang"
                :date-style="locale === 'ar' ? 'long' : 'medium'"
              />
            </dd>
          </div>

          <div>
            <dt>{{ t('blog.author') }}&nbsp;</dt>
            <dd>
              <a
                v-if="article.author && article.author.name && article.author.url"
                :href="article.author.url"
                target="_blank"
              >
                @{{ article.author.name }}
              </a>
              <span v-else>
                @{{ t('site.name') }}
              </span>
            </dd>
          </div>
        </dl>
      </header>

      <AppPicture
        :picture="article"
        type="banner"
        class="banner"
      />

      <ContentRenderer
        :value="article"
        class="container container-narrow content"
      />
    </article>

    <LazyArticleShare :title="article.title" :path="baseUrl(path)" />

    <LazyAppNav :prev="surround?.[0]" :next="surround?.[1]" :aria-label="t('ariaLabels.articleNavigation')" />

    <LazyAppRequest />
  </main>
</template>
