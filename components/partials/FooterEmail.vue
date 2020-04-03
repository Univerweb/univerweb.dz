<template>
  <a :href="'mailto:' + $t('footer.email.mailto')" class="link">
    <span class="visually-hidden">{{ $t('footer.email.label') }}</span>
    {{ $t('footer.email.mailto') }}
  </a>
</template>

<style>
.link {
  display: inline-block;
  position: relative;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}

.link:hover {
  color: var(--blue);
}
</style>
