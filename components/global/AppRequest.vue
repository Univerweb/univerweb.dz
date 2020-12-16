<template>
  <div class="container request">
    <h2 class="h3">{{ $t('request.headline') }}</h2>
    <NuxtLink v-if="name === true" :to="localePath('contact')" class="h1 moveArrow">{{ $t('request.link') }}</NuxtLink>
    <NuxtLink v-else :to="localePath('contact')" class="h2 moveArrow">{{ $t('request.link') }}</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    let name = 'index___' + this.$i18n.locale
    if (this.$route.name === name) {
      name = true
    }

    return {
      name
    }
  }
}
</script>

<style lang="scss">
.request {
  background-color: var(--primary);
  color: $white;
  transition: background-color $transition, color $transition;
  text-align: center;
  a {
    color: $white;
    margin: 0;
  }
}
</style>
