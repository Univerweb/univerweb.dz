<template>
  <main v-if="agency">
    <div class="container intro">
      <h1>{{ agency.headline }}</h1>
      <p class="lead">{{ agency.lead }}</p>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ agency.method.title }}</h2>
      </div>
      <ol class="details">
        <li v-for="(value, name) in agency.method.content" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">{{ value }}</p>
        </li>
      </ol>
    </div>
    <div class="container">
      <div class="intro">
        <h2 class="h1">{{ agency.choose.title }}</h2>
      </div>
      <div class="details">
        <div v-for="(value, name) in agency.choose.content" :key="name" class="item">
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

useHead({
  title: agency.value!.title,

  meta: [
    { name: 'description', content: agency.value!.desc },
    { property: 'og:title', content: agency.value!.title },
    { property: 'og:description', content: agency.value!.desc }
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: global.value!.name,
            item: locale.value !== 'fr' ? `${config.public.baseURL}/${locale.value}` : `${config.public.baseURL}/`
          },
          { '@type': 'ListItem', position: 2, name: agency.value!.title }
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
