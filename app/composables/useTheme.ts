export function useTheme() {
  const theme = ref('theme-light')
  const mql = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : false

  function handleMediaChange(mql: MediaQueryListEvent) {
    theme.value = mql.matches ? 'theme-dark' : 'theme-light'
  }

  onMounted(() => {
    if (mql)
      mql.addEventListener('change', handleMediaChange)
  })

  onBeforeUnmount(() => {
    if (mql)
      mql.removeEventListener('change', handleMediaChange)
  })

  function toggleTheme() {
    theme.value = theme.value === 'theme-light' ? 'theme-dark' : 'theme-light'
  }

  return {
    theme,
    toggleTheme,
  }
};
