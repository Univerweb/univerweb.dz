<template>
  <footer>
    <div>
      <FooterAddress />
      <FooterMaps />
      <FooterPhone />
    </div>

    <FooterAbout />

    <div>
      <FooterLink />
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

  @include media($xs, 32px, 16px, 32px);
  @include media($sm, 48px, 24px, 48px);
  @include media($md, 96px, 48px);
  @include media($lg, 144px, 96px, $template-columns: repeat(3, auto));

  a:hover {
    color: $primary;
  }
}
</style>
