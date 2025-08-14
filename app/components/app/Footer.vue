<script setup lang="ts">
import { IconX, IconFacebook, IconLinkedIn, IconGitHub } from '#components'

const { t } = useI18n()
const config = useRuntimeConfig()

const socials = [
  { url: 'https://x.com/Univerweb', icon: IconX },
  { url: 'https://www.facebook.com/Univerweb', icon: IconFacebook },
  { url: 'https://www.linkedin.com/company/Univerweb', icon: IconLinkedIn },
  { url: 'https://github.com/Univerweb', icon: IconGitHub },
]
</script>

<template>
  <footer id="footer">
    <div>
      <address class="address" title="Adresse postale">
        <strong>{{ t('site.name') }}</strong><br>
        <a href="https://goo.gl/maps/MmadgQgZRBv" target="_blank" rel="noopener">
          {{ t('site.address.street') }}<br>
          <span dir="ltr">16 029</span> {{ t('site.address.locality') }}
        </a>
      </address>

      <p>
        <a href="tel:+213551904622" :aria-label="t('ariaLabels.mobile')" class="mobile">
          <IconMobile />
          <span dir="ltr">0551 90 46 22</span>
        </a>
      </p>
    </div>

    <p class="lead">
      {{ t('contact.about') }}
    </p>

    <div>
      <a :href="`mailto:${config.public.baseEmail}`" :aria-label="t('ariaLabels.email')" class="link outfit">
        {{ config.public.baseEmail }}
      </a>

      <ul class="socials">
        <li v-for="(social, index) in socials" :key="social.url">
          <a :href="social.url" :aria-label="`${t('ariaLabels.socials.joinUs')} ${t(`ariaLabels.socials.platforms.${index}`)}`">
            <Component :is="social.icon" />
          </a>
        </li>
      </ul>
    </div>

    <p class="copy">
      {{ t('site.copy', { year: new Date().getFullYear() }) }}
    </p>
  </footer>
</template>
