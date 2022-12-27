<template>
  <main>
    <div class="container intro">
      <h1>{{ headline }}</h1>
      <p class="lead">{{ lead }}</p>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ method.title }}</h2>
      </div>
      <ol class="details">
        <li v-for="(value, name) in method.content" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">{{ value }}</p>
        </li>
      </ol>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ choose.title }}</h2>
      </div>
      <div class="details">
        <div v-for="(value, name) in choose.content" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">{{ value }}</p>
        </div>
      </div>
    </div>
    <AppRequest />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()

const { data: agency } = await useAsyncData('agencyPage', () =>
  queryContent(locale.value, 'agence').only(['title', 'desc', 'headline', 'lead', 'method', 'choose']).findOne()
)
const { data: global } = await useAsyncData('agencyGlobal', () => queryContent(locale.value, 'global').only(['name']).findOne())

const title = agency.value!.title
const desc = agency.value!.desc
const headline = agency.value!.headline
const lead = agency.value!.lead
const method = agency.value!.method
const choose = agency.value!.choose
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
ol {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: counterName;
  li:before {
    counter-increment: counterName;
    content: counters(counterName, '-');
    color: $primary;
    font-family: var(--fontMedium);
    @include size(56);
  }
}
</style>
