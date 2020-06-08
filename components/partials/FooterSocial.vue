<template>
  <ul class="social">
    <li v-for="(social, index) in socials" :key="index">
      <a :href="social.link">
        <span class="visually-hidden">{{ social.JoinUs }}</span>
        <component :is="social.slug + '-icon'" />
      </a>
    </li>
  </ul>
</template>

<script>
import TwitterIcon from '@/assets/icons/twitter.svg?inline'
import FacebookIcon from '@/assets/icons/facebook.svg?inline'
import GithubIcon from '@/assets/icons/github.svg?inline'

export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    GithubIcon
  },

  data() {
    return {
      socials: [
        {
          link: 'https://twitter.com/Univerweb',
          JoinUs: this.$t('footer.social.twitter'),
          slug: 'twitter'
        },
        {
          link: 'https://www.facebook.com/Univerweb',
          JoinUs: this.$t('footer.social.facebook'),
          slug: 'facebook'
        },
        {
          link: 'https://github.com/Univerweb',
          JoinUs: this.$t('footer.social.github'),
          slug: 'github'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.social {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 15px;
  justify-content: space-between;
  max-width: 295px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
  & a {
    display: grid;
    & svg {
      height: 20px;
      fill: $blue;
      transition: opacity $transition;
      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
