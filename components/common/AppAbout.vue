<template>
  <div class="about">
    <p class="lead">
      {{ $t('contact.body') }}
    </p>
    <a :href="'mailto:' + $t('footer.email.mailto')" class="link">
      <span class="visually-hidden">{{ $t('footer.email.label') }}</span>
      {{ $t('footer.email.mailto') }}
    </a>
  </div>
</template>
