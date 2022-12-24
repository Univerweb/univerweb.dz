<template>
  <section class="container hero">
    <div class="intro">
      <h1>{{ headline }}</h1>
      <p class="lead">{{ lead }}</p>
    </div>
    <NuxtIcon name="arrow" v-scroll-to="'.works'" />
  </section>
</template>

<script>
export default {
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
