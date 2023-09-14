<script setup lang="ts">
import type { Post } from '../../types'

export interface Props {
  post: Post
  type?: string
  ext?: string
  alt?: string
  sizes?: string
  className?: string
}

withDefaults(defineProps<Props>(), {
  type: 'banner',
  ext: 'jpg',
  sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:1280px',
  className: 'banner',
})

const { locale } = useI18n()
</script>

<template>
  <!-- format="avif,webp" -->
  <NuxtPicture
    :src="locale === 'fr' ? `${post._path}_${type}.${ext}` : `${post._path}_${type}.${ext}`.slice(3)"
    :alt="alt || post.description"
    :sizes="sizes"
    format="avif"
    quality="80"
    loading="lazy"
    :class="className"
    :img-attrs="{ property: 'image' } || null"
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
