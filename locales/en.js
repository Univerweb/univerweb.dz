export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'Univerweb',

      menu: {
        realisations: 'Latest work',
        prestations: 'Services',
        agence: 'Agency',
        contact: 'Contact'
      },

      links: {
        home: 'Home',
        ariaLabel: 'Open menu',
        previous: 'Previous',
        next: 'Next'
      },

      home: {
        title: 'Website Design',
        description: 'Content to come ...',
        create: {
          title: 'We create websites.',
          text:
            'We design websites that precisely meet your expectations and that fully respect your brand image.'
        }
      },

      works: {
        title: 'Latest work',
        description: 'Content to come ...'
      },

      worksItem: [
        {
          slug: 'acodim',
          title: 'Acodim'
        },
        {
          slug: 'ets-ouar',
          title: 'ETS Ouar'
        },
        {
          slug: 'tpbl',
          title: 'TPBL'
        },
        {
          slug: 'botanique-algerie',
          title: 'Botanique Algérie'
        },
        {
          slug: 'corim',
          title: 'Corim'
        },
        {
          slug: 'we-service',
          title: 'We Service'
        },
        {
          slug: 'infoelec',
          title: 'infoElec'
        },
        {
          slug: 'optimum-transmission',
          title: 'Optimum Transmission'
        },
        {
          slug: 'soprofort',
          title: 'Soprofort'
        },
        {
          slug: 'microtel-training-institute',
          title: 'Microtel Training Institute'
        },
        {
          slug: 'integral',
          title: 'Integral'
        },
        {
          slug: 'epiza',
          title: 'Epiza'
        },
        {
          slug: 'pibo',
          title: 'Pibo'
        },
        {
          slug: 'intermat',
          title: 'Intermat'
        },
        {
          slug: 'bn-electric-company',
          title: 'BN Electric Company'
        },
        {
          slug: 'cinquelec',
          title: 'Cinquelec'
        },
        {
          slug: 'spheretec',
          title: 'Spheretec'
        },
        {
          slug: 'clinique-sonya',
          title: 'Clinique Sonya'
        },
        {
          slug: 'clinique-aya',
          title: 'Clinique Aya'
        },
        {
          slug: 'rcelec',
          title: 'RCelec'
        }
      ],

      prestations: {
        title: 'Services',
        description: 'Content to come ...'
      },

      agency: {
        title: 'Agency',
        description: 'Content to come ...',
        webAgency: {
          title:
            'We are a web agency specializing in the creation, hosting and referencing of websites.',
          text_1:
            'Established since 2011 in Algiers, we have a creative, dynamic and passionate team for their work.',
          text_2:
            'Our job is to design websites that meet your expectations and that respect your brand image.'
        },
        methode: {
          title: 'Our working method',
          list: {
            Listen:
              'In order to know you better, we will try to understand essential elements such as your activity, your philosophy, your objectives and your constraints.',
            Research:
              'After getting to know each other better and understanding your project, we will find solutions adapted to your needs while respecting your brand image.',
            Creation:
              'By consulting and informing you step by step, your project begins to have a face, yours simply.',
            Monitoring:
              'After the publication of the website, we will accompany you in the maintenance and updating of the site, in training and referencing and in traffic analysis.'
          }
        },
        choisir: {
          title: 'Why choose us',
          list: {
            'A complete service':
              'From the choice of your domain name to the configuration of your professional messaging, including the creation, hosting and referencing of your website, we will offer you a complete service.',
            'At the cutting edge of technology':
              'We use the latest techniques and languages of the web (HTML5, CSS3 and JavaScript), in order to offer you the best possible service.',
            'A project that looks like you':
              'We design websites that look like you and are tailored to your budget.',
            'Innovative design':
              'We create a custom design to best reflect the identity of your business.'
          }
        }
      },

      contact: {
        title: 'Contact',
        description: "Tell us about your needs, we'd love to work with you.",
        text:
          "Creating professional websites is what we do. Tell us about your needs, we'd love to work with you.",
        form: {
          fullname: 'Your name',
          company: 'Company Name',
          email: 'Email',
          message: 'Describe the project',
          submit: 'Submit'
        },
        other: {
          title: 'Other ways to contact us',
          list: {
            'h.nedjar@univerweb.dz': 'Executive management',
            'webmaster@univerweb.dz': 'Technical service'
          }
        }
      },

      error: {
        title_1: 'Page not found',
        title_2: 'An error has occurred',
        description: 'Page not found, no bowl.',
        btn: 'Back to Home'
      },

      footer: {
        address: {
          name: 'Univerweb Eurl',
          streetAddress: '62, cooperative El Mebniya',
          addressLocality: 'Birkhadem',
          postalCode: '16 330',
          addressCity: 'Algiers'
        },
        maps: 'Get directions',
        phone: {
          label: 'Telephone / fax:',
          number: '021 44 08 11'
        },
        mobile: {
          label: 'Mobile:',
          number: '0551 90 46 22'
        },
        email: {
          label: 'E-mail:',
          mailto: 'contact@univerweb.dz'
        },
        social: {
          twitter: 'Join us on Twitter',
          facebook: 'Join us on Facebook',
          github: 'Join us on GitHub'
        },
        copy: 'Copyright 2020 Univerweb. All rights reserved.'
      },

      request: {
        title: 'Got a Project in Mind?',
        link: 'Get in Touch',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?'
      }
    })
  })
}
