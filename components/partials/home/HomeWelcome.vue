<template>
  <section class="container hero">
    <h1>{{ $t('home.create.title') }}</h1>
    <p class="lead">{{ $t('home.create.text') }}</p>
    <home-arrow v-scroll-to="'.works'" />
  </section>
</template>

<script>
import HomeArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    HomeArrow
  }
}
</script>
