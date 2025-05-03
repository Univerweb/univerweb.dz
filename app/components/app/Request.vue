<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'h2',
})

const { t } = useI18n()
</script>

<template>
  <div class="container request">
    <h2 class="h3">
      {{ t('actions.requestMeeting.headline') }}
    </h2>
    <NuxtLinkLocale to="contact" :class="`${className} move`">
      {{ t('actions.requestMeeting.text') }}
    </NuxtLinkLocale>
  </div>
</template>
