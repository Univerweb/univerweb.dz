<script setup lang="ts">
defineProps<{
  headlineTag?: string
  headline: string
  titleTag?: string
}>()

const { locale } = useI18n()

const { data: prestationsItem } = await useAsyncData(
  () => `prestations-item-${locale.value}`,
  () => queryCollection(`prestations_item_${locale.value}`)
    .select('path', 'title', 'description', 'cta')
    .all(),
  { watch: [locale] },
)
</script>

<template>
  <section id="prestations" class="container">
    <div class="intro intro-justify">
      <Component :is="headlineTag || 'h1'" class="h1">
        {{ headline }}
      </Component>
    </div>

    <div class="card-group">
      <PrestationCard v-for="card in prestationsItem" :key="card.path" :card :title-tag="titleTag || 'h2'" />
    </div>
  </section>
</template>
