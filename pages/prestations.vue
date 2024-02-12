<script setup lang="ts">
const { t, tm, rt } = useI18n()
const meta = useMeta('presta')
const breadcrumb = useBreadcrumb('presta')

useSeoMeta(meta)
useHead({ script: [breadcrumb] })
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
      <div class="row">
        <p class="col lead">
          {{ t('presta.webDesign.content') }}
        </p>
        <ul class="col tags">
          <li v-for="tag in (tm('presta.webDesign.tags') as { tag: string })" :key="rt(tag)">
            {{ rt(tag) }}
          </li>
        </ul>
      </div>
    </div>

    <div class="container prestations">
      <div class="intro">
        <h2>{{ t('presta.dev.title') }}</h2>
      </div>
      <div class="row">
        <p class="col lead">
          {{ t('presta.dev.content') }}
        </p>
        <ul class="col tags">
          <li v-for="tag in (tm('presta.dev.tags') as { tag: string })" :key="rt(tag)">
            {{ rt(tag) }}
          </li>
        </ul>
      </div>
    </div>

    <div class="container prestations">
      <div class="intro">
        <h2>{{ t('presta.support.title') }}</h2>
      </div>
      <div class="row">
        <p class="col lead">
          {{ t('presta.support.content') }}
        </p>
        <ul class="col tags">
          <li v-for="tag in (tm('presta.support.tags') as { tag: string })" :key="rt(tag)">
            {{ rt(tag) }}
          </li>
        </ul>
      </div>
    </div>

    <LazyAppRequest />
  </main>
</template>
