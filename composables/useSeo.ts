export const useSeo = () => {
  const { t, locale } = useI18n()
  const route = useRoute()
  const coma = useComa()
  const config = useRuntimeConfig()
  const baseUrl = config.public.baseURL

  const seo = {
    name: computed(() => t('name')),
    title: computed(() => t('title')),
    desc: computed(() => t('desc')),
    baseUrl,
    logo: `${baseUrl}/logo.svg`,
    email: config.public.baseEmail,
    managerEmail: config.public.managerEmail,
    supportEmail: config.public.supportEmail,
    mobile: t('mobile'),
    phone: t('phone'),
    ogUrl: computed(() => `${baseUrl}${route.path}`),
    ogImage: computed(() => locale.value === 'ar' ? `${baseUrl}/images/univerweb-ar_share.jpg` : `${baseUrl}/images/univerweb_share.jpg`),
    ogImageAlt: computed(() => `${t('name')} — ${t('title')}`),
    streetAddress: computed(() => `${t('streetAddress')}${coma.value}${t('addressLocality')}`),
    postalCode: t('postalCode'),
    addressLocality: computed(() => `${t('addressRegion')}${coma.value}${t('addressCountry')}`),
    twitter: t('twitter'),
    facebook: t('facebook'),
    linkedin: t('linkedin'),
    github: t('github'),
    breadcrumbItemOne: computed(() => locale.value !== 'fr' ? `${baseUrl}/${locale.value}` : `${baseUrl}/`),
    works: {
      title: computed(() => t('works.title')),
      desc: computed(() => t('works.desc')),
    },
    contact: {
      title: computed(() => t('contact.title')),
      desc: computed(() => t('contact.desc')),
    },
  }

  return seo
}
