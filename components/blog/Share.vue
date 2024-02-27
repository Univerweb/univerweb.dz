<script setup lang="ts">
defineProps<{
  title?: string
  url: string
}>()

const { t } = useI18n()
const { copy, copied } = useClipboard()
</script>

<template>
  <div class="container container-no-pt row">
    <div class="share">
      <h2 class="h3">
        {{ t('blog.share') }}
      </h2>

      <ul>
        <li>
          <button class="tooltip" @click="copy(url)">
            <Transition name="tooltip-text">
              <span v-if="copied" class="tooltip-text">
                {{ t('blog.copy') }}
              </span>
            </Transition>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
              <path d="M7.156 9.266A5.372 5.372 0 0 1 8.36 8.36c2.406-1.326 5.491-.62 7.038 1.724l-1.872 1.871a2.82 2.82 0 0 0-3.195-1.624c-.5.112-.974.36-1.361.748l-3.587 3.589a2.796 2.796 0 0 0 0 3.95 2.796 2.796 0 0 0 3.95 0l1.106-1.106a7.11 7.11 0 0 0 3.15.48l-2.441 2.44a5.358 5.358 0 0 1-7.579-7.577l3.587-3.59Zm5.697-5.697-2.44 2.44a7.112 7.112 0 0 1 3.149.48l1.105-1.106a2.796 2.796 0 0 1 3.95 0 2.796 2.796 0 0 1 0 3.95l-3.588 3.588a2.798 2.798 0 0 1-3.95 0 2.972 2.972 0 0 1-.606-.876l-1.872 1.871c.197.299.401.556.664.819a5.338 5.338 0 0 0 2.53 1.42 5.368 5.368 0 0 0 3.845-.515 5.37 5.37 0 0 0 1.203-.905l3.587-3.588a5.358 5.358 0 1 0-7.577-7.578Z" />
            </svg>
          </button>
        </li>
        <li>
          <a :href="`https://twitter.com/intent/tweet?text=${title}%20${url}`" rel="noopener noreferrer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </li>
        <li>
          <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${url}`" rel="noopener noreferrer" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="img" aria-hidden="true">
              <path d="M24 1.8v20.5c0 1-.8 1.8-1.8 1.8H1.8c-1 0-1.8-.8-1.8-1.8V1.8C0 .8.8 0 1.8 0h20.5c.9 0 1.7.8 1.7 1.8zM7.2 9H3.5v11.5h3.6V9zm.2-3.7c0-1.2-.9-2.1-2.1-2.1s-2 .9-2 2.1.9 2.1 2.1 2.1 2-.9 2-2.1zm13.1 8.1c0-3.5-2.2-4.7-4.2-4.7-1.9 0-3.1 1.2-3.4 1.9V9H9.3v11.5h3.6v-6.2c0-1.7 1-2.5 2.1-2.5 1 0 1.8.6 1.8 2.4v6.3h3.6l.1-7.1z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
