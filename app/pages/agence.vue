<script setup lang="ts">
const { t, tm, rt } = useI18n()

const method: Record<string, string> = tm('agence.method.content')
const choose: Record<string, string> = tm('agence.choose.content')

useSeoPage('agence')
</script>

<template>
  <main>
    <section class="container intro" aria-labelledby="headline">
      <h1 id="headline">
        {{ t('agence.headline') }}
      </h1>
      <p class="lead">
        {{ t('agence.lead') }}
      </p>
    </section>

    <section class="container row" aria-labelledby="method">
      <h2 id="method" class="col col--1-5">
        {{ t('agence.method.title') }}
      </h2>
      <ol class="col row items-5">
        <li v-for="(description, title, index) in method" :key="index" :class="`big-count item item-${index + 1}`">
          <h3>{{ title }}</h3>
          <p class="lead">
            {{ rt(description) }}
          </p>
        </li>
      </ol>
    </section>

    <section class="container row" aria-labelledby="choose">
      <h2 id="choose" class="col col--1-5">
        {{ t('agence.choose.title') }}
      </h2>
      <div class="col row items-2">
        <div v-for="(description, title, index) in choose" :key="index" :class="`item item-${index + 1}`">
          <h3>{{ title }}</h3>
          <p class="lead">
            {{ rt(description) }}
          </p>
        </div>
      </div>
    </section>

    <LazyAppRequest />
  </main>
</template>
