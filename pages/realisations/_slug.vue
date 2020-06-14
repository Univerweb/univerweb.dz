<template>
  <main id="main" class="work">
    <div class="container">
      <nuxt-link :to="localePath('realisations')" class="back">
        <work-arrow />
        {{ $t('works.title') }}
      </nuxt-link>
      <h1>{{ work.title }}</h1>
    </div>
    <div class="card">
      <img v-lazy="'/works/' + work.slug + '.jpg'" :alt="work.title" />
    </div>
    <div class="nav">
      <div class="container grid">
        <nuxt-link
          v-if="currentIndex < count - 1"
          :to="localePath('/realisations/' + previus[0].slug)"
          class="link previous"
          :data-text="$t('links.previous')"
        >
          <work-arrow />
          {{ previus[0].title }}
        </nuxt-link>

        <nuxt-link
          v-if="currentIndex > 0"
          :to="localePath('/realisations/' + next[0].slug)"
          class="link next"
          :data-text="$t('links.next')"
        >
          {{ next[0].title }}
          <work-arrow />
        </nuxt-link>
      </div>
    </div>
    <work-request />
  </main>
</template>

<script>
import WorkArrow from '@/assets/icons/arrow.svg?inline'
import WorkRequest from '@/components/common/AppRequest'

export default {
  components: {
    WorkArrow,
    WorkRequest
  },

  validate({ params, store }) {
    return store.state.i18n.messages.worksItem.some(
      (item) => item.slug === params.slug
    )
  },

  data() {
    const works = this.$t('worksItem')
    const slug = this.$route.params.slug
    const work = works.find((work) => work.slug === slug)
    const count = works.length
    const currentIndex = works.indexOf(work)
    const next = works.slice(currentIndex - 1, currentIndex)
    const previus = works.slice(currentIndex + 1, currentIndex + 2)
    const data = {
      work,
      next,
      previus,
      currentIndex,
      count
    }
    return data
  },

  head() {
    return {
      titleTemplate: `${this.work.title} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.work {
  & .back {
    display: inline-block;
    margin-bottom: 30px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    [lang='ar'] & {
      font-family: $font-arabe;
    }
  }
  & .nav {
    background: $blue;
  }
  & .grid {
    grid-template-columns: repeat(2, auto);
    padding-top: 70px;
    padding-bottom: 45px;
  }
  & .next,
  & .previous {
    position: relative;
    color: $dark-blue;
    [lang='ar'] & {
      font-family: $font-arabe;
    }
    &:hover {
      color: $white;
    }
    &::before {
      content: attr(data-text);
      position: absolute;
      color: $dark-blue;
      top: -15px;
      left: 40px;
      [lang='ar'] & {
        left: 0;
        right: 40px;
      }
      font-size: 12px;
      font-size: 0.8rem;
      pointer-events: none;
    }
    &:not(.previous) {
      grid-column: 2;
      text-align: right;
      &::before {
        right: 40px;
        [lang='ar'] & {
          left: 40px;
          text-align: left;
        }
      }
    }
  }
  & .arrow {
    fill: currentColor;
    height: 13px;
    transform: rotate(90deg);
    margin-right: 10px;
    margin-bottom: 2px;
    [lang='ar'] & {
      transform: rotate(-90deg);
      margin-right: 0;
      margin-left: 10px;
    }
  }
  & .next .arrow {
    margin-right: 0;
    margin-left: 10px;
    transform: rotate(-90deg);
    [lang='ar'] & {
      transform: rotate(90deg);
      margin-right: 10px;
      margin-left: 0;
    }
  }
  & .back .arrow {
    height: 5px;
  }
}
</style>
