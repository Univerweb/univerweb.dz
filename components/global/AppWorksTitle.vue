<template>
  <h3 v-if="name === true">
    <slot />
  </h3>
  <h2 v-else class="h3">
    <slot />
  </h2>
</template>

<script>
export default {
  data() {
    let name = 'index___' + this.$i18n.locale
    if (this.$route.name === name) {
      name = true
    }

    return {
      name
    }
  }
}
</script>
