<template>
  <NuxtLink v-if="global" :to="localePath('/')" :title="global.name" class="logo">
    <span class="visually-hidden">{{ global.name }}</span>
    <!-- <NuxtIcon name="logos/univerweb-ar" />
    <NuxtIcon name="logos/univerweb" /> -->
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { locale } = useI18n()

const { data: global } = await useAsyncData('HeaderLogo', () => queryContent(locale.value, 'global').only(['name']).findOne())
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
