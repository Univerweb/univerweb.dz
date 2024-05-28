<script setup lang="ts">
import type { Work } from '../../types'

export interface Props {
  picture: Pick<Work, '_path' | 'description'>
  type?: string
}

withDefaults(defineProps<Props>(), {
  type: 'thumbnail',
})

const localePath = useLocalePath()
</script>

<template>
  <NuxtPicture
    provider="cloudinary"
    :src="`${localePath(picture._path, 'fr')}_${type}`"
    :alt="picture.description"
    sizes="342px xs:348px md:460px xl:584px"
    format="avif,webp"
    loading="lazy"
    :img-attrs="{ property: 'image' }"
  />
</template>
