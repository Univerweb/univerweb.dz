<script setup lang="ts">
const meta = useMeta('works')
const breadcrumb = useBreadcrumb('works')

useSeoMeta(meta)
useHead({ script: [breadcrumb] })
</script>

<template>
  <main>
    <WorkCardGroup />
    <LazyAppRequest />
  </main>
</template>
