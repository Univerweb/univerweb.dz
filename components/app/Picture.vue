<script setup lang="ts">
import type { Post } from '../../types'

export interface Props {
  picture: Pick<Post, '_path' | 'description'>
  type?: string
  ext?: string
  alt?: string
}

withDefaults(defineProps<Props>(), {
  type: 'banner',
  ext: 'jpg',
})

const localePath = useLocalePath()

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
    :src="`${localePath(picture._path, 'fr')}_${type}.${ext}`"
    :alt="alt || picture.description"
    format="avif,webp"
    quality="80"
    loading="lazy"
    :img-attrs="{ property: 'image' } || null"
    @load="pictureLoaded"
  />
</template>
