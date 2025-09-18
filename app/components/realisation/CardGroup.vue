<script setup lang="ts">
const props = defineProps<{
  limit?: number
  headlineTag?: string
  headline: string
  titleTag?: string
  cta?: {
    label: string
    path: string
  }
}>()

const { locale, t } = useI18n()
const { baseUrl } = useUrl()
const localePath = useLocalePath()

const { data: realisationsItem } = await useAsyncData(
  () => `realisations-item-${locale.value}`,
  async () => {
    const [translated, common] = await Promise.all([
      queryCollection(`realisations_item_${locale.value}`)
        .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt', 'about')
        .order('stem', 'DESC')
        .limit(props.limit || 0)
        .all(),
      queryCollection('realisations_item')
        .select('path', 'category')
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
</script>

<template>
  <section id="realisations" class="container" vocab="https://schema.org/" typeof="CollectionPage">
    <meta property="name" :content="t('navigation.menu.realisations')">
    <link property="url" :href="baseUrl(localePath('realisations'))">

    <div class="intro intro-justify">
      <Component :is="headlineTag || 'h1'" class="h1">
        {{ headline }}
      </Component>
    </div>

    <div class="card-group">
      <RealisationCard v-for="card in realisationsItem" :key="card.translated.path" :card :title-tag="titleTag || 'h2'" />
    </div>

    <LazyAppMore v-if="cta" :path="cta.path" :label="cta.label" class="intro-justify" />
  </section>
</template>
