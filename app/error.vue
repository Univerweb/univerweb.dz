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
      </button>
    </main>
  </NuxtLayout>
</template>
