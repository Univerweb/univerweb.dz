<template>
  <img :srcset="srcset" :sizes="sizes" :src="src" :alt="alt" :width="width" :height="height" loading="lazy" />
</template>

<script>
export default {
  props: {
    srcset: {
      type: String,
      default: null
    },
    sizes: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    }
  }
}
</script>
