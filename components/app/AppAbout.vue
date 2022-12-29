<template>
  <div v-if="global" class="about">
    <p class="lead">
      {{ global.footer.about }}
    </p>
    <a :href="`mailto:${config.public.baseEmail}`" class="link">
      <span class="visually-hidden">
        {{ global.label.email }}
      </span>
      {{ config.public.baseEmail }}
    </a>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()

const { data: global } = await useAsyncData('AppAbout', () => queryContent(locale.value, 'global').only(['footer', 'label']).findOne())
</script>
