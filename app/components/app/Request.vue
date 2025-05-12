<script setup lang="ts">
interface Props {
  is?: string
  linkClass?: string
}

withDefaults(defineProps<Props>(), {
  is: 'aside',
  linkClass: 'h2',
})

const { t } = useI18n()
</script>

<template>
  <Component :is class="container request" aria-labelledby="request">
    <h2 id="request" class="h3">
      {{ t('actions.requestMeeting.headline') }}
    </h2>
    <NuxtLinkLocale to="contact" :class="`${linkClass} move`">
      {{ t('actions.requestMeeting.text') }}
    </NuxtLinkLocale>
  </Component>
</template>
