<template>
  <main v-if="prestations">
    <div class="container intro">
      <h1>{{ prestations.headline }}</h1>
      <p class="lead">{{ prestations.lead }}</p>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ prestations.webDesign.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ prestations.webDesign.content }}</p>
        <ul class="item tags">
          <li v-for="item in prestations.webDesign.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ prestations.dev.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ prestations.dev.content }}</p>
        <ul class="item tags">
          <li v-for="item in prestations.dev.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ prestations.support.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ prestations.support.content }}</p>
        <ul class="item tags">
          <li v-for="item in prestations.support.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <AppRequest />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()

const prestationsPath = `${locale.value}/prestations`
const globalPath = `${locale.value}/global`
const baseURL = config.public.baseURL

const { data: prestations } = await useAsyncData('prestations', () =>
  queryContent(prestationsPath).only(['title', 'desc', 'headline', 'lead', 'webDesign', 'dev', 'support']).findOne()
)
const { data: global } = await useAsyncData('global', () => queryContent(globalPath).only(['name']).findOne())

const title = prestations.value!.title
const desc = prestations.value!.desc
const name = global.value!.name
const item = locale.value !== 'fr' ? `${baseURL}/${locale.value}` : `${baseURL}/`

useHead({
  title,

  meta: [
    { name: 'description', content: desc },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc }
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: name, item: item },
          { '@type': 'ListItem', position: 2, name: title }
        ]
      }
    }
  ]
})
</script>

<style lang="scss" scoped>
.prestations {
  .tags {
    color: var(--textSecondary);
    font-family: var(--fontMedium);
    transition: color $transition;
    margin: 0;
  }

  @media (min-width: $md) {
    &:nth-child(even) .intro * {
      grid-column: 7 / 12;
    }

    .details {
      align-items: center;
    }

    .item:nth-child(even) {
      grid-column: 7 / 10;
    }

    &:nth-child(even) .item {
      &:nth-child(odd) {
        grid-column: 7 / 12;
      }
      &:nth-child(even) {
        grid-column: 3 / 6;
        order: -1;
      }
    }
  }
}
</style>
