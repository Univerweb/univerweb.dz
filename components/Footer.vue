<template>
  <footer>
    <div>
      <div>
        <Address />
        <Maps />
        <Phone />
      </div>
      <About />
      <Social />
    </div>
    <Copy />
  </footer>
</template>

<script>
import Address from '~/components/footer/Address.vue'
import Maps from '~/components/footer/Maps.vue'
import Phone from '~/components/footer/Phone.vue'
import Copy from '~/components/footer/Copy.vue'
import About from '~/components/footer/About.vue'
import Social from '~/components/footer/Social.vue'

export default {
  components: {
    Address,
    Maps,
    Phone,
    Copy,
    About,
    Social
  }
}
</script>

<style>
footer {
  justify-content: space-between;
  background: var(--dark-blue);
  color: var(--light);
  padding: 120px;
}

footer > div {
  display: flex;
  justify-content: space-between;
}
</style>
