export default function useTooltip() {
  const { locale } = useI18n()

  const langNext = computed(() =>
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
    }, 2000)
  }

  return {
    langNext,
    isLangNext,
    langTooltip,
  }
}
