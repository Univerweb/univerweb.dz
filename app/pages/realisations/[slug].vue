<script setup lang="ts">
import type { Work } from '@/types'

const localePath = useLocalePath()
const { t } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path, params: { slug } } = useRoute()
const img = useImage()
const ogImage = img(`realisations/${slug}_banner`, { format: 'webp', width: 2400, height: 1256 }, { provider: 'cloudinary' })

const { data: work } = await useAsyncData(
  `work${path}`,
  () => queryContent<Work>()
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'link', 'lead'])
    .where({ _path: path })
    .findOne(),
)

if (!work.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const { data: workSurround } = await useAsyncData(
  `work-surround${path}`,
  async () => {
    const [prev, next] = await queryContent<Pick<Work, '_path' | 'title'>>(localePath('realisations'))
      .only(['_path', 'title'])
      .findSurround(path)

    return { prev, next }
  },
  { watch: [localePath] },
)

const { data: workRelated } = await useAsyncData(
  `work-related${path}`,
  () => queryContent<Work>(localePath('realisations'))
    .only(['_path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'lead'])
    .where({ category: work.value!.category, _path: { $ne: path } })
    .sort({ _id: -1 })
    .find(),
  { watch: [localePath] },
)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': localeBaseUrl },
          { '@type': 'ListItem', 'position': 2, 'name': t('works.title'), 'item': `${baseUrl}${localePath('realisations')}` },
          { '@type': 'ListItem', 'position': 3, 'name': work.value.title },
        ],
      },
    },
  ],
})

useSeoMeta({
  title: work.value.title,
  description: work.value.description,
  ogTitle: work.value.title,
  ogDescription: work.value.description,
  ogType: 'article',
  ogImage,
  twitterTitle: work.value.title,
  twitterDescription: work.value.description,
  twitterImage: ogImage,
})
</script>

<template>
  <main v-if="work" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <span property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="`${baseUrl}${path}`" />
      </span>
      <span property="author publisher" typeof="Organization">
        <span property="name" :content="t('name')" />
        <span property="url" :content="baseUrl" />
      </span>
      <time property="dateCreated datePublished" :datetime="new Date(work.createdAt).toISOString()" />
      <time property="dateModified" :datetime="new Date(work.updatedAt).toISOString()" />
      <span property="articleSection" :content="t('works.title')" />
      <span property="description" :content="work.description" />

      <div class="container intro">
        <AppBack path="realisations" :label="t('menu[0].label')" />
        <h1 property="headline">
          {{ work.title }}
        </h1>
      </div>

      <AppPicture
        :picture="work"
        type="banner"
        sizes="342px xs:392px sm:735px md:975px lg:1183px xl:1280px"
        class="banner"
      />

      <div class="container row row-evenly">
        <div class="col col--auto-auto">
          <h2 class="h6">
            {{ t('work.client') }}
          </h2>
          <p class="lead">
            {{ work.title }}
          </p>
        </div>
        <div class="col col--auto-auto">
          <h2 class="h6">
            {{ t('work.category') }}
          </h2>
          <p class="lead">
            {{ work.category }}
          </p>
        </div>
        <div class="col col--auto-auto">
          <h2 class="h6">
            {{ t('work.services') }}
          </h2>
          <ul class="lead tags">
            <li v-for="tag in work.tags" :key="tag" property="keywords">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <div class="container container-no-pt row">
        <div class="col col--1-4">
          <div class="inner">
            <p property="articleBody" class="lead">
              {{ work.lead }}
            </p>
            <a v-if="work.link" :href="work.link" class="link">
              {{ t('work.visit') }}
            </a>
          </div>
        </div>
        <AppPicture
          :picture="work"
          type="preview"
          :alt="`${t('work.alt')} ${work.title}`"
          sizes="304px xs:354px sm:697px md:921px lg:565px xl:730px"
          class="col col--5-13 preview"
          :img-attrs="null"
        />
      </div>
    </article>

    <div v-if="workRelated && workRelated.length" class="container">
      <div class="intro intro-justify">
        <h2>
          {{ t('work.related') }}
        </h2>
      </div>
      <div class="card-group">
        <WorkCard v-for="related in workRelated" :key="related._path" :work="related" title-tag="h3" />
      </div>
    </div>

    <LazyAppNav :prev="workSurround!.prev" :next="workSurround!.next" />
  </main>
</template>
