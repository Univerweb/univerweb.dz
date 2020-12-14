<template>
  <h2 v-if="name === true" class="h1">
    <slot />
  </h2>
  <h1 v-else>
    <slot />
  </h1>
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
