<script setup lang="ts">
defineProps<{
  path: string
  label: string
}>()
</script>

<template>
  <NuxtLinkLocale :to="path" class="btn btn-back">
    <IconBack />
    {{ label }}
  </NuxtLinkLocale>
</template>
