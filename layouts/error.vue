<template>
  <main class="container hero error">
    <h1>{{ $t('error.headline') }}</h1>
    <p v-if="error.statusCode === 404" class="lead">{{ $t('error.404') }}</p>
    <p v-else class="lead">{{ $t('error.500') }}</p>
  </main>
</template>

<script>
export default {
  name: 'ErrorLayout',

  layout: 'secondary',

  props: {
    error: {
      type: Object,
      default: null
    }
  }

  // OLD Code - Non remplacer
  // head() {
  //   return {
  //     titleTemplate: `${this.error.statusCode} — ${this.$t('name')}`,
  //     meta: [{ name: 'robots', content: 'noindex, follow' }]
  //   }
  // }
}
</script>
