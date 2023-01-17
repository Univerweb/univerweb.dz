<script setup lang="ts">
const seo = useSeo()
const { t } = useI18n()
</script>

<template>
  <a :href="`mailto:${seo.email}`" class="link">
    <span class="visually-hidden">{{ t('email') }}</span>
    {{ seo.email }}
  </a>
</template>
