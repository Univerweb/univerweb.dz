<script setup lang="ts">
const { t } = useI18n()
const color = useColorMode()

const toggleDark = () => {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="switcher" :aria-label="t(`colorMode.${color.preference}`)" @click="toggleDark">
    <NuxtIcon v-if="color.preference === 'light'" name="dark" />
    <NuxtIcon v-else name="light" />
  </button>
</template>
