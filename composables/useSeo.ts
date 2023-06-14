export default function () {
  const config = useRuntimeConfig()
  const baseUrl = config.public.baseURL
  const { t, locale } = useI18n()

  const coma = computed(() => (locale.value === 'ar' ? '، ' : ', '))

  const seo = {
    baseUrl,
    coma,
    ogImage: computed(() => locale.value === 'ar' ? `${baseUrl}/images/share/univerweb-ar.jpg` : `${baseUrl}/images/share/univerweb.jpg`),
    streetAddress: computed(() => `${t('streetAddress')}${coma.value}${t('addressLocality')}`),
    addressLocality: computed(() => `${t('addressRegion')}${coma.value}${t('addressCountry')}`),
    breadcrumbItemOne: locale.value !== 'fr' ? `${baseUrl}/${locale.value}` : `${baseUrl}/`,
  }

  return seo
}
