<template>
  <nuxt-img format="webp" quality="100" :src="src" :alt="alt" :sizes="sizes" loading="lazy" />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: null
  },
  sizes: {
    type: String,
    default: null
  }
})
</script>
