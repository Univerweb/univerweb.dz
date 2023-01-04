<template>
  <footer v-if="common">
    <div>
      <address class="address" title="Adresse postale">
        <strong>{{ t('name') }}</strong>
        <br />
        {{ t('address.streetAddress') }}
        <br />
        {{ t('address.addressLocality') }}
        {{ common.postalCode }}<span v-if="coma">، </span><span v-else>, </span>
        {{ t('address.addressRegion') }}
      </address>

      <p>
        <a href="https://goo.gl/maps/MmadgQgZRBv" target="_blank" rel="noopener">{{ t('maps') }}</a>
      </p>

      <p>
        <a :href="`tel:+213${common.phone.slice(1).replace(/ /g, '')}`">
          <span class="visually-hidden">{{ t('phone') }}</span>
          <span dir="ltr">{{ common.phone }}</span>
        </a>
        —
        <a :href="`tel:+213${common.mobile.slice(1).replace(/ /g, '')}`">
          <span class="visually-hidden">{{ t('mobile') }}</span>
          <span dir="ltr">{{ common.mobile }}</span>
        </a>
      </p>
    </div>

    <div>
      <AppAbout />

      <ul class="social">
        <li v-for="(value, name) in common.social" :key="name">
          <a :href="value">
            <span class="visually-hidden">{{ t(`social.${name}`) }}</span>
            <NuxtIcon :name="`${name}`" />
          </a>
        </li>
      </ul>
    </div>

    <div class="colorSwitcher">
      <button class="btn" @click="setCurrentMode">
        <span>
          <NuxtIcon name="dark" filled :class="colorMode.preference === 'dark' ? 'show' : 'hide'" />
          <NuxtIcon name="system" filled :class="colorMode.preference === 'system' ? 'show' : 'hide'" />
          <NuxtIcon name="light" filled :class="colorMode.preference === 'light' ? 'show' : 'hide'" />
        </span>
        <Transition name="from-bottom-to-bottom" mode="out-in">
          <span v-if="colorMode.preference === 'dark'">
            {{ t('colorMode.dark') }}
          </span>
          <span v-else-if="colorMode.preference === 'system'">
            {{ t('colorMode.system') }}
          </span>
          <span v-else-if="colorMode.preference === 'light'">
            {{ t('colorMode.light') }}
          </span>
        </Transition>
      </button>
    </div>

    <p class="copy">{{ t('copy') }}</p>
  </footer>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const colorMode = useColorMode()

const { data: common } = await useAsyncData('footerCommon', () => queryContent('common').only(['social', 'phone', 'mobile', 'postalCode']).findOne())

const coma = locale.value === 'ar'

const setCurrentMode = () => (colorMode.preference = colorMode.preference === 'system' ? 'light' : colorMode.preference === 'light' ? 'dark' : 'system')
</script>

<style lang="scss">
footer {
  padding: 24px 12px;
  display: grid;
  justify-content: space-between;
  gap: 24px;
  @media (min-width: $xs) {
    padding: 32px 16px;
    gap: 32px;
  }
  @media (min-width: $sm) {
    padding: 48px 24px;
    gap: 48px;
  }
  @media (min-width: $md) {
    grid-template-columns: auto auto;
    padding: 96px 48px;
  }
  @media (min-width: $lg) {
    grid-template-columns: 1fr auto 1fr;
    padding: 144px 96px;
  }

  address {
    font-style: normal;
  }

  a:hover {
    color: $primary;
  }

  .lead {
    color: var(--textPrimary);
    transition: color $transition;
    @media (min-width: $md) {
      max-width: 310px;
    }
  }

  .social {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    max-width: 210px;
    @media (min-width: $md) {
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
    @media (min-width: $lg) {
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
          animation: show-icon 300ms forwards;
        }
        .hide {
          animation: hide-icon 300ms forwards;
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
