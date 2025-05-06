<script setup lang="ts">
defineProps<{
  path: string
  label: string
}>()
</script>

<template>
  <div class="more">
    <NuxtLinkLocale :to="path" class="btn">
      {{ label }}
      <IconNext />
    </NuxtLinkLocale>
  </div>
</template>
