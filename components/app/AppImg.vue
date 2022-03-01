<template>
  <nuxt-img format="webp" quality="100" :src="src" :alt="alt" :sizes="sizes" loading="lazy" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    sizes: {
      type: String,
      default: null
    }
  }
}
</script>
