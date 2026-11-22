<script setup lang="ts">
const head = useLocaleHead()
const { y } = useWindowScroll()
const { t, locale, finalizePendingLocaleChange } = useI18n()
const { baseUrl } = useUrl()
const config = useRuntimeConfig()

const { data: contact } = useAsyncData(
  () => `organization-${locale.value}`,
  () => queryCollection(`contact_${locale.value}`)
    .select('address', 'platforms')
    .first(),
  { watch: [locale] },
)

useSchemaOrg([
  defineOrganization({
    name: () => t('site.name'),
    url: baseUrl('/'),
    logo: baseUrl('/favicon.svg'),
    image: () => baseUrl(`/images/univerweb${locale.value === 'ar' ? '-ar' : ''}.png`),
    email: config.public.baseEmail,
    telephone: config.public.baseMobile,
    sameAs: () => contact.value?.platforms?.map(p => p.url) ?? [],
    address: () => contact.value?.address
      ? {
          streetAddress: contact.value.address.streetAddress,
          postalCode: contact.value.address.postalCode,
          addressLocality: contact.value.address.addressLocality,
          addressRegion: contact.value.address.addressLocality,
          addressCountry: 'DZ',
        }
      : undefined,
    founder: {
      '@type': 'Person',
      '@id': baseUrl('/#founder'),
      'name': 'Houssem Nedjar',
      'alternateName': 'Hocem Nedjar',
      'jobTitle': () => t('site.founderJobTitle'),
      'sameAs': ['https://x.com/HoussemNedjar'],
    },
  }),
])

useHead({
  htmlAttrs: {
    lang: () => head.value.htmlAttrs!.lang,
    dir: () => head.value.htmlAttrs!.dir as 'ltr' | 'rtl',
    class: { scrolled: () => y.value > 0 },
  },
})

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right, var(--blue) 0%, var(--text-color-heading) 50%, var(--blue)  100%)" />
  <NuxtLayout>
    <AppHeader />
    <NuxtPage id="main" :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
    <LazyAppFooter />
  </NuxtLayout>
</template>
