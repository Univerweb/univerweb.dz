<script setup lang="ts">
const { t, tm, rt } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { menuOpen, closeMenu, toggleMenu } = useMenu()
const { theme, toggleTheme } = useTheme()
const { langNext, isLangNext, langTooltip } = useTooltip()

const menu = computed(() => tm('navigation.menu') as { label: string, path: string }[])
</script>

<template>
  <header class="header">
    <NuxtLink to="#main" class="skip">
      {{ t('actions.skipToContent') }}
    </NuxtLink>

    <NuxtLinkLocale to="/" class="logo" :aria-label="t('site.name')">
      <AppLogo />
    </NuxtLinkLocale>

    <nav id="main-navigation" class="nav" :style="{ '--item-total': menu.length }">
      <ul class="menu">
        <li v-for="(link, index) in menu" :key="index">
          <NuxtLinkLocale :to="rt(link.path)" active-class="active" :style="{ '--item-number': index }" @click.enter="closeMenu()">
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

      <button
        class="toggle-theme"
        type="button"
        role="switch"
        :aria-checked="theme !== 'light'"
        :aria-label="t(`ariaLabels.theme.${theme}`)"
        aria-live="polite"
        @click="toggleTheme"
      >
        <Transition name="toggle-theme" mode="out-in">
          <IconLightMode v-if="theme === 'light'" />
          <IconDarkMode v-else />
        </Transition>
      </button>

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
