<script setup lang="ts">
const { t, tm, rt } = useI18n()
const seo = useSeo()

useHead({
  title: seo.presta.title,

  meta: [
    { name: 'description', content: seo.presta.desc },
    { property: 'og:title', content: seo.presta.title },
    { property: 'og:description', content: seo.presta.desc },
  ],

  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': seo.name, 'item': seo.breadcrumbItemOne },
          { '@type': 'ListItem', 'position': 2, 'name': seo.presta.title },
        ],
      },
    },
  ],
})
</script>

<template>
  <main>
    <div class="container intro">
      <h1>{{ t('presta.headline') }}</h1>
      <p class="lead">
        {{ t('presta.lead') }}
      </p>
    </div>

    <div class="container prestations">
      <div class="intro">
        <h2>{{ t('presta.webDesign.title') }}</h2>
      </div>
      <div class="details">
        <p class="item lead">
          {{ t('presta.webDesign.content') }}
        </p>
        <ul class="item tags">
          <li v-for="tag in (tm('presta.webDesign.tags') as string[])" :key="rt(tag)">
            {{ rt(tag) }}
          </li>
        </ul>
      </div>
    </div>

    <div class="container prestations">
      <div class="intro">
        <h2>{{ t('presta.dev.title') }}</h2>
      </div>
      <div class="details">
        <p class="item lead">
          {{ t('presta.dev.content') }}
        </p>
        <ul class="item tags">
          <li v-for="tag in (tm('presta.dev.tags') as string[])" :key="rt(tag)">
            {{ rt(tag) }}
          </li>
        </ul>
      </div>
    </div>

    <div class="container prestations">
      <div class="intro">
        <h2>{{ t('presta.support.title') }}</h2>
      </div>
      <div class="details">
        <p class="item lead">
          {{ t('presta.support.content') }}
        </p>
        <ul class="item tags">
          <li v-for="tag in (tm('presta.support.tags') as string[])" :key="rt(tag)">
            {{ rt(tag) }}
          </li>
        </ul>
      </div>
    </div>

    <LazyAppRequest />
  </main>
</template>

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
