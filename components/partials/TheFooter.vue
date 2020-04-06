<template>
  <footer id="footer">
    <div class="address-container">
      <footer-address />
      <footer-maps />
      <footer-phone />
    </div>
    <div class="about-container">
      <footer-about />
      <footer-email />
      <footer-social />
    </div>
    <footer-copy />
  </footer>
</template>

<script>
import FooterAddress from '@/components/partials/FooterAddress'
import FooterMaps from '@/components/partials/FooterMaps'
import FooterPhone from '@/components/partials/FooterPhone'
import FooterAbout from '@/components/partials/FooterAbout'
import FooterEmail from '@/components/partials/FooterEmail'
import FooterSocial from '@/components/partials/FooterSocial'
import FooterCopy from '@/components/partials/FooterCopy'

export default {
  components: {
    FooterAddress,
    FooterMaps,
    FooterPhone,
    FooterAbout,
    FooterEmail,
    FooterSocial,
    FooterCopy
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
