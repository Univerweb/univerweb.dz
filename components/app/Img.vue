<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  sizes: string
}>()
</script>

<template>
  <NuxtImg :src="src" :alt="alt" :sizes="sizes" format="avif" quality="80" loading="lazy" />
</template>
