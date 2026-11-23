<script setup lang="ts">
const props = defineProps<{
  limit?: number
  headlineTag?: string
  titleTag?: string
  realisations: {
    headline: string
    lead: string
    cta?: {
      label: string
      path: string
    }
  }
}>()

const { path } = useRoute()
const { locale } = useI18n()

const { data: projects } = await useAsyncData(
  `projects-${path}`,
  async () => {
    const [translated, common] = await Promise.all([
      queryCollection(`project_${locale.value}`)
        .select('path', 'stem', 'title', 'description', 'createdAt', 'updatedAt')
        .order('stem', 'DESC')
        .limit(props.limit || 0)
        .all(),
      queryCollection('project')
        .select('path', 'category', 'tags')
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
  <section id="realisations" class="container" aria-labelledby="realisations-title">
    <div class="intro intro-justify">
      <component :is="headlineTag || 'h1'" id="realisations-title" class="h1">
        {{ realisations.headline }}
      </component>
      <p class="lead">
        {{ realisations.lead }}
      </p>
    </div>

    <div class="card-group">
      <RealisationCard v-for="card in projects" :key="card.translated.path" :card :title-tag="titleTag || 'h2'" />
    </div>

    <LazyAppMore v-if="realisations.cta" :path="realisations.cta.path" :label="realisations.cta.label" class="intro-justify" />
  </section>
</template>
