<template>
  <footer>
    <div>
      <FooterAddress />
      <FooterMaps />
      <FooterPhone />
    </div>

    <div>
      <AppAbout />
      <FooterSocials />
    </div>

    <FooterCopy />
  </footer>
</template>

<style lang="scss">
footer {
  padding: 24px 12px;
  display: grid;
  justify-content: space-between;
  gap: 24px;
  @media (min-width: $xs) {
    padding: 32px 16px;
    gap: 32px;
  }
  @media (min-width: $sm) {
    padding: 48px 24px;
    gap: 48px;
  }
  @media (min-width: $md) {
    grid-template-columns: auto auto;
    padding: 96px 48px;
  }
  @media (min-width: $lg) {
    grid-template-columns: 1fr auto 1fr;
    padding: 144px 96px;
  }

  a:hover {
    color: $primary;
  }

  .lead {
    color: var(--textPrimary);
    transition: color $transition;
    @media (min-width: $md) {
      max-width: 310px;
    }
  }
}
</style>
