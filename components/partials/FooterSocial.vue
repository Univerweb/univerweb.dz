<template>
  <ul>
    <li>
      <a href="https://twitter.com/Univerweb">
        <span class="visually-hidden">Rejoignez-nous sur Twitter</span>
        <uni-twitter />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/Univerweb">
        <span class="visually-hidden">Rejoignez-nous sur Facebook</span>
        <uni-facebook />
      </a>
    </li>
    <li>
      <a href="https://github.com/Univerweb">
        <span class="visually-hidden">Rejoignez-nous sur GitHub</span>
        <uni-github />
      </a>
    </li>
  </ul>
</template>

<script>
import uniTwitter from '@/components/svg/Twitter'
import uniFacebook from '@/components/svg/Facebook'
import uniGithub from '@/components/svg/Github'

export default {
  components: {
    uniTwitter,
    uniFacebook,
    uniGithub
  }
}
</script>

<style>
footer ul {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 15px;
  justify-content: start;
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
