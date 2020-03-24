<template>
  <button
    type="button"
    aria-label="Ouvrir le menu"
    class="toggler btn"
    @click="$store.commit('increment')"
  >
    Menu
  </button>
</template>

<script></script>

<style>
@media (min-width: 992px) {
  .toggler {
    display: none;
  }
}
</style>
