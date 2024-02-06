<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="container hero">
    <div class="intro">
      <h1>{{ t('home.headline') }}</h1>
      <p class="lead">
        {{ t('home.lead') }}
      </p>
    </div>
    <NuxtLink to="#realisations">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" fill="currentColor" aria-hidden="true" viewBox="0 0 20 12" role="img">
        <path d="M17.6 0 10 7.6 2.4 0 .2 2.2l7.6 7.6L10 12l2.2-2.2 7.6-7.6z" />
      </svg>
      <span class="visually-hidden">{{ t('menu[0].label') }}</span>
    </NuxtLink>
  </section>
</template>
