<script setup lang="ts">
useHead({ script: [useBreadcrumb('realisations')] })
useSeoMeta(useMeta('realisations'))
</script>

<template>
  <main>
    <WorkCardGroup />
    <LazyAppRequest />
  </main>
</template>
