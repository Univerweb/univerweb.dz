<template>
  <footer>
    <div>
      <Address />
      <Maps />
      <Phone />
    </div>
    <About />
    <Social />
    <Copy />
  </footer>
</template>

<script>
import Address from '~/components/footer/Address.vue'
import Maps from '~/components/footer/Maps.vue'
import Phone from '~/components/footer/Phone.vue'
import About from '~/components/footer/About.vue'
import Social from '~/components/footer/Social.vue'
import Copy from '~/components/footer/Copy.vue'

export default {
  components: {
    Address,
    Maps,
    Phone,
    About,
    Social,
    Copy
  }
}
</script>

<style>
footer {
  display: grid;
  gap: 45px 15px;
  background: var(--dark-blue);
  color: var(--light);
  padding: 120px 15px;
}

@media (min-width: 768px) {
  footer {
    padding: 120px 60px;
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
}

@media (min-width: 1200px) {
  footer {
    padding: 120px;
    grid-template-columns: auto auto auto;
  }
}

@media (min-width: 1800px) {
  footer {
    grid-template-columns: auto auto auto auto;
  }
}
</style>
