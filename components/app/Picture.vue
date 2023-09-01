<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  sizes: string
}>()
</script>

<template>
  <!-- format="avif,webp" -->
  <NuxtPicture :src="src" :alt="alt" :sizes="sizes" format="avif" quality="80" loading="lazy" />
</template>

<style lang="scss">
picture {
  display: grid;
  background-color: $light;
  transition: background-color $transition;

  .dark-mode & {
    background-color: $text-secondary;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>
