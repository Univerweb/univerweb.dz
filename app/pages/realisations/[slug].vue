<script setup lang="ts">
const { path } = useRoute()
const { locale, defaultLocale, t } = useI18n()
const localePath = useLocalePath()
const { localeBaseUrl, baseUrl } = useUrl()

const { data: realisation } = await useAsyncData(`realisation-${path}`, () => {
  return queryCollection(`realisation_${locale.value}`)
    .select('path', 'seo', 'title', 'description', 'createdAt', 'updatedAt', 'category', 'tags', 'link')
    .path(computed(() => localePath(path)).value)
    .first()
}, { watch: [locale] })

if (!realisation.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

useSeo({
  pageSlug: 'realisations',
  title: () => `${realisation.value!.title}${defaultLocale ? ' :' : ':'} ${realisation.value!.category} | ${t('navigation.menu[0].label')}`,
  description: () => realisation.value!.seo.description!,
  ogTitle: () => `${realisation.value!.title}${defaultLocale ? ' :' : ':'} ${realisation.value!.category}`,
  ogImageAlt: () => t('realisations.alt.banner', { client: realisation.value!.title }),
})

const { data: tags } = await useAsyncData(`tags-${path}`, () => {
  return queryCollection(`tag_${locale.value}`)
    .select('name', 'icon')
    .where('uid', 'IN', realisation.value!.tags)
    .all()
}, { watch: [locale] })

const { data: related } = await useAsyncData(`realisation-related-${path}`, () => {
  return queryCollection(`realisation_${locale.value}`)
    .select('path', 'stem', 'seo', 'title', 'description', 'createdAt', 'updatedAt', 'category', 'tags')
    .andWhere(query => query
      .where('path', '<>', path)
      .where('category', '=', realisation.value!.category))
    .order('stem', 'DESC')
    .all()
}, { watch: [locale, realisation] })

const { data: surround } = await useAsyncData(`realisation-surround-${path}`, () => {
  return queryCollectionItemSurroundings(`realisation_${locale.value}`, path)
}, { watch: [locale] })
</script>

<template>
  <main v-if="realisation" class="work">
    <article vocab="https://schema.org/" typeof="CreativeWork" aria-labelledby="name">
      <header class="container intro">
        <meta property="description" :content="realisation.seo.description">
        <meta property="dateCreated datePublished" :content="new Date(realisation.createdAt).toISOString()">
        <meta property="dateModified" :content="new Date(realisation.updatedAt).toISOString()">
        <span property="author publisher" typeof="Organization">
          <meta property="name" :content="t('site.name')">
          <link property="url" :href="localeBaseUrl">
        </span>
        <span property="isPartOf" typeof="CollectionPage">
          <meta property="name" :content="t('navigation.menu[0].label')">
          <link property="url" :href="baseUrl(localePath('realisations'))">
        </span>
        <span property="mainEntityOfPage" typeof="WebPage">
          <link property="url" :href="baseUrl(path)">
        </span>

        <AppBack path="realisations" :label="t('navigation.menu[0].label')" />
        <h1 id="name" property="name">
          {{ realisation.title }}
        </h1>
      </header>

      <AppPicture
        :picture="realisation"
        type="banner"
        :alt="t('realisations.alt.banner', { client: realisation.title })"
        sizes="342px xs:392px sm:735px md:975px lg:1183px xl:1280px"
        class="banner"
      />

      <div class="container row items-2">
        <section class="item item-1" aria-labelledby="client">
          <h2 id="client" class="h6">
            {{ t('realisations.client') }}
          </h2>
          <p class="lead">
            {{ realisation.title }}
          </p>
        </section>

        <section class="item item-2" aria-labelledby="category">
          <h2 id="category" class="h6">
            {{ t('realisations.category') }}
          </h2>
          <p class="lead">
            {{ realisation.category }}
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
              {{ t('realisations.about') }} {{ realisation.title }}
            </h2>
            <p property="about" class="lead">
              {{ realisation.description }}
            </p>
            <a v-if="realisation.link" :href="realisation.link" class="link">
              {{ t('realisations.visit') }}
            </a>
          </section>
        </div>
        <AppPicture
          :picture="realisation"
          type="preview"
          :alt="t('realisations.alt.preview', { client: realisation.title })"
          sizes="304px xs:354px sm:697px md:921px lg:565px xl:730px"
          class="col col--5-13 preview"
          :img-attrs="null"
        />
      </div>
    </article>

    <aside v-if="related && related.length" class="container row" aria-labelledby="related">
      <h2 id="related" class="col col--1-5">
        {{ t('realisations.related') }}
      </h2>
      <div class="col card-group">
        <WorkCard v-for="card in related" :key="card.path" :card title-tag="h3" />
      </div>
    </aside>

    <LazyAppNav :prev="surround?.[0]" :next="surround?.[1]" :aria-label="t('realisations.ariaLabels.nav')" />
  </main>
</template>
