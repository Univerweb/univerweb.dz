<template>
  <section class="container hero">
    <div class="intro">
      <h1>{{ $t('home.headline') }}</h1>
      <p class="lead">{{ $t('home.lead') }}</p>
    </div>
    <HomeArrow v-scroll-to="'.works'" />
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
