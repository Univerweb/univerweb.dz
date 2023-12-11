<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <address class="address" title="Adresse postale">
    <strong>{{ t('name') }}</strong>
    <br>
    {{ t('streetAddress') }}
    <br>
    <span dir="ltr">16 029</span> {{ t('addressLocality') }}
  </address>
</template>
