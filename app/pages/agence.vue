<script setup lang="ts">
const { t, tm, rt } = useI18n()

const method: { title: string } = tm('agence.method.content')
const choose: { title: string } = tm('agence.choose.content')

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
        <li v-for="(description, title, index) in method" :key="index" :class="`big-count item item-${index + 1}`">
          <h3>{{ title }}</h3>
          <p class="lead">
            {{ rt(description) }}
          </p>
        </li>
      </ol>
    </div>

    <div class="container row">
      <h2 class="col col--1-5">
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
    </div>

    <LazyAppRequest />
  </main>
</template>
