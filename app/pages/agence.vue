<script setup lang="ts">
const { locale } = useI18n()
const { baseUrl } = useUrl()
const { withYears } = useYears()

const { data: agence } = await useAsyncData(
  () => `agence-${locale.value}`,
  () => queryCollection(`agence_${locale.value}`)
    .select('title', 'description', 'headline', 'lead', 'method', 'choose')
    .first(),
  { watch: [locale] },
)

useSeo({
  page: 'agence',
  title: () => agence.value!.title,
  description: () => agence.value!.description,
})

useSchemaOrg([
  defineWebPage({
    '@type': 'AboutPage',
    'about': { '@id': baseUrl('/#identity') },
  }),
])
</script>

<template>
  <main v-if="agence">
    <section class="container intro" aria-labelledby="intro-title">
      <h1 id="intro-title">
        {{ agence.headline }}
      </h1>
      <p class="lead">
        {{ agence.lead }}
      </p>
    </section>

    <section class="container" aria-labelledby="method-title">
      <div class="intro">
        <h2 id="method-title">
          {{ agence.method.headline }}
        </h2>
      </div>
      <ol class="steps">
        <li v-for="(method, index) in agence.method.list" :key="index" class="big-count">
          <h3>{{ method.title }}</h3>
          <p>
            {{ method.description }}
          </p>
        </li>
      </ol>
    </section>

    <section class="container" aria-labelledby="choose-title">
      <div class="intro">
        <h2 id="choose-title">
          {{ agence.choose.headline }}
        </h2>
      </div>
      <div class="pair">
        <div v-for="(choose, index) in agence.choose.list" :key="index">
          <component :is="choose.icon" fill="var(--accent-color)" />
          <h3>{{ choose.title }}</h3>
          <p>
            {{ withYears(choose.description) }}
          </p>
        </div>
      </div>
    </section>

    <LazyAppRequest />
  </main>
</template>
