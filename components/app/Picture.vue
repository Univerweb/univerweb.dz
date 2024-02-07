<script setup lang="ts">
import type { Post } from '../../types'

export interface Props {
  picture: Pick<Post, '_path' | 'description'>
  type?: string
  ext?: string
  alt?: string
  className?: string
}

withDefaults(defineProps<Props>(), {
  type: 'banner',
  ext: 'jpg',
  className: 'banner',
})

const { isFrench } = useLocale()

function pictureLoaded() {
  const images = document.querySelectorAll('picture img')
  images.forEach((image) => {
    if (image instanceof HTMLImageElement && image.complete)
      image.classList.add('loaded')
  })
}
</script>

<template>
  <NuxtPicture
    :src="isFrench ? `${picture._path}_${type}.${ext}` : `${picture._path}_${type}.${ext}`.slice(3)"
    :alt="alt || picture.description"
    format="avif,webp"
    quality="80"
    loading="lazy"
    :class="className"
    :img-attrs="{ property: 'image' } || null"
    @load="pictureLoaded"
  />
</template>

<style lang="scss">
picture {
  display: grid;
  background-color: var(--light);
  transition: background-color $transition;

  &.thumbnail {
    aspect-ratio: 49 / 52;
  }

  img {
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity $transition;

    &.loaded {
      opacity: 1;
    }
  }

  &.thumbnail img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .work & img {
    box-shadow: 0 0 40px 0 rgba(var(--shadow));
  }
}
</style>
