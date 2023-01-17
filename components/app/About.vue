<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
</script>

<template>
  <div class="about">
    <p class="lead">
      {{ t('contact.about') }}
    </p>
    <a :href="`mailto:${config.public.baseEmail}`" class="link">
      <span class="visually-hidden">
        {{ t('email') }}
      </span>
      {{ config.public.baseEmail }}
    </a>
  </div>
</template>
