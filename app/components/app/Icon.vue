<script setup lang="ts">
interface Props {
  width?: number
  height?: number
  fill?: string
  role?: string
  ariaHidden?: boolean
}

withDefaults(defineProps<Props>(), {
  width: 24,
  height: 24,
  fill: 'currentColor',
  role: 'img',
  ariaHidden: true,
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width
    :height
    :viewBox="`0 0 ${width} ${height}`"
    :fill
    :role
    :aria-hidden
  >
    <slot />
  </svg>
</template>
