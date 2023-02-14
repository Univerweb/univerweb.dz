<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="skip-links">
    <button>
      {{ t('skiplinks.menu') }}
    </button>

    <button>
      {{ t('skiplinks.content') }}
    </button>

    <button>
      {{ t('skiplinks.contact') }}
    </button>
  </div>
</template>

<style lang="scss">
.skip-links {
  position: absolute;
  z-index: 10;

  button {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    background-color: $primary;
    color: $secondary;
    font-family: var(--fontMedium);
    line-height: 25px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    height: 25px;
    padding: 5px 10px;

    &:focus {
      position: static;
      overflow: visible;
      clip: auto;
    }
  }
}
</style>
