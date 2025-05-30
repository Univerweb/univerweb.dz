<script setup lang="ts">
const head = useLocaleHead()
const { y } = useWindowScroll()

useHead({
  htmlAttrs: {
    lang: () => head.value.htmlAttrs!.lang,
    dir: () => head.value.htmlAttrs!.dir as 'ltr' | 'rtl',
    class: { scrolled: y },
  },
})
</script>

<template>
  <slot />
</template>
