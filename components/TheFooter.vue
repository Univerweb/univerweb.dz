<script setup lang="ts">
const { locale, t, tm, rt } = useI18n()
</script>

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
        <li v-for="social in tm('socials')" :key="rt(social.name)">
          <a :href="rt(social.url)">
            <span class="visually-hidden">{{ rt(social.value) }}</span>
            <NuxtIcon :name="rt(social.name)" />
          </a>
        </li>
      </ul>
    </div>

    <p class="copy">
      {{ t('copy') }}
    </p>
  </footer>
</template>

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

  .copy {
    max-width: 170px;
    font-size: 0.8rem;
    line-height: 1.875;
  }
}
</style>
