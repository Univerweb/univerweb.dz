<template>
  <div class="wrapper">
    <TheSkiplinks />
    <TheHeader />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SecondaryLayout'

  // OLD Code - Non remplacer
  // head() {
  //   const i18nHead = this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })

  //   return {
  //     htmlAttrs: { ...i18nHead.htmlAttrs }
  //   }
  // }
}
</script>
