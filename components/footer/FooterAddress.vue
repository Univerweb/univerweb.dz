<script setup lang="ts">
const { t } = useI18n()
const coma = useComa()
</script>

<template>
  <address class="address" title="Adresse postale">
    <strong>{{ t('name') }}</strong>
    <br />
    {{ t('address.streetAddress') }}
    <br />
    {{ t('address.addressLocality') }}
    {{ t('address.postalCode') }}{{ coma }}
    {{ t('address.addressRegion') }}
  </address>
</template>

<style lang="scss">
address {
  font-style: normal;
}
</style>
