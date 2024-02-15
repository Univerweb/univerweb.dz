<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()

const socials = [
  { url: 'https://twitter.com/Univerweb', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { url: 'https://www.facebook.com/Univerweb', path: 'M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4h-3v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.4 0 2.7.3 2.7.3v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8V24c5.8-.9 10.2-5.9 10.2-11.9z' },
  { url: 'https://www.linkedin.com/company/Univerweb', path: 'M24 1.8v20.5c0 1-.8 1.8-1.8 1.8H1.8c-1 0-1.8-.8-1.8-1.8V1.8C0 .8.8 0 1.8 0h20.5c.9 0 1.7.8 1.7 1.8zM7.2 9H3.5v11.5h3.6V9zm.2-3.7c0-1.2-.9-2.1-2.1-2.1s-2 .9-2 2.1.9 2.1 2.1 2.1 2-.9 2-2.1zm13.1 8.1c0-3.5-2.2-4.7-4.2-4.7-1.9 0-3.1 1.2-3.4 1.9V9H9.3v11.5h3.6v-6.2c0-1.7 1-2.5 2.1-2.5 1 0 1.8.6 1.8 2.4v6.3h3.6l.1-7.1z' },
  { url: 'https://github.com/Univerweb', path: 'M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6.3 12 .3z' },
]

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer>
    <div>
      <address class="address" title="Adresse postale">
        <strong>{{ t('name') }}</strong><br>
        {{ t('streetAddress') }}<br>
        <span dir="ltr">16 029</span> {{ t('addressLocality') }}
      </address>

      <p>
        <a href="https://goo.gl/maps/MmadgQgZRBv" target="_blank" rel="noopener">
          {{ t('maps') }}
        </a>
      </p>

      <p>
        <a href="tel:+21321440811" :aria-label="t('phoneLabel')">
          <span dir="ltr">021 44 08 11</span>
        </a>
        —
        <a href="tel:+213551904622" :aria-label="t('mobileLabel')">
          <span>{{ t('mobileLabel') }}</span>
          <span dir="ltr">0551 90 46 22</span>
        </a>
      </p>
    </div>

    <p class="lead">
      {{ t('contact.about') }}
    </p>

    <div>
      <a :href="`mailto:${config.public.baseEmail}`" :aria-label="t('emailLabel')" class="link outfit">
        {{ config.public.baseEmail }}
      </a>

      <ul class="socials">
        <li v-for="(social, value) in socials" :key="social.url">
          <a :href="social.url" :aria-label="`${t('join')} ${t(`socialsName.${value}`)}`">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
              <path :d="social.path" />
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <p class="copy">
      {{ t('copy', { year: currentYear }) }}
    </p>
  </footer>
</template>
