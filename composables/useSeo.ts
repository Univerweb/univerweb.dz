export const useSeoItem = () => {
  const { locale } = useI18n()
  const config = useRuntimeConfig()
  const baseUrl = config.public.baseURL

  return computed(() => (locale.value !== 'fr' ? `${baseUrl}/${locale.value}` : `${baseUrl}/`))
}
