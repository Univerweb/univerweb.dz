<template>
  <main>
    <section class="container grid grid-2">
      <h1>L'agence</h1>
      <div>
        <h2>
          Nous sommes une agence web spécialisée dans la création, l’hébergement
          et le référencement de sites web.
        </h2>
        <p>
          Installée depuis 2011 à Alger, nous avons une équipe créative,
          dynamique et passionnée par son travail.
        </p>
        <p>
          Notre métier consiste à concevoir des sites web qui répondent à vos
          attentes et qui respectent votre image de marque.
        </p>
      </div>
    </section>
    <section class="container">
      <h2 class="h1 grid grid-4">Notre méthode de travail</h2>
      <div class="grid grid-4">
        <div>
          <h3 class="h2">Écoute</h3>
          <p>
            Afin de mieux vous connaitre, nous essaierons de comprendre des
            éléments essentiels tels que votre activité, votre philosophie, vos
            objectifs et vos contraintes.
          </p>
        </div>
        <div>
          <h3 class="h2">Recherche</h3>
          <p>
            Après avoir mieux fait connaissance et cerner votre projet, nous
            trouverons des solutions adaptées à vos besoins tout en respectant
            votre image de marque.
          </p>
        </div>
        <div>
          <h3 class="h2">Création</h3>
          <p>
            En vous consultant et informant étape par étape, votre projet
            commence à avoir un visage, le votre tout simplement.
          </p>
        </div>
        <div>
          <h3 class="h2">Suivi et maintenance</h3>
          <p>
            Après la publication du site web, nous vous accompagnerons dans la
            maintenance et mise à jour du site, dans la formation et le
            référencement et dans l'analyse du trafic.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  transition: 'fade',
  head() {
    return {
      titleTemplate: "L'agence — %s",
      meta: [
        { hid: 'description', name: 'description', content: '' },
        { hid: 'og:title', name: 'og:title', content: '' },
        { hid: 'og:description', name: 'og:description', content: '' },
        { hid: 'og:image', name: 'og:image', content: '' },
        { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: '' }
      ]
    }
  }
}
</script>
