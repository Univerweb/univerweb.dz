<script setup lang="ts">
defineProps<{
  path: string
  label: string
}>()
</script>

<template>
  <div class="more">
    <NuxtLink :to="path" class="btn">
      {{ label }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="currentColor"
        role="img"
        aria-hidden="true"
      >
        <path d="M1.38329e-07 2.19999L5.06667 7.26665L1.74898e-08 12.3333L1.46667 13.8L6.53333 8.73332L8 7.26665L6.53333 5.79999L1.46667 0.733322L1.38329e-07 2.19999Z" />
      </svg>
    </NuxtLink>
  </div>
</template>
