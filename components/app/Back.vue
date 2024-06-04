<script setup lang="ts">
defineProps<{
  path: string
  label: string
}>()
</script>

<template>
  <NuxtLink :to="path" class="back">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="currentColor"
      role="img"
      aria-hidden="true"
    >
      <path d="M5 7.333 1.833 4.167 5 1 4.083.083.917 3.25 0 4.167l.917.916L4.083 8.25 5 7.333Z" />
    </svg>
    {{ label }}
  </NuxtLink>
</template>
