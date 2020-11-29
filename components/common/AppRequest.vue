<template>
  <div class="container details request">
    <div class="item">
      <h2 class="h3">{{ $t('request.headline') }}</h2>
      <nuxt-link :to="localePath('contact')" class="h2">{{
        $t('request.link')
      }}</nuxt-link>
    </div>
    <div class="item">
      <p class="lead">{{ $t('request.body') }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.request a {
  position: relative;
  display: inline-block;
  color: $dark-blue;
  margin: 0;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: $blue;
    width: 25%;
    height: 5px;
    transition: width $transition;
  }
  &:hover:before {
    width: 100%;
  }
}
</style>
