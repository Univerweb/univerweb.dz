<template>
  <div class="container hero">
    <h1>{{ $t('home.create.title') }}</h1>
    <p class="lead">{{ $t('home.create.text') }}</p>
    <lang-arrow v-scroll-to="'#works'" />
  </div>
</template>

<script>
import LangArrow from '@/components/svg/LangArrow'

export default {
  components: {
    LangArrow
  }
}
</script>
