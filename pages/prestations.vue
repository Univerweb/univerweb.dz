<template>
  <main v-if="presta">
    <div class="container intro">
      <h1>{{ presta.headline }}</h1>
      <p class="lead">{{ presta.lead }}</p>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ presta.webDesign.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ presta.webDesign.content }}</p>
        <ul class="item tags">
          <li v-for="item in presta.webDesign.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ presta.dev.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ presta.dev.content }}</p>
        <ul class="item tags">
          <li v-for="item in presta.dev.tags" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="container prestations">
      <div class="intro">
        <h2>{{ presta.support.title }}</h2>
      </div>
      <div class="details">
        <p class="item lead">{{ presta.support.content }}</p>
        <ul class="item tags">
          <li v-for="item in presta.support.tags" :key="item">{{ item }}</li>
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

useHead({
  title: presta.value!.title,

  meta: [
    { name: 'description', content: presta.value!.desc },
    { property: 'og:title', content: presta.value!.title },
    { property: 'og:description', content: presta.value!.desc }
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
          { '@type': 'ListItem', position: 2, name: presta.value!.title }
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
