<script setup lang="ts">
interface Socials {
  url: string
  value: string
}

const { t, tm, rt } = useI18n()
</script>

<template>
  <ul class="socials">
    <li v-for="social in (tm('socials') as Socials[])" :key="rt(social.url)">
      <a :href="rt(social.url)">
        <svg v-if="rt(social.url) === t('twitter')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" role="img">
          <path d="M21.5 7.1v.6c0 6.5-4.9 14-14 14-2.8 0-5.4-.8-7.6-2.2.4 0 .8.1 1.2.1 2.3 0 4.4-.8 6.1-2.1-2.2 0-4-1.5-4.6-3.4.3 0 .6.1.9.1.4 0 .9-.1 1.3-.2C2.7 13.5 1 11.6 1 9.2v-.1c.7.4 1.4.6 2.2.6C1.9 8.8 1 7.3 1 5.6c0-.9.2-1.8.7-2.5 2.4 3 6.1 4.9 10.1 5.1-.1-.4-.1-.7-.1-1.1 0-2.7 2.2-4.9 4.9-4.9 1.4 0 2.7.6 3.6 1.6 1.1-.2 2.2-.6 3.1-1.2-.4 1.1-1.1 2.1-2.2 2.7 1-.1 1.9-.4 2.8-.8-.6 1-1.4 1.9-2.4 2.6z" />
        </svg>
        <svg v-else-if="rt(social.url) === t('facebook')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" role="img">
          <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4h-3v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.4 0 2.7.3 2.7.3v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8V24c5.8-.9 10.2-5.9 10.2-11.9z" />
        </svg>
        <svg v-else-if="rt(social.url) === t('linkedin')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" role="img">
          <path d="M24 1.8v20.5c0 1-.8 1.8-1.8 1.8H1.8c-1 0-1.8-.8-1.8-1.8V1.8C0 .8.8 0 1.8 0h20.5c.9 0 1.7.8 1.7 1.8zM7.2 9H3.5v11.5h3.6V9zm.2-3.7c0-1.2-.9-2.1-2.1-2.1s-2 .9-2 2.1.9 2.1 2.1 2.1 2-.9 2-2.1zm13.1 8.1c0-3.5-2.2-4.7-4.2-4.7-1.9 0-3.1 1.2-3.4 1.9V9H9.3v11.5h3.6v-6.2c0-1.7 1-2.5 2.1-2.5 1 0 1.8.6 1.8 2.4v6.3h3.6l.1-7.1z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" role="img">
          <path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6.3 12 .3z" />
        </svg>
        <span class="visually-hidden">{{ rt(social.value) }}</span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.socials {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  max-width: 210px;

  @media (min-width: $md) {
    max-width: 295px;
  }

  margin: 12px 0 0;
  padding: 0;
  list-style: none;

  a {
    display: grid;
  }
}
</style>
