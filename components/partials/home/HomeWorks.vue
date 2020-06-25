<template>
  <section class="container works">
    <h2 class="h1">{{ $t('works.title') }}</h2>
    <div class="details">
      <div
        v-for="(work, index) in $t('worksItem').slice(0, 6)"
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
  text-align: end;
  margin-top: 48px;
  & .arrow {
    fill: currentColor;
    height: 5px;
    transform: rotate(-90deg);
    margin-left: 12px;
    margin-bottom: 2px;
    [lang='ar'] & {
      transform: rotate(90deg);
      margin-left: 0;
      margin-right: 12px;
    }
  }
}
</style>
