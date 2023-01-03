<template>
  <ul class="menu">
    <li v-for="link in links">
      <NuxtLink :to="localePath(link.slug)">
        {{ link.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

defineProps({
  links: {
    type: Array<any>,
    default: () => []
  }
})
</script>

<style lang="scss">
.menu {
  display: grid;
  grid-auto-columns: max-content;
  row-gap: 24px;
  margin: 0;
  padding: 48px 0 0;
  @media screen and (orientation: landscape) {
    padding-top: 24px;
  }
  list-style: none;
  @media (min-width: $lg) {
    grid-template-columns: repeat(4, auto);
    justify-content: space-around;
    padding: 0;
  }

  a {
    position: relative;
    display: block;
    font-family: var(--fontMedium);
    @include size(20);
    color: var(--textPrimary);
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
