<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  sizes: string
}>()
</script>

<template>
  <nuxt-img :src="src" :alt="alt" :sizes="sizes" format="avif" quality="80" loading="lazy" />
</template>
