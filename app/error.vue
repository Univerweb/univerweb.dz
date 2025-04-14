<script setup lang="ts">
const props = defineProps<{
  error: { statusCode: number }
}>()

const { t } = useI18n()
const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: `${props.error.statusCode} -  ${t('name')}`,
  robots: { noindex: true },
})
</script>

<template>
  <NuxtLayout name="default">
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
