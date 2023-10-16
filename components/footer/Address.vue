<script setup lang="ts">
const { t } = useI18n()
const coma = useComa()
</script>

<template>
  <address class="address" title="Adresse postale">
    <strong>{{ t('name') }}</strong>
    <br>
    {{ t('streetAddress') }}
    <br>
    {{ t('addressLocality') }}
    <span dir="ltr">16 029</span>{{ coma }}
    {{ t('addressRegion') }}
  </address>
</template>
