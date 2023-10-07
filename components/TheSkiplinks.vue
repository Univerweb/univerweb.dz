<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="skip-links">
    <NuxtLink to="#header">
      {{ t('skiplinks.menu') }}
    </NuxtLink>

    <NuxtLink to="#main">
      {{ t('skiplinks.content') }}
    </NuxtLink>

    <NuxtLink to="#footer">
      {{ t('skiplinks.contact') }}
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.skip-links {
  position: absolute;
  z-index: 10;

  a {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    background-color: $primary;
    color: $secondary;
    font-family: $font-medium;
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
