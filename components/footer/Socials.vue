<script setup lang="ts">
const { tm, rt } = useI18n()
</script>

<template>
  <ul class="socials">
    <li v-for="social in tm('socials')" :key="rt(social.name)">
      <a :href="rt(social.url)">
        <span class="visually-hidden">{{ rt(social.value) }}</span>
        <NuxtIcon :name="rt(social.name)" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.socials {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  max-width: 210px;
  @media (min-width: $md) {
    max-width: 295px;
  }
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  a {
    display: grid;
  }
}
</style>
