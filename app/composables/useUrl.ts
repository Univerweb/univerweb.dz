export function useUrl() {
  const { locale, defaultLocale } = useI18n()
  const route = useRoute()
  const config = useRuntimeConfig()
  const baseUrl = (path: string) => `${config.public.baseURL}${path}`
  const localePath = useLocalePath()
  const locales = { fr: 'fr_FR', en: 'en_US', ar: 'ar_DZ' }

  return {
    baseUrl,
    localeBaseUrl: computed(() => locale.value !== defaultLocale ? baseUrl(`/${locale.value}`) : baseUrl('/')),
    ogUrl: computed(() => baseUrl(route.path)),
    ogImage: computed(() => baseUrl(`/images/univerweb${locale.value === 'ar' ? '-ar' : ''}.jpg`)),
    ogLocale: computed(() => locales[locale.value]),
    ogLocaleAlternate: computed(() => Object.values(locales).filter(localeCode => localeCode !== locales[locale.value])),
    linkAltFr: computed(() => baseUrl(localePath(route.path, 'fr'))),
    linkAltEn: computed(() => baseUrl(localePath(route.path, 'en'))),
    linkAltAr: computed(() => baseUrl(localePath(route.path, 'ar'))),
  }
}
