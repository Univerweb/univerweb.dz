<script setup lang="ts">
defineProps<{
  is?: string
  linkClass?: string
}>()

const { t } = useI18n()
</script>

<template>
  <component :is="is || 'aside'" class="container request" aria-labelledby="request-title">
    <h2 id="request-title" class="h3">
      {{ t('actions.requestMeeting.headline') }}
    </h2>
    <NuxtLinkLocale to="contact" :class="`${linkClass || 'h2'} move`">
      {{ t('actions.requestMeeting.text') }}
    </NuxtLinkLocale>
  </component>
</template>
