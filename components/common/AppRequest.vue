<template>
  <div class="container grid request">
    <div class="item">
      <h3 class="h5">
        {{ $t('request.title') }}
      </h3>
      <nuxt-link :to="localePath('contact')" class="h1">
        {{ $t('request.link') }}
      </nuxt-link>
    </div>
    <div class="item">
      <p class="lead">
        {{ $t('request.text') }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.request {
  & h3 {
    margin: 0 0 20px;
  }
  & a {
    position: relative;
    color: $dark-blue;
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
}
</style>
