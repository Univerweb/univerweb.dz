<script setup lang="ts">
interface Props {
  path: string
  type?: 'thumbnail' | 'banner' | 'preview'
  alt?: string
}

withDefaults(defineProps<Props>(), {
  type: 'thumbnail',
  alt: '',
})

const localePath = useLocalePath()
</script>

<template>
  <NuxtPicture
    provider="cloudinary"
    :src="`${localePath(path, 'fr')}_${type}`"
    :alt
    sizes="342px xs:348px md:460px xl:584px"
    format="avif,webp"
    loading="lazy"
    :img-attrs="{ property: 'image' }"
  />
</template>
