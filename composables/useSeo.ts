export const useSeo = () => {
  const { t, locale } = useI18n()
  const coma = useComa()
  const config = useRuntimeConfig()
  const baseUrl = config.public.baseURL

  const seo = {
    baseUrl,
    ogImage: computed(() => locale.value === 'ar' ? `${baseUrl}/images/univerweb-ar_share.jpg` : `${baseUrl}/images/univerweb_share.jpg`),
    streetAddress: computed(() => `${t('streetAddress')}${coma.value}${t('addressLocality')}`),
    addressLocality: computed(() => `${t('addressRegion')}${coma.value}${t('addressCountry')}`),
    breadcrumbItemOne: locale.value !== 'fr' ? `${baseUrl}/${locale.value}` : `${baseUrl}/`,
  }

  return seo
}
