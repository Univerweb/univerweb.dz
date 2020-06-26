export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      name: 'يونيفارواب',

      menu: {
        realisations: 'آخر الأعمال',
        prestations: 'الخدمات',
        agence: 'الوكالة',
        contact: 'إتصل بنا'
      },

      links: {
        home: 'الصفحة الرئيسية',
        ariaLabel: 'افتح القائمة',
        previous: 'السابق',
        next: 'التالي'
      },

      home: {
        title: 'تصميم مواقع الويب',
        description: 'محتوى قادم…',
        headline: 'نقوم بتصميم مواقع ويب احترافية.',
        body:
          'نقوم بتصميم مواقع الويب التي تلبي توقعاتك بدقة وتحترم تمامًا صورة علامتك التجارية.'
      },

      works: {
        title: 'آخر الأعمال',
        description: 'محتوى قادم…',
        headline: 'اكتشف أحدث إبداعاتنا.'
      },

      worksItem: [
        {
          slug: 'acodim',
          title: 'أكوديم'
        },
        {
          slug: 'ets-ouar',
          title: 'أو تي أس عور'
        },
        {
          slug: 'tpbl',
          title: 'تي بي بي أل'
        },
        {
          slug: 'botanique-algerie',
          title: 'بوتانيك الجزائر'
        },
        {
          slug: 'corim',
          title: 'كوريم'
        },
        {
          slug: 'we-service',
          title: 'وي سرفيس'
        },
        {
          slug: 'infoelec',
          title: 'إنفو إيليك'
        },
        {
          slug: 'optimum-transmission',
          title: 'أوبتيموم ترانسميسيون'
        },
        {
          slug: 'soprofort',
          title: 'صوبروفور'
        },
        {
          slug: 'microtel-training-institute',
          title: 'ميكروتال تراينينغ إنستيتيوت'
        },
        {
          slug: 'integral',
          title: 'إنتيغرال'
        },
        {
          slug: 'epiza',
          title: 'إبيزا'
        },
        {
          slug: 'pibo',
          title: 'بيبو'
        },
        {
          slug: 'intermat',
          title: 'إنترمات'
        },
        {
          slug: 'bn-electric-company',
          title: 'BN Electric Company'
        },
        {
          slug: 'cinquelec',
          title: 'سانكيليك'
        },
        {
          slug: 'spheretec',
          title: 'سفارتيك'
        },
        {
          slug: 'clinique-sonya',
          title: 'عيادة صونيا'
        },
        {
          slug: 'clinique-aya',
          title: 'عيادة أياة'
        },
        {
          slug: 'rcelec',
          title: 'ارسي ايلك'
        }
      ],

      prestations: {
        title: 'الخدمات',
        description: 'محتوى قادم…',
        headline: 'Lorem ipsum, dolor sit amet elit.',
        body:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum omnis provident deserunt saepe laborum, fugiat soluta blanditiis mollitia quia ratione! Non fuga debitis aspernatur accusamus voluptatem minus voluptate, amet suscipit?'
      },

      agency: {
        title: 'الوكالة',
        description: 'محتوى قادم…',
        headline: 'نحن وكالة ويب.',
        body:
          'نحن وكالة ويب متخصصة في إنشاء واستضافة ومراجع مواقع الويب. تأسست منذ 2011 في الجزائر العاصمة ، لدينا فريق مبدع وديناميكي وعاطفي لعملهم. مهمتنا هي تصميم مواقع الويب التي تلبي توقعاتك وتحترم صورة علامتك التجارية.',
        method: {
          headline: 'طريقة عملنا',
          body: {
            استمع:
              'للتعرف عليك بشكل أفضل ، سنحاول فهم العناصر الأساسية مثل نشاطك وفلسفتك وأهدافك وقيودك.',
            البحث:
              'بعد التعرف على بعضهم البعض بشكل أفضل وفهم مشروعك ، سنجد حلولًا تتناسب مع احتياجاتك مع احترام صورة علامتك التجارية.',
            تأسيس:
              'من خلال التشاور وإعلامك خطوة بخطوة ، يبدأ مشروعك في أن يكون له وجه ، ببساطة هو وجهك.',
            مراقبة:
              'بعد نشر الموقع ، سنرافقك في صيانة وتحديث الموقع ، في التدريب والمراجع وتحليل حركة المرور.'
          }
        },
        choose: {
          headline: 'لماذا تختارنا',
          body: {
            'خدمة كاملة':
              'من اختيار اسم النطاق الخاص بك إلى تكوين الرسائل المهنية الخاصة بك ، بما في ذلك إنشاء موقعك واستضافته والإشارة إليه ، سنقدم لك خدمة كاملة.',
            'في طليعة التكنولوجيا':
              'نحن نستخدم أحدث تقنيات ولغات الويب (إتش تي إم إل 5 و سي إس إس 3 وجافا سكريبت) ، لنقدم لك أفضل خدمة ممكنة.',
            'مشروع يشبهك': 'نحن نصمم مواقع ويب تشبهك ومصممة خصيصًا لميزانيتك.',
            'تصميم مبتكر': 'ننشئ تصميمًا مخصصًا ليعكس هوية عملك بشكل أفضل.'
          }
        }
      },

      contact: {
        title: 'إتصل بنا',
        description: 'أخبرنا عن احتياجاتك ، ونود العمل معك.',
        body:
          'إنشاء مواقع احترافية هو ما نقوم به. أخبرنا عن احتياجاتك ، ونود العمل معك.',
        form: {
          fullname: 'اسمك',
          company: 'اسم الشركة',
          email: 'البريد الإلكتروني',
          message: 'صف المشروع',
          submit: 'إرسال'
        },
        other: {
          headline: 'طرق أخرى للاتصال بنا',
          body: {
            'h.nedjar@univerweb.dz': 'إدارة عامة',
            'webmaster@univerweb.dz': 'خدمة تقنية'
          }
        }
      },

      error: {
        404: 'الصفحة غير موجودة',
        500: 'وقع خطأ ما',
        description: 'بدون وعاء.',
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
      },

      request: {
        headline: 'لديك مشروع في الاعتبار ؟',
        body:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nulla rerum adipisci amet facilis eligendi quidem recusandae obcaecati libero dicta molestiae qui fugiat distinctio laudantium ratione iste omnis dolor ipsum?',
        link: 'اتصل بنا'
      }
    })
  })
}
