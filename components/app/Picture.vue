<script setup lang="ts">
import type { Work } from '../../types'

export interface Props {
  picture: Pick<Work, '_path' | 'description'>
  type?: string
  ext?: string
}

withDefaults(defineProps<Props>(), {
  type: 'thumbnail',
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
    :alt="picture.description"
    :img-attrs="{ property: 'image' }"
    sizes="342px xs:348px md:460px xl:584px"
    format="avif,webp"
    quality="80"
    loading="lazy"
    @load="pictureLoaded"
  />
</template>
