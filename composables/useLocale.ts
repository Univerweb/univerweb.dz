export function useLocale() {
  const { locale } = useI18n()

  return {
    isArabic: computed(() => locale.value === 'ar'),
    isFrench: computed(() => locale.value === 'fr'),
  }
}
