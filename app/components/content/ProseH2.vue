<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <h2 :id="id" class="h3">
    <slot />
  </h2>
</template>
