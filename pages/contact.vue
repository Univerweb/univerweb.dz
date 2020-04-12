<template>
  <main id="main">
    <div class="container grid">
      <h1 class="h2">{{ $t('contact.title') }}</h1>
      <footer-about />
      <footer-email />
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

    <div class="container grid">
      <h2>{{ $t('contact.other.title') }}</h2>
      <h3 class="h6">{{ $t('contact.other.direction.title') }}</h3>
      <a :href="'mailto:' + $t('contact.other.direction.email')" class="link">
        {{ $t('contact.other.direction.email') }}
      </a>
      <h3 class="h6">{{ $t('contact.other.technique.title') }}</h3>
      <a :href="'mailto:' + $t('contact.other.technique.email')" class="link">
        {{ $t('contact.other.technique.email') }}
      </a>
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

<style>
@media (min-width: 1024px) {
  .container {
    --container-width: 934px;
  }
}

@media (min-width: 768px) {
  .grid {
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
  }

  .grid:nth-child(1) :nth-child(4) {
    grid-row: 1 / 5;
  }

  .grid:nth-child(2) :nth-child(1) {
    max-width: 80%;
  }

  .grid:nth-child(2) :nth-child(4) {
    grid-row: 2 / 3;
  }

  .grid:nth-child(2) :nth-child(5) {
    grid-row: 3 / 3;
  }
}

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
