<script setup lang="ts">
interface Props {
  linkClass?: string
}

withDefaults(defineProps<Props>(), {
  linkClass: 'h2',
})

const { t } = useI18n()
</script>

<template>
  <div class="container request">
    <h2 class="h3">
      {{ t('actions.requestMeeting.headline') }}
    </h2>
    <NuxtLinkLocale to="contact" :class="`${linkClass} move`">
      {{ t('actions.requestMeeting.text') }}
    </NuxtLinkLocale>
  </div>
</template>
