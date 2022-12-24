<template>
  <div class="container request">
    <h2 class="h3">{{ $t('request.headline') }}</h2>
    <NuxtLink :to="localePath('contact')" :class="home" class="move-arrow">{{ $t('request.link') }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  home: {
    type: String,
    default: 'h2'
  }
})
</script>

<style lang="scss">
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
