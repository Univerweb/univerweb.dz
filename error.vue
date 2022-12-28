<template>
  <main class="container hero error">
    <Head>
      <Title>{{ error.statusCode }} — {{ global!.name }}</Title>
      <Meta name="robots" :content="'noindex, follow'" />
    </Head>

    <h1>{{ global!.error.headline }}</h1>
    <p v-if="error.statusCode == 404" class="lead">{{ global!.error.error404 }}</p>
    <p v-else class="lead">{{ global!.error.error500 }}</p>
    <button class="btn" @click="handleError">{{ global!.error.back }}</button>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { data: global } = await useAsyncData('errorGlobal', () => queryContent(locale.value, 'global').only(['name', 'error']).findOne())

defineProps({
  error: {
    type: Object,
    default: () => {}
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 96px;
}
</style>
