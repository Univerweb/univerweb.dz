export default function () {
  const config = useRuntimeConfig()
  const route = useRoute()
  const { t, locale } = useI18n()

  const baseUrl = config.public.baseURL
  const baseEmail = config.public.baseEmail
  const coma = useComa()

  const seo = {
    baseUrl,
    baseEmail,
    coma,
    ogUrl: () => `${baseUrl}${route.path}`,
    ogImage: () => locale.value === 'ar' ? `${baseUrl}/images/univerweb-ar.jpg` : `${baseUrl}/images/univerweb.jpg`,
    streetAddress: () => `${t('streetAddress')}${coma.value}${t('addressLocality')}`,
    addressLocality: () => `${t('addressRegion')}${coma.value}${t('addressCountry')}`,
    logo: `${baseUrl}/logo.svg`,
    breadcrumbItemOne: locale.value !== 'fr' ? `${baseUrl}/${locale.value}` : `${baseUrl}/`,
  }

  return seo
}
