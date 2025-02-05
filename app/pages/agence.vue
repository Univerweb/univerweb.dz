<script setup lang="ts">
interface Agency {
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
      <div class="intro">
        <h2 class="h1">
          {{ t('agency.method.title') }}
        </h2>
      </div>
      <ol class="row">
        <li v-for="(value, name, index) in (tm('agency.method.content') as Agency)" :key="index" :class="`big-count col ${['col--1-6 col--1-3', 'col--7-12 col--4-6', 'col--1-6 col--7-9', 'col--7-12 col--10-12'][index]}`">
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
      <div class="row">
        <div v-for="(value, name, index) in (tm('agency.choose.content') as Agency)" :key="index" :class="`col ${['col--1-6', 'col--7-12', 'col--1-6', 'col--7-12'][index]}`">
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
