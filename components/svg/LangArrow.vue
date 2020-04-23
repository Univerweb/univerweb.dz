<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.71 15" class="arrow">
    <path
      d="M0,2.361L2.361,0l10.495,10.495L23.35,0l2.361,2.361L13.071,15l-0.216-0.216L12.639,15L0,2.361z"
    ></path>
  </svg>
</template>

<style lang="scss">
.arrow {
  .lang & {
    height: 8px;
    margin-left: -1rem;
    fill: $dark-blue;
    [dir='rtl'] & {
      margin-left: 0;
      margin-right: -1rem;
    }
    @media (min-width: $md) {
      & {
        fill: $blue;
      }
    }
  }
  .hero & {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 25.71px;
    height: 15px;
    cursor: pointer;
  }
}
</style>
