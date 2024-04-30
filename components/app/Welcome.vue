<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="container hero">
    <div class="intro intro-justify">
      <h1>{{ t('home.headline') }}</h1>
      <p class="lead">
        {{ t('home.lead') }}
      </p>
    </div>
    <NuxtLink to="#realisations" :aria-label="t('menu[0].label')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="currentColor"
        role="img"
        aria-hidden="true"
      >
        <path d="M17.6 0 10 7.6 2.4 0 .2 2.2l7.6 7.6L10 12l2.2-2.2 7.6-7.6z" />
      </svg>
    </NuxtLink>
  </section>
</template>
