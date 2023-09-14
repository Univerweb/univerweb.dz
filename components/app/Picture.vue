<script setup lang="ts">
import type { Post } from '../../types'

export interface Props {
  post: Post
  type?: string
  alt?: string
  sizes?: string
}

withDefaults(defineProps<Props>(), {
  type: 'banner',
  sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:1280px',
})

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
