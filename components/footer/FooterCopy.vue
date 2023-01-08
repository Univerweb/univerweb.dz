<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <p class="copy">
    {{ t('copy') }}
  </p>
</template>

<style lang="scss">
.copy {
  max-width: 170px;
  font-size: 0.8rem;
  line-height: 1.875;
}
</style>
