<script setup lang="ts">
interface Agence {
  value: string
  name: string
}

const { t, tm, rt } = useI18n()

useHead({ script: [useBreadcrumb('agency')] })
useSeoMeta(useMeta('agency'))
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
      <div class="row">
        <h2 class="col col--1-5">
          {{ t('agency.method.title') }}
        </h2>
        <ol class="col row">
          <li v-for="(value, name, index) in (tm('agency.method.content') as Agence)" :key="index" :class="`big-count col ${['col--1-6 col--1-3', 'col--7-12 col--4-6', 'col--1-6 col--7-9', 'col--7-12 col--10-12'][index]}`">
            <h3>{{ name }}</h3>
            <p class="lead">
              {{ rt(value) }}
            </p>
          </li>
        </ol>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <h2 class="col col--1-5">
          {{ t('agency.choose.title') }}
        </h2>
        <div class="col row">
          <div v-for="(value, name, index) in (tm('agency.choose.content') as Agence)" :key="index" :class="`col ${['col--1-6', 'col--7-12', 'col--1-6', 'col--7-12'][index]}`">
            <h3>{{ name }}</h3>
            <p class="lead">
              {{ rt(value) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <LazyAppRequest />
  </main>
</template>
