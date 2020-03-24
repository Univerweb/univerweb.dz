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
  padding: 0;
  list-style: none;
}

@media (max-width: 1024px) {
  .menu ul {
    padding-top: 45px;
  }
}

@media (min-width: 1024px) {
  .menu ul {
    grid-template-columns: repeat(3, auto);
    justify-content: space-around;
  }
}

.menu a {
  position: relative;
  display: block;
  color: var(--dark);
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.02em;
  text-decoration: none;
  text-transform: uppercase;
}

@media (max-width: 1024px) {
  .menu li a {
    font-size: 24px;
  }
}

@media (min-width: 1024px) {
  .menu a {
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

@media (max-width: 1024px) {
  .menu .btn {
    text-align: center;
    height: 25px;
    margin: 0 auto;
    padding: 0;
  }
}
</style>
