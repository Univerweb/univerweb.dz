<template>
  <a :href="'mailto:' + $t('footer.email.mailto')" class="link">
    <span class="visually-hidden">{{ $t('footer.email.label') }}</span>
    {{ $t('footer.email.mailto') }}
  </a>
</template>

<style lang="scss">
.link {
  font-family: $font;
  font-size: 1.75rem;
  font-weight: 500;
  &:hover {
    color: $blue;
  }
}
</style>
