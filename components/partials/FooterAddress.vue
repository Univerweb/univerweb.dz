<template>
  <address class="address" title="Adresse postale">
    <strong>{{ $t('footer.address.name') }}</strong
    ><br />
    {{ $t('footer.address.streetAddress') }}<br />
    {{ $t('footer.address.addressLocality') }}
    {{ $t('footer.address.postalCode') }},
    {{ $t('footer.address.addressCity') }}
  </address>
</template>

<style>
address {
  font-style: normal;
}
</style>
