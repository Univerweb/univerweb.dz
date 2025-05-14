export default function useMenu() {
  const menuOpen = ref(false)

  function closeMenu() {
    menuOpen.value = false
    document.documentElement.classList.remove('menu-open')
  }

  function toggleMenu() {
    menuOpen.value = !menuOpen.value
    document.documentElement.classList.toggle('menu-open', menuOpen.value)
    document.documentElement.classList.toggle('menu-closing', !menuOpen.value)

    setTimeout(() => {
      document.documentElement.classList.remove('menu-closing')
    }, 480)
  }

  function closeMenuOnResize() {
    if (window.innerWidth > 767) {
      closeMenu()
    }
  }

  function handleEscapeKey(event: KeyboardEvent) {
    if (menuOpen.value && event.key === 'Escape') {
      closeMenu()
    }
  }

  onMounted(() => {
    window.addEventListener('resize', closeMenuOnResize)
    window.addEventListener('keydown', handleEscapeKey)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', closeMenuOnResize)
    window.removeEventListener('keydown', handleEscapeKey)
  })

  return {
    menuOpen,
    closeMenu,
    toggleMenu,
  }
}
