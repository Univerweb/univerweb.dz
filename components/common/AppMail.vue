<template>
  <a :href="'mailto:' + $t('footer.email.mailto')" class="link">
    <span class="visually-hidden">{{ $t('footer.email.label') }}</span>
    {{ $t('footer.email.mailto') }}
  </a>
</template>
