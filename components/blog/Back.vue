<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <NuxtLink :to="localePath('blog')" class="back">
    <NuxtIcon name="arrow" />
    {{ t('menu.blog') }}
  </NuxtLink>
</template>
