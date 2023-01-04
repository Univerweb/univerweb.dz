<template>
  <button type="button" :aria-label="t('toggle')" class="toggle" @click="show = !show">
    <span class="top"></span>
    <span class="middle"></span>
    <span class="bottom"></span>
  </button>
</template>

<script setup lang="ts">
const { t } = useI18n()
const show = useShow()
</script>

<style lang="scss">
.toggle {
  display: grid;
  @media (min-width: $lg) {
    display: none;
  }
  align-content: space-between;
  background-color: transparent;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  outline: none;
  span {
    background-color: $primary;
    height: 3px;
    border-radius: 2em;
    transition: all $transition;
  }
  .middle {
    animation: collapse-middle $animation;
    transform-origin: left;
    .show & {
      animation: collapse-show-middle $animation;
    }
  }
  .top {
    animation: collapse-top $animation;
    .show & {
      animation: collapse-show-top $animation;
    }
  }
  .bottom {
    animation: collapse-bottom $animation;
    transform-origin: left;
    .show & {
      animation: collapse-show-bottom $animation;
      transform-origin: center;
    }
  }
}
</style>
