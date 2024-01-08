<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
</script>

<template>
  <a :href="`mailto:${config.public.baseEmail}`" class="link outfit">
    <span class="visually-hidden">{{ t('emailLabel') }}</span>
    {{ config.public.baseEmail }}
  </a>
</template>
