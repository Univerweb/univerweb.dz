<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  sizes: string
}>()
</script>

<template>
  <NuxtImg :src="src" :alt="alt" :sizes="sizes" format="['avif', 'webp']" quality="80" loading="lazy" />
</template>
