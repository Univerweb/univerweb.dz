<script setup lang="ts">
interface Agence {
  value: string
  name: string
}

const { t, tm, rt } = useI18n()

useSeoPage('agence')
</script>

<template>
  <main>
    <div class="container intro">
      <h1>{{ t('agence.headline') }}</h1>
      <p class="lead">
        {{ t('agence.lead') }}
      </p>
    </div>

    <div class="container row">
      <h2 class="col col--1-5">
        {{ t('agence.method.title') }}
      </h2>
      <ol class="col row items-5">
        <li v-for="(value, name, index) in (tm('agence.method.content') as Agence)" :key="index" :class="`big-count item item-${index + 1}`">
          <h3>{{ name }}</h3>
          <p class="lead">
            {{ rt(value) }}
          </p>
        </li>
      </ol>
    </div>

    <div class="container row">
      <h2 class="col col--1-5">
        {{ t('agence.choose.title') }}
      </h2>
      <div class="col row items-2">
        <div v-for="(value, name, index) in (tm('agence.choose.content') as Agence)" :key="index" :class="`item item-${index + 1}`">
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
