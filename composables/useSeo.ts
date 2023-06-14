export default function () {
  const config = useRuntimeConfig()
  const route = useRoute()
  const { t, locale } = useI18n()

  const baseUrl = config.public.baseURL
  const coma = computed(() => (locale.value === 'ar' ? '، ' : ', '))

  const seo = {
    baseUrl,
    coma,
    ogUrl: () => `${seo.baseUrl}${route.path}`,
    ogImage: () => locale.value === 'ar' ? `${baseUrl}/images/share/univerweb-ar.jpg` : `${baseUrl}/images/share/univerweb.jpg`,
    streetAddress: () => `${t('streetAddress')}${coma.value}${t('addressLocality')}`,
    addressLocality: () => `${t('addressRegion')}${coma.value}${t('addressCountry')}`,
    breadcrumbItemOne: locale.value !== 'fr' ? `${baseUrl}/${locale.value}` : `${baseUrl}/`,
  }

  return seo
}
