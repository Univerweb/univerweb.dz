<script setup lang="ts">
const { t } = useI18n()
const seo = useSeo()
</script>

<template>
  <address class="address" title="Adresse postale">
    <strong>{{ t('name') }}</strong>
    <br>
    {{ t('streetAddress') }}
    <br>
    {{ t('addressLocality') }}
    {{ t('postalCode') }}{{ seo.coma.value }}
    {{ t('addressRegion') }}
  </address>
</template>

<style lang="scss">
address {
  font-style: normal;
}
</style>
