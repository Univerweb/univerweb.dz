export function useUrl() {
  const { locale } = useI18n()
  const route = useRoute()
  const config = useRuntimeConfig()

  const baseUrl = config.public.baseURL

  return {
    baseUrl,
    localeBaseUrl: computed(() => locale.value !== 'fr' ? `${baseUrl}/${locale.value}` : `${baseUrl}/`),
    ogUrl: computed(() => `${baseUrl}${route.path}`),
    ogImage: computed(() => locale.value === 'ar' ? `${baseUrl}/images/univerweb-ar.jpg` : `${baseUrl}/images/univerweb.jpg`),
  }
}
