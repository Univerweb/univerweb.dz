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
    <article vocab="https://schema.org/" typeof="CreativeWork" aria-labelledby="name">
      <header class="container intro">
        <meta property="description" :content="work.description">
        <meta property="dateCreated datePublished" :content="new Date(work.createdAt).toISOString()">
        <meta property="dateModified" :content="new Date(work.updatedAt).toISOString()">
        <span property="author publisher" typeof="Organization">
          <meta property="name" :content="t('site.name')">
          <link property="url" :href="localeBaseUrl">
        </span>
        <span property="isPartOf" typeof="CollectionPage">
          <meta property="name" :content="t('navigation.menu[0].label')">
          <link property="url" :href="baseUrl(localePath('realisations'))">
        </span>

        <AppBack path="realisations" :label="t('navigation.menu[0].label')" />
        <h1 id="name" property="name">
          {{ work.title }}
        </h1>
      </header>

      <AppPicture
        :path
        type="banner"
        :alt="`${t('realisations.alt')} ${work.title}`"
        sizes="342px xs:392px sm:735px md:975px lg:1183px xl:1280px"
        class="banner"
      />

      <div class="container row items-2">
        <section class="item item-1" aria-labelledby="client">
          <h2 id="client" class="h6">
            {{ t('realisations.client') }}
          </h2>
          <p class="lead">
            {{ work.title }}
          </p>
        </section>

        <section class="item item-2" aria-labelledby="category">
          <h2 id="category" class="h6">
            {{ t('realisations.category') }}
          </h2>
          <p class="lead">
            {{ work.category }}
          </p>
        </section>

        <section class="item item-3" aria-labelledby="services">
          <h2 id="services" class="h6">
            {{ t('realisations.services') }}
          </h2>
          <ul class="lead tags">
            <li v-for="tag in tags" :key="tag.name">
              {{ tag.name }}
            </li>
          </ul>
        </section>

        <section class="item item-4" aria-labelledby="technologies">
          <h2 id="technologies" class="h6">
            {{ t('realisations.technologies') }}
          </h2>
          <ul class="technos">
            <template v-for="tag in tags" :key="tag.name">
              <li v-for="icon in tag.icon" :key="icon">
                <Component :is="icon" />
              </li>
            </template>
          </ul>
        </section>
      </div>

      <div class="container container-no-pt row">
        <div class="col col--1-4">
          <section class="inner" aria-labelledby="about-company">
            <h2 id="about-company" class="h6">
              {{ t('realisations.about') }} {{ work.title }}
            </h2>
            <p property="about" class="lead">
              {{ work.lead }}
            </p>
            <a v-if="work.link" :href="work.link" class="link">
              {{ t('realisations.visit') }}
            </a>
          </section>
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

    <aside v-if="workRelated && workRelated.length" class="container row" aria-labelledby="related">
      <h2 id="related" class="col col--1-5">
        {{ t('realisations.related') }}
      </h2>
      <div class="col card-group">
        <WorkCard v-for="related in workRelated" :key="related.path" :work="related" title-tag="h3" />
      </div>
    </aside>

    <LazyAppNav :prev="workSurround?.[0]" :next="workSurround?.[1]" :aria-label="t('realisations.ariaLabels.nav')" />
  </main>
</template>
