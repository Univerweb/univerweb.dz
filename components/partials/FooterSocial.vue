<template>
  <ul class="social">
    <li>
      <a href="https://twitter.com/Univerweb">
        <span class="visually-hidden">{{ $t('footer.social.twitter') }}</span>
        <social-twitter />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/Univerweb">
        <span class="visually-hidden">{{ $t('footer.social.facebook') }}</span>
        <social-facebook />
      </a>
    </li>
    <li>
      <a href="https://github.com/Univerweb">
        <span class="visually-hidden">{{ $t('footer.social.github') }}</span>
        <social-github />
      </a>
    </li>
  </ul>
</template>

<script>
import SocialTwitter from '@/components/svg/SocialTwitter'
import SocialFacebook from '@/components/svg/SocialFacebook'
import SocialGithub from '@/components/svg/SocialGithub'

export default {
  components: {
    SocialTwitter,
    SocialFacebook,
    SocialGithub
  }
}
</script>

<style>
.social {
  justify-content: space-between;
  width: 275px;
  margin-top: 20px;
}

footer ul {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
}

footer ul a {
  display: grid;
}

footer svg {
  height: 20px;
  fill: var(--blue);
  transition: opacity 0.3s ease-in-out;
}

footer svg:hover {
  opacity: 0.5;
}
</style>
