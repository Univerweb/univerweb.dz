<script setup lang="ts">
const { locale, t } = useI18n()
const { baseUrl } = useUrl()

const { data: home } = await useAsyncData(
  () => `home-${locale.value}`,
  () => queryCollection(`home_${locale.value}`)
    .select('title', 'description', 'hero', 'sectionRealisation', 'sectionPrestations', 'sectionBlog')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'home',
  title: () => home.value!.title,
  description: () => home.value!.description,
})

useSchemaOrg([
  defineWebPage({
    about: { '@id': baseUrl('/#identity') },
  }),
])
</script>

<template>
  <main v-if="home">
    <section class="container hero" aria-labelledby="intro-title">
      <div class="columns-1">
        <h1 id="intro-title">
          {{ home.hero.headline }}
        </h1>
        <p class="lead">
          {{ home.hero.lead }}
        </p>
        <div class="hero-actions">
          <NuxtLinkLocale :to="home.hero.cta.path" class="btn">
            {{ home.hero.cta.label }}
            <IconNext />
          </NuxtLinkLocale>
          <NuxtLinkLocale :to="home.hero.link.path" class="btn btn-outline">
            {{ home.hero.link.label }}
            <IconNext />
          </NuxtLinkLocale>
        </div>
      </div>
      <NuxtLinkLocale to="/#realisations" :aria-label="t('ariaLabels.scrollToProjects')" class="btn btn-icon">
        <IconArrow />
      </NuxtLinkLocale>
    </section>

    <LazyRealisationCardGroup
      headline-tag="h2"
      title-tag="h3"
      :limit="6"
      :realisations="home.sectionRealisation"
    />

    <LazyPrestationCardGroup
      headline-tag="h2"
      title-tag="h3"
      :prestations="home.sectionPrestations"
    />

    <LazyArticleCardGroup
      headline-tag="h2"
      title-tag="h3"
      :limit="2"
      :blog="home.sectionBlog"
    />

    <LazyAppRequest is="section" link-class="h1" />
  </main>
</template>
