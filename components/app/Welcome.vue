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
    <NuxtIcon name="arrow" />
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-auto-rows: 1fr auto;
  padding-top: 0;
  padding-bottom: 0;
  min-height: calc(100vh - 96px);

  @media (min-width: $lg) {
    min-height: calc(100vh - 132px);
  }

  transition: min-height $transition;

  .intro {
    align-self: center;
  }

  .nuxt-icon {
    justify-self: center;
    cursor: pointer;
  }
}
</style>
