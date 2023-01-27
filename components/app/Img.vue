<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  sizes: string
}>()
</script>

<template>
  <nuxt-img :src="src" :alt="alt" :sizes="sizes" format="webp" quality="100" loading="lazy" />
</template>
