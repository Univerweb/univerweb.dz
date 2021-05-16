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
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {
      htmlAttrs: { ...i18nHead.htmlAttrs }
    }
  }
}
</script>
