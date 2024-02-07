export default function useMenu() {
  const menuOpen = ref(false)

  function closeMenu() {
    menuOpen.value = false
    document.documentElement.classList.remove('menu-open')
  }

  function toggleMenu() {
    menuOpen.value = !menuOpen.value
    document.documentElement.classList.toggle('menu-open', menuOpen.value)
  }

  function closeMenuOnResize() {
    if (window.innerWidth > 767)
      closeMenu()
  }

  onMounted(() => {
    window.addEventListener('resize', closeMenuOnResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', closeMenuOnResize)
  })

  return { closeMenu, toggleMenu }
}
