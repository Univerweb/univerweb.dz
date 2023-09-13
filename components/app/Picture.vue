<script setup lang="ts">
import type { Post } from '../../types'

defineProps<{
  post: Post
  type: string
  alt?: string
  sizes: string
}>()

const { locale } = useI18n()
</script>

<template>
  <!-- format="avif,webp" -->
  <NuxtPicture
    :src="locale === 'fr' ? `${post._path}_${type}.jpg` : `${post._path}_${type}.jpg`.slice(3)"
    :alt="alt || post.description"
    :sizes="sizes"
    format="avif"
    quality="80"
    loading="lazy"
  />
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
