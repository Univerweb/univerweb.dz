<template>
  <NuxtLink :to="localePath('/')" :title="t('name')" class="logo">
    <span class="visually-hidden">{{ t('name') }}</span>
    <!-- <NuxtIcon name="logos/univerweb-ar" />
    <NuxtIcon name="logos/univerweb" /> -->
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t, locale } = useI18n()

const lang = locale.value === 'ar'
</script>

<style lang="scss">
.logo svg {
  display: block;
  g:first-child {
    fill: $primary;
  }
  g:last-child {
    fill: $secondary;
    transition: fill $transition;
    .dark-mode & {
      fill: $white;
    }
  }
}
</style>
