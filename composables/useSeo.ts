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
    mobile: t('mobile.value'),
    phone: t('phone.value'),
    ogUrl: computed(() => `${baseUrl}${route.path}`),
    ogImage: computed(() => locale.value === 'ar' ? `${baseUrl}/images/univerweb-ar_share.jpg` : `${baseUrl}/images/univerweb_share.jpg`),
    ogImageAlt: computed(() => `${t('name')} — ${t('title')}`),
    streetAddress: computed(() => `${t('address.streetAddress')}${coma.value}${t('address.addressLocality')}`),
    postalCode: t('address.postalCode'),
    addressLocality: computed(() => `${t('address.addressRegion')}${coma.value}${t('address.addressCountry')}`),
    breadcrumbItemOne: computed(() => locale.value !== 'fr' ? `${baseUrl}/${locale.value}` : `${baseUrl}/`),
    works: {
      title: computed(() => t('works.title')),
      desc: computed(() => t('works.desc')),
    },
    presta: {
      title: computed(() => t('presta.title')),
      desc: computed(() => t('presta.desc')),
    },
    agency: {
      title: computed(() => t('agency.title')),
      desc: computed(() => t('agency.desc')),
    },
    contact: {
      title: computed(() => t('contact.title')),
      desc: computed(() => t('contact.desc')),
    },
  }

  return seo
}
