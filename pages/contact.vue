<template>
  <main>
    <div class="container details">
      <div class="item">
        <h1 class="h2">{{ $t('contact.title') }}</h1>
        <app-about />
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
      <div class="intro">
        <h2>{{ $t('contact.other.headline') }}</h2>
      </div>
      <div class="details">
        <div
          v-for="(name, value) in $t('contact.other.body')"
          :key="value"
          class="item"
        >
          <h3 class="h6">{{ name }}</h3>
          <a :href="'mailto:' + value" class="link">
            {{ value }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: { class: 'contact' },
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
        }
      ]
    }
  }
}
</script>

<style lang="scss">
input,
textarea {
  display: grid;
  width: 100%;
  height: 48px;
  background-color: $light;
  color: $black;
  font-family: inherit;
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
  [lang='ar'] & {
    letter-spacing: 0;
  }
  margin: 0 0 12px;
  padding: 0 12px;
  border: 1px solid transparent;
  outline: 0;
  transition: border-color $transition;
  &:not(input) {
    resize: none;
    line-height: 24px;
    min-height: 96px;
    padding: 12px;
  }
  &:focus {
    border-color: $blue;
  }
}
</style>
