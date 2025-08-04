<script setup lang="ts">
const props = defineProps<{
  error: { statusCode: number }
}>()

const head = useLocaleHead()
const { t } = useI18n()
const localePath = useLocalePath()
const handleError = () => clearError({ redirect: localePath('/') })

useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang,
    dir: head.value.htmlAttrs!.dir as 'ltr' | 'rtl',
  },
})

useSeoMeta({
  title: `${t(`errors.${props.error.statusCode}.title`)} | ${t('site.name')}`,
  description: t(`errors.${props.error.statusCode}.headline`),
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
