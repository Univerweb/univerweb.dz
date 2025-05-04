export default function useTooltip() {
  const { locale } = useI18n()
  const lang = { fr: ['en', 'Français'], en: ['ar', 'English'], ar: ['fr', 'العربية'] }

  const langNext = computed(() => lang[locale.value])

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
