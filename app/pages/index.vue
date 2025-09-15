<script setup lang="ts">
const { locale } = useI18n()

const { data: home } = await useAsyncData(
  () => `home-${locale.value}`,
  () => queryCollection(`home_${locale.value}`)
    .select('title', 'description', 'hero')
    .first(),
  { watch: [locale] },
)

useSeo({ page: 'home' })
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

    <LazyRealisationCardGroup headline-tag="h2" title-tag="h3" :limit="6" more />
    <LazyPrestationCardGroup headline-tag="h2" title-tag="h3" />
    <LazyArticleCardGroup headline-tag="h2" title-tag="h3" :limit="2" more />
    <LazyAppRequest is="section" link-class="h1" />
  </main>
</template>
