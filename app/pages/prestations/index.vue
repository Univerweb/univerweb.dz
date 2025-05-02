<script setup lang="ts">
useHead({ script: [useBreadcrumb('prestations')] })
useSeoMeta(useMeta('prestations'))
</script>

<template>
  <main>
    <PrestaCardGroup lead tags />
    <LazyAppRequest />
  </main>
</template>
