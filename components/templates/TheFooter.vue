<template>
  <footer>
    <div>
      <address class="address" title="Adresse postale">
        <strong>{{ $t('footer.address.name') }}</strong
        ><br />{{ $t('footer.address.streetAddress') }}<br />{{ $t('footer.address.addressLocality') }} {{ $config.postalCode
        }}<span v-if="$i18n.locale === 'ar'">، </span><span v-else>, </span>{{ $t('footer.address.addressRegion') }}
      </address>
      <p>
        <a href="https://goo.gl/maps/MmadgQgZRBv" target="_blank" rel="noopener">{{ $t('footer.maps') }}</a>
      </p>
      <p>
        <a :href="'tel:+213' + $config.phone.slice(1).replace(/ /g, '')">
          <span class="visually-hidden">{{ $t('label.phone') }}</span>
          <span dir="ltr"> {{ $config.phone }}</span>
        </a>
        —
        <a :href="'tel:+213' + $config.mobile.slice(1).replace(/ /g, '')">
          <span class="visually-hidden">{{ $t('label.mobile') }}</span>
          <span dir="ltr">{{ $config.mobile }}</span>
        </a>
      </p>
    </div>
    <div>
      <AppAbout />
      <ul class="social">
        <li v-for="(value, name) in socials" :key="name">
          <a :href="value">
            <span class="visually-hidden">{{ $t('footer.social.' + name) }}</span>
            <Component :is="name + '-icon'"
          /></a>
        </li>
      </ul>
    </div>
    <div class="colorSwitcher">
      <button class="btn" @click="setCurrentTheme">
        <span>
          <DarkIcon :class="$colorMode.preference === 'dark' ? 'show' : 'hide'" />
          <SystemIcon :class="$colorMode.preference === 'system' ? 'show' : 'hide'" />
          <LightIcon :class="$colorMode.preference === 'light' ? 'show' : 'hide'" />
        </span>
        <transition name="from-bottom-to-bottom" mode="out-in">
          <span v-if="$colorMode.preference === 'dark'" key="dark">{{ $t('footer.colorMode.dark') }}</span>
          <span v-if="$colorMode.preference === 'system'" key="system"> {{ $t('footer.colorMode.system') }}</span>
          <span v-else-if="$colorMode.preference === 'light'" key="light">{{ $t('footer.colorMode.light') }}</span>
        </transition>
      </button>
    </div>
    <p class="copy">{{ $t('footer.copy') }}</p>
  </footer>
</template>

<script>
import TwitterIcon from '@/assets/icons/twitter.svg?inline'
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import LinkedinIcon from '@/assets/icons/linkedin.svg?inline'
import GithubIcon from '@/assets/icons/github.svg?inline'
import DarkIcon from '@/assets/icons/dark.svg?inline'
import SystemIcon from '@/assets/icons/system.svg?inline'
import LightIcon from '@/assets/icons/light.svg?inline'

export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    LinkedinIcon,
    GithubIcon,
    DarkIcon,
    SystemIcon,
    LightIcon
  },

  data() {
    return {
      socials: {
        twitter: 'https://twitter.com/Univerweb',
        facebook: 'https://www.facebook.com/Univerweb',
        linkedin: 'https://www.linkedin.com/company/Univerweb',
        github: 'https://github.com/Univerweb'
      }
    }
  },

  methods: {
    setCurrentTheme() {
      this.$colorMode.preference = this.$colorMode.preference === 'system' ? 'light' : this.$colorMode.preference === 'light' ? 'dark' : 'system'
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
    color: $secondary;
  }

  .lead {
    color: var(--color);
    transition: color $transition;
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
    }
  }

  .colorSwitcher {
    justify-self: start;
    @media (min-width: $md) {
      justify-self: end;
    }
    .btn {
      width: 140px;
      outline: 0;
      span:first-child {
        position: relative;
        width: 16px;
        height: 16px;
        svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 16px;
          height: 16px;
        }
        .show {
          animation: ShowIcon 300ms forwards;
        }
        .hide {
          animation: HideIcon 300ms forwards;
        }
      }
      .from-bottom-to-bottom-enter-active {
        opacity: 1;
        transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .from-bottom-to-bottom-leave-active {
        opacity: 1;
        transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .from-bottom-to-bottom-enter {
        opacity: 0;
        transform: scaleY(0);
      }
      .from-bottom-to-bottom-leave-active {
        opacity: 0;
        transform: scaleY(0);
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
