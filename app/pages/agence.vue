<script setup lang="ts">
const { locale } = useI18n()

const { data: agence } = await useAsyncData(
  () => `agence-${locale.value}`,
  () => queryCollection(`agence_${locale.value}`)
    .select('title', 'description', 'headline', 'lead', 'method', 'choose')
    .first(),
  { watch: [locale] },
)

useSeo({ page: 'agence' })
</script>

<template>
  <main v-if="agence">
    <section class="container intro" aria-labelledby="headline">
      <h1 id="headline">
        {{ agence.headline }}
      </h1>
      <p class="lead">
        {{ agence.lead }}
      </p>
    </section>

    <section class="container row" aria-labelledby="method">
      <h2 id="method" class="col col--1-5">
        {{ agence.method.title }}
      </h2>
      <ol class="col row items-5">
        <li v-for="(method, index) in agence.method.list" :key="index" :class="`big-count item item-${index + 1}`">
          <h3>{{ method.title }}</h3>
          <p class="lead">
            {{ method.description }}
          </p>
        </li>
      </ol>
    </section>

    <section class="container row" aria-labelledby="choose">
      <h2 id="choose" class="col col--1-5">
        {{ agence.choose.title }}
      </h2>
      <div class="col row items-2">
        <div v-for="(choose, index) in agence.choose.list" :key="index" :class="`item item-${index + 1}`">
          <h3>{{ choose.title }}</h3>
          <p class="lead">
            {{ choose.description }}
          </p>
        </div>
      </div>
    </section>

    <LazyAppRequest />
  </main>
</template>
