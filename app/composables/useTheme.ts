const theme = ref('theme-light')
const mql = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null

function handleMediaChange(mql: MediaQueryListEvent) {
  theme.value = mql.matches ? 'theme-dark' : 'theme-light'
}

function setupMediaListener() {
  if (!mql) return

  onMounted(() => {
    mql.addEventListener('change', handleMediaChange)
  })

  onBeforeUnmount(() => {
    mql.removeEventListener('change', handleMediaChange)
  })
}

function toggleTheme() {
  theme.value = theme.value === 'theme-light' ? 'theme-dark' : 'theme-light'
}

export function useTheme() {
  setupMediaListener()

  return {
    theme,
    toggleTheme,
  }
}
