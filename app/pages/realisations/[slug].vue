<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, defaultLocale, t, tm, rt } = useI18n()
const localePath = useLocalePath()
const { localeBaseUrl, baseUrl } = useUrl()

const { data: realisation } = await useAsyncData(
  () => `realisation-${locale.value}-${slug}`,
  async () => {
    const [translated, common] = await Promise.all([
      queryCollection(`realisations_item_${locale.value}`)
        .select('path', 'title', 'description', 'createdAt', 'updatedAt', 'about')
        .path(localePath(path))
        .first(),
      queryCollection('realisations_item')
        .select('path', 'category', 'tags', 'website')
        .path(localePath(path, 'fr'))
        .first(),
    ])

    if (!translated) {
      return null
    }

    return { ...common ?? {}, ...translated }
  },
  { watch: [locale] },
)

if (!realisation.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}

const { data: related } = await useAsyncData(
  () => `realisation-related-${locale.value}-${slug}`,
  async () => {
    const [translated, common] = await Promise.all([
      queryCollection(`realisations_item_${locale.value}`)
        .select('path', 'title', 'description', 'createdAt', 'updatedAt', 'about')
        .where('path', '<>', path)
        .all(),
      queryCollection('realisations_item')
        .select('path', 'category')
        .where('category', '=', realisation.value!.category)
        .all(),
    ])

    const commonMap = new Map(common.map(item => [item.path.split('/').pop(), item]))

    const filteredTranslated = translated.filter((translatedData) => {
      const slug = translatedData.path.split('/').pop()
      return commonMap.has(slug)
    })

    return filteredTranslated.map((translatedData) => {
      const slug = translatedData.path.split('/').pop()
      const commonData = commonMap.get(slug)!
      return { translated: translatedData, common: commonData }
    })
  },
  { watch: [locale] },
)

const { data: surround } = await useAsyncData(
  () => `realisation-surround-${locale.value}-${slug}`,
  () => queryCollectionItemSurroundings(`realisations_item_${locale.value}`, path),
  { watch: [locale] },
)

useSeo({
  pageSlug: 'realisations',
  title: () => `${realisation.value!.title}${defaultLocale ? ' :' : ':'} ${realisation.value!.category} | ${t('navigation.menu.realisations')}`,
  description: () => realisation.value!.description,
  ogTitle: () => `${realisation.value!.title}${defaultLocale ? ' :' : ':'} ${realisation.value!.category}`,
  ogImageAlt: () => t('realisations.alt.banner', { client: realisation.value!.title }),
})
</script>

<template>
  <main v-if="realisation" class="realisations">
    <article vocab="https://schema.org/" typeof="CreativeWork" aria-labelledby="name">
      <header class="container intro">
        <meta property="description" :content="realisation.description">
        <meta property="dateCreated datePublished" :content="new Date(realisation.createdAt).toISOString()">
        <meta property="dateModified" :content="new Date(realisation.updatedAt).toISOString()">
        <span property="author publisher" typeof="Organization">
          <meta property="name" :content="t('site.name')">
          <link property="url" :href="localeBaseUrl">
        </span>
        <span property="isPartOf" typeof="CollectionPage">
          <meta property="name" :content="t('navigation.menu.realisations')">
          <link property="url" :href="baseUrl(localePath('realisations'))">
        </span>
        <span property="mainEntityOfPage" typeof="WebPage">
          <link property="url" :href="baseUrl(path)">
        </span>

        <AppBack path="realisations" :label="t('navigation.menu.realisations')" />
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
            {{ t('realisations.category.label') }}
          </h2>
          <p class="lead">
            {{ t(`realisations.category.value.${realisation.category}`) }}
          </p>
        </section>

        <section class="item item-3" aria-labelledby="services">
          <h2 id="services" class="h6">
            {{ t('realisations.services.label') }}
          </h2>
          <ul class="lead tags">
            <li v-for="tag in realisation.tags" :key="tag">
              {{ t(`realisations.services.value.${tag}.name`) }}
            </li>
          </ul>
        </section>

        <section class="item item-4" aria-labelledby="technologies">
          <h2 id="technologies" class="h6">
            {{ t('realisations.technologies') }}
          </h2>
          <ul class="technos">
            <template v-for="tag in realisation.tags" :key="tag">
              <li v-for="icon in (tm(`realisations.services.value.${tag}.icon`) as string[])" :key="rt(icon)">
                <Component :is="rt(icon)" />
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
              {{ realisation.about }}
            </p>
            <a v-if="realisation.website" :href="realisation.website" class="link">
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
        <RealisationCard v-for="card in related" :key="card.translated.path" :card title-tag="h3" />
      </div>
    </aside>

    <LazyAppNav :prev="surround?.[0]" :next="surround?.[1]" :aria-label="t('realisations.ariaLabels.nav')" />
  </main>
</template>
