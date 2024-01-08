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
  font-weight: 300;
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

  address {
    font-style: normal;
  }

  .socials {
    @include grid(4, auto);

    justify-content: space-between;
    margin: 12px 0 0;
    padding: 0;
    list-style: none;
    max-width: 210px;

    @media (min-width: $md) {
      max-width: 295px;
    }

    a {
      display: grid;
    }
  }

  .copy {
    font-size: 0.8rem;
    line-height: 1.875;
  }
}
</style>
