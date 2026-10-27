<script setup lang="ts">
const { locale } = useI18n()

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
</script>

<template>
  <main v-if="home">
    <section class="container hero" aria-labelledby="intro-title">
      <div class="intro intro-justify">
        <h1 id="intro-title">
          {{ home.hero.headline }}
        </h1>
        <p class="lead">
          {{ home.hero.lead }}
        </p>
      </div>
      <NuxtLinkLocale :to="home.hero.cta.path" :aria-label="home.hero.cta.label" class="btn">
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
