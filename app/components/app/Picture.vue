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
    :sizes="sizes || (type === 'banner' ? '100vw xxl:1400px' : '310px xs:360px sm:495px md:448px xl:560px')"
    format="avif,webp"
    loading="lazy"
  />
</template>
