<template>
  <main>
    <div class="container intro">
      <h1>{{ headline }}</h1>
      <p class="lead">{{ lead }}</p>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ webDesign.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ webDesign.content }}</p>
        <ul class="item tags">
          <li v-for="item in webDesign.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ dev.content }}</p>
        <ul class="item tags">
          <li v-for="item in dev.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ support.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ support.content }}</p>
        <ul class="item tags">
          <li v-for="item in support.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <AppRequest />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()

const { data: presta } = await useAsyncData('prestaPage', () =>
  queryContent(locale.value, 'prestations').only(['title', 'desc', 'headline', 'lead', 'webDesign', 'dev', 'support']).findOne()
)
const { data: global } = await useAsyncData('prestaGlobal', () => queryContent(locale.value, 'global').only(['name']).findOne())

const title = presta.value!.title
const desc = presta.value!.desc
const headline = presta.value!.headline
const lead = presta.value!.lead
const webDesign = presta.value!.webDesign
const dev = presta.value!.dev
const support = presta.value!.support
const name = global.value!.name
const item = locale.value !== 'fr' ? `${config.public.baseURL}/${locale.value}` : `${config.public.baseURL}/`

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
