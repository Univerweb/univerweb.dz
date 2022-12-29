<template>
  <div v-if="global" class="skip-links">
    <button v-scroll-to="'header'">
      {{ global.skiplinks.menu }}
    </button>

    <button v-scroll-to="'main'">
      {{ global.skiplinks.content }}
    </button>

    <button v-scroll-to="'footer'">
      {{ global.skiplinks.contact }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const { data: global } = await useAsyncData('TheSkiplinks', () => queryContent(locale.value, 'global').only(['skiplinks']).findOne())
</script>

<style lang="scss">
.skip-links {
  position: absolute;
  z-index: 10;
  button {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    background-color: $primary;
    color: $secondary;
    font-family: var(--fontMedium);
    line-height: 25px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    height: 25px;
    padding: 5px 10px;
    &:focus {
      position: static;
      overflow: visible;
      clip: auto;
    }
  }
}
</style>
