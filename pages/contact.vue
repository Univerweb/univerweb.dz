<template>
  <uni-main>
    <uni-container class="grid grid-2">
      <div>
        <h1 class="h2">{{ title }}</h1>
        <uni-about />
      </div>
      <form method="post" action="">
        <label for="fullname" class="visually-hidden">
          Votre nom
        </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="Votre nom"
          required
        />
        <label for="company" class="visually-hidden">
          Votre entreprise
        </label>
        <input
          id="company"
          type="text"
          name="company"
          placeholder="Votre entreprise"
          required
        />
        <label for="email" class="visually-hidden">
          Votre e-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Votre e-mail"
          required
        />
        <label for="message" class="visually-hidden">
          Décrivez-nous votre projet
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Décrivez-nous votre projet"
          cols="40"
          rows="10"
          required
        ></textarea>
        <button type="submit" class="btn">Soumettre</button>
      </form>
    </uni-container>
    <uni-container>
      <h2>Autres moyens de nous contacter</h2>
      <div class="grid grid-3">
        <div class="block">
          <h6>Direction générale</h6>
          <a href="mailto:h.nedjar@univerweb.dz" class="link">
            h.nedjar@univerweb.dz
          </a>
        </div>
        <div class="block">
          <h6>Service technique</h6>
          <a href="mailto:webmaster@univerweb.dz" class="link">
            webmaster@univerweb.dz
          </a>
        </div>
        <div class="block">
          <h6>Service technique</h6>
          <a href="mailto:webmaster@univerweb.dz" class="link">
            webmaster@univerweb.dz
          </a>
        </div>
      </div>
    </uni-container>
  </uni-main>
</template>

<script>
import uniAbout from '@/components/partials/FooterAbout'

export default {
  components: {
    uniAbout
  },
  data() {
    return {
      title: 'Contact',
      description:
        'Parlez-nous de vos besoins, nous serions ravis de collaborer avec vous.'
    }
  },
  head() {
    return {
      titleTemplate: `${this.title} — %s`,
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
