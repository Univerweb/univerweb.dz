<script setup lang="ts">
const { t } = useI18n()
const show = useShow()
</script>

<template>
  <button type="button" :aria-label="t('toggle')" class="toggle" @click="show = !show">
    <span class="top" />
    <span class="middle" />
    <span class="bottom" />
  </button>
</template>
