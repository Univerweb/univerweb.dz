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
        next: 'التالي',
        visit: 'زيارة الموقع'
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

      work: [
        {
          slug: 'acodim',
          title: 'أكوديم',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'أكوديم',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'ترقية عقارية'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.acodim.dz'
        },
        {
          slug: 'ets-ouar',
          title: 'أو تي أس عور',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'أو تي أس عور',
            المميزات: 'تصميم الموقع ، تطوير',
            القطاع: 'سيارات'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.etsouar.com'
        },
        {
          slug: 'tpbl',
          title: 'تي بي بي أل',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'تي بي بي أل',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'ترقية عقارية'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.tpbl.dz'
        },
        {
          slug: 'botanique-algerie',
          title: 'بوتانيك الجزائر',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'بوتانيك الجزائر',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'علم النبات'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.botaniquealgerie.dz'
        },
        {
          slug: 'corim',
          title: 'كوريم',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'كوريم',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'عقار'
          },
          body:
            'كوريم هي وكالة عقارية مقرها الجزائر العاصمة ومتخصصة في تأجير وبيع الشقق ، الفلل ، المباني ، الأراضي ، المحلات و الحظائر.',
          link: 'https://www.acodim.dz'
        },
        {
          slug: 'we-service',
          title: 'وي سرفيس',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'وي سرفيس',
            المميزات: 'تصميم الموقع ، إستضافة',
            القطاع: 'إستشارة'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.weservice.dz'
        },
        {
          slug: 'infoelec',
          title: 'إنفو إيليك',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'إنفو إيليك',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'أخبار'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.infoelec.dz'
        },
        {
          slug: 'optimum-transmission',
          title: 'أوبتيموم ترانسميسيون',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'أوبتيموم ترانسميسيون',
            المميزات: 'تصميم الموقع ، إستضافة',
            القطاع: 'ميكانيك'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.optimumtransmission.dz'
        },
        {
          slug: 'soprofort',
          title: 'صوبروفور',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'صوبروفور',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'ترقية عقارية'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.soprofort.dz'
        },
        {
          slug: 'microtel-training-institute',
          title: 'ميكروتال تراينينغ إنستيتيوت',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'ميكروتال تراينينغ إنستيتيوت',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'تكوين'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.microtel-net.com'
        },
        {
          slug: 'integral',
          title: 'إنتيغرال',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'إنتيغرال',
            المميزات: 'تصميم الموقع ، تطوير',
            القطاع: 'أشغال عمومية'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.integral.sarl'
        },
        {
          slug: 'epiza',
          title: 'إبيزا',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'إبيزا',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'ترقية عقارية'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.epizaskikda.com'
        },
        {
          slug: 'pibo',
          title: 'بيبو',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'بيبو',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'ترقية عقارية'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.pibo.dz'
        },
        {
          slug: 'intermat',
          title: 'إنترمات',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'إنترمات',
            المميزات: 'تصميم الموقع ، تطوير',
            القطاع: 'أشغال عمومية'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.intermatalgeria.com'
        },
        {
          slug: 'bn-electric-company',
          title: 'بي أن إلكتريك كومباني',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'بي أن إلكتريك كومباني',
            المميزات: 'تصميم الموقع ، إستضافة',
            القطاع: 'كهرباء'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.bnelectric.dz'
        },
        {
          slug: 'cinquelec',
          title: 'سانكيليك',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'سانكيليك',
            المميزات: 'تصميم الموقع ، تطوير ، إستضافة',
            القطاع: 'كهرباء'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.cinquelec.com'
        },
        {
          slug: 'spheretec',
          title: 'سفارتيك',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'سفارتيك',
            المميزات: 'تصميم الموقع ، إستضافة',
            القطاع: 'إتصالات'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.spheretec.dz'
        },
        {
          slug: 'clinique-sonya',
          title: 'عيادة صونيا',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'عيادة صونيا',
            المميزات: 'تصميم الموقع ، إستضافة',
            القطاع: 'الصحة'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.cliniquesonya.dz'
        },
        {
          slug: 'clinique-aya',
          title: 'عيادة أياة',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'عيادة أياة',
            المميزات: 'تصميم الموقع ، إستضافة',
            القطاع: 'الصحة'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.cliniqueaya.dz'
        },
        {
          slug: 'rcelec',
          title: 'ارسي ايلك',
          description: 'محتوى قادم…',
          client: {
            الزبون: 'ارسي ايلك',
            المميزات: 'تصميم الموقع ، إستضافة',
            القطاع: 'كهرباء'
          },
          body:
            'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
          link: 'https://www.rcelec.dz'
        }
      ],

      prestations: {
        title: 'الخدمات',
        description: 'محتوى قادم…',
        headline: 'كل أملاً بولندا، تلك, جهة العالم،.',
        body:
          'عن يكن تصرّف والنفيس انتصارهم, ان أسابيع الأهداف التقليدي فقد. لها ونتج أوزار الصفحة أي, أكثر انتصارهم مما ٣٠, الباهضة التنازلي ٣٠ جهة. إجلاء فكانت كما ما. أي الأمم والمعدات انه, ماذا تكاليف عدد أي. فقد إذ لأداء كانتا وباستثناء, تعديل عسكرياً دون ٣٠, قبل عل جزيرتي وحرمان استعملت.',
        webDesign: {
          headline: 'تصميم مواقع الإنترنت',
          body:
            'عن يكن تصرّف والنفيس انتصارهم, ان أسابيع الأهداف التقليدي فقد. لها ونتج أوزار الصفحة أي, أكثر انتصارهم مما ٣٠, الباهضة التنازلي ٣٠ جهة. إجلاء فكانت كما ما. أي الأمم والمعدات انه, ماذا تكاليف عدد أي. فقد إذ لأداء كانتا وباستثناء, تعديل عسكرياً دون ٣٠, قبل عل جزيرتي وحرمان استعملت.'
        },
        dev: {
          headline: 'تطوير',
          body:
            'عن يكن تصرّف والنفيس انتصارهم, ان أسابيع الأهداف التقليدي فقد. لها ونتج أوزار الصفحة أي, أكثر انتصارهم مما ٣٠, الباهضة التنازلي ٣٠ جهة. إجلاء فكانت كما ما. أي الأمم والمعدات انه, ماذا تكاليف عدد أي. فقد إذ لأداء كانتا وباستثناء, تعديل عسكرياً دون ٣٠, قبل عل جزيرتي وحرمان استعملت.'
        },
        support: {
          headline: 'دعم + إستضافة',
          body:
            'عن يكن تصرّف والنفيس انتصارهم, ان أسابيع الأهداف التقليدي فقد. لها ونتج أوزار الصفحة أي, أكثر انتصارهم مما ٣٠, الباهضة التنازلي ٣٠ جهة. إجلاء فكانت كما ما. أي الأمم والمعدات انه, ماذا تكاليف عدد أي. فقد إذ لأداء كانتا وباستثناء, تعديل عسكرياً دون ٣٠, قبل عل جزيرتي وحرمان استعملت.'
        }
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
          'إنشاء مواقع احترافية هو ما نقوم به. أخبرنا عن احتياجاتك ، نكون سعيدين بالتعامل معك.',
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
        description: 'ليس هناك حظ.',
        btn: 'عودة إلى الصفحة الرئيسية'
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
          'وقد تجهيز الإقتصادي ٣٠, أي بلا وحتّى المارق المتّبعة. أكثر الأخذ ذات هو. الأخذ بتخصيص البرية بل أما. قامت بلاده أي بعض. لمّ أم وحتى السفن, لغات الأمم الصفحة ٣٠ فعل. مكن اتّجة المتساقطة، لم.',
        link: 'اتصل بنا'
      }
    })
  })
}
