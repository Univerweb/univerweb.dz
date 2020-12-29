<template>
  <section class="container works">
    <div class="intro">
      <Component :is="h1" :class="likeH1">{{ headline }}</Component>
    </div>
    <div class="details">
      <div v-for="work in works" :key="work.slug" v-lazy:background-image="`/works/${work.slug}/${work.slug}_thumbnail.jpg`" class="item">
        <NuxtLink :to="localePath(`/realisations/${work.slug}`)">
          <img :src="`/works/${work.slug}/${work.slug}_thumbnail.jpg`" :alt="work.title" width="800" height="850" />
          <div class="overlay"></div>
          <div class="inner">
            <Component :is="h2">{{ work.title }}</Component>
            <ul class="tags">
              <li v-for="tag in work.tags" :key="tag">{{ tag }}</li>
            </ul>
            <p class="lead">{{ work.lead }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <Component :is="more" class="more">
      <NuxtLink :to="localePath('realisations')" class="btn">{{ $t('label.more') }}<HomeArrow /></NuxtLink>
    </Component>
  </section>
</template>

<script>
import HomeArrow from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    HomeArrow
  },

  props: {
    headline: {
      type: String,
      required: true
    },
    works: {
      type: Array,
      required: true
    },
    h1: {
      type: String,
      default: 'h1'
    },
    likeH1: {
      type: String,
      default: null
    },
    h2: {
      type: String,
      default: 'h2'
    },
    more: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.works {
  .details {
    column-gap: 24px;
  }

  .item {
    position: relative;
    background-color: $light;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 100%;
    height: 456px;
    overflow: hidden;
    border-radius: 12px;
    @media (min-width: $sm) {
      &.item:nth-child(odd) {
        grid-column: 1 / 7;
      }
      &.item:nth-child(even) {
        grid-column: 7 / 13;
      }
    }
    @media (min-width: $lg) {
      border-radius: 24px;
    }

    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &:hover {
        .overlay {
          opacity: 0.6;
        }
        p {
          transform: translateY(0);
        }
      }
    }
  }

  img {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $color;
    opacity: 0.3;
    transition: opacity $transition;
  }

  .inner {
    display: grid;
    grid-auto-rows: auto auto 1fr;
    position: absolute;
    width: 100%;
    height: 100%;
    color: $white;
    padding: 24px;
    @media (min-width: $sm) {
      padding: 24px;
    }
    @media (min-width: $md) {
      padding: 48px;
    }
    @media (min-width: $lg) {
      padding: 48px;
    }
  }

  h2,
  h3 {
    @include size(32);
    margin-bottom: 12px;
  }

  p {
    color: $white;
    max-width: 520px;
    align-self: end;
    transform: translateY(calc(100% + 48px));
    transition: transform $transition;
  }
}

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
