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
    let DIR = 'rtl'
    if (this.$i18n.locale !== 'ar') {
      DIR = 'ltr'
    }
    return {
      htmlAttrs: { lang: this.$i18n.locale, dir: DIR }
    }
  }
}
</script>
