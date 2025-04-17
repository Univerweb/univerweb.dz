<script setup lang="ts">
interface Props {
  path: string
  title: string
}

defineProps<{
  prev?: Props
  next?: Props
}>()

const { t } = useI18n()
</script>

<template>
  <div class="container post-nav">
    <NuxtLink v-if="prev" :to="prev.path" class="link prev" :data-text="t('nav.prev')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="currentColor"
        role="img"
        aria-hidden="true"
      >
        <path d="M6 8.7 2.2 4.9 6 1.1 4.9 0 1.1 3.8 0 4.9 1.1 6l3.8 3.8L6 8.7Z" />
      </svg>
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink v-if="next" :to="next.path" class="link next" :data-text="t('nav.next')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="currentColor"
        role="img"
        aria-hidden="true"
      >
        <path d="m0 1.1 3.8 3.8L0 8.7l1.1 1.1L4.9 6 6 4.9 4.9 3.8 1.1 0 0 1.1Z" />
      </svg>
      {{ next.title }}
    </NuxtLink>
  </div>
</template>
