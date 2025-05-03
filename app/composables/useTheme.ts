const theme = ref('light')
const mql = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null

function handleMediaChange(mql: MediaQueryListEvent) {
  theme.value = mql.matches ? 'dark' : 'light'
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
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

export function useTheme() {
  setupMediaListener()

  return {
    theme,
    toggleTheme,
  }
}
