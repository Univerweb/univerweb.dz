<template>
  <section class="container hero">
    <div class="intro">
      <h1>{{ $t('home.create.title') }}</h1>
      <p class="lead">{{ $t('home.create.text') }}</p>
    </div>
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

<style lang="scss"></style>
