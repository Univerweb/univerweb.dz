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
        next: 'Next',
        visit: 'Visit Website'
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

      work: [
        {
          slug: 'acodim',
          title: 'Acodim',
          description: 'Content to come…',
          client: {
            Client: 'Acodim',
            Features: 'Web Design, Development, Hosting',
            Industry: 'Real estate promotion'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta perspiciatis sit, corporis quia, ipsum veritatis laboriosam iure, expedita quo eligendi ipsam doloribus nulla ducimus officiis numquam voluptatem temporibus voluptates.',
          link: 'https://www.acodim.dz'
        },
        {
          slug: 'ets-ouar',
          title: 'ETS Ouar',
          description: 'Content to come…',
          client: {
            Client: 'ETS Ouar',
            Features: 'Web Design, Development',
            Industry: 'Automobile'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta perspiciatis sit, corporis quia, ipsum veritatis laboriosam iure, expedita quo eligendi ipsam doloribus nulla ducimus officiis numquam voluptatem temporibus voluptates.',
          link: 'https://www.etsouar.com'
        },
        {
          slug: 'tpbl',
          title: 'TPBL',
          description: 'Content to come…',
          client: {
            Client: 'TPBL',
            Features: 'Web Design, Development, Hosting',
            Industry: 'Real estate promotion'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.tpbl.dz'
        },
        {
          slug: 'botanique-algerie',
          title: 'Botanique Algérie',
          description: 'Content to come…',
          client: {
            Client: 'Botanique Algérie',
            Features: 'Web Design, Development, Hosting',
            Industry: 'Botanical'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.botaniquealgerie.dz'
        },
        {
          slug: 'corim',
          title: 'Corim',
          description: 'Content to come…',
          client: {
            Client: 'Corim',
            Features: 'Web Design, Development, Hosting',
            Industry: 'Real estate'
          },
          body:
            'Corim is a real estate agency based in Algiers and specialized in the rental and sale of apartments, villas, buildings, land, premises and hangars.',
          link: 'https://www.corim.dz'
        },
        {
          slug: 'we-service',
          title: 'We Service',
          description: 'Content to come…',
          client: {
            Client: 'We Service',
            Features: 'Web Design, Hosting',
            Industry: 'Consulting'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.weservice.dz'
        },
        {
          slug: 'infoelec',
          title: 'infoElec',
          description: 'Content to come…',
          client: {
            Client: 'infoElec',
            Features: 'Web Design, Development, Hosting',
            Industry: 'News'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.infoelec.dz'
        },
        {
          slug: 'optimum-transmission',
          title: 'Optimum Transmission',
          description: 'Content to come…',
          client: {
            Client: 'Optimum Transmission',
            Features: 'Web Design, Hosting',
            Industry: 'Mechanical'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.optimumtransmission.dz'
        },
        {
          slug: 'soprofort',
          title: 'Soprofort',
          description: 'Content to come…',
          client: {
            Client: 'Soprofort',
            Features: 'Web Design, Development, Hosting',
            Industry: 'Real estate promotion'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.soprofort.dz'
        },
        {
          slug: 'microtel-training-institute',
          title: 'Microtel Training Institute',
          description: 'Content to come…',
          client: {
            Client: 'Microtel Training Institute',
            Features: 'Web Design, Development, Hosting',
            Industry: 'Training'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.microtel-net.com'
        },
        {
          slug: 'integral',
          title: 'Integral',
          description: 'Content to come…',
          client: {
            Client: 'Integral',
            Features: 'Web Design, Development',
            Industry: 'Public works'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.integral.sarl'
        },
        {
          slug: 'epiza',
          title: 'Epiza',
          description: 'Content to come…',
          client: {
            Client: 'Epiza',
            Features: 'Web Design, Development, Hosting',
            Industry: 'Real estate promotion'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.epizaskikda.com'
        },
        {
          slug: 'pibo',
          title: 'Pibo',
          description: 'Content to come…',
          client: {
            Client: 'Pibo',
            Features: 'Web Design, Development, Hosting',
            Industry: 'Real estate promotion'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.pibo.dz'
        },
        {
          slug: 'intermat',
          title: 'Intermat',
          description: 'Content to come…',
          client: {
            Client: 'Intermat',
            Features: 'Web Design, Development',
            Industry: 'Public works'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.intermatalgeria.com'
        },
        {
          slug: 'bn-electric-company',
          title: 'BN Electric Company',
          description: 'Content to come…',
          client: {
            Client: 'BN Electric Company',
            Features: 'Web Design, Hosting',
            Industry: 'Electricity'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.bnelectric.dz'
        },
        {
          slug: 'cinquelec',
          title: 'Cinquelec',
          description: 'Content to come…',
          client: {
            Client: 'Cinquelec',
            Features: 'Web Design, Development, Hosting',
            Industry: 'Electricity'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.cinquelec.com'
        },
        {
          slug: 'spheretec',
          title: 'Spheretec',
          description: 'Content to come…',
          client: {
            Client: 'Spheretec',
            Features: 'Web Design, Hosting',
            Industry: 'Telecommunications'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.spheretec.dz'
        },
        {
          slug: 'clinique-sonya',
          title: 'Clinique Sonya',
          description: 'Content to come…',
          client: {
            Client: 'Clinique Sonya',
            Features: 'Web Design, Hosting',
            Industry: 'Health'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.cliniquesonya.dz'
        },
        {
          slug: 'clinique-aya',
          title: 'Clinique Aya',
          description: 'Content to come…',
          client: {
            Client: 'Clinique Aya',
            Features: 'Web Design, Hosting',
            Industry: 'Health'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.cliniqueaya.dz'
        },
        {
          slug: 'rcelec',
          title: 'RCelec',
          description: 'Content to come…',
          client: {
            Client: 'RCelec',
            Features: 'Web Design, Hosting',
            Industry: 'Electricity'
          },
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
          link: 'https://www.rcelec.dz'
        }
      ],

      prestations: {
        title: 'Services',
        description: 'Content to come…',
        headline: 'Lorem ipsum, dolor sit amet elit.',
        body:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum omnis provident deserunt saepe laborum, fugiat soluta blanditiis mollitia quia ratione! Non fuga debitis aspernatur accusamus voluptatem minus voluptate, amet suscipit?',
        webDesign: {
          headline: 'Web design',
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ullam inventore quo nam, perspiciatis nobis accusantium odit ut velit modi sed accusamus aut iusto et, molestias fuga laboriosam tempora porro!'
        },
        dev: {
          headline: 'Development',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis est cum recusandae quas dolore, fuga praesentium neque deserunt quod sed culpa quisquam aperiam fugiat necessitatibus veniam! Odit animi architecto non.'
        },
        support: {
          headline: 'Support + Hosting',
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae nam, nisi veniam cum ad nostrum ab ullam dolores architecto, maxime ex perspiciatis aperiam id est iusto adipisci doloremque amet.'
        }
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
          "Creating professional websites is what we do. Tell us about your needs, we'd love to collaborate with you.",
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
