<template>
  <section class="container works">
    <h2 class="h1">{{ $t('works.title') }}</h2>

    <div class="grid">
      <div
        v-for="(work, index) in $t('workItem').slice(0, 6)"
        :key="index"
        class="item"
      >
        <h3>
          <nuxt-link :to="localePath('/realisations/' + work.slug)">
            {{ work.title }}
          </nuxt-link>
        </h3>
        <nuxt-link :to="localePath('/realisations/' + work.slug)">
          <img v-lazy="'/works/' + work.slug + '.jpg'" :alt="work.title" />
          <p>{{ work.title }}</p>
        </nuxt-link>
      </div>
    </div>

    <div class="more">
      <nuxt-link :to="localePath('realisations')" class="btn">
        {{ $t('works.title') }}
        <home-arrow />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import HomeArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    HomeArrow
  }
}
</script>

<style lang="scss">
.more {
  display: grid;
  justify-content: end;
  margin-top: 30px;
  @media (min-width: $sm) {
    margin-top: 45px;
  }
  @media (min-width: $md) {
    margin-top: 70px;
  }
  & .arrow {
    fill: currentColor;
    height: 5px;
    transform: rotate(-90deg);
    margin-left: 10px;
    margin-bottom: 2px;
    [dir='rtl'] & {
      transform: rotate(90deg);
      margin-left: 0;
      margin-right: 10px;
    }
  }
}
</style>
