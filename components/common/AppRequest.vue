<template>
  <div class="container request">
    <h2 class="h3">{{ $t('request.headline') }}</h2>
    <nuxt-link :to="localePath('contact')" class="h2 moveArrow">{{ $t('request.link') }}</nuxt-link>
  </div>
</template>

<style lang="scss">
.request {
  background-color: var(--primary);
  color: $white;
  transition: background-color $transition, color $transition;
  text-align: center;
  a {
    color: $white;
    margin: 0;
  }
}
</style>
