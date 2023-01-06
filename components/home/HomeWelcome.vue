<template>
  <section class="container hero">
    <div class="intro">
      <h1>{{ t('home.headline') }}</h1>
      <p class="lead">{{ t('home.lead') }}</p>
    </div>
    <!-- <NuxtIcon name="arrow" v-scroll-to="'.works'" /> -->
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
