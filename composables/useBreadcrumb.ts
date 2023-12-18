export function useBreadcrumb() {
  const { locale } = useI18n()
  const config = useRuntimeConfig()

  return computed(() => locale.value !== 'fr' ? `${config.public.baseURL}/${locale.value}` : `${config.public.baseURL}/`)
}
