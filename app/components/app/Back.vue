<script setup lang="ts">
defineProps<{
  path: string
  label: string
}>()
</script>

<template>
  <NuxtLinkLocale :to="path" class="back">
    <IconBack />
    {{ label }}
  </NuxtLinkLocale>
</template>
