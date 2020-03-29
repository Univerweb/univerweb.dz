<template>
  <footer id="footer">
    <div>
      <uni-address />
      <uni-maps />
      <uni-phone />
    </div>
    <uniAbout />
    <uniSocial />
    <uniCopy />
  </footer>
</template>

<script>
import uniAddress from '@/components/partials/FooterAddress'
import uniMaps from '@/components/partials/FooterMaps'
import uniPhone from '@/components/partials/FooterPhone'
import uniAbout from '@/components/partials/FooterAbout'
import uniSocial from '@/components/partials/FooterSocial'
import uniCopy from '@/components/partials/FooterCopy'

export default {
  components: {
    uniAddress,
    uniMaps,
    uniPhone,
    uniAbout,
    uniSocial,
    uniCopy
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
