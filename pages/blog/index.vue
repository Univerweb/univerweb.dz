<script setup lang="ts">
const meta = useMeta('blog')
const breadcrumb = useBreadcrumb('blog')

useSeoMeta(meta)
useHead({ script: [breadcrumb] })
</script>

<template>
  <main>
    <BlogCardGroup />
    <LazyAppRequest />
  </main>
</template>
