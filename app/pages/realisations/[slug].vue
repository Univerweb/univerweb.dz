<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, defaultLocale, t, tm, rt } = useI18n()
const localePath = useLocalePath()
const { localeBaseUrl, baseUrl } = useUrl()

const { data: project } = await useAsyncData(
  () => `project-${locale.value}-${slug}`,
  async () => {
    const [translated, common] = await Promise.all([
      queryCollection(`project_${locale.value}`)
        .select('path', 'title', 'description', 'createdAt', 'updatedAt', 'about')
        .path(localePath(path))
        .first(),
      queryCollection('project')
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

if (!project.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
    fatal: true,
  })
}

useSeo({
  page: { name: 'realisations', slug: true },
  title: () => `${project.value!.title}${defaultLocale ? ' :' : ':'} ${t(`category.${project.value!.category}`)} | ${t('navigation.menu.realisations')}`,
  description: () => project.value!.description,
  ogTitle: () => `${project.value!.title}${defaultLocale ? ' :' : ':'} ${t(`category.${project.value!.category}`)}`,
  breadcrumbTitle: () => project.value!.title,
  ogImageAlt: () => t('alt.banner', { client: project.value!.title }),
})

const { data: related } = await useAsyncData(
  () => `project-related-${locale.value}-${slug}`,
  async () => {
    const [translated, common] = await Promise.all([
      queryCollection(`project_${locale.value}`)
        .select('path', 'title', 'description', 'createdAt', 'updatedAt', 'about')
        .where('path', '<>', path)
        .all(),
      queryCollection('project')
        .select('path', 'category')
        .where('category', '=', project.value!.category)
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
  () => `project-surround-${locale.value}-${slug}`,
  () => queryCollectionItemSurroundings(`project_${locale.value}`, path),
  { watch: [locale] },
)
</script>

<template>
  <main v-if="project" class="realisations">
    <article vocab="https://schema.org/" typeof="CreativeWork" aria-labelledby="name">
      <header class="container intro">
        <meta property="description" :content="project.description">
        <meta property="dateCreated datePublished" :content="new Date(project.createdAt).toISOString()">
        <meta property="dateModified" :content="new Date(project.updatedAt).toISOString()">
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
          {{ project.title }}
        </h1>
      </header>

      <AppPicture
        :picture="project"
        type="banner"
        :alt="t('alt.banner', { client: project.title })"
        sizes="342px xs:392px sm:735px md:975px lg:1183px xl:1280px"
        class="banner"
      />

      <div class="container row items-2">
        <section class="item item-1" aria-labelledby="client">
          <h2 id="client" class="h6">
            {{ t('headings.client') }}
          </h2>
          <p class="lead">
            {{ project.title }}
          </p>
        </section>

        <section class="item item-2" aria-labelledby="category">
          <h2 id="category" class="h6">
            {{ t('headings.category') }}
          </h2>
          <p class="lead">
            {{ t(`category.${project.category}`) }}
          </p>
        </section>

        <section class="item item-3" aria-labelledby="services">
          <h2 id="services" class="h6">
            {{ t('headings.completedServices') }}
          </h2>
          <ul class="lead tags">
            <li v-for="tag in project.tags" :key="tag">
              {{ t(`services.${tag}.name`) }}
            </li>
          </ul>
        </section>

        <section class="item item-4" aria-labelledby="technologies">
          <h2 id="technologies" class="h6">
            {{ t('headings.technologiesUsed') }}
          </h2>
          <ul class="technos">
            <template v-for="tag in project.tags" :key="tag">
              <li v-for="icon in (tm(`services.${tag}.icon`) as string[])" :key="rt(icon)">
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
              {{ t('headings.about', { client: project.title }) }}
            </h2>
            <p property="about" class="lead">
              {{ project.about }}
            </p>
            <a v-if="project.website" :href="project.website" class="link">
              {{ t('actions.visit') }}
            </a>
          </section>
        </div>
        <AppPicture
          :picture="project"
          type="preview"
          :alt="t('alt.preview', { client: project.title })"
          sizes="304px xs:354px sm:697px md:921px lg:565px xl:730px"
          class="col col--5-13 preview"
          :img-attrs="null"
        />
      </div>
    </article>

    <aside v-if="related && related.length" class="container row" aria-labelledby="related">
      <h2 id="related" class="col col--1-5">
        {{ t('headings.otherSimilar') }}
      </h2>
      <div class="col card-group">
        <RealisationCard v-for="card in related" :key="card.translated.path" :card title-tag="h3" />
      </div>
    </aside>

    <LazyAppNav :prev="surround?.[0]" :next="surround?.[1]" :aria-label="t('ariaLabels.projectNavigation')" />
  </main>
</template>
