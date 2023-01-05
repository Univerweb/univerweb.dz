<template>
  <footer>
    <div>
      <address class="address" title="Adresse postale">
        <strong>{{ t('name') }}</strong>
        <br />
        {{ t('address.streetAddress') }}
        <br />
        {{ t('address.addressLocality') }}
        {{ t('address.postalCode') }}<span v-if="locale === 'ar'"> ، </span><span v-else>, </span>
        {{ t('address.addressRegion') }}
      </address>

      <p>
        <a href="https://goo.gl/maps/MmadgQgZRBv" target="_blank" rel="noopener">{{ t('maps') }}</a>
      </p>

      <p>
        <a :href="`tel:+213${t('phone.value').slice(1).replace(/ /g, '')}`">
          <span class="visually-hidden">{{ t('phone.label') }}</span>
          <span dir="ltr">{{ t('phone.value') }}</span>
        </a>
        —
        <a :href="`tel:+213${t('mobile.value').slice(1).replace(/ /g, '')}`">
          <span class="visually-hidden">{{ t('mobile.label') }}</span>
          <span dir="ltr">{{ t('mobile.value') }}</span>
        </a>
      </p>
    </div>

    <div>
      <AppAbout />

      <ul class="social">
        <li v-for="social in tm('socials')">
          <a :href="rt(social.url)">
            <span class="visually-hidden">{{ rt(social.value) }}</span>
            <NuxtIcon :name="rt(social.name)" />
          </a>
        </li>
      </ul>
    </div>

    <div class="colorSwitcher">
      <button @click="toggleDark">
        <template v-if="color.value === 'dark'">
          <NuxtIcon name="dark" :class="color.value === 'dark' ? 'show' : 'hide'" />
          <span class="visually-hidden">
            {{ t('colorMode.dark') }}
          </span>
        </template>

        <template v-else>
          <NuxtIcon name="light" :class="color.value === 'light' ? 'show' : 'hide'" />
          <span class="visually-hidden">
            {{ t('colorMode.light') }}
          </span>
        </template>
      </button>
    </div>

    <p class="copy">{{ t('copy') }}</p>
  </footer>
</template>

<script setup lang="ts">
const { locale, t, tm, rt } = useI18n()
const color = useColorMode()

const toggleDark = () => {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
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
    button {
      background-color: transparent;
      color: var(--secondary);
      outline: 0;
      .show {
        animation: show-icon 300ms forwards;
      }
      .hide {
        animation: hide-icon 300ms forwards;
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
