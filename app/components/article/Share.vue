<script setup lang="ts">
defineProps<{
  path: string
  title: string
}>()

const { t } = useI18n()
const { copy, copied } = useClipboard()
</script>

<template>
  <div class="container container-no-pt row">
    <div class="col col--2-12 col--3-11 share">
      <h2 class="h3">
        {{ t('headings.shareArticle') }}
      </h2>

      <ul>
        <li>
          <button class="tooltip-clipboard" :aria-label="t('ariaLabels.copy')" @click="copy(path)">
            <Transition name="tooltip-clipboard-text">
              <span v-if="copied" class="tooltip-clipboard-text">
                {{ t('actions.copy') }}
              </span>
            </Transition>
            <IconShare />
          </button>
        </li>
        <li>
          <a :href="`https://x.com/intent/tweet?text=${encodeURIComponent(title)}%20${path}`" rel="noopener noreferrer" target="_blank" :aria-label="t('ariaLabels.x')">
            <IconX />
          </a>
        </li>
        <li>
          <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${path}`" rel="noopener noreferrer" target="_blank" :aria-label="t('ariaLabels.linkedIn')">
            <IconLinkedIn />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
