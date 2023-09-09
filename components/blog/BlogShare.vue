<script setup lang="ts">
defineProps<{
  title?: string
  url: string
}>()

const { t } = useI18n()
const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div class="container container-share">
    <div class="share">
      <h2 class="h3">
        {{ t('blog.share') }}
      </h2>

      <ul>
        <li v-if="isSupported">
          <button class="tooltip" @click="copy(url)">
            <Transition>
              <span v-if="copied" class="tooltip-text">
                {{ t('blog.copy') }}
              </span>
            </Transition>
            <NuxtIcon name="link" />
          </button>
        </li>
        <li>
          <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${url}`" rel="noopener noreferrer" target="_blank">
            <NuxtIcon name="linkedin" />
          </a>
        </li>
        <li>
          <a :href="`https://twitter.com/intent/tweet?text=${title}%20${url}`" rel="noopener noreferrer" target="_blank">
            <NuxtIcon name="twitter" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.container-share {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 0;
}

.share {
  display: flex;
  justify-content: space-between;
  grid-column: 1 / 13;

  @media (min-width: $lg) {
    grid-column: 1 / 11;
  }

  @media (min-width: $xl) {
    grid-column: 1 / 9;
  }

  h2 {
    margin-bottom: 0;
  }

  ul {
    display: flex;
    column-gap: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    background: transparent;
    color: currentColor;
    margin: 0;
    padding: 0;
  }

  a:hover,
  button:hover {
    transition: color $transition;
    color: $primary;
  }

  .tooltip {
    position: relative;

    .tooltip-text {
      font-family: var(--font-medium);

      @include size(13);

      width: max-content;
      color: #00D282;
      border: 1px solid #00D282;
      padding: 0 6px;
      border-radius: 2em;
      position: absolute;
      inset-inline-end: 24px;
      z-index: 1;
    }

    .v-enter-active,
    .v-leave-active {
      transition: opacity $transition;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
  }
}
</style>
