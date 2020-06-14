<template>
  <div class="container grid request">
    <div class="item">
      <h3 class="h5">
        {{ $t('request.text') }}
      </h3>
      <nuxt-link :to="localePath('contact')" class="h1">
        {{ $t('request.link') }} {{ home }}
      </nuxt-link>
    </div>
    <div class="item">
      <p class="lead">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero earum
        maxime sunt quia sint iusto similique nulla blanditiis laudantium
        officiis in, fugit eligendi ipsum dicta ratione laboriosam.
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
