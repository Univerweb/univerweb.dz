export function useBreadcrumb() {
  const { locale } = useI18n()
  const config = useRuntimeConfig()

  return locale.value !== 'fr' ? `${config.public.baseURL}/${locale.value}` : `${config.public.baseURL}/`
}
