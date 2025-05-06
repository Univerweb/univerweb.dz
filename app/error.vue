<script setup lang="ts">
const props = defineProps<{
  error: { statusCode: number }
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const handleError = () => clearError({ redirect: localePath('/') })

useSeoMeta({
  title: t(`errors.${props.error.statusCode}.title`),
  description: t(`errors.${props.error.statusCode}.headline`),
  ogTitle: t(`errors.${props.error.statusCode}.title`),
  ogDescription: t(`errors.${props.error.statusCode}.headline`),
  twitterTitle: t(`errors.${props.error.statusCode}.title`),
  twitterDescription: t(`errors.${props.error.statusCode}.headline`),
  robots: { noindex: true },
})
</script>

<template>
  <NuxtLayout>
    <main class="container error intro intro-justify">
      <h1>
        {{ t(`errors.${error.statusCode}.headline`) }}
      </h1>
      <p class="lead">
        {{ t(`errors.${error.statusCode}.lead`) }}
      </p>
      <button class="btn" @click="handleError">
        {{ t(`errors.404.actions.returnToHome`) }}
        <IconNext />
      </button>
    </main>
  </NuxtLayout>
</template>
