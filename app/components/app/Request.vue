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
      {{ t('request.headline') }}
    </h2>
    <NuxtLinkLocale to="contact" :class="className" class="move">
      {{ t('request.link') }}
    </NuxtLinkLocale>
  </div>
</template>
