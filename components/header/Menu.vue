<template>
  <nav class="menu">
    <ul>
      <li>
        <nuxt-link to="/realisations">
          Réalisations
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/prestations">
          Prestations
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/agence">
          L'agence
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/contact" class="btn">Contact</nuxt-link>
  </nav>
</template>

<style>
.menu {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.menu ul {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu a {
  position: relative;
  display: block;
  color: var(--dark);
  font-weight: 600;
  line-height: 25px;
  letter-spacing: -0.02em;
  text-decoration: none;
  text-transform: uppercase;
}

.menu a.contact {
  background: var(--dark-blue);
  color: var(--blue);
  padding: 15px 30px;
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
</style>
