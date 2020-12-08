<template>
  <div class="container request">
    <h2 class="h3">{{ $t('request.headline') }}</h2>
    <nuxt-link :to="localePath('contact')" class="h2 moveArrow">{{ $t('request.link') }}</nuxt-link>
  </div>
</template>

<style lang="scss">
.request {
  background: $white;
  color: $primary;
  text-align: center;
  a {
    color: $primary;
    margin: 0;
  }
}
</style>
