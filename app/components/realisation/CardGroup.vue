<script setup lang="ts">
interface Props {
  limit?: number
  headlineTag?: string
  headline: string
  cta?: {
    label: string
    path: string
  }
  titleTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  limit: 0,
  headlineTag: 'h1',
  titleTag: 'h2',
})

const { locale, t } = useI18n()
const { baseUrl } = useUrl()
const localePath = useLocalePath()

const { data: realisations } = await useAsyncData(
  () => `realisations-${locale.value}`,
  async () => {
    const [translated, common] = await Promise.all([
      queryCollection(`realisation_${locale.value}`)
        .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt', 'about')
        .order('stem', 'DESC')
        .limit(props.limit)
        .all(),
      queryCollection('realisation')
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
    <meta property="name" :content="t('navigation.menu[0].label')">
    <link property="url" :href="baseUrl(localePath('realisations'))">

    <div class="intro intro-justify">
      <Component :is="headlineTag" class="h1">
        {{ headline }}
      </Component>
    </div>

    <div class="card-group">
      <RealisationCard v-for="card in realisations" :key="card.translated.path" :card :title-tag="titleTag" />
    </div>

    <LazyAppMore v-if="cta" :path="cta.path" :label="cta.label" class="intro-justify" />
  </section>
</template>
