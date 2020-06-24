<template>
  <section class="container request">
    <h2 class="h3">
      {{ $t('request.title') }}
    </h2>
    <nuxt-link :to="localePath('contact')" class="h1">
      {{ $t('request.link') }}
    </nuxt-link>
  </section>
</template>

<style lang="scss">
.home .request {
  background: $blue;
  color: $dark-blue;
  text-align: center;
  & a::before {
    background: $white;
  }
}
</style>
