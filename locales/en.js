export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'Univerweb',

      menu: {
        realisations: 'Latest work',
        prestations: 'Services',
        agence: 'The agency',
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
        description: 'Content to come…',
        headline: 'We design professional websites.',
        body:
          'We design websites that precisely meet your expectations and that fully respect your brand image.'
      },

      works: {
        title: 'Latest work',
        description: 'Content to come…',
        headline: 'Discover our latest creations.'
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
        description: 'Content to come…',
        headline: 'Lorem ipsum, dolor sit amet elit.',
        body:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum omnis provident deserunt saepe laborum, fugiat soluta blanditiis mollitia quia ratione! Non fuga debitis aspernatur accusamus voluptatem minus voluptate, amet suscipit?'
      },

      agency: {
        title: 'The agency',
        description: 'Content to come…',
        headline: 'We are a web agency.',
        body:
          'We are a web agency specializing in the creation, hosting and referencing of websites. Established since 2011 in Algiers, we have a creative, dynamic and passionate team for their work. Our job is to design websites that meet your expectations and that respect your brand image.',
        method: {
          headline: 'Our working method',
          body: {
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
        choose: {
          headline: 'Why choose us',
          body: {
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
        body:
          "Creating professional websites is what we do. Tell us about your needs, we'd love to work with you.",
        form: {
          fullname: 'Your name',
          company: 'Company Name',
          email: 'Email',
          message: 'Describe the project',
          submit: 'Submit'
        },
        other: {
          headline: 'Other ways to contact us',
          body: {
            'h.nedjar@univerweb.dz': 'Executive management',
            'webmaster@univerweb.dz': 'Technical service'
          }
        }
      },

      error: {
        404: 'Page not found',
        500: 'An error has occurred',
        description: 'no bowl.',
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
        headline: 'Got a Project in Mind?',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
        link: 'Get in Touch'
      }
    })
  })
}
