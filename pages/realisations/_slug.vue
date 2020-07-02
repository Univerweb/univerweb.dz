<template>
  <main id="main" class="work">
    <div class="container intro">
      <work-back />
      <h1>{{ work.title }}</h1>
    </div>
    <div
      v-lazy:background-image="
        '/works/' + work.slug + '/' + work.slug + '_bg.jpg'
      "
      class="banner card"
    >
      <span>
        <img
          v-lazy="'/works/' + work.slug + '/' + work.slug + '_bg.jpg'"
          :alt="work.title"
        />
      </span>
    </div>
    <div class="container client">
      <div class="details">
        <div v-for="(name, value) in work.client" :key="value" class="item">
          <h2 class="h6">
            {{ value }}
          </h2>
          <p class="lead">{{ name }}</p>
        </div>
      </div>
    </div>
    <div class="container project">
      <div class="details">
        <div class="item">
          <div class="inner">
            <p class="lead">{{ work.body }}</p>
            <a :href="work.link" class="link">
              {{ $t('links.visit') }}
            </a>
          </div>
        </div>
        <div class="item card">
          <img
            v-lazy="'/works/' + work.slug + '/' + work.slug + '_page.jpg'"
            :alt="work.title"
          />
        </div>
      </div>
    </div>
    <work-nav />
    <work-request />
  </main>
</template>

<script>
import WorkBack from '@/components/partials/work/WorkBack'
import WorkNav from '@/components/partials/work/WorkNav'
import WorkRequest from '@/components/common/AppRequest'

export default {
  components: {
    WorkBack,
    WorkNav,
    WorkRequest
  },

  validate({ params, store }) {
    return store.state.i18n.messages.work.some(
      (item) => item.slug === params.slug
    )
  },

  data() {
    const works = this.$t('work')
    const slug = this.$route.params.slug
    const work = works.find((work) => work.slug === slug)
    return { work }
  },

  head() {
    return {
      titleTemplate: `${this.work.title} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.work.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.work.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://www.univerweb.dz/works/' +
            this.work.slug +
            '/' +
            this.work.slug +
            '_bg.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.work h1 {
  margin-bottom: 0;
}

.work .banner {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  & span {
    padding: 80% 0 0;
    @media (min-width: $sm) {
      padding: 60% 0 0;
    }
    @media (min-width: $md) {
      padding: 50% 0 0;
    }
    & img {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.work .client {
  @media (min-width: $sm) {
    & .item:nth-child(1) {
      grid-column: 1 / 4;
    }
    & .item:nth-child(2) {
      grid-column: 5 / 8;
    }
    & .item:nth-child(3) {
      grid-column: 9 / 12;
    }
  }
}

.work .project {
  padding-top: 0;
  @media (min-width: $sm) {
    & .item:nth-child(1) {
      grid-column: 1 / 4;
    }
    & .item:nth-child(2) {
      grid-column: 5 / 13;
    }
    & .inner {
      position: sticky;
      top: 120px;
    }
  }
}

[lang='ar'] .work .link {
  font-family: $font-arabe;
}
</style>
