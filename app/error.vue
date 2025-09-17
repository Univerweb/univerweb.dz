<script setup lang="ts">
const props = defineProps<{
  error: { statusCode: number }
}>()

const collectionKeys = {
  404: { fr: 'error_404_fr', en: 'error_404_en', ar: 'error_404_ar' },
  500: { fr: 'error_500_fr', en: 'error_500_en', ar: 'error_500_ar' },
} as const

const head = useLocaleHead()
const { t, locale } = useI18n()
const localePath = useLocalePath()

const key = collectionKeys[props.error.statusCode as 404 | 500][locale.value as 'fr' | 'en' | 'ar']

const { data: errorPage } = await useAsyncData(
  () => `error-${props.error.statusCode}-${locale.value}`,
  () => queryCollection(key)
    .select('title', 'description', 'headline', 'lead', 'cta')
    .first(),
  { watch: [locale] },
)

useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang,
    dir: head.value.htmlAttrs!.dir as 'ltr' | 'rtl',
  },
})

useSeoMeta({
  title: `${errorPage.value!.title} | ${t('site.name')}`,
  description: errorPage.value!.description,
  robots: { noindex: true },
})

const handleError = () => clearError({ redirect: localePath('/') })
</script>

<template>
  <NuxtLayout>
    <main v-if="errorPage" class="container error intro intro-justify">
      <h1>
        {{ errorPage.headline }}
      </h1>
      <p class="lead">
        {{ errorPage.lead }}
      </p>
      <button class="btn" @click="handleError">
        {{ errorPage.cta }}
        <IconNext />
      </button>
    </main>
  </NuxtLayout>
</template>
