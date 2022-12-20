<template>
  <div class="skip-links">
    <button v-scroll-to="'header'">{{ $t('skiplinks.menu') }}</button>
    <button v-scroll-to="'main'">{{ $t('skiplinks.content') }}</button>
    <button v-scroll-to="'footer'">{{ $t('skiplinks.contact') }}</button>
  </div>
</template>

<style lang="scss">
.skip-links {
  position: absolute;
  z-index: 10;
  button {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    background-color: $secondary;
    color: $primary;
    font-family: $fontMedium;
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
