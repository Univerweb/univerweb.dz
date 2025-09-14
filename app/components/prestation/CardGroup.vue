<script setup lang="ts">
interface Props {
  headlineTag?: string
  titleTag?: string
}

withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
  titleTag: 'h2',
})

const { locale, t } = useI18n()

const { data: prestations } = await useAsyncData(
  () => `prestations-${locale.value}`,
  () => queryCollection(`prestation_${locale.value}`)
    .select('path', 'title', 'description', 'cta')
    .all(),
  { watch: [locale] },
)
</script>

<template>
  <section id="prestations" class="container">
    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('prestations.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <PrestationCard v-for="card in prestations" :key="card.path" :card :title-tag="titleTag" />
    </div>
  </section>
</template>
