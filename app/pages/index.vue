<script setup lang="ts">
useSeo({ page: 'home' })
</script>

<template>
  <main>
    <AppWelcome />
    <LazyRealisationCardGroup headline-tag="h2" title-tag="h3" :limit="6" more />
    <LazyPrestationCardGroup headline-tag="h2" title-tag="h3" />
    <LazyArticleCardGroup headline-tag="h2" title-tag="h3" :limit="2" more />
    <LazyAppRequest is="section" link-class="h1" />
  </main>
</template>
