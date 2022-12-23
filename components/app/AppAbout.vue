<template>
  <div class="about">
    <p class="lead">
      <!-- {{ $t('footer.about') }} -->
    </p>
    <a :href="`mailto:${$config.public.baseEmail}`" class="link">
      <span class="visually-hidden">
        <!-- {{ $t('label.email') }} -->
      </span>
      {{ $config.public.baseEmail }}
    </a>
  </div>
</template>
