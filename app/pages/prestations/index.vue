<script setup lang="ts">
useHead({ script: [useBreadcrumb('presta')] })
useSeoMeta(useMeta('presta'))
</script>

<template>
  <main>
    <PrestaCardGroup lead tags />
    <LazyAppRequest />
  </main>
</template>
