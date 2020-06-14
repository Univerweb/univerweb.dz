export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'Univerweb',

      menu: {
        realisations: 'Réalisations',
        prestations: 'Prestations',
        agence: "L'agence",
        contact: 'Contact'
      },

      links: {
        home: 'Accueil',
        ariaLabel: 'Ouvrir le menu',
        previous: 'Précédent',
        next: 'Suivant'
      },

      home: {
        title: 'Création de sites web',
        description: 'Contenu à venir…',
        create: {
          title: 'Nous créons des sites web.',
          text:
            'Nous concevons des sites web qui répondent précisément à vos attentes et qui respectent intégralement votre image de marque.'
        }
      },

      works: {
        title: 'Réalisations',
        description: 'Contenu à venir…'
      },

      worksItem: [
        {
          title: 'Acodim',
          slug: 'acodim'
        },
        {
          title: 'ETS Ouar',
          slug: 'ets-ouar'
        },
        {
          title: 'TPBL',
          slug: 'tpbl'
        },
        {
          title: 'Botanique Algérie',
          slug: 'botanique-algerie'
        },
        {
          title: 'Corim',
          slug: 'corim'
        },
        {
          title: 'We Service',
          slug: 'we-service'
        },
        {
          title: 'infoElec',
          slug: 'infoelec'
        },
        {
          title: 'Optimum Transmission',
          slug: 'optimum-transmission'
        },
        {
          title: 'Soprofort',
          slug: 'soprofort'
        },
        {
          title: 'Microtel Training Institute',
          slug: 'microtel-training-institute'
        },
        {
          title: 'Integral',
          slug: 'integral'
        },
        {
          title: 'Epiza',
          slug: 'epiza'
        },
        {
          title: 'Pibo',
          slug: 'pibo'
        },
        {
          title: 'Intermat',
          slug: 'intermat'
        },
        {
          title: 'BN Electric Company',
          slug: 'bn-electric-company'
        },
        {
          title: 'Cinquelec',
          slug: 'cinquelec'
        },
        {
          title: 'Spheretec',
          slug: 'spheretec'
        },
        {
          title: 'Clinique Sonya',
          slug: 'clinique-sonya'
        },
        {
          title: 'Clinique Aya',
          slug: 'clinique-aya'
        },
        {
          title: 'RCelec',
          slug: 'rcelec'
        }
      ],

      prestations: {
        title: 'Prestations',
        description: 'Contenu à venir…'
      },

      agency: {
        title: "L'agence",
        description: 'Contenu à venir…',
        webAgency: {
          title:
            'Nous sommes une agence web spécialisée dans la création, l’hébergement et le référencement de sites web.',
          text_1:
            'Installée depuis 2011 à Alger, nous avons une équipe créative, dynamique et passionnée par son travail.',
          text_2:
            'Notre métier consiste à concevoir des sites web qui répondent à vos attentes et qui respectent votre image de marque.'
        },
        methode: {
          title: 'Notre méthode de travail',
          list: {
            Écoute:
              'Afin de mieux vous connaitre, nous essaierons de comprendre des éléments essentiels tels que votre activité, votre philosophie, vos objectifs et vos contraintes.',
            Recherche:
              'Après avoir mieux fait connaissance et cerner votre projet, nous trouverons des solutions adaptées à vos besoins tout en respectant votre image de marque.',
            Création:
              'En vous consultant et informant étape par étape, votre projet commence à avoir un visage, le votre tout simplement.',
            Suivi:
              "Après la publication du site web, nous vous accompagnerons dans la maintenance et mise à jour du site, dans la formation et le référencement et dans l'analyse du trafic."
          }
        },
        choisir: {
          title: 'Pourquoi nous choisir',
          list: {
            'Une prestation complète':
              'Du choix de votre nom de domaine à la configuration de votre messagerie professionnelle, en passant par la création, l’hébergement et le référencement de votre site web, nous vous offrirons un service complet.',
            'À la pointe de la technique':
              'Nous utilisons les dernières techniques et langages du web (HTML5, CSS3 et JavaScript), afin de vous offrir le meilleur service possible.',
            'Un projet qui vous ressemble':
              'Nous concevons des sites web qui vous ressemblent et qui sont adaptés à votre budget.',
            'Un design innovant':
              'Nous concevons un design sur mesure afin de refléter au mieux l’identité de votre entreprise.'
          }
        }
      },

      contact: {
        title: 'Contact',
        description:
          'Parlez-nous de vos besoins, nous serions ravis de collaborer avec vous.',
        text:
          "Créer des sites web professionnels, c'est ce que nous faisons. Parlez-nous de vos besoins, nous serions ravis de collaborer avec vous.",
        form: {
          fullname: 'Votre nom',
          company: 'Votre entreprise',
          email: 'Votre e-mail',
          message: 'Décrivez-nous votre projet',
          submit: 'Soumettre'
        },
        other: {
          title: 'Autres moyens de nous contacter',
          list: {
            'h.nedjar@univerweb.dz': 'Direction générale',
            'webmaster@univerweb.dz': 'Service technique'
          }
        }
      },

      error: {
        title_1: 'Page non trouvée',
        title_2: "Une erreur s'est produite",
        description: 'Page non trouvée, pas de bol.',
        btn: "Retour à l'accueil"
      },

      footer: {
        address: {
          name: 'Univerweb Eurl',
          streetAddress: '62, coopérative El Mebniya',
          addressLocality: 'Birkhadem',
          postalCode: '16 330',
          addressCity: 'Alger'
        },
        maps: 'Obtenir un itinéraire',
        phone: {
          label: 'Téléphone / fax :',
          number: '021 44 08 11'
        },
        mobile: {
          label: 'Mobile :',
          number: '0551 90 46 22'
        },
        email: {
          label: 'E-mail :',
          mailto: 'contact@univerweb.dz'
        },
        social: {
          twitter: 'Rejoignez-nous sur Twitter',
          facebook: 'Rejoignez-nous sur Facebook',
          github: 'Rejoignez-nous sur GitHub'
        },
        copy: 'Copyright 2020 Univerweb. Tous droits réservés.'
      },

      request: {
        title: 'Vous avez un projet en tête ?',
        link: 'Contactez-nous',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?'
      }
    })
  })
}
