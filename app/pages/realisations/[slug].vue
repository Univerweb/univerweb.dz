<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t, defaultLocale } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path } = useRoute()

const { data: work } = await useAsyncData(`work${path}`, () => {
  return queryCollection(`work_${locale.value}`)
    .select('path', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'lead', 'link')
    .path(computed(() => localePath(path)).value)
    .first()
}, { watch: [locale] })

if (!work.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const { data: workRelated } = await useAsyncData(`work-related${path}`, () => {
  return queryCollection(`work_${locale.value}`)
    .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt', 'tags', 'category', 'lead')
    .andWhere(query => query
      .where('path', '<>', path)
      .where('category', '=', work.value!.category))
    .order('stem', 'DESC')
    .all()
}, { watch: [locale, work] })

const { data: workSurround } = await useAsyncData(`work-surround${path}`, () => {
  return queryCollectionItemSurroundings(`work_${locale.value}`, path)
}, { watch: [locale] })

useSeoSlug({
  title: () => `${work.value!.title}${defaultLocale ? ' :' : ':'} ${work.value!.category} | ${t('navigation.menu[0].label')}`,
  description: () => work.value!.description,
  category: 'realisations',
  currentPageTitle: () => work.value!.title,
})
</script>

<template>
  <main v-if="work" class="work">
    <article vocab="https://schema.org/" typeof="Article">
      <span property="mainEntityOfPage" typeof="WebPage">
        <span property="id" :content="baseUrl(path)" />
      </span>
      <span property="author publisher" typeof="Organization">
        <span property="name" :content="t('site.name')" />
        <span property="url" :content="localeBaseUrl" />
      </span>
      <time property="dateCreated datePublished" :datetime="new Date(work.createdAt).toISOString()" />
      <time property="dateModified" :datetime="new Date(work.updatedAt).toISOString()" />
      <span property="articleSection" :content="t('realisations.title')" />
      <span property="description" :content="work.description" />

      <div class="container intro">
        <AppBack path="realisations" :label="t('navigation.menu[0].label')" />
        <h1 property="headline">
          {{ work.title }}
        </h1>
      </div>

      <AppPicture
        :path
        type="banner"
        :alt="`${t('realisations.alt')} ${work.title}`"
        sizes="342px xs:392px sm:735px md:975px lg:1183px xl:1280px"
        class="banner"
      />

      <div class="container row row-evenly">
        <div class="col col--auto-auto">
          <h2 class="h6">
            {{ t('realisations.client') }}
          </h2>
          <p class="lead">
            {{ work.title }}
          </p>
        </div>
        <div class="col col--auto-auto">
          <h2 class="h6">
            {{ t('realisations.category') }}
          </h2>
          <p class="lead">
            {{ work.category }}
          </p>
        </div>
        <div class="col col--auto-auto">
          <h2 class="h6">
            {{ t('realisations.services') }}
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
              {{ t('realisations.visit') }}
            </a>
          </div>
        </div>
        <AppPicture
          :path
          type="preview"
          :alt="`${t('realisations.alt')} ${work.title}`"
          sizes="304px xs:354px sm:697px md:921px lg:565px xl:730px"
          class="col col--5-13 preview"
          :img-attrs="null"
        />
      </div>
    </article>

    <div v-if="workRelated && workRelated.length" class="container">
      <div class="intro intro-justify">
        <h2>
          {{ t('realisations.related') }}
        </h2>
      </div>
      <div class="card-group">
        <WorkCard v-for="related in workRelated" :key="related.path" :work="related" title-tag="h3" />
      </div>
    </div>

    <LazyAppNav :prev="workSurround?.[0]" :next="workSurround?.[1]" />
  </main>
</template>
