<script setup lang="ts">
const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const switcher = computed(() => locale.value === 'fr' ? 'en' : locale.value === 'en' ? 'ar' : 'fr')
</script>

<template>
  <NuxtLink :to="switchLocalePath(switcher)" class="switcher">
    <NuxtIcon name="lang" />
    <span class="visually-hidden">{{ t('switcher') }}</span>
  </NuxtLink>
</template>
