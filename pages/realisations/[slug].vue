<script setup lang="ts">
import type { Nav, Work } from '../../types'

const localePath = useLocalePath()
const { t } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path, params: { slug } } = useRoute()
const img = useImage()
const ogImagePath = img(`realisations/${slug}_banner.png`, { width: 2400, height: 1256, quality: 80 })

const { data: post } = await useAsyncData(
  `post${path}`,
  () => queryContent<Work>()
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'link', 'body'])
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
    const [prev, next] = await queryContent<Nav>(localePath('realisations'))
      .only(['_path', 'title'])
      .findSurround(path)

    return { prev, next }
  },
  { watch: [localePath] },
)

const { data: related } = await useAsyncData(
  `related${path}`,
  () => queryContent<Work>(localePath('realisations'))
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'body'])
    .where({ category: post.value!.category, _path: { $ne: path } })
    .sort({ _id: -1, $numeric: true })
    .find(),
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
          { '@type': 'ListItem', 'position': 2, 'name': t('works.title'), 'item': `${baseUrl}${localePath('realisations')}` },
          { '@type': 'ListItem', 'position': 3, 'name': post.value.title },
        ],
      },
    },
  ],
})
</script>

<template>
  <main v-if="post" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <span property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="`${baseUrl}${path}`" />
      </span>
      <span property="author publisher" typeof="Organization">
        <span property="name" :content="t('name')" />
        <span property="url" :content="baseUrl" />
      </span>
      <time property="dateCreated datePublished" :datetime="post.createdAt.toString()" />
      <time property="dateModified" :datetime="post.updatedAt.toString()" />
      <span property="articleSection" :content="t('works.title')" />
      <span property="description" :content="post.description" />

      <div class="container intro">
        <AppBack path="realisations" menu="menu[0].label" />
        <h1 property="headline">
          {{ post.title }}
        </h1>
      </div>

      <AppPicture
        :picture="post"
        :width="2560"
        :height="1280"
        sizes="342px xs:392px sm:735px md:975px lg:1183px xl:1280px"
        ext="png"
        class="banner"
      />

      <div class="container row row-evenly">
        <div class="col col--auto-auto">
          <h2 class="h6">
            {{ t('work.client') }}
          </h2>
          <p class="lead">
            {{ post.title }}
          </p>
        </div>
        <div class="col col--auto-auto">
          <h2 class="h6">
            {{ t('work.category') }}
          </h2>
          <p class="lead">
            {{ post.category }}
          </p>
        </div>
        <div class="col col--auto-auto">
          <h2 class="h6">
            {{ t('work.services') }}
          </h2>
          <ul class="lead">
            <li v-for="tag in post.tags" :key="tag" property="keywords" class="tag">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <div class="container project">
        <div class="row">
          <div class="col col--1-4">
            <div class="inner">
              <ContentRendererMarkdown
                :value="post"
                tag="p"
                property="articleBody"
                class="lead"
              />
              <a v-if="post.link" :href="post.link" class="link">
                {{ t('work.visit') }}
              </a>
              <p v-else>
                {{ t('work.state') }}
              </p>
            </div>
          </div>
          <AppPicture
            :picture="post"
            type="preview"
            :alt="`${t('work.alt')} ${post.title}`"
            sizes="304px xs:354px sm:697px md:921px lg:565px xl:730px"
            class="col col--5-13"
            :img-attrs="null"
          />
        </div>
      </div>
    </article>

    <div v-if="related && related.length" class="container">
      <div class="intro">
        <h2>
          {{ t('work.related') }}
        </h2>
      </div>
      <div class="card-group">
        <WorkCard v-for="p in related" :key="p._path" :work="p" title-tag="h3" />
      </div>
    </div>

    <LazyAppNav :prev="surround!.prev" :next="surround!.next" />
  </main>
</template>
