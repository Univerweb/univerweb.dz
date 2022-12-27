<template>
  <div class="container request">
    <h2 class="h3">{{ request.headline }}</h2>
    <NuxtLink :to="localePath('contact')" :class="home" class="move-arrow">{{ request.link }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

const { data: global } = await useAsyncData('AppRequest', () => queryContent(locale.value, 'global').only(['request']).findOne())
const request = global.value!.request

defineProps({
  home: {
    type: String,
    default: 'h2'
  }
})
</script>

<style lang="scss" scoped>
.request {
  background-color: var(--secondary);
  color: $white;
  transition: background-color $transition, color $transition;
  text-align: center;
  a {
    color: $white;
    margin: 0;
  }
}
</style>
