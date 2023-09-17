<script setup lang="ts">
const props = defineProps<{
  error: { statusCode: number }
}>()

const { t } = useI18n()

const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: `${props.error.statusCode} —  ${t('name')}`,
  robots: { noindex: true, follow: true },
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

<style lang="scss">
.error {
  display: grid;
  justify-items: center;
  align-content: center;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 0;
  min-height: calc(100vh);

  .btn {
    margin-top: 96px;
  }
}
</style>
