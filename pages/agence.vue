<script setup lang="ts">
const { t, tm, rt } = useI18n()
const breadcrumb = useBreadcrumb()

useSeoMeta({
  title: () => t('agency.title'),
  description: t('agency.desc'),
  ogTitle: t('agency.title'),
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': t('name'), 'item': breadcrumb },
          { '@type': 'ListItem', 'position': 2, 'name': t('agency.title') },
        ],
      },
    },
  ],
})
</script>

<template>
  <main>
    <div class="container intro">
      <h1>{{ t('agency.headline') }}</h1>
      <p class="lead">
        {{ t('agency.lead') }}
      </p>
    </div>

    <div class="container">
      <div class="intro">
        <h2 class="h1">
          {{ t('agency.method.title') }}
        </h2>
      </div>
      <ol class="details method">
        <li v-for="(value, name) in (tm('agency.method.content') as { name: string })" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">
            {{ rt(value) }}
          </p>
        </li>
      </ol>
    </div>

    <div class="container">
      <div class="intro">
        <h2 class="h1">
          {{ t('agency.choose.title') }}
        </h2>
      </div>
      <div class="details">
        <div v-for="(value, name) in (tm('agency.choose.content') as { name: string })" :key="name" class="item">
          <h3>{{ name }}</h3>
          <p class="lead">
            {{ rt(value) }}
          </p>
        </div>
      </div>
    </div>

    <LazyAppRequest />
  </main>
</template>

<style lang="scss">
.method {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: counterName;

  li::before {
    counter-increment: counterName;
    content: counters(counterName, '-');
    color: $primary;
    font-family: var(--font-medium);

    @include size(56);
  }
}
</style>
