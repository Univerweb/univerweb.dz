export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'يونيفارواب',

      menu: [
        { name: 'اخر الاعمال', slug: 'realisations' },
        { name: 'الخدمات', slug: 'prestations' },
        { name: 'الوكالة', slug: 'agence' },
        { name: 'اتصل', slug: 'contact' }
      ],

      links: {
        home: 'الصفحة الرئيسية',
        ariaLabel: 'افتح القائمة',
        previous: 'السابق',
        next: 'التالي'
      },

      home: {
        title: 'تصميم مواقع الويب',
        description: 'محتوى قادم ...',
        create: {
          title: 'نقوم بإنشاء مواقع الويب.',
          text:
            'نقوم بتصميم مواقع الويب التي تلبي توقعاتك بدقة وتحترم تمامًا صورة علامتك التجارية.'
        }
      },

      works: {
        title: 'اخر الاعمال',
        description: 'محتوى قادم ...'
      },

      workItem: [
        {
          title: 'أكوديم',
          slug: 'acodim'
        },
        {
          title: 'أو تي أس عور',
          slug: 'ets-ouar'
        },
        {
          title: 'تي بي بي أل',
          slug: 'tpbl'
        },
        {
          title: 'بوتانيك الجزائر',
          slug: 'botanique-algerie'
        },
        {
          title: 'كوريم',
          slug: 'corim'
        },
        {
          title: 'وي سرفيس',
          slug: 'we-service'
        },
        {
          title: 'إنفو إيليك',
          slug: 'infoelec'
        },
        {
          title: 'أوبتيموم ترانسميسيون',
          slug: 'optimum-transmission'
        },
        {
          title: 'صوبروفور',
          slug: 'soprofort'
        },
        {
          title: 'ميكروتال تراينينغ إنستيتيوت',
          slug: 'microtel-training-institute'
        },
        {
          title: 'إنتيغرال',
          slug: 'integral'
        },
        {
          title: 'إبيزا',
          slug: 'epiza'
        },
        {
          title: 'بيبو',
          slug: 'pibo'
        },
        {
          title: 'إنترمات',
          slug: 'intermat'
        },
        {
          title: 'BN Electric Company',
          slug: 'bn-electric-company'
        },
        {
          title: 'سانكيليك',
          slug: 'cinquelec'
        },
        {
          title: 'سفارتيك',
          slug: 'spheretec'
        },
        {
          title: 'عيادة صونيا',
          slug: 'clinique-sonya'
        },
        {
          title: 'عيادة أياة',
          slug: 'clinique-aya'
        },
        {
          title: 'ارسي ايلك',
          slug: 'rcelec'
        }
      ],

      prestations: {
        title: 'الخدمات',
        description: 'محتوى قادم ...'
      },

      agency: {
        title: 'الوكالة',
        description: 'محتوى قادم ...',
        webAgency: {
          title: 'نحن وكالة ويب متخصصة في إنشاء واستضافة ومراجع مواقع الويب.',
          text_1:
            'تأسست منذ 2011 في الجزائر العاصمة ، لدينا فريق مبدع وديناميكي وعاطفي لعملهم.',
          text_2:
            'مهمتنا هي تصميم مواقع الويب التي تلبي توقعاتك وتحترم صورة علامتك التجارية.'
        },
        methode: {
          title: 'طريقة عملنا',
          ecoute: {
            title: 'استمع',
            text:
              'للتعرف عليك بشكل أفضل ، سنحاول فهم العناصر الأساسية مثل نشاطك وفلسفتك وأهدافك وقيودك.'
          },
          recherche: {
            title: 'البحث',
            text:
              'بعد التعرف على بعضهم البعض بشكل أفضل وفهم مشروعك ، سنجد حلولًا تتناسب مع احتياجاتك مع احترام صورة علامتك التجارية.'
          },
          creation: {
            title: 'تأسيس',
            text:
              'من خلال التشاور وإعلامك خطوة بخطوة ، يبدأ مشروعك في أن يكون له وجه ، ببساطة هو وجهك.'
          },
          suivi: {
            title: 'مراقبة',
            text:
              'بعد نشر الموقع ، سنرافقك في صيانة وتحديث الموقع ، في التدريب والمراجع وتحليل حركة المرور.'
          }
        },
        choisir: {
          title: 'لماذا تختارنا',
          prestation: {
            title: 'خدمة كاملة',
            text:
              'من اختيار اسم النطاق الخاص بك إلى تكوين الرسائل المهنية الخاصة بك ، بما في ذلك إنشاء موقعك واستضافته والإشارة إليه ، سنقدم لك خدمة كاملة.'
          },
          pointe: {
            title: 'في طليعة التكنولوجيا',
            text:
              'نحن نستخدم أحدث تقنيات ولغات الويب (إتش تي إم إل 5 و سي إس إس 3 وجافا سكريبت) ، لنقدم لك أفضل خدمة ممكنة.'
          },
          projet: {
            title: 'مشروع يشبهك',
            text: 'نحن نصمم مواقع ويب تشبهك ومصممة خصيصًا لميزانيتك.'
          },
          design: {
            title: 'تصميم مبتكر',
            text: 'ننشئ تصميمًا مخصصًا ليعكس هوية عملك بشكل أفضل.'
          }
        }
      },

      contact: {
        title: 'اتصل',
        description: 'أخبرنا عن احتياجاتك ، ونود العمل معك.',
        text:
          'إنشاء مواقع احترافية هو ما نقوم به. أخبرنا عن احتياجاتك ، ونود العمل معك.',
        form: {
          fullname: 'اسمك',
          company: 'اسم الشركة',
          email: 'البريد الإلكتروني',
          message: 'صف المشروع',
          submit: 'إرسال'
        },
        other: {
          title: 'طرق أخرى للاتصال بنا',
          direction: {
            title: 'إدارة عامة',
            email: 'h.nedjar@univerweb.dz'
          },
          technique: {
            title: 'خدمة تقنية',
            email: 'webmaster@univerweb.dz'
          }
        }
      },

      error: {
        title_1: 'الصفحة غير موجودة',
        title_2: 'وقع خطأ ما',
        description: 'لم يتم العثور على الصفحة ، بدون وعاء.',
        btn: 'عودة إلى الإستقبال'
      },

      footer: {
        address: {
          name: 'يونيفارواب',
          streetAddress: '62 ، تعاونية المبنية',
          addressLocality: 'بئر خادم',
          postalCode: '330 16',
          addressCity: 'الجزائر العاصمة '
        },
        maps: 'احصل على الاتجاهات',
        phone: {
          label: 'الهاتف / الفاكس:',
          number: '021 44 08 11'
        },
        mobile: {
          label: 'جوال:',
          number: '0551 90 46 22'
        },
        email: {
          label: 'البريد الإلكتروني:',
          mailto: 'contact@univerweb.dz'
        },
        social: {
          twitter: 'انضم إلينا على تويتر',
          facebook: 'انضم إلينا على فيسبوك',
          github: 'انضم إلينا على جيث هوب'
        },
        copy: 'حقوق النشر 2020 يونيفارواب. جميع الحقوق محفوظة. '
      }
    })
  })
}
