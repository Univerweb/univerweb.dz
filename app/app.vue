<script setup lang="ts">
const head = useLocaleHead()
const { y } = useWindowScroll()
const { finalizePendingLocaleChange } = useI18n()

useHead({
  htmlAttrs: {
    lang: () => head.value.htmlAttrs!.lang,
    dir: () => head.value.htmlAttrs!.dir as 'ltr' | 'rtl',
    class: { scrolled: y },
  },
})

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right, #50c8f0 0%, #28285a 50%, #50c8f0 100%)" />
  <NuxtLayout>
    <AppHeader />
    <NuxtPage id="main" :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    <LazyAppFooter />
  </NuxtLayout>
</template>
