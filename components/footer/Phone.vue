<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <p>
    <a :href="`tel:+213${t('phone.value').slice(1).replace(/ /g, '')}`">
      <span class="visually-hidden">{{ t('phone.label') }}</span>
      <span dir="ltr">{{ t('phone.value') }}</span>
    </a>
    —
    <a :href="`tel:+213${t('mobile.value').slice(1).replace(/ /g, '')}`">
      <span class="visually-hidden">{{ t('mobile.label') }}</span>
      <span dir="ltr">{{ t('mobile.value') }}</span>
    </a>
  </p>
</template>
