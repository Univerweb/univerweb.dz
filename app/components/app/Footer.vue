<script setup lang="ts">
import { IconX, IconFacebook, IconLinkedIn, IconGitHub } from '#components'

const { t, locale } = useI18n()
const config = useRuntimeConfig()

const icons = [
  IconX,
  IconFacebook,
  IconLinkedIn,
  IconGitHub,
]

const { data: footer } = await useAsyncData(
  () => `footer-${locale.value}`,
  () => queryCollection(`contact_${locale.value}`)
    .select('lead', 'address', 'platforms')
    .first(),
  { watch: [locale] },
)
</script>

<template>
  <footer v-if="footer" id="footer">
    <div>
      <address class="address" title="Adresse postale">
        <strong>{{ t('site.name') }}</strong><br>
        <a href="https://goo.gl/maps/MmadgQgZRBv" target="_blank" rel="noopener">
          {{ footer.address.streetAddress }}<br>
          <span dir="ltr">{{ footer.address.postalCode }}</span> {{ footer.address.addressLocality }}
        </a>
      </address>

      <p>
        <a :href="`tel:${config.public.baseMobile.replace(/\s/g, '')}`" :aria-label="t('ariaLabels.mobile')" class="mobile">
          <IconMobile />
          <span dir="ltr">{{ config.public.baseMobile }}</span>
        </a>
      </p>
    </div>

    <p class="lead">
      {{ footer.lead }}
    </p>

    <div>
      <a :href="`mailto:${config.public.baseEmail}`" :aria-label="t('ariaLabels.email')" class="link outfit">
        {{ config.public.baseEmail }}
      </a>

      <ul class="socials">
        <li v-for="(platform, index) in footer.platforms" :key="index">
          <a :href="platform.url" :aria-label="`${t('ariaLabels.joinUs')} ${platform.name}`">
            <Component :is="icons[index]" />
          </a>
        </li>
      </ul>
    </div>

    <p class="copy">
      {{ t('site.copy', { year: new Date().getFullYear() }) }}
    </p>
  </footer>
</template>
