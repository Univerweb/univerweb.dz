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
  gap: 45px;
  background: var(--dark-blue);
  color: var(--light);
  padding: 45px 15px;
}

@media (min-width: 1024px) {
  footer {
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    padding: 135px 135px;
  }
}

@media (min-width: 1440px) {
  footer {
    padding: 180px 270px;
  }
}

@media (min-width: 1920px) {
  footer {
    grid-template-columns: repeat(4, auto);
  }
}
</style>
