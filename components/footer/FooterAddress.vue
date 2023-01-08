<script setup lang="ts">
const { locale, t } = useI18n()
</script>

<template>
  <address class="address" title="Adresse postale">
    <strong>{{ t('name') }}</strong>
    <br />
    {{ t('address.streetAddress') }}
    <br />
    {{ t('address.addressLocality') }}
    {{ t('address.postalCode') }}<span v-if="locale === 'ar'"> ، </span><span v-else>, </span>
    {{ t('address.addressRegion') }}
  </address>
</template>

<style lang="scss">
address {
  font-style: normal;
}
</style>
