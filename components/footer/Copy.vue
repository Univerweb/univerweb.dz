<script setup lang="ts">
const { t } = useI18n()
const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <p class="copy">
    {{ t('copy', { year: currentYear }) }}
  </p>
</template>
