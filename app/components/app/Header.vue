<script setup lang="ts">
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { menuOpen, closeMenu, toggleMenu } = useMenu()
const mode = useColorMode({ disableTransition: false })
const { langNext, isLangNext, langTooltip } = useTooltip()

interface Link {
  path: string
  label: string
}

const skipLink = computed(() => tm('actions.skipLink') as Link[])
const menu = computed(() => tm('navigation.menu') as Link[])
</script>

<template>
  <header id="header">
    <NuxtLinkLocale v-for="link in skipLink" :key="link.path" :to="`${$route.path}#${rt(link.path)}`" class="btn skip-link">
      {{ rt(link.label) }}
    </NuxtLinkLocale>

    <NuxtLinkLocale to="/" class="logo" :aria-label="t('site.name')">
      <AppLogo />
    </NuxtLinkLocale>

    <nav id="main-navigation" class="nav" :style="{ '--item-total': menu.length }">
      <ul class="menu">
        <li v-for="(link, index) in menu" :key="index">
          <NuxtLinkLocale :to="rt(link.path)" active-class="active" :class="{ active: $route.path.startsWith(localePath(rt(link.path))) }" :style="{ '--item-number': index }" @click.enter="closeMenu()">
            {{ rt(link.label) }}
          </NuxtLinkLocale>
        </li>
      </ul>
    </nav>

    <div class="switchers">
      <NuxtLink
        :to="switchLocalePath(langNext[0])"
        class="toggle-lang"
        :aria-label="t('ariaLabels.langSwitch')"
        @click="langTooltip"
      >
        <IconLangSwitch />
        <span class="tooltip-lang" :class="{ active: isLangNext }">
          {{ langNext[1] }}
        </span>
      </NuxtLink>

      <ClientOnly>
        <button
          class="toggle-theme"
          type="button"
          role="switch"
          :aria-checked="mode === 'dark'"
          :aria-label="t(`ariaLabels.theme.${mode}`)"
          aria-live="polite"
          @click="mode = mode === 'light' ? 'dark' : 'light'"
        >
          <Transition name="toggle-theme" mode="out-in">
            <IconDarkMode v-if="mode === 'dark'" />
            <IconLightMode v-else />
          </Transition>
        </button>
      </ClientOnly>

      <button
        class="toggle-menu"
        type="button"
        :aria-expanded="menuOpen"
        :aria-label="t(`ariaLabels.menu.${menuOpen ? 'close' : 'open'}`)"
        aria-controls="main-navigation"
        aria-live="polite"
        @click="toggleMenu"
      >
        <span class="top" />
        <span class="middle" />
        <span class="bottom" />
      </button>
    </div>
  </header>
</template>
