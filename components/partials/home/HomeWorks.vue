<template>
  <section class="container works">
    <div class="intro">
      <h2 class="h1">{{ $t('works.headline') }}</h2>
    </div>
    <div class="details">
      <div v-for="work in $t('work').slice(0, 6)" :key="work.slug" class="item">
        <h3>
          <NuxtLink :to="localePath('/realisations/' + work.slug)">{{ work.title }}</NuxtLink>
        </h3>
        <NuxtLink :to="localePath('/realisations/' + work.slug)">
          <div class="card">
            <img v-lazy="'/works/' + work.slug + '/' + work.slug + '_thumbnail.jpg'" :alt="work.title" />
          </div>
          <p class="h6">{{ work.body }}</p>
        </NuxtLink>
      </div>
    </div>
    <div class="more">
      <NuxtLink :to="localePath('realisations')" class="btn">{{ $t('links.more') }}<HomeArrow /></NuxtLink>
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
  margin-top: 48px;
  .btn {
    justify-self: end;
    .arrow {
      fill: currentColor;
      height: 8px;
      margin-bottom: 2px;
      transform: rotate(-90deg);
      [lang='ar'] & {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
