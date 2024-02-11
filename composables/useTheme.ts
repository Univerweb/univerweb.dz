export function useTheme() {
  const theme = ref('theme-light')

  const toggleTheme = () => {
    theme.value = theme.value === 'theme-light' ? 'theme-dark' : 'theme-light'
  }

  return {
    theme,
    toggleTheme,
  }
};
