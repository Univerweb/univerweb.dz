<script setup lang="ts">
useHead({ script: [useBreadcrumb('works')] })
useSeoMeta(useMeta('works'))
</script>

<template>
  <main>
    <WorkCardGroup />
    <LazyAppRequest />
  </main>
</template>
