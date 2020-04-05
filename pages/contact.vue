<template>
  <main id="main">
    <section class="container grid grid-2">
      <div>
        <h1 class="h2">{{ $t('contact.title') }}</h1>
        <uni-about />
      </div>
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
    </section>
    <section class="container">
      <h2>{{ $t('contact.other.title') }}</h2>
      <div class="grid grid-3">
        <div class="block">
          <h6>{{ $t('contact.other.direction.title') }}</h6>
          <a
            :href="'mailto:' + $t('contact.other.direction.email')"
            class="link"
          >
            {{ $t('contact.other.direction.email') }}
          </a>
        </div>
        <div class="block">
          <h6>{{ $t('contact.other.technique.title') }}</h6>
          <a
            :href="'mailto:' + $t('contact.other.technique.email')"
            class="link"
          >
            {{ $t('contact.other.technique.email') }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import uniAbout from '@/components/partials/FooterAbout'

export default {
  components: {
    uniAbout
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

<style coped>
input,
textarea {
  display: grid;
  width: 100%;
  height: 45px;
  background-color: var(--light);
  font-family: inherit;
  color: var(--dark);
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0 0 15px;
  padding: 0 15px;
  border: 1px solid transparent;
  outline: 0;
  transition: border-color 0.3s;
}

[dir='rtl'] input,
[dir='rtl'] textarea {
  font-weight: 800;
  letter-spacing: 0;
}

textarea {
  resize: none;
  line-height: 20px;
  min-height: 90px;
  padding: 15px;
}

input:focus,
textarea:focus {
  border-color: var(--blue);
}
</style>
