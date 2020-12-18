<template>
  <div class="wrapper">
    <TheSkiplinks />
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    let direction = 'rtl'
    if (this.$i18n.locale !== 'ar') {
      direction = 'ltr'
    }
    return {
      htmlAttrs: { lang: this.$i18n.locale, dir: direction }
    }
  }
}
</script>
