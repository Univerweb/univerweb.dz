<template>
  <button
    type="button"
    aria-label="Ouvrir le menu"
    class="toggler btn"
    @click.prevent="$store.commit('open')"
  >
    Menu
  </button>
</template>

<script></script>

<style>
.toggler.btn {
  height: 25px;
  margin: 15px 0;
  padding: 0 10px;
  font-size: 13px;
}

.menu--opened .toggler {
  margin: 0;
}

@media (min-width: 1024px) {
  .toggler.btn {
    display: none;
  }
}
</style>
