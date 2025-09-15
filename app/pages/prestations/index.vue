<script setup lang="ts">
const { t } = useI18n()

useSeo({ page: 'prestations' })
</script>

<template>
  <main>
    <PrestationCardGroup :headline="t('prestations.headline')" />
    <LazyAppRequest />
  </main>
</template>
