<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    default: () => {},
  },
})

const { t } = useI18n()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="container hero error">
    <Head>
      <Title>{{ error.statusCode }} — {{ t('name') }}</Title>
      <Meta name="robots" content="noindex, follow" />
    </Head>

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

<style lang="scss" scoped>
.btn {
  margin-top: 96px;
}
</style>
