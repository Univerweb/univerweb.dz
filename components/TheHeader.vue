<template>
  <header :class="{ show: show }">
    <HeaderLogo />
    <HeaderMenu />
    <HeaderToggle />
  </header>
</template>

<script setup lang="ts">
const show = ref(false)

useHead({
  htmlAttrs: { style: show ? 'height: 100%; overflow: hidden' : '' },
  bodyAttrs: { style: show ? 'height: 100%; overflow: hidden' : '' }
})
</script>

<!-- <script>
export default {
  // OLD Code
  watch: {
    $route() {
      this.show = false
    }
  },

  created() {
    this.lang = this.$i18n.locale
  },

  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event))
    }
  }
}
</script> -->

<style lang="scss">
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg);
  padding: 24px 12px;
  transition: background-color $transition, padding $transition;
  z-index: 100;
  .scrolled &:not(.show) {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .dark-mode & {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    }
  }
  @media (min-width: $xs) {
    padding: 24px 16px;
  }
  @media (min-width: $sm) {
    padding: 24px;
  }
  @media (min-width: $lg) {
    grid-template-columns: auto 1fr;
    padding: 36px;
    .scrolled & {
      padding: 12px 36px;
    }
  }
}
</style>
