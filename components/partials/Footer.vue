<template>
  <footer id="footer">
    <div class="address-container">
      <uni-address />
      <uni-maps />
      <uni-phone />
    </div>
    <div class="about-container">
      <uniAbout />
      <uniEmail />
      <uniSocial />
    </div>
    <uniCopy />
  </footer>
</template>

<script>
import uniAddress from '@/components/partials/FooterAddress'
import uniMaps from '@/components/partials/FooterMaps'
import uniPhone from '@/components/partials/FooterPhone'
import uniAbout from '@/components/partials/FooterAbout'
import uniEmail from '@/components/partials/FooterEmail'
import uniSocial from '@/components/partials/FooterSocial'
import uniCopy from '@/components/partials/FooterCopy'

export default {
  components: {
    uniAddress,
    uniMaps,
    uniPhone,
    uniAbout,
    uniEmail,
    uniSocial,
    uniCopy
  }
}
</script>

<style>
footer {
  display: grid;
  grid-template-areas: 'address-container' 'about-container' 'copy';
  gap: 45px;
  background: var(--dark-blue);
  color: var(--light);
  padding: 45px 15px;
}

@media (min-width: 1024px) {
  footer {
    grid-template-areas: 'address-container about-container' 'copy about-container';
    justify-content: space-between;
    padding: 135px 135px;
  }
}

@media (min-width: 1440px) {
  footer {
    grid-template-columns: auto auto 180px;
    grid-template-areas: 'address-container about-container copy' 'address-container about-container copy';
    padding: 180px 270px;
  }
}

.address-container {
  grid-area: address-container;
}

.about-container {
  grid-area: about-container;
}

footer a {
  color: var(--white);
}

footer a:hover {
  color: var(--blue);
}
</style>
