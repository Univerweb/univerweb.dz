<script setup lang="ts">
defineProps<{
  width?: number
  height?: number
  fill?: string
}>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || 24"
    :height="height || 24"
    :viewBox="`0 0 ${width || 24} ${height || 24}`"
    :fill="fill || 'currentColor'"
    role="img"
    :aria-hidden="true"
  >
    <slot />
  </svg>
</template>
