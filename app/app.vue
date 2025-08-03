<script setup lang="ts">
const { progress } = useLoadingIndicator()
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <NuxtLoadingIndicator
    color="repeating-linear-gradient(to right, #50c8f0 0%, #28285a 50%, #50c8f0 100%)"
    :style="{ backgroundSize: progress === 0 ? 'auto' : `${(100 / progress) * 100}% auto`, transform: `scaleX(${progress / 100})` }"
  />
  <NuxtLayout>
    <AppHeader />
    <NuxtPage id="main" :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    <LazyAppFooter />
  </NuxtLayout>
</template>
