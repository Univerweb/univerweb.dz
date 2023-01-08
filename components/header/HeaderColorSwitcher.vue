<template>
  <button @click="toggleDark" class="colorSwitcher">
    <NuxtIcon name="light" />
    <NuxtIcon name="dark" />

    <span class="visually-hidden">
      {{ t(`colorMode.${color.preference}`) }}
    </span>
  </button>
</template>

<script setup lang="ts">
const { t } = useI18n()
const color = useColorMode()

const toggleDark = () => {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<style lang="scss">
.colorSwitcher {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--secondary);
  color: white;
  width: 50px;
  height: 28px;
  border-radius: 50px;
  padding: 0;
  outline: 0;
  transition: background-color $transition;
  &:after {
    position: absolute;
    content: '';
    background-color: var(--primary);
    width: 24px;
    height: 24px;
    border-radius: 50px;
    left: 0;
    top: 2px;
    transform: translateX(2px);
    transition: background-color $transition, transform $transition;
    .dark-mode & {
      transform: translateX(24px);
    }
  }
}
</style>
