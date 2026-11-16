<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <h3 :id="id" class="h4">
    <slot />
  </h3>
</template>
