export default function useTooltip() {
  const { locale } = useI18n()

  const langMap: Record<string, ['fr' | 'en' | 'ar', string]> = {
    fr: ['en', 'Français'],
    en: ['ar', 'English'],
    ar: ['fr', 'العربية'],
  }

  const langNext = computed<['fr' | 'en' | 'ar', string]>(() => langMap[locale.value] || ['en', 'Français'])

  const isLangNext = ref(false)

  function durationBase() {
    const value = getComputedStyle(document.documentElement).getPropertyValue('--duration-base').trim()

    return value.endsWith('ms') ? Number.parseFloat(value) : Number.parseFloat(value) * 1000
  }

  function langTooltip() {
    isLangNext.value = true

    // Délai (--duration-base × 1) + animation tooltip-lang (× 10), cf. _header.scss
    setTimeout(() => {
      isLangNext.value = false
    }, durationBase() * 11)
  }

  return {
    langNext,
    isLangNext,
    langTooltip,
  }
}
