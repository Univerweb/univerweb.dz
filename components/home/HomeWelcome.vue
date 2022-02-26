<template>
  <section class="container hero">
    <div class="intro">
      <h1>{{ headline }}</h1>
      <p class="lead">{{ lead }}</p>
    </div>
    <HomeArrow v-scroll-to="'.works'" />
  </section>
</template>

<script>
import HomeArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    HomeArrow
  },

  props: {
    headline: {
      type: String,
      required: true
    },
    lead: {
      type: String,
      required: true
    }
  }
}
</script>
