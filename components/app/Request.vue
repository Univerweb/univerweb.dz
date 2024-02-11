<script setup lang="ts">
export interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'h2',
})

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="container request">
    <h2 class="h3">
      {{ t('request.headline') }}
    </h2>
    <NuxtLink :to="localePath('contact')" :class="className" class="move">
      {{ t('request.link') }}
    </NuxtLink>
  </div>
</template>
