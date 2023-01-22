<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <p>
    <a :href="`tel:+213${t('phone').slice(1).replace(/ /g, '')}`">
      <span class="visually-hidden">{{ t('phoneLabel') }}</span>
      <span dir="ltr">{{ t('phone') }}</span>
    </a>
    —
    <a :href="`tel:+213${t('mobile').slice(1).replace(/ /g, '')}`">
      <span class="visually-hidden">{{ t('mobileLabel') }}</span>
      <span dir="ltr">{{ t('mobile') }}</span>
    </a>
  </p>
</template>
