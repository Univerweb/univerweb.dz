<template>
  <nav class="menu">
    <ul>
      <li>
        <nuxt-link
          to="/realisations"
          @click.native="$store.commit('increment')"
        >
          Réalisations
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/prestations" @click.native="$store.commit('increment')">
          Prestations
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/agence" @click.native="$store.commit('increment')">
          L'agence
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link
      to="/contact"
      class="btn"
      @click.native="$store.commit('increment')"
    >
      Contact
    </nuxt-link>
  </nav>
</template>

<style>
.menu {
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  align-content: space-between;
  padding: 115px 15px 45px;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.menu--opened .menu {
  background: var(--dark-blue);
  opacity: 1;
  pointer-events: auto;
}

@media (min-width: 1024px) {
  .menu {
    grid-template-columns: 1fr auto;
    align-items: center;
    position: initial;
    height: initial;
    padding: 0;
    opacity: 1;
    pointer-events: auto;
  }
}

.menu ul {
  display: grid;
  grid-template-columns: min-content;
  row-gap: 30px;
  margin: 0;
  padding: 45px 0 0;
  list-style: none;
}

@media (min-width: 1024px) {
  .menu ul {
    grid-template-columns: repeat(3, auto);
    justify-content: space-around;
    padding: 0;
  }
}

.menu a {
  position: relative;
  display: block;
  color: var(--dark);
  font-size: 24px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.02em;
  text-decoration: none;
  text-transform: uppercase;
}

@media (min-width: 1024px) {
  .menu a {
    font-size: inherit;
    text-align: center;
  }
}

.menu--opened .menu a {
  color: var(--white);
}

.menu li a::after {
  position: absolute;
  display: block;
  content: '';
  color: var(--blue);
  border-top: 3px solid;
  width: 0%;
  transition: width 0.3s;
}

.menu li a:hover::after,
.menu li a.nuxt-link-active::after {
  width: 25%;
}

.menu .btn {
  font-size: initial;
  height: 25px;
  margin: 0 auto;
  padding: 0;
}

@media (min-width: 1024px) {
  .menu .btn {
    height: 55px;
    padding: 15px 30px;
  }
}

.menu .btn:hover {
  background: var(--dark-blue);
  color: var(--blue) !important;
}

@media (min-width: 1024px) {
  .menu .btn:hover {
    background: var(--blue);
    color: var(--dark-blue) !important;
  }
}
</style>
