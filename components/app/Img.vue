<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  sizes: string
}>()
</script>

<template>
  <!-- add: format="webp" -->
  <nuxt-img :src="src" :alt="alt" :sizes="sizes" quality="100" loading="lazy" />
</template>
