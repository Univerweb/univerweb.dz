<template>
  <div class="about">
    <p class="lead">{{ $t('footer.about') }}</p>
    <a :href="'mailto:' + $t('footer.email')" class="link"
      ><span class="visually-hidden">{{ $t('label.email') }}</span
      >{{ $t('footer.email') }}</a
    >
  </div>
</template>
