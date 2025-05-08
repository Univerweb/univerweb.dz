<script setup lang="ts">
interface Props {
  headlineTag?: string
  titleTag?: string
}

withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
  titleTag: 'h2',
})

const { path } = useRoute()
const { locale, t } = useI18n()

const { data: prestations } = await useAsyncData(`prestations${path}`, () => {
  return queryCollection(`presta_${locale.value}`)
    .select('path', 'title', 'cta', 'lead')
    .all()
}, { watch: [locale] })
</script>

<template>
  <section id="prestations" class="container">
    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ t('prestations.headline') }}
      </Component>
    </div>

    <div class="card-group">
      <PrestaCard v-for="presta in prestations" :key="presta.path" :presta :title-tag="titleTag" />
    </div>
  </section>
</template>
