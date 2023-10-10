<script setup lang="ts">
import type { Post } from '../../types'

export interface Props {
  picture: Pick<Post, '_path' | 'description'>
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
  <NuxtPicture
    :src="locale === 'fr' ? `${picture._path}_${type}.${ext}` : `${picture._path}_${type}.${ext}`.slice(3)"
    :alt="alt || picture.description"
    :sizes="sizes"
    format="avif,webp"
    quality="80"
    loading="lazy"
    :class="className"
    :img-attrs="{ property: 'image' } || null"
  />
</template>

<style lang="scss">
picture {
  display: grid;
  background-color: var(--light);
  transition: background-color $transition;

  img {
    width: 100%;
    height: auto;
  }
}

.thumbnail {
  aspect-ratio: 49 / 52;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>
