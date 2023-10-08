<script setup lang="ts">
export interface Locales {
  code: string
  name: string
}

const { t, locale, locales } = useI18n()

const currentLocales = computed(() => {
  const filteredLocales = locales.value.filter((item) => {
    if (typeof item === 'string')
      return item === locale.value

    else
      return item.code === locale.value
  })
  return filteredLocales as Locales[]
})

const switchLocalePath = useSwitchLocalePath()
const lang = computed(() => locale.value === 'fr' ? 'en' : locale.value === 'en' ? 'ar' : 'fr')

const color = useColorMode()
function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="switchers">
    <span v-for="l in currentLocales" :key="l.code" class="lang">
      {{ l.name }}
    </span>
    <NuxtLink :to="switchLocalePath(lang)">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" role="img">
        <path d="m12.87 15.07-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z" />
      </svg>
    </NuxtLink>

    <button :aria-label="t(`colorMode.${color.preference}`)" type="button" @click="toggleDark">
      <Transition name="color-scale">
        <svg v-if="$colorMode.preference === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" role="img">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </Transition>
      <Transition name="color-scale">
        <svg v-if="$colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" viewBox="0 0 24 24" role="img">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </Transition>
    </button>
  </div>
</template>
