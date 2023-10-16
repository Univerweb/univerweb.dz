<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <p>
    <a href="tel:+21321440811">
      <span class="visually-hidden">{{ t('phoneLabel') }}</span>
      <span dir="ltr">021 44 08 11</span>
    </a>
    —
    <a href="tel:+213551904622">
      <span class="visually-hidden">{{ t('mobileLabel') }}</span>
      <span dir="ltr">0551 90 46 22</span>
    </a>
  </p>
</template>
