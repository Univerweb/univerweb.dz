<template>
  <section class="container request">
    <h2 class="h3">{{ $t('request.headline') }}</h2>
    <nuxt-link :to="localePath('contact')" class="h1 moveArrow">{{ $t('request.link') }}</nuxt-link>
  </section>
</template>
