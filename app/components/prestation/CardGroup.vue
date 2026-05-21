<script setup lang="ts">
defineProps<{
  headlineTag?: string
  headline: string
  titleTag?: string
}>()

const { path } = useRoute()
const { locale } = useI18n()

const { data: services } = await useAsyncData(
  `services-${path}`,
  () => queryCollection(`service_${locale.value}`)
    .select('icon', 'title', 'description', 'cta', 'path')
    .all(),
  { watch: [locale] },
)
</script>

<template>
  <section id="prestations" class="container">
    <div class="intro intro-justify">
      <component :is="headlineTag || 'h1'" class="h1">
        {{ headline }}
      </component>
    </div>

    <div class="card-group">
      <PrestationCard v-for="card in services" :key="card.path" :title-tag="titleTag || 'h2'" :card />
    </div>
  </section>
</template>
