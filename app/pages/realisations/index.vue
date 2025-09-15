<script setup lang="ts">
const { t } = useI18n()

useSeo({ page: 'realisations' })
</script>

<template>
  <main>
    <RealisationCardGroup :headline="t('realisations.headline')" />
    <LazyAppRequest />
  </main>
</template>
