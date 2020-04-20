<template>
  <main id="main" class="contact">
    <div class="container grid">
      <div class="item">
        <h1 class="h2">{{ $t('contact.title') }}</h1>
        <footer-about />
        <footer-email />
      </div>
      <div class="item">
        <form method="post" action="">
          <label for="fullname" class="visually-hidden">
            {{ $t('contact.form.fullname') }}
          </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            :placeholder="$t('contact.form.fullname')"
            required
          />
          <label for="company" class="visually-hidden">
            {{ $t('contact.form.company') }}
          </label>
          <input
            id="company"
            type="text"
            name="company"
            :placeholder="$t('contact.form.company')"
            required
          />
          <label for="email" class="visually-hidden">
            {{ $t('contact.form.email') }}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            :placeholder="$t('contact.form.email')"
            required
          />
          <label for="message" class="visually-hidden">
            {{ $t('contact.form.message') }}
          </label>
          <textarea
            id="message"
            name="message"
            :placeholder="$t('contact.form.message')"
            cols="40"
            rows="10"
            required
          ></textarea>
          <button type="submit" class="btn">
            {{ $t('contact.form.submit') }}
          </button>
        </form>
      </div>
    </div>
    <div class="container">
      <h2>{{ $t('contact.other.title') }}</h2>
      <div class="grid">
        <div class="item">
          <h3 class="h6">{{ $t('contact.other.direction.title') }}</h3>
          <a
            :href="'mailto:' + $t('contact.other.direction.email')"
            class="link"
          >
            {{ $t('contact.other.direction.email') }}
          </a>
        </div>
        <div class="item">
          <h3 class="h6">{{ $t('contact.other.technique.title') }}</h3>
          <a
            :href="'mailto:' + $t('contact.other.technique.email')"
            class="link"
          >
            {{ $t('contact.other.technique.email') }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FooterAbout from '@/components/partials/FooterAbout'
import FooterEmail from '@/components/partials/FooterEmail'

export default {
  components: {
    FooterAbout,
    FooterEmail
  },

  head() {
    return {
      titleTemplate: `${this.$t('contact.title')} — ${this.$t('name')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contact.description')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('contact.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('contact.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@media (min-width: $md) {
  .contact .container {
    max-width: calc(1024px - 90px);
  }
}

input,
textarea {
  display: grid;
  width: 100%;
  height: 45px;
  background-color: $light;
  color: $dark;
  font-family: inherit;
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0 0 15px;
  padding: 0 15px;
  border: 1px solid transparent;
  outline: 0;
  transition: border-color 0.3s;
  [dir='rtl'] & {
    letter-spacing: 0;
  }
  &:not(input) {
    resize: none;
    line-height: 20px;
    min-height: 90px;
    padding: 15px;
  }
  &:focus {
    border-color: $blue;
  }
}
</style>
