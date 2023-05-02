<script setup lang="ts">
import type { Blog } from '../../types'

defineProps<{
  blog: Blog
}>()

const localePath = useLocalePath()
</script>

<template>
  <li class="item">
    <NuxtLink :to="localePath(`/blog/${blog.slug}`)">
      {{ blog.title }}
    </NuxtLink>
  </li>
</template>
