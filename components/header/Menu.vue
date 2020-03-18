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
    <nuxt-link to="/contact" class="contact">Contact</nuxt-link>
  </nav>
</template>

<style>
.menu {
  display: flex;
  flex-grow: 1;
  align-items: center;
}

.menu ul {
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
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

.menu a {
}

.menu a::after {
  position: absolute;
  display: block;
  content: '';
  color: var(--blue);
  border-top: 3px solid;
  width: 0%;
  transition: width 0.3s;
}

.menu a:hover::after,
.menu a.nuxt-link-active::after {
  width: 25%;
}
</style>
