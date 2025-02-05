<script setup lang="ts">
useHead({ script: [useBreadcrumb('blog')] })
useSeoMeta(useMeta('blog'))
</script>

<template>
  <main>
    <PostCardGroup />
    <LazyAppRequest />
  </main>
</template>
