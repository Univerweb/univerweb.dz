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
