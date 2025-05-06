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
    <NuxtLinkLocale to="/#realisations" :aria-label="t('navigation.menu[0].label')">
      <IconArrow />
    </NuxtLinkLocale>
  </section>
</template>
