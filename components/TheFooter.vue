<template>
  <footer>
    <div class="address-container">
      <address class="address" title="Adresse postale">
        <strong>{{ $t('footer.address.name') }} </strong><br />
        {{ $t('footer.address.streetAddress') }}<br />
        {{ $t('footer.address.addressLocality') }}
        {{ $t('footer.address.postalCode') }},
        {{ $t('footer.address.addressCity') }}
      </address>
      <p>
        <a
          href="https://goo.gl/maps/MmadgQgZRBv"
          target="_blank"
          rel="noopener"
        >
          {{ $t('footer.maps') }}
        </a>
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
    <div class="about-container">
      <app-about />
      <app-mail />
      <ul class="social">
        <li v-for="(social, index) in socials" :key="index">
          <a :href="social.link">
            <span class="visually-hidden">
              {{ $t('footer.social.' + social.slug) }}
            </span>
            <component :is="social.slug + '-icon'" />
          </a>
        </li>
      </ul>
    </div>
    <p class="copy">{{ $t('footer.copy') }}</p>
  </footer>
</template>

<script>
import AppAbout from '@/components/common/AppAbout'
import AppMail from '@/components/common/AppMail'
import TwitterIcon from '@/assets/icons/twitter.svg?inline'
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import GithubIcon from '@/assets/icons/github.svg?inline'

export default {
  components: {
    AppAbout,
    AppMail,
    TwitterIcon,
    FacebookIcon,
    GithubIcon
  },

  data() {
    return {
      socials: [
        {
          link: 'https://twitter.com/Univerweb',
          slug: 'twitter'
        },
        {
          link: 'https://www.facebook.com/Univerweb',
          slug: 'facebook'
        },
        {
          link: 'https://github.com/Univerweb',
          slug: 'github'
        }
      ]
    }
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
    padding: 135px 135px;
  }
  @media (min-width: $md) {
    grid-template-columns: auto auto;
    justify-content: space-between;
    .address-container {
      grid-row: 1 / 1;
    }
    .about-container {
      grid-row: 1 / 3;
    }
  }
  @media (min-width: $lg) {
    grid-template-columns: auto auto 160px;
    padding: 180px 270px;
  }
  & a {
    color: $white;
    &:hover {
      color: $blue;
    }
  }
  & .about {
    font-size: inherit;
    font-weight: 500;
    max-width: 310px;
  }
}

address {
  font-style: normal;
}

.link {
  font-family: $font;
  [lang='ar'] & {
    font-family: $font-arabe;
  }
  font-size: 1.25rem;
  @media (min-width: $sm) {
    font-size: 1.75rem;
  }
  font-weight: 500;
  &:hover {
    color: $blue;
  }
}

.social {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 15px;
  justify-content: space-between;
  max-width: 295px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
  & a {
    display: grid;
    & svg {
      height: 20px;
      fill: $blue;
      transition: opacity $transition;
      &:hover {
        opacity: 0.5;
      }
    }
  }
}

.copy {
  font-size: 0.8rem;
}
</style>
