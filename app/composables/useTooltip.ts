export default function useTooltip() {
  const { locale } = useI18n()

  type LocaleType = 'fr' | 'en' | 'ar'

  const langNext = computed<[LocaleType, string]>(() =>
    locale.value === 'fr'
      ? ['en', 'Français']
      : locale.value === 'en'
        ? ['ar', 'English']
        : ['fr', 'العربية'],
  )

  const isLangNext = ref(false)

  function langTooltip() {
    isLangNext.value = true

    setTimeout(() => {
      isLangNext.value = false
    }, 2240)
  }

  return {
    langNext,
    isLangNext,
    langTooltip,
  }
}
