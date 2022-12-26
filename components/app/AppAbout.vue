<template>
  <div class="about">
    <p class="lead">
      {{ about }}
    </p>
    <a :href="`mailto:${baseEmail}`" class="link">
      <span class="visually-hidden">
        {{ email }}
      </span>
      {{ baseEmail }}
    </a>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const config = useRuntimeConfig()

const globalPath = `${locale.value}/global`
const baseEmail = config.public.baseEmail

const { data: global } = await useAsyncData('about', () => queryContent(globalPath).only(['footer', 'label']).findOne())

const about = global.value!.footer.about
const email = global.value!.label.email
</script>
