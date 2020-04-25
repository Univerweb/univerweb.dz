<template>
  <footer>
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

<style lang="scss">
footer {
  display: grid;
  gap: 45px;
  background: $dark-blue;
  color: $light;
  padding: 45px 15px;
  @media (min-width: $sm) {
    & {
      padding: 135px 135px;
    }
  }
  @media (min-width: $md) {
    & {
      grid-template-columns: auto auto;
      justify-content: space-between;
      .address-container {
        grid-row: 1 / 1;
      }
      .about-container {
        grid-row: 1 / 3;
      }
    }
  }
  @media (min-width: $lg) {
    & {
      grid-template-columns: auto auto 160px;
      padding: 180px 270px;
    }
  }
  & a {
    color: $white;
    &:hover {
      color: $blue;
    }
  }
}
</style>
