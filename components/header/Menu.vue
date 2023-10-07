<script setup lang="ts">
const { tm, rt } = useI18n()
const localePath = useLocalePath()
const show = useShow()
</script>

<template>
  <ul class="menu">
    <li v-for="(name, value) in (tm('menu') as { value: string })" :key="value">
      <NuxtLink :to="localePath(value)" @click="show = false">
        {{ rt(name) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss">
.menu {
  display: grid;
  grid-auto-columns: max-content;
  row-gap: 24px;
  list-style: none;
  margin: 0;
  padding: 48px 0 0;

  @media screen and (orientation: landscape) {
    padding-top: 0;
  }

  @media (min-width: $lg) {
    grid-template-columns: repeat(4, auto);
    justify-content: space-evenly;
    padding: 0;
  }

  a {
    position: relative;
    display: block;
    font-family: $font-medium;

    @include size(20);

    color: var(--text-primary);

    @media (min-width: $lg) {
      font-size: 1rem;
      line-height: 1.5;
      text-align: center;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      background-color: $primary;
      width: 0%;
      height: 3px;
      transition: width $transition;
    }

    &:hover::after,
    &.router-link-active::after {
      width: 25%;
    }
  }
}
</style>
