<script setup lang="ts">
defineProps<{
  picture: { path: string, alt?: string }
  type?: 'thumbnail' | 'banner' | 'preview'
}>()

const localePath = useLocalePath()
</script>

<template>
  <NuxtPicture
    provider="cloudinary"
    :src="`${localePath(picture.path, 'fr')}_${type || 'thumbnail'}.webp`"
    :alt="picture.alt"
    sizes="342px xs:348px md:460px xl:584px"
    format="avif,webp"
    loading="lazy"
    :img-attrs="{ property: 'image' }"
  />
</template>
