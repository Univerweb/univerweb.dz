<script setup lang="ts">
const breadcrumb = useBreadcrumb('works')
const meta = useMeta('works')

useHead({ script: [breadcrumb] })
useSeoMeta(meta)
</script>

<template>
  <main>
    <WorkCardGroup />
    <LazyAppRequest />
  </main>
</template>
