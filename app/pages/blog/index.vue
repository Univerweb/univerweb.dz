<script setup lang="ts">
const meta = useMeta('blog')
const breadcrumb = useBreadcrumb('blog')

useHead({ script: [breadcrumb] })
useSeoMeta(meta)
</script>

<template>
  <main>
    <PostCardGroup />
    <LazyAppRequest />
  </main>
</template>
