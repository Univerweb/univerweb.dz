<template>
  <section class="request">
    <div class="container">
      <h3 class="h5">
        {{ $t('request.text') }}
      </h3>
      <nuxt-link :to="localePath('contact')" class="h1">
        {{ $t('request.link') }} {{ home }}
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss">
.home .request {
  background: $blue;
  color: $dark-blue;
  text-align: center;
  & a {
    display: inline-block;
    margin: 0;
    &::before {
      background: $white;
    }
  }
}
</style>
