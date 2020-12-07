<template>
  <div class="container request">
    <h2 class="h3">{{ $t('request.headline') }}</h2>
    <nuxt-link :to="localePath('contact')" class="h2 moveArrow">{{ $t('request.link') }}</nuxt-link>
  </div>
</template>

<style lang="scss">
.request {
  background: $white;
  color: $dark-blue;
  text-align: center;
  a {
    color: $dark-blue;
    margin: 0;
  }
}
</style>
