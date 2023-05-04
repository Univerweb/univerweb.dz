<script setup lang="ts">
import type { Blog } from '../../types'

defineProps<{
  blog: Blog
  titleTag: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <li class="item">
    <NuxtLink :to="localePath(`/blog/${blog.slug}`)">
      <Component :is="titleTag" property="headline">
        {{ blog.title }}
      </Component>
    </NuxtLink>
  </li>
</template>
