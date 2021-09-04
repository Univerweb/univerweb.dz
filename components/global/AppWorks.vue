<template>
  <section class="container works">
    <div class="intro">
      <Component :is="h1" :class="likeH1">{{ headline }}</Component>
    </div>
    <div class="details">
      <div v-for="work in works" :key="work.slug" class="item">
        <NuxtLink :to="localePath(`/realisations/${work.slug}`)">
          <img
            :srcset="`/works/thumbnail/${work.slug}-377.jpg 377w, /works/thumbnail/${work.slug}-452.jpg 452w, /works/thumbnail/${work.slug}-540.jpg 540w, /works/thumbnail/${work.slug}-588.jpg 588w, /works/thumbnail/${work.slug}-754.jpg 754w, /works/thumbnail/${work.slug}-904.jpg 904w, /works/thumbnail/${work.slug}-1080.jpg 1080w, /works/thumbnail/${work.slug}-1176.jpg 1176w`"
            sizes="(max-width: 425px) 377px, (max-width: 767px) 540px, (max-width: 1279px) 452px, 588px"
            :src="`/works/thumbnail/${work.slug}-588.jpg`"
            :alt="work.description"
            width="588"
            height="624"
            loading="lazy"
          />
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
  margin-left: auto;
  margin-right: auto;
  max-width: 588px;
  @media (min-width: $md) {
    max-width: 100%;
  }

  .details {
    grid-template-columns: initial;
    column-gap: 24px;
  }

  .item {
    grid-column: initial;
    overflow: hidden;
    border-radius: 12px;
    z-index: 1;
    @media (min-width: $md) {
      &.item:nth-child(odd) {
        grid-column: 1 / 7;
      }
      &.item:nth-child(even) {
        grid-column: 7 / 13;
      }
    }
    @media (min-width: $xl) {
      border-radius: 24px;
    }

    a {
      display: grid;
      position: relative;
      &:hover {
        .overlay {
          opacity: 0.6;
        }
        p {
          transform: translateY(0);
        }
      }
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
      grid-auto-rows: auto 1fr;
      @media (min-width: $lg) {
        grid-auto-rows: auto auto 1fr;
      }
      position: absolute;
      height: 100%;
      color: $white;
      padding: 24px;
      @media (min-width: $md) {
        padding: 24px;
      }
      @media (min-width: $lg) {
        padding: 48px;
      }
      @media (min-width: $xl) {
        padding: 48px;
      }
    }

    h2,
    h3 {
      @include size(32);
      margin-bottom: 12px;
    }

    p {
      display: none;
      @media (min-width: $lg) {
        display: block;
      }
      color: $white;
      align-self: end;
      transform: translateY(calc(100% + 48px));
      transition: transform $transition;
    }
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
      [lang='ar-DZ'] & {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
