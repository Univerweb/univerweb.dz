<template>
  <section class="container works">
    <div class="intro">
      <h2 class="h1">{{ $t('works.headline') }}</h2>
    </div>
    <div class="details">
      <div
        v-for="(work, index) in $t('work').slice(0, 6)"
        :key="index"
        class="item"
      >
        <h3>
          <nuxt-link :to="localePath('/realisations/' + work.slug)">
            {{ work.title }}
          </nuxt-link>
        </h3>
        <nuxt-link :to="localePath('/realisations/' + work.slug)">
          <div class="card">
            <img
              v-lazy="
                '/works/' + work.slug + '/' + work.slug + '_thumbnail.jpg'
              "
              :alt="work.title"
            />
          </div>
          <p class="h6">{{ work.body }}</p>
        </nuxt-link>
      </div>
    </div>
    <div class="more">
      <nuxt-link :to="localePath('realisations')" class="btn">
        {{ $t('links.more') }}
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
  .arrow {
    fill: currentColor;
    height: 8px;
    transform: rotate(-90deg);
    margin-left: 6px;
    margin-bottom: 2px;
    [lang='ar'] & {
      transform: rotate(90deg);
      margin-left: 0;
      margin-right: 6px;
    }
  }
}
</style>
