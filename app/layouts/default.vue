<script setup lang="ts">
const head = useLocaleHead()
const { y } = useWindowScroll()
const { theme } = useTheme()

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang,
    dir: head.value.htmlAttrs!.dir as 'ltr' | 'rtl',
    class: { scrolled: y, [`theme-${theme.value}`]: true },
  },

  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', href: '/site.webmanifest' },
    ...(head.value.link || []),
  ],
}))
</script>

<template>
  <slot />
</template>
