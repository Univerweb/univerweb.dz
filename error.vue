<script setup lang="ts">
const props = defineProps<{
  error: { statusCode: number }
}>()

const { t } = useI18n()
const i18nHead = useLocaleHead({ addSeoAttributes: true, addDirAttribute: true })
const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: `${props.error.statusCode} —  ${t('name')}`,
  robots: { noindex: true, follow: true },
})

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
    dir: () => i18nHead.value.htmlAttrs!.dir,
  },
})
</script>

<template>
  <main class="container error">
    <h1>
      {{ t('error.headline') }}
    </h1>
    <p v-if="error.statusCode === 404" class="lead">
      {{ t('error.error404') }}
    </p>
    <p v-else class="lead">
      {{ t('error.error500') }}
    </p>
    <button class="btn" @click="handleError">
      {{ t('error.back') }}
    </button>
  </main>
</template>
