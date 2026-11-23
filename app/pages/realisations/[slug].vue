<script setup lang="ts">
const { path, params: { slug } } = useRoute()
const { locale, defaultLocale, t, tm, rt } = useI18n()
const localePath = useLocalePath()
const { baseUrl } = useUrl()

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

useSchemaOrg([
  {
    '@type': 'CreativeWork',
    '@id': `${baseUrl(path)}#work`,
    'name': () => project.value!.title,
    'description': () => project.value!.description,
    'genre': () => t(`category.${project.value!.category}`),
    'keywords': () => project.value!.tags.map(tag => t(`services.${tag}.name`)),
    'datePublished': () => schemaDate(project.value!.createdAt),
    'dateModified': () => schemaDate(project.value!.updatedAt),
    'creator': { '@id': baseUrl('/#identity') },
    'publisher': { '@id': baseUrl('/#identity') },
    'about': {
      '@type': 'Organization',
      'name': () => project.value!.title,
      'description': () => project.value!.about,
      'url': () => project.value!.website,
    },
    'mainEntityOfPage': { '@id': `${baseUrl(path)}#webpage` },
  },
])

const { data: related } = await useAsyncData(
  () => `project-related-${locale.value}-${slug}`,
  async () => {
    const [translated, common] = await Promise.all([
      queryCollection(`project_${locale.value}`)
        .select('path', 'title', 'description', 'createdAt', 'updatedAt')
        .where('path', '<>', path)
        .all(),
      queryCollection('project')
        .select('path', 'category', 'tags')
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
    <article aria-labelledby="project-title">
      <header class="container intro">
        <AppBack path="realisations" :label="t('navigation.menu.realisations')" />
        <h1 id="project-title">
          {{ project.title }}
        </h1>
      </header>

      <AppPicture
        :picture="project"
        type="banner"
        :alt="t('alt.banner', { client: project.title })"
        sizes="342px xs:392px sm:735px md:975px lg:1183px xl:1343px xxl:1400px"
        class="banner-framed"
      />

      <div class="container pair">
        <section aria-labelledby="client">
          <h2 id="client" class="label">
            {{ t('headings.client') }}
          </h2>
          <p>
            {{ project.title }}
          </p>
        </section>

        <section aria-labelledby="category">
          <h2 id="category" class="label">
            {{ t('headings.category') }}
          </h2>
          <p>
            {{ t(`category.${project.category}`) }}
          </p>
        </section>

        <section aria-labelledby="services">
          <h2 id="services" class="label">
            {{ t('headings.completedServices') }}
          </h2>
          <ul class="services">
            <li v-for="tag in project.tags" :key="tag">
              {{ t(`services.${tag}.name`) }}
            </li>
          </ul>
        </section>

        <section aria-labelledby="technologies">
          <h2 id="technologies" class="label">
            {{ t('headings.technologiesUsed') }}
          </h2>
          <ul class="technos">
            <template v-for="tag in project.tags" :key="tag">
              <li v-for="icon in (tm(`services.${tag}.icon`) as string[])" :key="rt(icon)">
                <component :is="rt(icon)" />
              </li>
            </template>
          </ul>
        </section>
      </div>

      <div class="container container-flush-top split">
        <div>
          <section class="inner" aria-labelledby="about-company">
            <h2 id="about-company" class="label">
              {{ t('headings.about', { client: project.title }) }}
            </h2>
            <p>
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
          class="preview"
          :img-attrs="null"
        />
      </div>
    </article>

    <aside v-if="related && related.length" class="container" aria-labelledby="related">
      <div class="intro column-center">
        <h2 id="related">
          {{ t('headings.otherSimilar') }}
        </h2>
      </div>
      <div class="card-group">
        <RealisationCard v-for="card in related" :key="card.translated.path" :card title-tag="h3" />
      </div>
    </aside>

    <LazyAppNav :prev="surround?.[0]" :next="surround?.[1]" :aria-label="t('ariaLabels.projectNavigation')" />

    <LazyAppRequest />
  </main>
</template>
