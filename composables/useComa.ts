export const useComa = () => {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'ar' ? '، ' : ', '))
}
