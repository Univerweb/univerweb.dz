<script setup lang="ts">
const { tm, rt } = useI18n()
const localePath = useLocalePath()
const show = useShow()
</script>

<template>
  <ul class="menu">
    <li v-for="(name, value) in (tm('menu') as { value: string })" :key="value">
      <NuxtLink :to="localePath(value)" active-class="active" @click="show = false">
        {{ rt(name) }}
      </NuxtLink>
    </li>
  </ul>
</template>
