<script setup lang="ts">
defineProps<{
  picture: { path: string, alt?: string }
  type?: 'thumbnail' | 'banner' | 'preview'
  sizes?: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <NuxtPicture
    provider="cloudinary"
    :src="`${localePath(picture.path, 'fr')}_${type || 'thumbnail'}.webp`"
    :alt="picture.alt"
    :sizes="sizes || (type === 'banner' ? '100vw xxl:1400px' : '326px xs:332px md:444px xl:576px')"
    format="avif,webp"
    loading="lazy"
    :img-attrs="{ property: 'image' }"
  />
</template>
