<script setup lang="ts">
const meta = useMeta('works')
const breadcrumb = useBreadcrumb('works')

useHead({ script: [breadcrumb] })
useSeoMeta(meta)
</script>

<template>
  <main>
    <WorkCardGroup />
    <LazyAppRequest />
  </main>
</template>
