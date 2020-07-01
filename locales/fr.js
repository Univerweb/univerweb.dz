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
        next: 'Suivant',
        visit: 'Visiter le site web'
      },

      home: {
        title: 'Création de sites web',
        description: 'Contenu à venir…',
        headline: 'Nous concevons des sites web professionnels.',
        body:
          'Nous concevons des sites web qui répondent précisément à vos attentes et qui respectent intégralement votre image de marque.'
      },

      works: {
        title: 'Réalisations',
        description: 'Contenu à venir…',
        headline: 'Découvrez nos toutes dernières créations.'
      },

      work: [
        {
          slug: 'acodim',
          title: 'Acodim',
          description: 'Contenu à venir…',
          client: {
            Client: 'Acodim',
            Fonctionnalités: 'Web Design, Développement, Hébergement',
            Secteur: 'Promotion immobilière'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta perspiciatis sit, corporis quia, ipsum veritatis laboriosam iure, expedita quo eligendi ipsam doloribus nulla ducimus officiis numquam voluptatem temporibus voluptates.',
          link: 'https://www.acodim.dz'
        },
        {
          slug: 'ets-ouar',
          title: 'ETS Ouar',
          description: 'Contenu à venir…',
          client: {
            Client: 'ETS Ouar',
            Fonctionnalités: 'Web Design, Développement',
            Secteur: 'Automobile'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.etsouar.com'
        },
        {
          slug: 'tpbl',
          title: 'TPBL',
          description: 'Contenu à venir…',
          client: {
            Client: 'TPBL',
            Fonctionnalités: 'Web Design, Développement, Hébergement',
            Secteur: 'Promotion immobilière'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.tpbl.dz'
        },
        {
          slug: 'botanique-algerie',
          title: 'Botanique Algérie',
          description: 'Contenu à venir…',
          client: {
            Client: 'Botanique Algérie',
            Fonctionnalités: 'Web Design, Développement, Hébergement',
            Secteur: 'Botanique'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.botaniquealgerie.dz'
        },
        {
          slug: 'corim',
          title: 'Corim',
          description: 'Contenu à venir…',
          client: {
            Client: 'Corim',
            Fonctionnalités: 'Web Design, Développement, Hébergement',
            Secteur: 'Immobilier'
          },
          body:
            "Corim est une agence immobilière installée à Alger et spécialisée dans la location et la vente d'appartements, de villa, d'immeubles, de terrains, de locaux et de hangars.",
          link: 'https://www.corim.dz'
        },
        {
          title: 'We Service',
          slug: 'we-service',
          description: 'Contenu à venir…',
          client: {
            Client: 'We Service',
            Fonctionnalités: 'Web Design, Hébergement',
            Secteur: 'Conseil'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta perspiciatis sit, corporis quia, ipsum veritatis laboriosam iure, expedita quo eligendi ipsam doloribus nulla ducimus officiis numquam voluptatem temporibus voluptates.',
          link: 'https://www.weservice.dz'
        },
        {
          slug: 'infoelec',
          title: 'infoElec',
          description: 'Contenu à venir…',
          client: {
            Client: 'infoElec',
            Fonctionnalités: 'Web Design, Développement, Hébergement',
            Secteur: 'Actualité'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta perspiciatis sit, corporis quia, ipsum veritatis laboriosam iure, expedita quo eligendi ipsam doloribus nulla ducimus officiis numquam voluptatem temporibus voluptates.',
          link: 'https://www.infoelec.dz'
        }

        // {
        //   title: 'Optimum Transmission',
        //   slug: 'optimum-transmission',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'soprofort',
        //   title: 'Soprofort',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'microtel-training-institute',
        //   title: 'Microtel Training Institute',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'integral',
        //   title: 'Integral',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'epiza',
        //   title: 'Epiza',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'pibo',
        //   title: 'Pibo',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'intermat',
        //   title: 'Intermat',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'bn-electric-company',
        //   title: 'BN Electric Company',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'cinquelec',
        //   title: 'Cinquelec',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'spheretec',
        //   title: 'Spheretec',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'clinique-sonya',
        //   title: 'Clinique Sonya',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'clinique-aya',
        //   title: 'Clinique Aya',
        //   description: 'Contenu à venir…'
        // },
        // {
        //   slug: 'rcelec',
        //   title: 'RCelec',
        //   description: 'Contenu à venir…'
        // }
      ],

      prestations: {
        title: 'Prestations',
        description: 'Contenu à venir…',
        headline: 'Lorem ipsum, dolor sit amet elit.',
        body:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum omnis provident deserunt saepe laborum, fugiat soluta blanditiis mollitia quia ratione! Non fuga debitis aspernatur accusamus voluptatem minus voluptate, amet suscipit?',
        webDesign: {
          headline: 'Web design',
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ullam inventore quo nam, perspiciatis nobis accusantium odit ut velit modi sed accusamus aut iusto et, molestias fuga laboriosam tempora porro!'
        },
        dev: {
          headline: 'Développement',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis est cum recusandae quas dolore, fuga praesentium neque deserunt quod sed culpa quisquam aperiam fugiat necessitatibus veniam! Odit animi architecto non.'
        },
        support: {
          headline: 'Support + Hébergement',
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae nam, nisi veniam cum ad nostrum ab ullam dolores architecto, maxime ex perspiciatis aperiam id est iusto adipisci doloremque amet.'
        }
      },

      agency: {
        title: "L'agence",
        description: 'Contenu à venir…',
        headline: 'Nous sommes une agence web.',
        body:
          'Nous sommes une agence web spécialisée dans la création, l’hébergement et le référencement de sites web. Installée depuis 2011 à Alger, nous avons une équipe créative, dynamique et passionnée par son travail. Notre métier consiste à concevoir des sites web qui répondent à vos attentes et qui respectent votre image de marque.',
        method: {
          headline: 'Notre méthode de travail',
          body: {
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
        choose: {
          headline: 'Pourquoi nous choisir',
          body: {
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
        body:
          "Créer des sites web professionnels, c'est ce que nous faisons. Parlez-nous de vos besoins, nous serions ravis de collaborer avec vous.",
        form: {
          fullname: 'Votre nom',
          company: 'Votre entreprise',
          email: 'Votre e-mail',
          message: 'Décrivez-nous votre projet',
          submit: 'Soumettre'
        },
        other: {
          headline: 'Autres moyens de nous contacter',
          body: {
            'h.nedjar@univerweb.dz': 'Direction générale',
            'webmaster@univerweb.dz': 'Service technique'
          }
        }
      },

      error: {
        404: 'Page non trouvée',
        500: "Une erreur s'est produite",
        description: 'pas de bol.',
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
        headline: 'Vous avez un projet en tête ?',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
        link: 'Contactez-nous'
      }
    })
  })
}
