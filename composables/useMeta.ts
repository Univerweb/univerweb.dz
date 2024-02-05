export function useMeta(page: string) {
  const { t } = useI18n()

  const title = () => t(`${page}.title`)
  const description = () => t(`${page}.desc`)

  return {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
  }
}
