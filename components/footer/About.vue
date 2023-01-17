<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <p class="lead">
    {{ t('contact.about') }}
  </p>
</template>

<style lang="scss">
footer .lead {
  color: var(--textPrimary);
  transition: color $transition;
  margin: 0;
  max-width: 400px;
}
</style>
