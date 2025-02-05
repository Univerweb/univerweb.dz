<script setup lang="ts">
const breadcrumb = useBreadcrumb('blog')
const meta = useMeta('blog')

useHead({ script: [breadcrumb] })
useSeoMeta(meta)
</script>

<template>
  <main>
    <PostCardGroup />
    <LazyAppRequest />
  </main>
</template>
