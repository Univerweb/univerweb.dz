<script setup lang="ts">
const meta = useMeta('blog')
const breadcrumb = useBreadcrumb('blog')

useSeoMeta(meta)
useHead({ script: [breadcrumb] })
</script>

<template>
  <main>
    <PostCardGroup />
    <LazyAppRequest />
  </main>
</template>
