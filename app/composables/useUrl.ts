export function useUrl() {
  const { locale, defaultLocale } = useI18n()
  const config = useRuntimeConfig()
  const baseUrl = (path: string) => `${config.public.baseURL}${path}`

  return {
    baseUrl,
    localeBaseUrl: computed(() => locale.value !== defaultLocale ? baseUrl(`/${locale.value}`) : baseUrl('/')),
  }
}
