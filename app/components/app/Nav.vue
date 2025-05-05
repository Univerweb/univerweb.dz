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
  <div class="container slug-nav">
    <NuxtLink v-if="prev" :to="prev.path" class="link prev" :data-text="t('navigation.previous')">
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink v-if="next" :to="next.path" class="link next" :data-text="t('navigation.next')">
      {{ next.title }}
    </NuxtLink>
  </div>
</template>
