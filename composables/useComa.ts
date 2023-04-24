export default function () {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'ar' ? '، ' : ', '))
}
