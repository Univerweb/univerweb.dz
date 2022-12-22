<template>
  <section class="container works">
    <div class="intro">
      <Component :is="h1" :class="likeH1">{{ headline }}</Component>
    </div>
    <div class="details">
      <div v-for="work in works" :key="work.slug" class="item">
        <NuxtLink :to="localePath(`/realisations/${work.slug}`)" vocab="https://schema.org/" typeof="Article">
          <div property="mainEntityOfPage" typeof="WebPage">
            <meta property="id" :content="$config.public.baseURL + localePath(`/realisations/${work.slug}`)" />
          </div>
          <meta property="dateCreated datePublished" :content="work.createdAt" />
          <meta property="dateModified" :content="work.updatedAt" />
          <div property="author publisher" typeof="Organization">
            <meta property="name" :content="$t('name')" />
            <meta property="url" :content="$config.public.baseURL" />
          </div>
          <meta property="articleSection" :content="$t('menu.realisations')" />
          <meta property="description" :content="work.description" />
          <AppImg
            property="image"
            :src="`/images/${work.slug}_thumbnail.jpg`"
            :alt="work.description"
            width="588"
            height="624"
            sizes="xs:288px sm:607px md:354px lg:456px xl:588px"
          />
          <div class="overlay"></div>
          <div class="inner">
            <Component :is="h2" property="headline">{{ work.title }}</Component>
            <ul class="tags">
              <li v-for="tag in work.tags" :key="tag" property="keywords">{{ tag }}</li>
            </ul>
            <p property="articleBody" class="lead">{{ work.lead }}</p>
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
    grid-template-columns: 1fr;
    @media (min-width: $sm) {
      grid-template-columns: 1fr 1fr;
    }
    gap: 12px;
    @media (min-width: $md) {
      gap: 16px;
    }
    @media (min-width: $lg) {
      gap: 24px;
    }
  }

  .item {
    grid-column: initial;
    overflow: hidden;
    z-index: 1;
    border-radius: 12px;
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
      background-color: $textPrimary;
      opacity: 0.1;
      transition: opacity $transition;
    }

    .inner {
      display: grid;
      grid-auto-rows: auto 1fr;
      position: absolute;
      height: 100%;
      color: $white;
      padding: 24px;
      @media (min-width: $md) {
        padding: 24px;
      }
      @media (min-width: $lg) {
        padding: 36px;
        grid-auto-rows: auto auto 1fr;
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
