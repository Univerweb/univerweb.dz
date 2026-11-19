<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()

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
        {{ footer.address.streetAddress }}<br>
        <span dir="ltr">{{ footer.address.postalCode }}</span> {{ footer.address.addressLocality }}
      </address>

      <p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=36.720937,3.047607" target="_blank" rel="noopener">
          {{ t('actions.directions') }}
        </a>
      </p>

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
      <a :href="`mailto:${config.public.baseEmail}`" :aria-label="t('ariaLabels.email')" class="link outfit" dir="ltr">
        {{ config.public.baseEmail }}
      </a>

      <ul class="socials">
        <li v-for="(platform, index) in footer.platforms" :key="index">
          <a :href="platform.url" :aria-label="`${t('ariaLabels.joinUs')} ${platform.name}`">
            <component :is="platform.icon" />
          </a>
        </li>
      </ul>
    </div>

    <div class="copy">
      <p>
        {{ t('footer.copy', { year: new Date().getFullYear() }) }}
      </p>

      <ul>
        <li>
          <NuxtLinkLocale to="/mentions-legales">
            {{ t('footer.legal') }}
          </NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="/politique-de-confidentialite">
            {{ t('footer.privacy') }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </div>
  </footer>
</template>
