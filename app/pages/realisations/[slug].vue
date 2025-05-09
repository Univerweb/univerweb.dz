<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t, defaultLocale } = useI18n()
const { baseUrl, localeBaseUrl } = useUrl()
const { path } = useRoute()

const { data: work } = await useAsyncData(`work${path}`, () => {
  return queryCollection(`work_${locale.value}`)
    .select('path', 'title', 'description', 'createdAt', 'updatedAt', 'category', 'tags', 'lead', 'link')
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

const { data: tags } = await useAsyncData(`tags${path}`, () => {
  return queryCollection(`tags_${locale.value}`)
    .select('name', 'icon')
    .where('uid', 'IN', work.value!.tags)
    .all()
}, { watch: [locale] })

const { data: workRelated } = await useAsyncData(`work-related${path}`, () => {
  return queryCollection(`work_${locale.value}`)
    .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt', 'category', 'tags', 'lead')
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
    <div vocab="https://schema.org/" typeof="CreativeWork">
      <span :id="baseUrl(localePath('realisations'))" property="isPartOf" typeof="WebPage">
        <span property="name" :content="t('navigation.menu[0].label')" />
      </span>
      <span property="author publisher" typeof="Organization">
        <span property="name" :content="t('site.name')" />
        <span property="url" :content="localeBaseUrl" />
      </span>
      <time property="dateCreated datePublished" :datetime="new Date(work.createdAt).toISOString()" />
      <time property="dateModified" :datetime="new Date(work.updatedAt).toISOString()" />
      <span property="description" :content="work.description" />

      <div class="container intro">
        <AppBack path="realisations" :label="t('navigation.menu[0].label')" />
        <h1 property="name">
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

      <div class="container row items-2">
        <div class="item item-1">
          <h2 class="h6">
            {{ t('realisations.client') }}
          </h2>
          <p class="lead">
            {{ work.title }}
          </p>
        </div>
        <div class="item item-2">
          <h2 class="h6">
            {{ t('realisations.category') }}
          </h2>
          <p class="lead">
            {{ work.category }}
          </p>
        </div>
        <div class="item item-3">
          <h2 class="h6">
            {{ t('realisations.services') }}
          </h2>
          <ul class="lead tags">
            <li v-for="tag in tags" :key="tag.name">
              {{ tag.name }}
            </li>
          </ul>
        </div>
        <div class="item item-4">
          <h2 class="h6">
            {{ t('realisations.technologies') }}
          </h2>
          <ul class="technos">
            <template v-for="tag in tags" :key="tag.name">
              <li v-for="icon in tag.icon" :key="icon">
                <Component :is="icon" />
              </li>
            </template>
          </ul>
        </div>
      </div>

      <div class="container container-no-pt row">
        <div class="col col--1-4">
          <div class="inner">
            <p property="about" class="lead">
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
    </div>

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
