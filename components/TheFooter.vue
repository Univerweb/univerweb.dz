<template>
  <footer>
    <div>
      <address class="address" title="Adresse postale">
        <strong>{{ $t('footer.address.name') }} </strong><br />{{ $t('footer.address.streetAddress') }}<br />{{ $t('footer.address.addressLocality') }}
        {{ $t('footer.address.postalCode') }}<span v-if="$i18n.locale === 'ar'">، </span><span v-else>, </span>{{ $t('footer.address.addressCity') }}
      </address>
      <p>
        <a href="https://goo.gl/maps/MmadgQgZRBv" target="_blank" rel="noopener">{{ $t('footer.maps') }}</a>
      </p>
      <p>
        <a href="tel:+21321440811">
          <span class="visually-hidden">{{ $t('footer.phone.label') }}</span>
          <span dir="ltr">{{ $t('footer.phone.number') }}</span>
        </a>
        —
        <a href="tel:+213551904622">
          <span class="visually-hidden">{{ $t('footer.mobile.label') }}</span>
          <span dir="ltr">{{ $t('footer.mobile.number') }}</span>
        </a>
      </p>
    </div>
    <div>
      <app-about />
      <ul class="social">
        <li v-for="(value, name) in socials" :key="name">
          <a :href="value">
            <span class="visually-hidden">{{ $t('footer.social.' + name) }}</span>
            <component :is="name + '-icon'"
          /></a>
        </li>
      </ul>
    </div>
    <p class="copy">{{ $t('footer.copy') }}</p>
  </footer>
</template>

<script>
import TwitterIcon from '@/assets/icons/twitter.svg?inline'
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import LinkedinIcon from '@/assets/icons/linkedin.svg?inline'
import GithubIcon from '@/assets/icons/github.svg?inline'

export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    LinkedinIcon,
    GithubIcon
  },

  data() {
    return {
      socials: {
        twitter: 'https://twitter.com/Univerweb',
        facebook: 'https://www.facebook.com/Univerweb',
        linkedin: 'https://www.linkedin.com/company/univerweb',
        github: 'https://github.com/Univerweb'
      }
    }
  }
}
</script>

<style lang="scss">
footer {
  padding: 48px 24px;
  display: grid;
  justify-content: space-between;
  gap: 48px;
  @media (min-width: $sm) {
    grid-template-columns: auto auto;
    padding: 96px 48px;
  }
  @media (min-width: $md) {
    grid-template-columns: 1fr auto 1fr;
    padding: 144px 96px;
  }

  address {
    font-style: normal;
  }

  a:hover {
    color: $blue;
  }

  .lead {
    color: $black;
    @media (min-width: $sm) {
      max-width: 310px;
    }
  }

  .social {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    max-width: 210px;
    @media (min-width: $sm) {
      max-width: 295px;
    }
    margin: 12px 0 0;
    padding: 0;
    list-style: none;
    a {
      display: grid;
      svg {
        height: 24px;
      }
    }
  }

  .copy {
    max-width: 170px;
    font-size: 0.8rem;
    line-height: 1.875;
  }
}
</style>
