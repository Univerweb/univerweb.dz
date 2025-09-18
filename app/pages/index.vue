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
  description: () => home.value!.title,
})
</script>

<template>
  <main v-if="home">
    <section class="container hero">
      <div class="intro intro-justify">
        <h1>{{ home.hero.headline }}</h1>
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
      :headline="home.sectionRealisation.headline"
      title-tag="h3"
      :limit="6"
      :cta="home.sectionRealisation.cta"
    />

    <LazyPrestationCardGroup
      headline-tag="h2"
      :headline="home.sectionPrestations.headline"
      title-tag="h3"
    />

    <LazyArticleCardGroup
      headline-tag="h2"
      :headline="home.sectionBlog.headline"
      title-tag="h3"
      :limit="2"
      :cta="home.sectionBlog.cta"
    />

    <LazyAppRequest is="section" link-class="h1" />
  </main>
</template>
