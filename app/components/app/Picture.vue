<script setup lang="ts">
interface Props {
  picture: { path: string, alt?: string }
  type?: 'thumbnail' | 'banner' | 'preview'
}

withDefaults(defineProps<Props>(), {
  type: 'thumbnail',
})

const localePath = useLocalePath()
</script>

<template>
  <NuxtPicture
    provider="cloudinary"
    :src="`${localePath(picture.path, 'fr')}_${type}`"
    :alt="picture.alt"
    sizes="342px xs:348px md:460px xl:584px"
    format="avif,webp"
    loading="lazy"
    :img-attrs="{ property: 'image' }"
  />
</template>
