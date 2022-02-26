<template>
  <div class="about">
    <p class="lead">{{ $t('footer.about') }}</p>
    <a :href="`mailto:${$config.baseEmail}`" class="link"
      ><span class="visually-hidden">{{ $t('label.email') }}</span
      >{{ $config.baseEmail }}</a
    >
  </div>
</template>
