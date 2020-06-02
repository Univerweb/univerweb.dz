export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'Univerweb',
      dir: 'ltr',

      links: {
        home: 'Home',
        works: 'Latest work',
        prestations: 'Services',
        agency: 'Agency',
        contact: 'Contact',
        ariaLabel: 'Open menu'
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
          ecoute: {
            title: 'Listen',
            text:
              'In order to know you better, we will try to understand essential elements such as your activity, your philosophy, your objectives and your constraints.'
          },
          recherche: {
            title: 'Research',
            text:
              'After getting to know each other better and understanding your project, we will find solutions adapted to your needs while respecting your brand image.'
          },
          creation: {
            title: 'Creation',
            text:
              'By consulting and informing you step by step, your project begins to have a face, yours simply.'
          },
          suivi: {
            title: 'Monitoring',
            text:
              'After the publication of the website, we will accompany you in the maintenance and updating of the site, in training and referencing and in traffic analysis.'
          }
        },
        choisir: {
          title: 'Why choose us',
          prestation: {
            title: 'A complete service',
            text:
              'From the choice of your domain name to the configuration of your professional messaging, including the creation, hosting and referencing of your website, we will offer you a complete service.'
          },
          pointe: {
            title: 'At the cutting edge of technology',
            text:
              'We use the latest techniques and languages of the web (HTML5, CSS3 and JavaScript), in order to offer you the best possible service.'
          },
          projet: {
            title: 'A project that looks like you',
            text:
              'We design websites that look like you and are tailored to your budget.'
          },
          design: {
            title: 'Innovative design',
            text:
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
          direction: {
            title: 'Executive management',
            email: 'h.nedjar@univerweb.dz'
          },
          technique: {
            title: 'Technical service',
            email: 'webmaster@univerweb.dz'
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
      }
    })
  })
}
