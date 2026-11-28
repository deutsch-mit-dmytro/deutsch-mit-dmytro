export const GRAMMAR_LESSONS = [
  {
    id: 'a1_01',
    level: 'A1',
    order: 1,
    isFree: true,
    title: 'Порядок слів у реченні',
    germanTitle: 'Satzbau: Aussagesatz & Fragesatz',
    goal: 'Будувати стверджувальні речення та ставити запитання при знайомстві й у побуті.',
    ruleSummary:
      'У німецькому розповідному реченні відмінюване дієслово ЗАВЖДИ стоїть на 2-му місці — неважливо, з якого слова починається речення. У питанні з питальним словом (wer, wo, wie, was) дієслово теж на 2-му місці, а в питанні без питального слова (на «так/ні») дієслово виходить на 1-ше місце.',
    tables: [
      {
        title: '1. Типи речень та позиція дієслова',
        subtitle: 'Як змінюється місце відмінюваного дієслова залежно від типу речення',
        headers: ['Тип речення', 'Позиція дієслова', 'Схема', 'Приклад'],
        rows: [
          ['Розповідь (прямий порядок)', '2-ге місце', '[Хто?] + [ДІЄСЛОВО] + [Де / Коли?]', 'Ich wohne in Berlin.'],
          ['Розповідь (інверсія)', '2-ге місце', '[Коли / Де?] + [ДІЄСЛОВО] + [Хто?]', 'Heute wohne ich in Berlin.'],
          ['W-питання', '2-ге місце', '[W-слово] + [ДІЄСЛОВО] + [Хто?]?', 'Woher kommst du?'],
          ['Питання Так/Ні', '1-ше місце', '[ДІЄСЛОВО] + [Хто?] + [Решта]?', 'Kommst du heute?']
        ],
        example: 'Heute wohne ich in Berlin. — Kommst du heute?'
      }
    ],
    ukrainianTrap:
      'В українській ми кажемо: «Сьогодні я працюю вдома» (дієслово аж на 3-му місці). У німецькій так не можна: після обставини часу «Heute» одразу йде дієслово — «Heute arbeite ich zu Hause».',
    examTip:
      'Goethe-Zertifikat A1 (Sprechen Teil 1 & 2): на іспиті ти маєш поставити партнеру запитання за карткою зі словом (наприклад, «Wohnort?» → «Wo wohnst du?» або «Wohnst du in Kiew?»).',
    exercises: [
      {
        type: 'builder',
        prompt: 'Збери речення: «Мій приятель завітає сьогодні ввечері».',
        tokens: ['vorbei.', 'kommt', 'Mein Kumpel', 'heute Abend'],
        answer: 'Mein Kumpel kommt heute Abend vorbei.',
        explanation: 'На 1-му місці підмет (Mein Kumpel), на 2-му — відмінюване дієслово (kommt), а відокремлюваний префікс vorbei йде в самий кінець.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення з інверсією: «Сьогодні я маю бажання піти в кіно».',
        tokens: ['ich', 'Heute', 'Lust auf Kino.', 'habe'],
        answer: 'Heute habe ich Lust auf Kino.',
        explanation: 'Якщо речення починається з часу (Heute), дієслово (habe) все одно лишається на 2-му місці, а підмет (ich) стає після нього.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний порядок слів: «Звідки ви родом?» (ввічлива форма)',
        options: [
          'Woher Sie kommen?',
          'Woher kommen Sie?',
          'Kommen woher Sie?'
        ],
        answer: 'Woher kommen Sie?',
        explanation: 'У W-питанні після питального слова (Woher) на 2-му місці завжди стоїть дієслово (kommen), а потім займенник (Sie).'
      },
      {
        type: 'builder',
        prompt: 'Постав запитання без питального слова: «Ти вчиш німецьку?»',
        tokens: ['du', 'Deutsch?', 'Lernst'],
        answer: 'Lernst du Deutsch?',
        explanation: 'У питанні, на яке відповідають «так» або «ні», дієслово (Lernst) виходить на 1-ше місце.'
      },
      {
        type: 'choice',
        prompt: 'Яке речення побудоване граматично правильно?',
        options: [
          'Am Montag ich habe einen Termin.',
          'Am Montag habe ich einen Termin.',
          'Habe am Montag ich einen Termin.'
        ],
        answer: 'Am Montag habe ich einen Termin.',
        explanation: '«Am Montag» займає 1-шу позицію в реченні, тому дієслово «habe» обов’язково стає на 2-гу позицію.'
      },
      {
        type: 'fill',
        prompt: 'Впиши пропущене питальне слово («Де?»): ___ wohnst du jetzt? — In München.',
        placeholder: 'Питальне слово...',
        answer: 'Wo',
        explanation: '«Wo?» означає «Де?» (місце перебування). «Woher?» — «Звідки?», «Wohin?» — «Куди?».'
      },
      {
        type: 'builder',
        prompt: 'Збери запитання для іспиту: «Коли починається курс?»',
        tokens: ['der Kurs?', 'Wann', 'beginnt'],
        answer: 'Wann beginnt der Kurs?',
        explanation: 'Питальне слово Wann (1) → дієслово beginnt (2) → підмет der Kurs (3).'
      },
      {
        type: 'choice',
        prompt: 'Як правильно відповісти на запитання «Kommst du mit?» (Ти йдеш зі мною?)',
        options: [
          'Ja, ich komme gerne mit.',
          'Ja, komme ich gerne mit.',
          'Ja, ich mit komme gerne.'
        ],
        answer: 'Ja, ich komme gerne mit.',
        explanation: 'Слово «Ja» відділяється комою і не рахується як позиція в реченні: ich (1) → komme (2) → gerne (3) → mit (кінець).'
      }
    ]
  },

  {
    id: 'a1_02',
    level: 'A1',
    order: 2,
    isFree: true,
    title: 'Дієслова в Präsens + sein і haben',
    germanTitle: 'Präsens: regelmäßige Verben, sein & haben',
    goal: 'Відмінювати звичайні дієслова та базові дієслова «бути» (sein) і «мати» (haben).',
    ruleSummary:
      'Щоб провідміняти правильне дієслово, відкидаємо -en (отримуємо основу) і додаємо закінчення: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Дієслова sein (бути) та haben (мати) відмінюються не за правилом — їх потрібно знати напам’ять.',
    tables: [
      {
        title: '1. Відмінювання дієслів у Präsens (kommen, arbeiten, sein, haben)',
        subtitle: 'Усі 6 осіб для стандартних дієслів, основи на -t/-d та ключових дієслів sein і haben',
        headers: ['Особа', 'kommen (стандарт)', 'arbeiten (основа на -t)', 'sein (бути)', 'haben (мати)'],
        rows: [
          ['ich', 'komme', 'arbeite', 'bin', 'habe'],
          ['du', 'kommst', 'arbeitest', 'bist', 'hast'],
          ['er / sie / es', 'kommt', 'arbeitet', 'ist', 'hat'],
          ['wir', 'kommen', 'arbeiten', 'sind', 'haben'],
          ['ihr', 'kommt', 'arbeitet', 'seid', 'habt'],
          ['sie / Sie', 'kommen', 'arbeiten', 'sind', 'haben']
        ],
        example: 'Wir kommen aus der Ukraine und sind heute in Berlin.'
      }
    ],
    ukrainianTrap:
      'В українській ми кажемо «Я вдома» або «Вона лікар» без дієслова. У німецькій дієслово-зв’язка sein обов’язкове: «Ich BIN zu Hause», «Sie IST Ärztin». А в дієслові haben у формах du та er випадає літера b: hast, hat (не habst/habt!).',
    examTip:
      'Goethe-Zertifikat A1 (Schreiben Teil 1): під час заповнення анкети звертай увагу на форми «Sie» (Ви з великої літери — офіційне звертання) та «sie» (вона або вони).',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильну форму: Meine Freundin ___ aus Kyiv.',
        options: ['kommen', 'kommst', 'kommt'],
        answer: 'kommt',
        explanation: '«Meine Freundin» (моя подруга) — це 3-тя особа однини (sie — вона), тому закінчення -t: kommt.'
      },
      {
        type: 'fill',
        prompt: 'Впиши правильну форму дієслова sein: Wir ___ jetzt in Deutschland.',
        placeholder: 'Форма sein...',
        answer: 'sind',
        explanation: 'Для займенника «wir» (ми) форма дієслова sein — «sind».'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «У нього сьогодні немає часу»?',
        options: [
          'Er habt heute keine Zeit.',
          'Er hat heute keine Zeit.',
          'Er hast heute keine Zeit.'
        ],
        answer: 'Er hat heute keine Zeit.',
        explanation: 'У 3-й особі однини (er/sie/es) дієслово haben має форму «hat» (без літери b).'
      },
      {
        type: 'fill',
        prompt: 'Провідміняй дієслово arbeiten: Du ___ sehr viel.',
        placeholder: 'Форма arbeiten...',
        answer: 'arbeitest',
        explanation: 'Основа дієслова закінчується на -t (arbeit-), тому перед -st додається з’єднувальна -e-: arbeitest.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: ___ ihr heute Abend zu Hause?',
        options: ['Sind', 'Seid', 'Bist'],
        answer: 'Seid',
        explanation: 'Для «ihr» (ви — звертання до групи друзів) форма дієслова sein — «seid».'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Ви вчите німецьку дуже швидко» (ввічливо, Sie).',
        tokens: ['sehr schnell.', 'lernen', 'Sie', 'Deutsch'],
        answer: 'Sie lernen Deutsch sehr schnell.',
        explanation: 'Ввічлива форма «Sie» (Ви) завжди вимагає закінчення -en: Sie lernen.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова haben: ___ du einen Ausweis dabei?',
        placeholder: 'Форма haben...',
        answer: 'Hast',
        explanation: 'Для «du» форма дієслова haben — «hast» (на початку речення з великої літери: Hast).'
      },
      {
        type: 'choice',
        prompt: 'Переклади: «Я студент і живу в Києві».',
        options: [
          'Ich Student und wohne in Kyiv.',
          'Ich bin Student und wohne in Kyiv.',
          'Ich ist Student und wohnt in Kyiv.'
        ],
        answer: 'Ich bin Student und wohne in Kyiv.',
        explanation: 'Перед іменником-професією/статусом обов’язково ставимо дієслово sein (ich bin), а для ich закінчення дієслова wohnen — -e (wohne).'
      }
    ]
  },

  {
    id: 'a1_03',
    level: 'A1',
    order: 3,
    isFree: false,
    title: 'Сильні дієслова зі зміною голосної',
    germanTitle: 'Starke Verben mit Vokalwechsel (Präsens)',
    goal: 'Правильно змінювати кореневу голосну в популярних дієсловах (fahren, sprechen, essen, lesen, nehmen).',
    ruleSummary:
      'Деякі німецькі дієслова змінюють голосну в корені, але ТІЛЬКИ у 2-й та 3-й особі однини (du та er/sie/es). У формах ich, wir, ihr, sie/Sie голосна НЕ змінюється!',
    tables: [
      {
        title: '1. Зміна кореневої голосної у du та er/sie/es',
        subtitle: 'У формах ich, wir, ihr, sie/Sie голосна залишається початковою',
        headers: ['Модель', 'Дієслова', 'ich / wir / ihr', 'du / er, sie, es'],
        rows: [
          ['a → ä', 'fahren, schlafen', 'ich fahre, wir fahren, ihr fahrt', 'du fährst, er fährt'],
          ['e → i', 'sprechen, essen, helfen', 'ich spreche, wir sprechen, ihr sprecht', 'du sprichst, er spricht'],
          ['e → ie', 'lesen, sehen', 'ich lese, wir lesen, ihr lest', 'du liest, sie liest'],
          ['Виняток', 'nehmen (брати)', 'ich nehme, wir nehmen, ihr nehmt', 'du nimmst, er nimmt']
        ],
        example: 'Er fährt mit dem Bus und liest dabei ein Buch.'
      }
    ],
    ukrainianTrap:
      'Найчастіша помилка — змінювати голосну у множині («wir fähren» або «ihr spricht»). Запам’ятай правило: змінюються лише du та er/sie/es, а wir та ihr завжди лишаються як в інфінітиві!',
    examTip:
      'Goethe-Zertifikat A1 (Hören & Lesen): слова «fährt» (їде), «liest» (читає), «isst» (їсть) та «nimmt» (бере) постійно трапляються в діалогах про транспорт, ресторан та вільний час.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильну форму дієслова fahren: Wann ___ der Zug nach Berlin?',
        options: ['fahrt', 'fährt', 'fahren'],
        answer: 'fährt',
        explanation: '«Der Zug» (потяг) — це 3-тя особа однини (er), тому голосна a отримує умлаут: fährt.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова sprechen: Mein Kumpel ___ sehr gut Deutsch.',
        placeholder: 'Форма sprechen...',
        answer: 'spricht',
        explanation: 'У 3-й особі однини (er) голосна e змінюється на i: spricht.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Ми їдемо завтра до Мюнхена»?',
        options: [
          'Wir fähren morgen nach München.',
          'Wir fahren morgen nach München.',
          'Wir fährt morgen nach München.'
        ],
        answer: 'Wir fahren morgen nach München.',
        explanation: 'У множині (wir) коренева голосна НЕ змінюється — залишається «fahren».'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова nehmen: Was ___ du zum Frühstück? — Ich nehme Müsli.',
        placeholder: 'Форма nehmen...',
        answer: 'nimmst',
        explanation: 'Дієслово nehmen у формі du втрачає h і подвоює m: nimmst.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму дієслова lesen: ___ du oft Zeitungen?',
        options: ['Lesst', 'Liest', 'Lest'],
        answer: 'Liest',
        explanation: 'У дієслові lesen у 2-й особі однини e переходить у ie, а закінчення зливається з основою: du liest.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Вона охоче їсть піцу».',
        tokens: ['gerne', 'isst', 'Sie', 'Pizza.'],
        answer: 'Sie isst gerne Pizza.',
        explanation: 'Для «sie» (вона) дієслово essen змінює e на i: isst.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму для «ihr» (ви): ___ ihr heute Abend fern? (fernsehen)',
        options: ['Sieht', 'Seht', 'Siet'],
        answer: 'Seht',
        explanation: 'У формі «ihr» зміна голосної НЕ відбувається, тому від sehen утворюється «seht» (Seht ihr ... fern?).'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова helfen (допомагати): Er ___ mir beim Lernen.',
        placeholder: 'Форма helfen...',
        answer: 'hilft',
        explanation: 'У 3-й особі однини дієслово helfen змінює e на i: hilft.'
      }
    ]
  },

  {
    id: 'a1_04',
    level: 'A1',
    order: 4,
    isFree: false,
    title: 'Артиклі (der, die, das / ein, eine) та множина',
    germanTitle: 'Artikel & Plural der Nomen',
    goal: 'Розрізняти означений та неозначений артиклі й правильно утворювати множину іменників.',
    ruleSummary:
      'Кожен німецький іменник пишеться з великої літери і має рід: чоловічий (der / ein), жіночий (die / eine) або середній (das / ein). Коли говоримо про предмет уперше — беремо ein/eine; коли про конкретний або вже відомий — der/die/das. У множині артикль ЗАВЖДИ die, а неозначеного артикля немає.',
    tables: [
      {
        title: '1. Роди, артиклі та утворення множини',
        subtitle: 'Як визначити артикль та побудувати множину в Nominativ',
        headers: ['Рід / Число', 'Означений', 'Неозначений', 'Приклад'],
        rows: [
          ['Чоловічий (der)', 'der', 'ein', 'der Ausweis → die Ausweise'],
          ['Жіночий (die)', 'die', 'eine', 'die Anmeldung → die Anmeldungen'],
          ['Середній (das)', 'das', 'ein', 'das Buch → die Bücher'],
          ['Множина', 'die', '— (немає)', 'der Kumpel → die Kumpels']
        ],
        example: 'Die Anmeldung ist kostenlos und viele Kumpels kommen heute.'
      }
    ],
    ukrainianTrap:
      'Рід у німецькій та українській часто не збігається: дівчина — das Mädchen (середній рід!), стіл — der Tisch (чоловічий), сонце — die Sonne (жіночий). Тому кожен іменник вчи одразу разом з артиклем.',
    examTip:
      'Goethe-Zertifikat A1 (Schreiben Teil 2): у листі обов’язково пиши всі іменники з великої літери — це один із базових критеріїв оцінювання на іспиті.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Який артикль мають усі іменники, що закінчуються на -ung (наприклад, Anmeldung)?',
        options: ['der', 'die', 'das'],
        answer: 'die',
        explanation: 'Усі іменники із суфіксами -ung, -heit, -keit, -schaft завжди жіночого роду — die.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний артикль: Hier ist ___ Buch. ___ Buch ist neu.',
        options: [
          'ein / Das',
          'eine / Die',
          'der / Der'
        ],
        answer: 'ein / Das',
        explanation: 'Слово Buch середнього роду (das Buch). Уперше називаємо — ein Buch, вдруге (вже відоме) — Das Buch.'
      },
      {
        type: 'fill',
        prompt: 'Впиши артикль множини: ___ Kumpels warten schon draußen.',
        placeholder: 'Артикль...',
        answer: 'Die',
        explanation: 'У множині для всіх трьох родів означений артикль однаковий — die (на початку речення — Die).'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Я за професією вчитель» (без артикля)?',
        options: [
          'Ich bin ein Lehrer.',
          'Ich bin Lehrer.',
          'Ich bin der Lehrer.'
        ],
        answer: 'Ich bin Lehrer.',
        explanation: 'Після дієслова sein перед назвою професії чи національності артикль у німецькій не ставиться.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Реєстрація дуже важлива».',
        tokens: ['sehr wichtig.', 'ist', 'Die Anmeldung'],
        answer: 'Die Anmeldung ist sehr wichtig.',
        explanation: 'Die Anmeldung (підмет, 1) → ist (дієслово, 2) → sehr wichtig (3).'
      },
      {
        type: 'choice',
        prompt: 'Якого роду слово das Mädchen (дівчина)?',
        options: ['жіночого (die)', 'середнього (das)', 'чоловічого (der)'],
        answer: 'середнього (das)',
        explanation: 'Усі слова зі зменшувальними суфіксами -chen та -lein завжди середнього роду (das).'
      },
      {
        type: 'fill',
        prompt: 'Впиши неозначений артикль (жіночий рід): Das ist ___ gute Idee!',
        placeholder: 'Артикль...',
        answer: 'eine',
        explanation: 'Слово Idee жіночого роду (die Idee), тому неозначений артикль — eine.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму множини для слова der Ausweis (посвідчення):',
        options: ['die Ausweise', 'die Ausweisen', 'die Ausweiser'],
        answer: 'die Ausweise',
        explanation: 'Множина від der Ausweis утворюється за допомогою закінчення -e: die Ausweise.'
      }
    ]
  },

  {
    id: 'a1_05',
    level: 'A1',
    order: 5,
    isFree: false,
    title: 'Відмінки Nominativ та Akkusativ',
    germanTitle: 'Kasus: Nominativ vs. Akkusativ',
    goal: 'Правильно змінювати артиклі після дієслів haben, brauchen, suchen, kaufen, essen, trinken.',
    ruleSummary:
      'Nominativ (хто? що?) — це підмет, який виконує дію. Akkusativ (кого? що?) — це об’єкт, на який спрямована дія. Головний секрет німецької: у Akkusativ змінюється ТІЛЬКИ чоловічий рід (der → den, ein → einen). Жіночий, середній рід і множина залишаються без змін!',
    tables: [
      {
        title: '1. Порівняння Nominativ та Akkusativ',
        subtitle: 'Зміна відбувається лише в чоловічому роді',
        headers: ['Рід / Число', 'Nominativ (означ. / неозн.)', 'Akkusativ (означ. / неозн.)', 'Приклад в Akkusativ'],
        rows: [
          ['Чоловічий (der)', 'der / ein', 'den / einen', 'Ich brauche den / einen Ausweis.'],
          ['Жіночий (die)', 'die / eine', 'die / eine', 'Wir suchen die / eine Wohnung.'],
          ['Середній (das)', 'das / ein', 'das / ein', 'Ich kaufe das / ein Buch.'],
          ['Множина (die)', 'die / —', 'die / —', 'Er liest die Bücher.']
        ],
        example: 'Ich brauche einen Ausweis und kaufe das Buch.'
      }
    ],
    ukrainianTrap:
      'Учні часто ставлять Nominativ там, де потрібен Akkusativ: «Ich habe ein Bruder» або «Ich nehme der Kaffee». Завжди перевіряй рід іменника: якщо це «він» (der) і над ним виконують дію — обов’язково додавай -en (einen Bruder, den Kaffee)!',
    examTip:
      'Goethe-Zertifikat A1 (Hören & Sprechen): замовлення в кафе чи покупки («Ich möchte einen Tee und ein Stück Kuchen») — класичне завдання на Akkusativ.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний артикль: Ich brauche ___ Ausweis (der Ausweis).',
        options: ['der', 'den', 'das'],
        answer: 'den',
        explanation: 'Дієслово brauchen вимагає Akkusativ. Ausweis — чоловічого роду (der), тому der змінюється на den.'
      },
      {
        type: 'fill',
        prompt: 'Впиши неозначений артикль у Akkusativ: Hast du ___ Kumpel in Berlin? (der Kumpel)',
        placeholder: 'Артикль...',
        answer: 'einen',
        explanation: 'Після haben ставимо Akkusativ. Оскільки Kumpel чоловічого роду (der), ein змінюється на einen.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: Wir suchen ___ Wohnung (die Wohnung).',
        options: ['einen', 'eine', 'ein'],
        answer: 'eine',
        explanation: 'Wohnung — жіночого роду (die Wohnung), а в жіночому роді Akkusativ збігається з Nominativ: eine.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Я замовляю (беру) каву та яблуко» (der Kaffee, der Apfel).',
        tokens: ['einen Kaffee', 'Ich', 'und einen Apfel.', 'nehme'],
        answer: 'Ich nehme einen Kaffee und einen Apfel.',
        explanation: 'І Kaffee, і Apfel — чоловічого роду (der), тому після дієслова nehmen обидва отримують einen.'
      },
      {
        type: 'choice',
        prompt: 'Де підмет у Nominativ, а де об’єкт у Akkusativ? «___ Mann kauft ___ Tisch.» (der Mann, der Tisch)',
        options: [
          'Der Mann kauft den Tisch.',
          'Den Mann kauft der Tisch.',
          'Der Mann kauft der Tisch.'
        ],
        answer: 'Der Mann kauft den Tisch.',
        explanation: 'Хто купує? Der Mann (Nominativ). Що купує? den Tisch (Akkusativ, чоловічий рід).'
      },
      {
        type: 'fill',
        prompt: 'Впиши означений артикль: Liest du ___ Buch gerade? (das Buch)',
        placeholder: 'Артикль...',
        answer: 'das',
        explanation: 'Buch середнього роду (das), у Akkusativ артикль не змінюється — das.'
      },
      {
        type: 'choice',
        prompt: 'Виправ помилку в реченні: «Er hat ein Hund und eine Katze.» (der Hund)',
        options: [
          'Er hat einen Hund und eine Katze.',
          'Er hat ein Hund und einen Katze.',
          'Er hat der Hund und die Katze.'
        ],
        answer: 'Er hat einen Hund und eine Katze.',
        explanation: 'Hund — чоловічого роду (der Hund), тому після hat має бути einen Hund.'
      },
      {
        type: 'builder',
        prompt: 'Збери запитання: «Ти бачиш того чоловіка?» (der Mann)',
        tokens: ['du', 'den Mann?', 'Siehst'],
        answer: 'Siehst du den Mann?',
        explanation: 'Питання на Так/Ні починається з дієслова (Siehst), а чоловічий рід der Mann у Akkusativ переходить у den Mann.'
      }
    ]
  },

  {
    id: 'a1_06',
    level: 'A1',
    order: 6,
    isFree: false,
    title: 'Заперечення nicht та kein / keine',
    germanTitle: 'Negation: nicht vs. kein',
    goal: 'Правильно заперечувати іменники, дії та ознаки без подвійного заперечення.',
    ruleSummary:
      'Для заперечення іменника, який стоїть з неозначеним артиклем (ein/eine) або взагалі без артикля, використовуємо kein / keine / keinen (відмінюється точно як ein). Для заперечення дієслова, прикметника або іменника з означеним артиклем (der/die/das) беремо nicht.',
    tables: [
      {
        title: '1. kein / keine / keinen vs nicht',
        subtitle: 'Коли заперечуємо іменник без артикля / з ein, а коли — дію чи ознаку',
        headers: ['Заперечення', 'Що заперечує', 'Приклад'],
        rows: [
          ['kein / keine / keinen', 'іменник з ein/eine або без артикля', 'Ich habe heute keine Zeit. / Er hat keinen Ausweis.'],
          ['nicht (у кінці)', 'дієслово (дію)', 'Ich arbeite heute nicht.'],
          ['nicht (перед словом)', 'прикметник, місце або іменник з der/die/das', 'Das Buch ist nicht teuer. / Ich verstehe das Wort nicht.']
        ],
        example: 'Ich habe heute keine Zeit und arbeite nicht.'
      }
    ],
    ukrainianTrap:
      'В українській ми кажемо: «Я НЕ маю НІЯКОГО часу» (два заперечення). У німецькій можливе ТІЛЬКИ ОДНЕ заперечення: «Ich habe keine Zeit» (ніколи не кажи «Ich habe nicht keine Zeit»!).',
    examTip:
      'Goethe-Zertifikat A1 (Schreiben Teil 2): у листі-відмові («Я не можу прийти, бо не маю часу») конструкції «Ich kann leider nicht kommen» та «Ich habe keine Zeit» є ключовими.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильне заперечення: Ich habe heute ___ Lust auf Kino. (die Lust)',
        options: ['nicht', 'keine', 'keinen'],
        answer: 'keine',
        explanation: 'Lust — іменник жіночого роду без артикля, тому заперечуємо його за допомогою keine.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму kein у Akkusativ: Er hat ___ Ausweis dabei. (der Ausweis)',
        placeholder: 'Форма kein...',
        answer: 'keinen',
        explanation: 'Після haben стоїть Akkusativ, а Ausweis — чоловічого роду (der), тому kein змінюється на keinen.'
      },
      {
        type: 'choice',
        prompt: 'Де правильно стоїть nicht? «Сьогодні я не працюю».',
        options: [
          'Ich nicht arbeite heute.',
          'Ich arbeite heute nicht.',
          'Nicht ich arbeite heute.'
        ],
        answer: 'Ich arbeite heute nicht.',
        explanation: 'Коли заперечуємо саме дієслово (дію), nicht стоїть у самому кінці речення.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Ця реєстрація не безкоштовна».',
        tokens: ['nicht', 'kostenlos.', 'Die Anmeldung', 'ist'],
        answer: 'Die Anmeldung ist nicht kostenlos.',
        explanation: 'Перед прикметником (kostenlos) заперечення nicht ставиться безпосередньо перед ним.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Я не розумію це слово» (das Wort — з означеним артиклем!)?',
        options: [
          'Ich verstehe kein das Wort.',
          'Ich verstehe das Wort nicht.',
          'Ich nicht verstehe das Wort.'
        ],
        answer: 'Ich verstehe das Wort nicht.',
        explanation: 'Перед іменником з означеним артиклем (das Wort) слово kein ставити не можна — ставимо nicht у кінці.'
      },
      {
        type: 'fill',
        prompt: 'Впиши заперечення (nicht або kein): Wir wohnen ___ in München, sondern in Hamburg.',
        placeholder: 'nicht або kein...',
        answer: 'nicht',
        explanation: 'Перед назвою міста з прийменником (in München) завжди використовуємо nicht.'
      },
      {
        type: 'choice',
        prompt: 'Виправ типову українську помилку: «Ich habe nicht keine Zeit.»',
        options: [
          'Ich habe keine Zeit.',
          'Ich habe nicht Zeit.',
          'Ich keine habe Zeit.'
        ],
        answer: 'Ich habe keine Zeit.',
        explanation: 'У німецькій мові діє правило одного заперечення: достатньо одного слова keine.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «У мене немає брата» (der Bruder).',
        tokens: ['keinen', 'Ich', 'Bruder.', 'habe'],
        answer: 'Ich habe keinen Bruder.',
        explanation: 'Bruder — чоловічого роду (der) у Akkusativ після haben, тому keinen Bruder.'
      }
    ]
  },

  {
    id: 'a1_07',
    level: 'A1',
    order: 7,
    isFree: false,
    title: 'Присвійні займенники (mein, dein, sein, ihr...)',
    germanTitle: 'Possessivartikel im Nominativ & Akkusativ',
    goal: 'Правильно говорити «мій, твій, його, її, наш, ваш, їхній» у різних родах та відмінках.',
    ruleSummary:
      'Вибір присвійного займенника складається з 2 кроків: 1) визначаємо власника (ich → mein, du → dein, er/es → sein, sie → ihr, wir → unser, ihr → euer, sie/Sie → ihr/Ihr); 2) додаємо закінчення за родом та відмінком іменника (точно як у ein/eine/einen).',
    tables: [
      {
        title: '1. Присвійні займенники за власником та відмінком',
        subtitle: 'У Nominativ жіночий рід і множина мають -e; у Akkusativ чоловічий рід — -en',
        headers: ['Власник', 'Nom. чол. / сер.', 'Nom. жін. / мн.', 'Akk. чоловічий'],
        rows: [
          ['ich', 'mein', 'meine', 'meinen'],
          ['du', 'dein', 'deine', 'deinen'],
          ['er / es', 'sein', 'seine', 'seinen'],
          ['sie (вона)', 'ihr', 'ihre', 'ihren'],
          ['wir', 'unser', 'unsere', 'unseren'],
          ['ihr (ви)', 'euer', 'eure', 'euren'],
          ['sie / Sie', 'ihr / Ihr', 'ihre / Ihre', 'ihren / Ihren']
        ],
        example: 'Anna sucht ihre Tasche und ich suche meinen Ausweis.'
      }
    ],
    ukrainianTrap:
      'Українці часто плутають «його» (sein) та «її» (ihr). Запам’ятай: якщо власник чоловік (er) — завжди sein (sein Auto, seine Mutter); якщо власниця жінка (sie) — завжди ihr (ihr Auto, ihre Mutter).',
    examTip:
      'Goethe-Zertifikat A1 (Sprechen & Schreiben): у темі «Сім’я та друзі» постійно потрібно представляти родичів («Das ist mein Bruder / meine Schwester») та розповідати про їхні речі.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний займенник: Anna sucht ___ Tasche (die Tasche — її сумка).',
        options: ['sein', 'ihre', 'seine'],
        answer: 'ihre',
        explanation: 'Власниця Anna (вона → ihr), а Tasche — жіночого роду (die), тому додаємо -e: ihre.'
      },
      {
        type: 'fill',
        prompt: 'Впиши «мій» у Akkusativ: Ich treffe heute ___ Kumpel. (der Kumpel)',
        placeholder: 'Форма mein...',
        answer: 'meinen',
        explanation: 'Дієслово treffen вимагає Akkusativ. Kumpel — чоловічого роду (der), тому mein + -en = meinen.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: Markus besucht ___ Eltern (множина — його батьки).',
        options: ['seine', 'ihre', 'sein'],
        answer: 'seine',
        explanation: 'Власник Markus (він → sein), а Eltern — множина (die Eltern), тому seine.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Де лежить твоє посвідчення?» (der Ausweis).',
        tokens: ['dein', 'liegt', 'Ausweis?', 'Wo'],
        answer: 'Wo liegt dein Ausweis?',
        explanation: 'Ausweis тут підмет у Nominativ (чоловічий рід), тому закінчення не додається: dein Ausweis.'
      },
      {
        type: 'choice',
        prompt: 'Як ввічливо запитати: «Як Ваше прізвище?» (der Familienname)?',
        options: [
          'Wie ist Ihr Familienname?',
          'Wie ist Ihre Familienname?',
          'Wie ist dein Familienname?'
        ],
        answer: 'Wie ist Ihr Familienname?',
        explanation: 'Для ввічливого «Ви» (Sie) основа — Ihr (з великої літери), а Familienname чоловічого роду (der), тому Ihr.'
      },
      {
        type: 'fill',
        prompt: 'Впиши «наша»: ___ Wohnung ist sehr hell und gemütlich. (die Wohnung)',
        placeholder: 'Форма unser...',
        answer: 'Unsere',
        explanation: 'Wohnung — жіночого роду (die), тому unser + -e = Unsere.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму для «ihr» (ваша мама, die Mutter):',
        options: ['euer Mutter', 'eure Mutter', 'euere Mutter'],
        answer: 'eure Mutter',
        explanation: 'Коли до займенника euer додається закінчення -e, внутрішня літера e випадає: eure Mutter.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Я читаю її нову книгу» (das Buch).',
        tokens: ['neues Buch.', 'lese', 'ihr', 'Ich'],
        answer: 'Ich lese ihr neues Buch.',
        explanation: 'Власниця вона (ihr), Buch — середнього роду (das), у Akkusativ закінчення не змінюється: ihr.'
      }
    ]
  },

  {
    id: 'a1_08',
    level: 'A1',
    order: 8,
    isFree: false,
    title: 'Особові займенники у Nominativ та Akkusativ',
    germanTitle: 'Personalpronomen im Nominativ & Akkusativ',
    goal: 'Замінювати іменники займенниками (мене, тебе, його, її, нас, вас, їх) у діалогах.',
    ruleSummary:
      'Щоб не повторювати одне й те саме слово двічі, замінюємо його особовим займенником. У Nominativ: ich, du, er, sie, es, wir, ihr, sie, Sie. У Akkusativ (кого? що?): mich, dich, ihn, sie, es, uns, euch, sie, Sie.',
    tables: [
      {
        title: '1. Особові займенники в Nominativ та Akkusativ',
        subtitle: 'Змінюються лише форми для ich, du та er',
        headers: ['Nominativ', 'Akkusativ', 'Приклад в Akkusativ'],
        rows: [
          ['ich', 'mich', 'Siehst du mich?'],
          ['du', 'dich', 'Ich verstehe dich.'],
          ['er (der Tisch)', 'ihn', 'Ich kaufe ihn.'],
          ['sie (die Lampe)', 'sie', 'Ich sehe sie.'],
          ['es (das Buch)', 'es', 'Ich lese es.'],
          ['wir', 'uns', 'Besuchst du uns?'],
          ['ihr', 'euch', 'Wir laden euch ein.'],
          ['sie / Sie', 'sie / Sie', 'Ich kenne sie / Sie.']
        ],
        example: 'Kennst du den Mann? — Ja, ich kenne ihn.'
      }
    ],
    ukrainianTrap:
      'У німецькій неживі предмети замінюються за їхнім граматичним родом! Стіл (der Tisch) — це «він» (ihn), книга (das Buch) — «воно» (es), навіть якщо українською книга — «вона».',
    examTip:
      'Goethe-Zertifikat A1 (Hören Teil 1): у коротких діалогах постійно звучать питання типу «Wie findest du ihn/sie/es?» — слухай займенник, щоб зрозуміти, про який саме предмет ідеться.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Заміни іменник займенником: Kaufst du den Tisch? (der Tisch) — Ja, ich kaufe ___.',
        options: ['er', 'ihn', 'es'],
        answer: 'ihn',
        explanation: 'Tisch — чоловічого роду (der), у Akkusativ «його» — це ihn.'
      },
      {
        type: 'fill',
        prompt: 'Впиши займенник «тебе» (Akkusativ): Ich liebe ___!',
        placeholder: 'Займенник...',
        answer: 'dich',
        explanation: 'Після дієслова lieben потрібен Akkusativ: du → dich.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну відповідь: Wie findest du das Buch? (das Buch) — Ich finde ___ toll.',
        options: ['ihn', 'sie', 'es'],
        answer: 'es',
        explanation: 'Buch середнього роду (das), тому в Akkusativ замінюємо його на es.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Вона розуміє нас дуже добре».',
        tokens: ['sehr gut.', 'uns', 'versteht', 'Sie'],
        answer: 'Sie versteht uns sehr gut.',
        explanation: 'Підмет Sie (1) → дієслово versteht (2) → займенник uns (3) → дуже добре (4).'
      },
      {
        type: 'choice',
        prompt: 'Як правильно запитати друга: «Ти бачиш мене?»',
        options: [
          'Siehst du mir?',
          'Siehst du mich?',
          'Siehst du ich?'
        ],
        answer: 'Siehst du mich?',
        explanation: 'Дієслово sehen вимагає Akkusativ: ich → mich.'
      },
      {
        type: 'fill',
        prompt: 'Впиши займенник «її» (про квартиру — die Wohnung): Wann besichtigst du ___?',
        placeholder: 'Займенник...',
        answer: 'sie',
        explanation: 'Wohnung — жіночого роду (die), у Akkusativ форма не змінюється — sie.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: Wir laden ___ (вас — друзів, ihr) zur Party ein.',
        options: ['uns', 'euch', 'ihr'],
        answer: 'euch',
        explanation: 'Для займенника «ihr» (ви — група друзів) форма у Akkusativ — euch.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Я запитаю його завтра» (er → ihn).',
        tokens: ['morgen.', 'ihn', 'frage', 'Ich'],
        answer: 'Ich frage ihn morgen.',
        explanation: 'Дієслово fragen керує Akkusativ: ich frage ihn.'
      }
    ]
  },

  {
     {
    id: 'a1_09',
    level: 'A1',
    order: 9,
    isFree: false,
    title: 'Модальні дієслова (können, müssen, wollen...)',
    germanTitle: 'Modalverben & Satzklammer',
    goal: 'Виражати вміння, необхідність, бажання, дозвіл і пораду для всіх 6 модальних дієслів і правильно будувати рамкову конструкцію.',
    ruleSummary:
      'У німецькій є 6 модальних дієслів: können (могти/вміти), müssen (мусити), wollen (хотіти), dürfen (мати дозвіл), sollen (мати обов’язок/пораду) та möchten (хотів би). Вони стоять на 2-му місці та змінюються за особою, а основне дієслово в інфінітиві (без zu!) летить у САМИЙ КІНЕЦЬ речення.',
    tables: [
      {
        title: '1. Відмінювання всіх 6 модальних дієслів у Präsens',
        subtitle: 'Форми для ich та er/sie/es збігаються і не мають закінчення -t',
        headers: ['Дієслово', 'ich / er, sie, es', 'du', 'wir / sie, Sie', 'ihr'],
        rows: [
          ['können (могти / вміти)', 'kann', 'kannst', 'können', 'könnt'],
          ['müssen (мусити)', 'muss', 'musst', 'müssen', 'müsst'],
          ['wollen (хотіти)', 'will', 'willst', 'wollen', 'wollt'],
          ['dürfen (мати дозвіл)', 'darf', 'darfst', 'dürfen', 'dürft'],
          ['sollen (маєш / варто)', 'soll', 'sollst', 'sollen', 'sollt'],
          ['möchten (хотів би)', 'möchte', 'möchtest', 'möchten', 'möchtet']
        ],
        example: 'Ich muss heute viel arbeiten, aber ich kann morgen kommen.'
      },
      {
        title: '2. Рамкова конструкція (Satzklammer) та значення дієслів',
        subtitle: 'Модальне дієслово на 2-му місці, а інфінітив основного дієслова — у самому кінці',
        headers: ['Дієслово', 'Значення', 'Приклад у рамці'],
        rows: [
          ['können', 'вміння або можливість', 'Er kann sehr gut Deutsch sprechen.'],
          ['müssen', 'необхідність / обов’язок', 'Wir müssen morgen früh aufstehen.'],
          ['wollen', 'чітке бажання / намір', 'Sie will im Sommer nach Wien fahren.'],
          ['dürfen', 'дозвіл (nicht dürfen = заборона)', 'Hier darf man nicht rauchen.'],
          ['sollen', 'порада лікаря / доручення іншої людини', 'Der Arzt sagt, ich soll mehr Wasser trinken.'],
          ['möchten', 'ввічливе бажання / замовлення', 'Ich möchte einen Kaffee bestellen.']
        ],
        example: 'Der Arzt sagt, ich soll viel schlafen und keinen Kaffee trinken.'
      }
    ],
    ukrainianTrap:
      'У 3-й особі однини (er/sie/es) модальні дієслова НЕ мають закінчення -t: «er kann», «sie muss», «er will», «sie soll» (ніколи не кажи «er kannt» чи «er musst»!). І не став друге дієслово одразу після модального — відправляй його в кінець речення.',
    examTip:
      'Goethe-Zertifikat A1 (Lesen Teil 2 & Sprechen): на вивісках постійно трапляється «Hier darf man nicht rauchen» (заборона), а в усному іспиті — «Können Sie mir bitte helfen?» та «Soll ich das Fenster öffnen?».',
    exercises: [
      {
        type: 'builder',
        prompt: 'Збери речення з рамковою конструкцією: «Я можу сьогодні прийти ввечері» (können).',
        tokens: ['kommen.', 'kann', 'Ich', 'heute Abend'],
        answer: 'Ich kann heute Abend kommen.',
        explanation: 'Модальне дієслово kann стоїть на 2-му місці, а інфінітив kommen — у самому кінці.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму: Mein Kumpel ___ morgen früh arbeiten. (müssen)',
        options: ['musst', 'muss', 'müssen'],
        answer: 'muss',
        explanation: 'У 3-й особі однини (er) дієслово müssen має форму «muss» (збігається з формою для ich).'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова können: ___ du gut schwimmen?',
        placeholder: 'Форма können...',
        answer: 'Kannst',
        explanation: 'Для «du» форма дієслова können — «kannst» (на початку речення з великої літери: Kannst).'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму дієслова sollen (порада лікаря): Der Arzt sagt, ich ___ mehr Tee trinken.',
        options: ['sollt', 'soll', 'sollst'],
        answer: 'soll',
        explanation: 'Для «ich» дієслово sollen має форму «soll» (без закінчення).'
      },
      {
        type: 'choice',
        prompt: 'Як ввічливо замовити чай: «Я хотів би випити чай» (möchten)?',
        options: [
          'Ich möchte einen Tee trinken.',
          'Ich möchtet einen Tee trinken.',
          'Ich möchte trinken einen Tee.'
        ],
        answer: 'Ich möchte einen Tee trinken.',
        explanation: 'Для «ich» форма — möchte, а інфінітив trinken стоїть у самому кінці.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Тут не можна (не дозволено) паркуватися» (dürfen).',
        tokens: ['nicht', 'man', 'Hier', 'parken.', 'darf'],
        answer: 'Hier darf man nicht parken.',
        explanation: 'Hier (1) → darf (2) → man (3) → nicht (4) → parken (кінець).'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму: Wir ___ am Wochenende nach Berlin fahren. (wollen)',
        options: ['will', 'wollen', 'wollt'],
        answer: 'wollen',
        explanation: 'У множині (wir) модальні дієслова мають форму інфінітива: wollen.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова dürfen: ___ ich hier kurz telefonieren?',
        placeholder: 'Форма dürfen...',
        answer: 'Darf',
        explanation: 'Для «ich» дієслово dürfen змінює голосну в однині: ich darf (на початку речення — Darf).'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова sollen: ___ wir jetzt anfangen? (Чи нам уже починати?)',
        placeholder: 'Форма sollen...',
        answer: 'Sollen',
        explanation: 'Для «wir» форма дієслова sollen — «sollen» (на початку речення — Sollen).'
      },
      {
        type: 'builder',
        prompt: 'Збери запитання: «Коли ви повинні бути в офісі?» (Sie, müssen).',
        tokens: ['im Büro sein?', 'müssen', 'Wann', 'Sie'],
        answer: 'Wann müssen Sie im Büro sein?',
        explanation: 'Wann (1) → müssen (2) → Sie (3) → im Büro sein (кінець).'
      }
    ]
  },
  
  {
    id: 'a1_10',
    level: 'A1',
    order: 10,
    isFree: false,
    title: 'Дієслова з відокремлюваними префіксами',
    germanTitle: 'Trennbare Verben',
    goal: 'Правильно розривати дієслова з префіксами auf-, an-, ein-, aus-, mit-, fern- у теперішньому часі.',
    ruleSummary:
      'Багато німецьких дієслів мають наголошений префікс (aufstehen, einkaufen, anrufen, fernsehen, mitkommen). У теперішньому часі (Präsens) корінь відмінюється на 2-му місці, а префікс відривається і летить у САМИЙ КІНЕЦЬ речення. Якщо в реченні є модальне дієслово — префікс НЕ відривається!',
    tables: [
      {
        title: '1. Популярні дієслова з відокремлюваними префіксами',
        subtitle: 'У простому Präsens префікс іде в кінець, а з модальним дієсловом лишається разом',
        headers: ['Інфінітив', 'Переклад', 'У Präsens', 'З модальним дієсловом'],
        rows: [
          ['aufstehen', 'вставати', 'Ich stehe um 7 Uhr auf.', 'Ich muss früh aufstehen.'],
          ['anrufen', 'телефонувати', 'Ich rufe dich an.', 'Kannst du mich anrufen?'],
          ['einkaufen', 'робити покупки', 'Wir kaufen ein.', 'Wir wollen einkaufen.'],
          ['mitkommen', 'іти разом', 'Kommst du mit?', 'Du kannst mitkommen.']
        ],
        example: 'Der Zug kommt um 10 Uhr an und ich stehe um 7 Uhr auf.'
      }
    ],
    ukrainianTrap:
      'Учні часто кажуть «Ich einkaufe heute» або ставлять префікс у середині речення. Запам’ятай: префікс працює як «закриваюча дужка» — він чекає, поки закінчаться всі інші слова, і стає перед самою крапкою.',
    examTip:
      'Goethe-Zertifikat A1 (Hören Teil 2): на вокзалі чи в аеропорту обов’язково звучать дієслова «abfahren» (відправлятися), «ankommen» (прибувати) та «umsteigen» (пересідати).',
    exercises: [
      {
        type: 'builder',
        prompt: 'Збери речення (aufstehen — вставати): «Я встаю щодня о 7-й годині».',
        tokens: ['auf.', 'stehe', 'jeden Tag um 7 Uhr', 'Ich'],
        answer: 'Ich stehe jeden Tag um 7 Uhr auf.',
        explanation: 'Корінь stehe стоїть на 2-му місці, а відокремлюваний префікс auf — у самому кінці перед крапкою.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний варіант (anrufen — телефонувати): «Я зателефоную тобі ввечері».',
        options: [
          'Ich anrufe dich am Abend.',
          'Ich rufe dich am Abend an.',
          'Ich rufe an dich am Abend.'
        ],
        answer: 'Ich rufe dich am Abend an.',
        explanation: 'У Präsens дієслово anrufen розривається: rufe (2-ге місце) ... an (кінець речення).'
      },
      {
        type: 'fill',
        prompt: 'Впиши відокремлюваний префікс (einkaufen): Wir kaufen am Samstag im Zentrum ___.',
        placeholder: 'Префікс...',
        answer: 'ein',
        explanation: 'Інфінітив — einkaufen, тому в кінці речення ставимо префікс ein.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати з модальним дієсловом: «Я мушу сьогодні закупитися (einkaufen)»?',
        options: [
          'Ich muss heute kaufen ein.',
          'Ich muss heute einkaufen.',
          'Ich einkaufen muss heute.'
        ],
        answer: 'Ich muss heute einkaufen.',
        explanation: 'Коли в реченні є модальне дієслово (muss), основне дієслово стоїть у кінці в інфінітиві і НЕ розривається.'
      },
      {
        type: 'builder',
        prompt: 'Збери запитання (mitkommen — іти разом): «Ти йдеш сьогодні ввечері з нами?»',
        tokens: ['heute Abend', 'du', 'mit?', 'Kommst'],
        answer: 'Kommst du heute Abend mit?',
        explanation: 'У питанні без питального слова Kommst виходить на 1-ше місце, а префікс mit іде в самий кінець.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму кореня (fernsehen — дивитися телевізор): Er ___ abends oft fern.',
        placeholder: 'Форма sehen...',
        answer: 'sieht',
        explanation: 'sehen — сильне дієслово (e → ie у 3-й особі однини): Er sieht ... fern.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильне речення (aussteigen — виходити з транспорту): «Ми виходимо на наступній зупинці».',
        options: [
          'Wir steigen an der nächsten Haltestelle aus.',
          'Wir aussteigen an der nächsten Haltestelle.',
          'Wir steigen aus an der nächsten Haltestelle.'
        ],
        answer: 'Wir steigen an der nächsten Haltestelle aus.',
        explanation: 'Префікс aus обов’язково ставиться в самий кінець речення.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення (anfangen — починатися): «Фільм починається о 20-й годині».',
        tokens: ['um 20 Uhr', 'Der Film', 'an.', 'fängt'],
        answer: 'Der Film fängt um 20 Uhr an.',
        explanation: 'fängt (від anfangen, a → ä) на 2-му місці, префікс an — у кінці.'
      }
    ]
  },

  {
    id: 'a1_11',
    level: 'A1',
    order: 11,
    isFree: false,
    title: 'Наказовий спосіб (Imperativ)',
    germanTitle: 'Imperativ: du, ihr, Sie',
    goal: 'Правильно формулювати прохання, поради та інструкції на «ти», «ви» та ввічливе «Ви».',
    ruleSummary:
      'У німецькій є 3 форми наказового способу: 1) на «ти» (du) — відкидаємо займенник du та закінчення -st (Komm! Mach!); 2) на «ви» до групи (ihr) — просто забираємо займенник ihr (Kommt! Macht!); 3) ввічливо на «Ви» (Sie) — дієслово на 1-ше місце + Sie (Kommen Sie bitte!).',
    tables: [
      {
        title: '1. Три форми Imperativ (du, ihr, Sie)',
        subtitle: 'Як утворюється прохання або команда для кожної форми звертання',
        headers: ['Звертання', 'Правило утворення', 'Приклади'],
        rows: [
          ['du (на «ти»)', 'основа без -st (e→i зберігається, ä→a зникає)', 'Komm! Gib mir das Buch! Fahr langsam!'],
          ['ihr (на «ви» до групи)', 'форма дієслова для ihr без займенника', 'Kommt! Macht bitte die Übung!'],
          ['Sie (ввічливо)', 'інфінітив + Sie (sein → Seien Sie)', 'Kommen Sie bitte! Zeigen Sie Ihren Ausweis!']
        ],
        example: 'Gib mir bitte das Buch und zeigen Sie bitte Ihren Ausweis!'
      }
    ],
    ukrainianTrap:
      'У дієсловах зі зміною a → ä (fahren, schlafen) у формі на «ти» умлаут зникає: «du fährst → Fahr!» (не Fähr!). А от зміна e → i/ie зберігається: «du gibst → Gib!», «du liest → Lies!».',
    examTip:
      'Goethe-Zertifikat A1 (Sprechen Teil 3): у 3-й частині усного іспиту ти береш картку з предметом і маєш попросити партнера: «Gib mir bitte den Stift!» або «Geben Sie mir bitte das Wasser!».',
    exercises: [
      {
        type: 'choice',
        prompt: 'Як ввічливо попросити (Sie): «Покажіть, будь ласка, ваше посвідчення!» (zeigen)?',
        options: [
          'Zeigen Sie bitte Ihren Ausweis!',
          'Zeigt Sie bitte Ihren Ausweis!',
          'Sie zeigen bitte Ihren Ausweis!'
        ],
        answer: 'Zeigen Sie bitte Ihren Ausweis!',
        explanation: 'У ввічливому Imperativ дієслово (Zeigen) ставиться на 1-ше місце перед Sie.'
      },
      {
        type: 'fill',
        prompt: 'Утвори форму на «ти» (du) від дієслова geben: ___ mir bitte deine Telefonnummer!',
        placeholder: 'Форма Imperativ...',
        answer: 'Gib',
        explanation: 'du gibst → відкидаємо du та -st, зміна e → i зберігається: Gib!'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму на «ти» (du) від дієслова fahren (їхати):',
        options: ['Fähr langsam!', 'Fahr langsam!', 'Fahrt langsam!'],
        answer: 'Fahr langsam!',
        explanation: 'У формі на «ти» умлаут ä зникає, залишається чиста основа: Fahr!'
      },
      {
        type: 'builder',
        prompt: 'Збери прохання для групи друзів (ihr): «Відкрийте, будь ласка, вікно!» (aufmachen).',
        tokens: ['das Fenster', 'bitte', 'Macht', 'auf!'],
        answer: 'Macht bitte das Fenster auf!',
        explanation: 'Для ihr беремо Macht на 1-ше місце, а відокремлюваний префікс auf відправляємо в самий кінець.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму Imperativ від дієслова lesen для «ти» (du): ___ bitte den Text laut!',
        placeholder: 'Форма lesen...',
        answer: 'Lies',
        explanation: 'du liest → відкидаємо du та закінчення, зміна e → ie залишається: Lies!'
      },
      {
        type: 'choice',
        prompt: 'Як ввічливо сказати: «Будьте так ласкаві!» (sein, Sie)?',
        options: [
          'Sind Sie so nett!',
          'Seien Sie so nett!',
          'Seid Sie so nett!'
        ],
        answer: 'Seien Sie so nett!',
        explanation: 'Дієслово sein у ввічливому наказовому способі має особливу форму: Seien Sie!'
      },
      {
        type: 'builder',
        prompt: 'Збери фразу для іспиту Goethe A1: «Дай мені, будь ласка, яблуко» (du, geben, der Apfel).',
        tokens: ['den Apfel!', 'mir', 'Gib', 'bitte'],
        answer: 'Gib mir bitte den Apfel!',
        explanation: 'Gib (1) → mir (мені) → bitte → den Apfel (Akkusativ чоловічого роду).'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму для друга (du) від дієслова anrufen (зателефонувати):',
        options: ['Anruf mich!', 'Ruf mich an!', 'Rufst mich an!'],
        answer: 'Ruf mich an!',
        explanation: 'У наказовому способі відокремлюваний префікс (an) так само переноситься в кінець: Ruf mich an!'
      }
    ]
  },

  {
    id: 'a1_12',
    level: 'A1',
    order: 12,
    isFree: false,
    title: 'Прийменники часу та місця + вступ у Dativ',
    germanTitle: 'Temporale & lokale Präpositionen (am, um, im, nach, zu, in)',
    goal: 'Правильно називати час, дні тижня, місяці та орієнтуватися в місті й транспорті.',
    ruleSummary:
      'Для часу запам’ятай трійку: um (точна година: um 8 Uhr), am (дні тижня та частини доби: am Montag, am Abend; виняток: in der Nacht), im (місяці та пори року: im Juli, im Sommer). Для місця (де? → Dativ) означений артикль змінюється: der/das → dem (in + dem = im, an + dem = am, zu + dem = zum), die → der (zu + der = zur).',
    tables: [
      {
        title: '1. Прийменники часу та місця (Dativ)',
        subtitle: 'Коли беремо um, am, im, а як позначаємо напрямок і місце',
        headers: ['Категорія', 'Прийменник / Форма', 'Приклад'],
        rows: [
          ['Точний час (година)', 'um', 'um 9 Uhr / um 14:30 Uhr'],
          ['Дні тижня та частини доби', 'am (виняток: in der Nacht)', 'am Montag / am Abend'],
          ['Місяці та пори року', 'im', 'im Oktober / im Sommer'],
          ['Рух додому vs перебування вдома', 'nach Hause vs zu Hause', 'Ich fahre nach Hause. / Ich bin zu Hause.'],
          ['Злиття в Dativ', 'im, am, zum, zur, mit dem', 'Ich fahre mit dem Bus zur Arbeit.']
        ],
        example: 'Der Kurs beginnt am Montag um 9 Uhr im Sommersemester.'
      }
    ],
    ukrainianTrap:
      'Українці плутають «nach Hause» і «zu Hause», а також кажуть «in Montag» замість «am Montag». Також зверни увагу: з назвами країн без артикля (Deutschland, Italien) для напрямку «в/до» беремо nach (nach Deutschland), а з країнами з артиклем (die Ukraine, die Schweiz) — in die (in die Ukraine) / aus der (aus der Ukraine).',
    examTip:
      'Goethe-Zertifikat A1 (Hören & Schreiben): запис на прийом до лікаря чи домовленість про зустріч («Treffen wir uns am Freitag um 18 Uhr am Bahnhof?») перевіряє саме прийменники часу й місця.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний прийменник часу: Der Zug fährt ___ 14:30 Uhr ab.',
        options: ['am', 'um', 'im'],
        answer: 'um',
        explanation: 'Перед точною годиною завжди ставимо прийменник um: um 14:30 Uhr.'
      },
      {
        type: 'fill',
        prompt: 'Впиши прийменник для дня тижня: ___ Dienstag habe ich einen Termin beim Arzt.',
        placeholder: 'Прийменник...',
        answer: 'Am',
        explanation: 'Перед днями тижня та частинами доби завжди вживаємо am (на початку речення — Am).'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Зараз я їду додому» (напрямок — куди?)?',
        options: [
          'Jetzt fahre ich zu Hause.',
          'Jetzt fahre ich nach Hause.',
          'Jetzt fahre ich in Hause.'
        ],
        answer: 'Jetzt fahre ich nach Hause.',
        explanation: 'Куди? (рух додому) — nach Hause. Де? (перебування вдома) — zu Hause.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Влітку (im Sommer) ми їдемо до Німеччини».',
        tokens: ['wir', 'Im Sommer', 'nach Deutschland.', 'fahren'],
        answer: 'Im Sommer fahren wir nach Deutschland.',
        explanation: 'Im Sommer (1) → дієслово fahren (2) → підмет wir (3) → nach Deutschland (4).'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: Ich komme ___ Ukraine (die Ukraine — звідки?).',
        options: ['aus Ukraine', 'aus der Ukraine', 'nach Ukraine'],
        answer: 'aus der Ukraine',
        explanation: 'Країна Ukraine має жіночий рід (die Ukraine), тому після прийменника aus (який вимагає Dativ) die змінюється на der: aus der Ukraine.'
      },
      {
        type: 'fill',
        prompt: 'Впиши прийменник для місяця: Mein Geburtstag ist ___ Oktober.',
        placeholder: 'Прийменник...',
        answer: 'im',
        explanation: 'Перед назвами місяців та пір року завжди вживаємо im (in + dem).'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Він їде автобусом» (der Bus, mit + Dativ)?',
        options: [
          'Er fährt mit den Bus.',
          'Er fährt mit dem Bus.',
          'Er fährt mit der Bus.'
        ],
        answer: 'Er fährt mit dem Bus.',
        explanation: 'Прийменник mit завжди вимагає Dativ, де чоловічий рід der змінюється на dem: mit dem Bus.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Увечері я залишаюся вдома».',
        tokens: ['bleibe', 'zu Hause.', 'Am Abend', 'ich'],
        answer: 'Am Abend bleibe ich zu Hause.',
        explanation: 'Am Abend (частина доби) + дієслово bleibe на 2-му місці + zu Hause (місце — вдома).'
      }
    ]
  },

  {
    id: 'a1_13',
    level: 'A1',
    order: 13,
    isFree: false,
    title: 'Минулий час Präteritum від sein та haben',
    germanTitle: 'Präteritum: war & hatte',
    goal: 'Розповідати про події в минулому («я був», «у мене було») так, як це роблять носії мови.',
    ruleSummary:
      'Для розповіді про минуле німці зазвичай використовують час Perfekt, АЛЕ для дієслів sein (бути) та haben (мати) у розмові майже завжди вживають просту форму минулого часу Präteritum: war (був) та hatte (мав).',
    tables: [
      {
        title: '1. war та hatte у Präteritum для всіх осіб',
        subtitle: '1-ша та 3-тя особа однини збігаються і не мають закінчення -t',
        headers: ['Особа', 'sein → war', 'haben → hatte'],
        rows: [
          ['ich', 'war', 'hatte'],
          ['du', 'warst', 'hattest'],
          ['er / sie / es', 'war', 'hatte'],
          ['wir', 'waren', 'hatten'],
          ['ihr', 'wart', 'hattet'],
          ['sie / Sie', 'waren', 'hatten']
        ],
        example: 'Gestern war ich im Kino und hatte keine Zeit.'
      }
    ],
    ukrainianTrap:
      'Учні часто намагаються утворити складну форму «Ich bin gewesen» або «Ich habe gehabt». На рівні A1–B1 у живій мові так не кажуть — використовуй короткі й природні «ich war» та «ich hatte».',
    examTip:
      'Goethe-Zertifikat A1 (Lesen & Schreiben): в оголошеннях та листах про відпустку чи хворобу («Ich war krank», «Das Wetter war super») постійно трапляються саме war і hatte.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильну форму: Gestern ___ das Wetter sehr schön. (sein)',
        options: ['ist', 'war', 'waren'],
        answer: 'war',
        explanation: 'Gestern (вчора) вказує на минулий час. «Das Wetter» — 3-тя особа однини, тому war.'
      },
      {
        type: 'fill',
        prompt: 'Впиши минулий час від haben: Ich ___ gestern leider keine Zeit.',
        placeholder: 'Форма hatte...',
        answer: 'hatte',
        explanation: 'Для «ich» минулий час від haben — «hatte».'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Ми були минулого тижня в Берліні»?',
        options: [
          'Wir war letzte Woche in Berlin.',
          'Wir waren letzte Woche in Berlin.',
          'Wir wart letzte Woche in Berlin.'
        ],
        answer: 'Wir waren letzte Woche in Berlin.',
        explanation: 'Для займенника «wir» (ми) форма минулого часу від sein — «waren».'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «У нього вчора був важливий прийом» (der Termin).',
        tokens: ['einen wichtigen Termin.', 'hatte', 'Er', 'gestern'],
        answer: 'Er hatte gestern einen wichtigen Termin.',
        explanation: 'Er (1) → hatte (2) → gestern (3) → einen wichtigen Termin (Akkusativ).'
      },
      {
        type: 'fill',
        prompt: 'Впиши минулий час від sein: Wo ___ du gestern Abend?',
        placeholder: 'Форма war...',
        answer: 'warst',
        explanation: 'Для «du» форма минулого часу від sein — «warst».'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: ___ ihr am Wochenende zu Hause? (sein)',
        options: ['Waren', 'Wart', 'Warst'],
        answer: 'Wart',
        explanation: 'Для займенника «ihr» (ви — група друзів) форма минулого часу від sein — «wart».'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Раніше в мене не було машини» (das Auto).',
        tokens: ['kein Auto.', 'ich', 'Früher', 'hatte'],
        answer: 'Früher hatte ich kein Auto.',
        explanation: 'Früher (1) → дієслово hatte (2) → підмет ich (3) → kein Auto (4).'
      },
      {
        type: 'choice',
        prompt: 'Як природніше сказати німецькою: «Вчора я був хворий»?',
        options: [
          'Gestern war ich krank.',
          'Gestern bin ich krank.',
          'Gestern hatte ich krank.'
        ],
        answer: 'Gestern war ich krank.',
        explanation: 'Для стану «бути хворим» у минулому часі використовуємо дієслово sein у Präteritum: war.'
      }
    ]
  },

  {
    id: 'a1_14',
    level: 'A1',
    order: 14,
    isFree: false,
    title: 'Минулий час Perfekt (haben / sein + Partizip II)',
    germanTitle: 'Perfekt: regelmäßige & unregelmäßige Verben',
    goal: 'Розповідати про дії, які вже відбулися в минулому («я купив», «ми поїхали», «він прочитав»).',
    ruleSummary:
      'Perfekt складається з 2 частин: допоміжне дієслово haben або sein на 2-му місці + форма Partizip II у САМОМУ КІНЦІ речення. Більшість дієслів бере haben. Дієслово sein беремо лише для руху з точки А в точку Б (gehen, fahren, fliegen, kommen) та зміни стану (aufstehen, einschlafen, bleiben).',
    tables: [
      {
        title: '1. Утворення Perfekt та вибір haben / sein',
        subtitle: 'Допоміжне дієслово на 2-му місці, Partizip II — у кінці речення',
        headers: ['Категорія', 'Правило', 'Приклад'],
        rows: [
          ['Слабкі дієслова', 'ge + основа + -t (з haben)', 'machen → gemacht, kaufen → gekauft'],
          ['Без префікса ge-', 'дієслова на -ieren та невідокремлювані (be-, ver-, er-)', 'studiert, telefoniert, besucht, verstanden'],
          ['Сильні дієслова з haben', 'ge + основа + -en', 'gegessen, getrunken, gelesen, geschrieben'],
          ['Рух / зміна стану з sein', 'sein (2) + Partizip II (кінець)', 'gegangen, gefahren, geflogen, gekommen, aufgestanden']
        ],
        example: 'Wir sind nach Berlin gefahren und haben ein Buch gekauft.'
      }
    ],
    ukrainianTrap:
      'Найчастіша помилка — ставити haben з дієсловами руху («Ich habe nach Berlin gefahren»). Запам’ятай: якщо є переміщення з одного місця в інше (пішов, поїхав, полетів, приїхав) — завжди беремо SEIN: «Ich BIN nach Berlin gefahren».',
    examTip:
      'Goethe-Zertifikat A1 (Lesen & Hören): у текстах про вихідні або відпустку («Am Samstag sind wir nach München gefahren und haben das Museum besucht») звертай увагу на слово в самому кінці речення — саме воно несе основний зміст дії.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильне допоміжне дієслово: Wir ___ gestern nach Berlin gefahren. (fahren — рух)',
        options: ['haben', 'sind', 'waren'],
        answer: 'sind',
        explanation: 'Дієслово fahren означає рух із точки А в точку Б, тому в Perfekt воно завжди вимагає sein (wir sind gefahren).'
      },
      {
        type: 'fill',
        prompt: 'Утвори Partizip II від слабкого дієслова kaufen: Ich habe gestern eine Tasche ___.',
        placeholder: 'Форма Partizip II...',
        answer: 'gekauft',
        explanation: 'kaufen — слабке дієслово: ge- + kauf + -t = gekauft.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно утворити Partizip II від дієслова besuchen (відвідувати, невідокремлюваний префікс be-)?',
        options: ['gebesucht', 'besucht', 'besuchen'],
        answer: 'besucht',
        explanation: 'Дієслова з невідокремлюваними префіксами (be-, ver-, er-, ent-) та дієслова на -ieren НЕ отримують префікс ge-: besucht.'
      },
      {
        type: 'builder',
        prompt: 'Збери речення в Perfekt: «Він уже прочитав цю книгу» (lesen → gelesen).',
        tokens: ['das Buch', 'hat', 'gelesen.', 'Er', 'schon'],
        answer: 'Er hat schon das Buch gelesen.',
        explanation: 'Er (1) → hat (2) → schon das Buch → gelesen (Partizip II у самому кінці).'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: Wann ___ du heute Morgen aufgestanden? (aufstehen — зміна стану)',
        options: ['hast', 'bist', 'warst'],
        answer: 'bist',
        explanation: 'Дієслово aufstehen (вставати) позначає зміну стану, тому вживається з sein: Wann bist du ... aufgestanden?'
      },
      {
        type: 'fill',
        prompt: 'Утвори Partizip II від дієслова trinken (пити): Was hast du zum Frühstück ___?',
        placeholder: 'Форма Partizip II...',
        answer: 'getrunken',
        explanation: 'trinken — сильне дієслово: Partizip II має форму getrunken.'
      },
      {
        type: 'choice',
        prompt: 'Виправ помилку в реченні: «Meine Freundin hat gestern aus Kyiv gekommen.»',
        options: [
          'Meine Freundin ist gestern aus Kyiv gekommen.',
          'Meine Freundin hat gestern aus Kyiv gekommt.',
          'Meine Freundin war gestern aus Kyiv gekommen.'
        ],
        answer: 'Meine Freundin ist gestern aus Kyiv gekommen.',
        explanation: 'kommen — дієслово руху, тому в Perfekt потрібне допоміжне дієслово sein (ist gekommen).'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Ми вчора ввечері їли піцу» (essen → gegessen).',
        tokens: ['Pizza', 'haben', 'gegessen.', 'Wir', 'gestern Abend'],
        answer: 'Wir haben gestern Abend Pizza gegessen.',
        explanation: 'Wir (1) → haben (2) → gestern Abend Pizza → gegessen (кінець речення).'
      }
    ]
  },

  {
    id: 'a1_15',
    level: 'A1',
    order: 15,
    isFree: false,
    title: 'Відмінок Dativ: дієслова та особові займенники',
    germanTitle: 'Dativ: Verben mit Dativ & Personalpronomen',
    goal: 'Правильно вживати давальний відмінок (кому? чому?) з дієсловами helfen, gehören, gefallen, schmecken, danken та особовими займенниками.',
    ruleSummary:
      'Відмінок Dativ відповідає на запитання «кому? чому?» (wem?). Означені та неозначені артиклі змінюються так: der/das → dem (einem), die → der (einer), множина → den + закінчення -n у іменника. Особові займенники у Dativ: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen.',
    tables: [
      {
        title: '1. Артиклі та особові займенники у Dativ',
        subtitle: 'Вживаються після дієслів helfen, gehören, gefallen, schmecken, danken',
        headers: ['Рід / Особа', 'Nominativ', 'Dativ (артикль / займенник)', 'Приклад'],
        rows: [
          ['Чоловічий (der)', 'der / ein', 'dem / einem', 'Ich helfe dem Mann.'],
          ['Жіночий (die)', 'die / eine', 'der / einer', 'Ich danke der Frau.'],
          ['Середній (das)', 'das / ein', 'dem / einem', 'Das gehört dem Kind.'],
          ['Множина (die)', 'die / —', 'den (+ -n у іменника)', 'Ich helfe den Kindern.'],
          ['ich / du', 'ich / du', 'mir / dir', 'Kannst du mir helfen?'],
          ['er / sie / es', 'er / sie / es', 'ihm / ihr / ihm', 'Das Buch gehört ihm / ihr.'],
          ['wir / ihr / sie, Sie', 'wir / ihr / sie, Sie', 'uns / euch / ihnen, Ihnen', 'Ich danke Ihnen!']
        ],
        example: 'Kannst du mir bitte helfen? — Der Kuchen schmeckt uns sehr gut.'
      }
    ],
    ukrainianTrap:
      'Дієслово «gefallen» (подобатися) працює навпаки до української: те, що подобається, є підметом у Nominativ, а кому подобається — у Dativ! «Мені подобається ця куртка» = «Die Jacke gefällt mir» (не «Ich gefalle die Jacke»!).',
    examTip:
      'Goethe-Zertifikat A1 (Sprechen & Hören): фрази «Wie gefällt dir...», «Schmeckt es Ihnen?» та «Können Sie mir bitte helfen?» — обов’язковий мінімум для розмовної частини.',
    exercises: [
      {
        topicTag: 'Dativ (дієслова та займенники)',
        sourceLessonId: 'a1_15',
        type: 'choice',
        prompt: 'Обери правильний займенник: Kannst du ___ (мені) bitte helfen?',
        options: ['mich', 'mir', 'ich'],
        answer: 'mir',
        explanation: 'Дієслово helfen завжди вимагає Dativ: ich → mir.'
      },
      {
        topicTag: 'Dativ (дієслова та займенники)',
        sourceLessonId: 'a1_15',
        type: 'fill',
        prompt: 'Впиши артикль у Dativ: Der Ausweis gehört ___ Mann. (der Mann)',
        placeholder: 'Артикль...',
        answer: 'dem',
        explanation: 'Дієслово gehören керує Dativ. Чоловічий рід der у Dativ переходить у dem.'
      },
      {
        topicTag: 'Dativ (дієслова та займенники)',
        sourceLessonId: 'a1_15',
        type: 'choice',
        prompt: 'Як правильно сказати: «Нам дуже смакує цей торт» (der Kuchen — однина)?',
        options: [
          'Der Kuchen schmeckt uns sehr gut.',
          'Der Kuchen schmecken wir sehr gut.',
          'Uns schmecken der Kuchen sehr gut.'
        ],
        answer: 'Der Kuchen schmeckt uns sehr gut.',
        explanation: 'Підмет — Der Kuchen (він → schmeckt), а «нам» у Dativ — uns.'
      },
      {
        topicTag: 'Dativ (дієслова та займенники)',
        sourceLessonId: 'a1_15',
        type: 'builder',
        prompt: 'Збери речення: «Я дякую Вам за допомогу» (danken + Dativ, Sie).',
        tokens: ['für die Hilfe.', 'danke', 'Ihnen', 'Ich'],
        answer: 'Ich danke Ihnen für die Hilfe.',
        explanation: 'Дієслово danken вимагає Dativ: ввічлива форма «Вам» — Ihnen (з великої літери).'
      },
      {
        topicTag: 'Dativ (дієслова та займенники)',
        sourceLessonId: 'a1_15',
        type: 'choice',
        prompt: 'Обери правильну форму: Wie gefällt ___ (їй) die neue Wohnung?',
        options: ['sie', 'ihr', 'ihm'],
        answer: 'ihr',
        explanation: 'Займенник «sie» (вона) у Dativ має форму «ihr» (їй).'
      },
      {
        topicTag: 'Dativ (дієслова та займенники)',
        sourceLessonId: 'a1_15',
        type: 'fill',
        prompt: 'Впиши форму присвійного займенника у Dativ: Ich helfe ___ Schwester. (die Schwester)',
        placeholder: 'Форма mein...',
        answer: 'meiner',
        explanation: 'Schwester — жіночого роду (die), у Dativ закінчення -er: meiner Schwester.'
      },
      {
        topicTag: 'Dativ (дієслова та займенники)',
        sourceLessonId: 'a1_15',
        type: 'choice',
        prompt: 'Як правильно сказати у множині: «Я допомагаю дітям» (die Kinder)?',
        options: [
          'Ich helfe den Kindern.',
          'Ich helfe die Kinder.',
          'Ich helfe dem Kindern.'
        ],
        answer: 'Ich helfe den Kindern.',
        explanation: 'У множині в Dativ артикль змінюється на den, а до іменника додається закінчення -n: den Kindern.'
      },
      {
        topicTag: 'Dativ (дієслова та займенники)',
        sourceLessonId: 'a1_15',
        type: 'builder',
        prompt: 'Збери речення: «Ця книга належить йому» (gehören, er).',
        tokens: ['gehört', 'Dieses Buch', 'ihm.'],
        answer: 'Dieses Buch gehört ihm.',
        explanation: 'Займенник «er» (він) у Dativ має форму «ihm» (йому).'
      }
    ]
  },

  {
    id: 'a1_16',
    level: 'A1',
    order: 16,
    isFree: false,
    title: 'Прийменники з Akkusativ та Dativ + злиття',
    germanTitle: 'Präpositionen mit Akkusativ & Dativ',
    goal: 'Безпомилково обирати відмінок після прийменників für, ohne, um, gegen, durch (Akkusativ) та aus, bei, mit, nach, seit, von, zu (Dativ).',
    ruleSummary:
      'У німецькій кожен прийменник «керує» певним відмінком. Після für, ohne, um, gegen, durch, bis ЗАВЖДИ стоїть Akkusativ. Після aus, bei, mit, nach, seit, von, zu ЗАВЖДИ стоїть Dativ (і утворює злиття: in+dem=im, an+dem=am, zu+dem=zum, zu+der=zur, bei+dem=beim, von+dem=vom).',
    tables: [
      {
        title: '1. Прийменники з Akkusativ та Dativ + обов’язкові злиття',
        subtitle: 'Кожна група прийменників має фіксований відмінок',
        headers: ['Група', 'Прийменники', 'Приклад'],
        rows: [
          ['Тільки Akkusativ', 'für, ohne, um, gegen, durch, bis', 'Das Geschenk ist für meinen Vater.'],
          ['Тільки Dativ', 'aus, bei, mit, nach, seit, von, zu', 'Ich fahre mit dem Zug zur Arbeit.'],
          ['Обов’язкові злиття', 'in+dem=im, an+dem=am, zu+dem=zum, zu+der=zur, bei+dem=beim, von+dem=vom', 'Er kommt gerade vom Arzt.']
        ],
        example: 'Ich fahre mit dem Bus zur Apotheke.'
      }
    ],
    ukrainianTrap:
      'Слово «без» (ohne) в українській вимагає родового відмінка («без цукру», «без друга»), а в німецькій — ТІЛЬКИ Akkusativ: «ohne einen Freund» (чоловічий рід отримує -en!). Також не плутай «mit» (з кимось — Dativ) та «ohne» (без когось — Akkusativ).',
    examTip:
      'Goethe-Zertifikat A1 (Lesen & Schreiben): прийменники «für» («für meinen Kurs»), «mit» («mit dem Bus») та «seit» («seit einem Monat») постійно перевіряються в тестах.',
    exercises: [
      {
        topicTag: 'Прийменники з Akkusativ та Dativ',
        sourceLessonId: 'a1_16',
        type: 'choice',
        prompt: 'Обери правильну форму: Ich trinke Kaffee ohne ___ (der Zucker — чоловічий рід).',
        options: ['Zucker / den Zucker', 'dem Zucker', 'der Zucker'],
        answer: 'Zucker / den Zucker',
        explanation: 'Прийменник ohne завжди вимагає Akkusativ (без артикля Zucker або з означеним den Zucker).'
      },
      {
        topicTag: 'Прийменники з Akkusativ та Dativ',
        sourceLessonId: 'a1_16',
        type: 'fill',
        prompt: 'Впиши прийменник «для»: Das Buch ist ___ dich! (Akkusativ)',
        placeholder: 'Прийменник...',
        answer: 'für',
        explanation: '«für» означає «для» і завжди керує відмінком Akkusativ (für dich).'
      },
      {
        topicTag: 'Прийменники з Akkusativ та Dativ',
        sourceLessonId: 'a1_16',
        type: 'choice',
        prompt: 'Як правильно утворити злиття: «Я йду до лікаря» (zu + dem Arzt)?',
        options: ['zur Arzt', 'zum Arzt', 'beim Arzt'],
        answer: 'zum Arzt',
        explanation: 'Arzt — чоловічого роду (der Arzt), у Dativ dem, а «zu + dem» зливається у «zum».'
      },
      {
        topicTag: 'Прийменники з Akkusativ та Dativ',
        sourceLessonId: 'a1_16',
        type: 'builder',
        prompt: 'Збери речення: «Ми гуляємо парком (через парк)» (durch + der Park → Akkusativ).',
        tokens: ['den Park.', 'Wir', 'durch', 'gehen'],
        answer: 'Wir gehen durch den Park.',
        explanation: 'Прийменник durch вимагає Akkusativ: der Park змінюється на den Park.'
      },
      {
        topicTag: 'Прийменники з Akkusativ та Dativ',
        sourceLessonId: 'a1_16',
        type: 'fill',
        prompt: 'Впиши злиття (zu + der): Sie geht jetzt ___ Apotheke. (die Apotheke)',
        placeholder: 'Злиття...',
        answer: 'zur',
        explanation: 'Apotheke — жіночого роду (die), у Dativ der, а «zu + der» зливається у «zur».'
      },
      {
        topicTag: 'Прийменники з Akkusativ та Dativ',
        sourceLessonId: 'a1_16',
        type: 'choice',
        prompt: 'Обери правильний варіант: Er wohnt ___ seinen Eltern (множина, bei + Dativ).',
        options: ['bei', 'für', 'durch'],
        answer: 'bei',
        explanation: '«У батьків» (місце проживання у когось) передається прийменником bei + Dativ.'
      },
      {
        topicTag: 'Прийменники з Akkusativ та Dativ',
        sourceLessonId: 'a1_16',
        type: 'choice',
        prompt: 'Як правильно сказати: «Я вчу німецьку вже місяць» (der Monat, seit + Dativ)?',
        options: [
          'Ich lerne seit einen Monat Deutsch.',
          'Ich lerne seit einem Monat Deutsch.',
          'Ich lerne für einem Monat Deutsch.'
        ],
        answer: 'Ich lerne seit einem Monat Deutsch.',
        explanation: 'Прийменник seit вимагає Dativ: der Monat (ein Monat) переходить у einem Monat.'
      },
      {
        topicTag: 'Прийменники з Akkusativ та Dativ',
        sourceLessonId: 'a1_16',
        type: 'builder',
        prompt: 'Збери речення: «Він повертається від друга» (von + dem Freund → vom Freund).',
        tokens: ['kommt', 'Er', 'vom Freund.', 'gerade'],
        answer: 'Er kommt gerade vom Freund.',
        explanation: '«von + dem» скорочується до «vom» (Dativ чоловічого роду).'
      }
    ]
  },

  {
    id: 'a1_17',
    level: 'A1',
    order: 17,
    isFree: false,
    title: 'Прийменники подвійного керування (Wechselpräpositionen)',
    germanTitle: 'Wechselpräpositionen: Wo? (Dativ) vs. Wohin? (Akkusativ)',
    goal: 'Розрізняти статичне положення предмета (Wo? → Dativ) та напрямок руху (Wohin? → Akkusativ) для 9 прийменників.',
    ruleSummary:
      'Дев’ять прийменників (in, an, auf, unter, über, vor, hinter, neben, zwischen) можуть вимагати або Dativ, або Akkusativ. Задай запитання до дії: якщо предмет уже знаходиться на місці (Wo? — Де? стоїть, лежить, висить) → ставимо Dativ. Якщо предмет переміщують кудись (Wohin? — Куди? кладу, ставлю, йду) → ставимо Akkusativ.',
    tables: [
      {
        title: '1. Wo? (Dativ) vs Wohin? (Akkusativ) для 9 прийменників',
        subtitle: 'in, an, auf, unter, über, vor, hinter, neben, zwischen',
        headers: ['Питання', 'Відмінок', 'Дієслова-підказки', 'Приклад'],
        rows: [
          ['Wo? (Де? Статика)', 'Dativ (dem / der / den)', 'liegen, stehen, sitzen, hängen, sein', 'Das Buch liegt auf dem Tisch.'],
          ['Wohin? (Куди? Рух)', 'Akkusativ (den / die / das)', 'legen, stellen, setzen, hängen, gehen', 'Ich lege das Buch auf den Tisch.']
        ],
        example: 'Das Handy liegt auf dem Tisch. — Ich lege es auf den Tisch.'
      }
    ],
    ukrainianTrap:
      'Різниця між «auf» і «an»: «auf» — на горизонтальній поверхні (auf dem Tisch — на столі), «an» — на вертикальній поверхні або впритул біля межі (an der Wand — на стіні, am Fenster — біля вікна).',
    examTip:
      'Goethe-Zertifikat A1 (Hören & Lesen): опис кімнати («Der Schrank steht neben dem Bett») та маршруту («Wir gehen in das / ins Kino») — улюблена тема завдань на розуміння деталей.',
    exercises: [
      {
        topicTag: 'Wechselpräpositionen (Wo? vs Wohin?)',
        sourceLessonId: 'a1_17',
        type: 'choice',
        prompt: 'Задай питання «Де?» (Wo?): Das Handy liegt auf ___ Tisch. (der Tisch)',
        options: ['den', 'dem', 'der'],
        answer: 'dem',
        explanation: 'Телефон уже лежить на столі (статика, Wo?), тому потрібен Dativ: auf dem Tisch.'
      },
      {
        topicTag: 'Wechselpräpositionen (Wo? vs Wohin?)',
        sourceLessonId: 'a1_17',
        type: 'fill',
        prompt: 'Задай питання «Куди?» (Wohin?): Ich lege das Handy auf ___ Tisch. (der Tisch)',
        placeholder: 'Артикль...',
        answer: 'den',
        explanation: 'Я кладу телефон на стіл (рух до цілі, Wohin?), тому ставимо Akkusativ: auf den Tisch.'
      },
      {
        topicTag: 'Wechselpräpositionen (Wo? vs Wohin?)',
        sourceLessonId: 'a1_17',
        type: 'choice',
        prompt: 'Як правильно сказати: «Ми йдемо сьогодні в кіно» (das Kino, Wohin?)?',
        options: [
          'Wir gehen heute im Kino.',
          'Wir gehen heute ins Kino.',
          'Wir gehen heute in dem Kino.'
        ],
        answer: 'Wir gehen heute ins Kino.',
        explanation: 'Куди? (Wohin? → Akkusativ): «in + das» зливається у форму «ins Kino».'
      },
      {
        topicTag: 'Wechselpräpositionen (Wo? vs Wohin?)',
        sourceLessonId: 'a1_17',
        type: 'builder',
        prompt: 'Збери речення (Wo?): «Кіт спить під ліжком» (das Bett → Dativ).',
        tokens: ['unter', 'schläft', 'dem Bett.', 'Die Katze'],
        answer: 'Die Katze schläft unter dem Bett.',
        explanation: 'Кіт спить на місці (Wo? → Dativ), середній рід das Bett переходить у dem Bett.'
      },
      {
        topicTag: 'Wechselpräpositionen (Wo? vs Wohin?)',
        sourceLessonId: 'a1_17',
        type: 'choice',
        prompt: 'Обери правильний прийменник для вертикальної поверхні: Das Bild hängt ___ der Wand. (die Wand)',
        options: ['auf', 'an', 'unter'],
        answer: 'an',
        explanation: 'Картина висить на вертикальній поверхні (стіні), тому вживаємо an + Dativ: an der Wand.'
      },
      {
        topicTag: 'Wechselpräpositionen (Wo? vs Wohin?)',
        sourceLessonId: 'a1_17',
        type: 'fill',
        prompt: 'Впиши артикль у Dativ (Wo?): Der Stuhl steht neben ___ Schrank. (der Schrank)',
        placeholder: 'Артикль...',
        answer: 'dem',
        explanation: 'Стілець стоїть поруч із шафою (Wo? → Dativ): neben dem Schrank.'
      },
      {
        topicTag: 'Wechselpräpositionen (Wo? vs Wohin?)',
        sourceLessonId: 'a1_17',
        type: 'choice',
        prompt: 'Як правильно сказати: «Вона ставить сумку під стіл» (der Tisch, Wohin?)?',
        options: [
          'Sie stellt die Tasche unter dem Tisch.',
          'Sie stellt die Tasche unter den Tisch.',
          'Sie stellt die Tasche unter der Tisch.'
        ],
        answer: 'Sie stellt die Tasche unter den Tisch.',
        explanation: 'Дія переміщення (stellen — ставити куди?, Wohin?) вимагає Akkusativ: unter den Tisch.'
      },
      {
        topicTag: 'Wechselpräpositionen (Wo? vs Wohin?)',
        sourceLessonId: 'a1_17',
        type: 'builder',
        prompt: 'Збери речення: «Стіл стоїть між вікном і дверима» (das Fenster, die Tür).',
        tokens: ['dem Fenster', 'steht', 'und der Tür.', 'Der Tisch', 'zwischen'],
        answer: 'Der Tisch steht zwischen dem Fenster und der Tür.',
        explanation: 'Питання «Де?» (Wo?) → Dativ для обох іменників: dem Fenster (das) та der Tür (die).'
      }
    ]
  },

  {
    id: 'a1_18',
    level: 'A1',
    order: 18,
    isFree: false,
    title: 'Невідокремлювані префікси та зворотні дієслова (sich)',
    germanTitle: 'Untrennbare Verben & Reflexive Verben (sich)',
    goal: 'Відрізняти невідокремлювані префікси (be-, ver-, er-...) та правильно вживати зворотні дієслова (sich freuen, sich setzen, sich waschen).',
    ruleSummary:
      '1) Невідокремлювані префікси (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) ЗАВЖДИ пишуться разом із коренем (ich besuche, er versteht) і в Perfekt НЕ отримують префікс ge- (besucht, verstanden). 2) Зворотні дієслова мають частку sich («себе»), яка змінюється для ich → mich та du → dich (для er/sie/es/wir/ihr/sie/Sie залишається sich або uns/euch).',
    tables: [
      {
        title: '1. Невідокремлювані префікси та відмінювання sich',
        subtitle: 'Префікси be-, ver-, er- не відділяються; sich змінюється за особою',
        headers: ['Особа', 'Зворотний займенник', 'Приклад (sich freuen)'],
        rows: [
          ['ich', 'mich', 'Ich freue mich.'],
          ['du', 'dich', 'Du freust dich.'],
          ['er / sie / es', 'sich', 'Er / Sie freut sich.'],
          ['wir', 'uns', 'Wir freuen uns.'],
          ['ihr', 'euch', 'Ihr freut euch.'],
          ['sie / Sie', 'sich', 'Sie freuen sich.']
        ],
        example: 'Ich freue mich auf deine Antwort und verstehe die Regel.'
      }
    ],
    ukrainianTrap:
      'В українській ми для всіх осіб додаємо «-ся» («я радію», «ти радієш», «ми радіємо»). У німецькій не можна казати «Ich freue sich» — для «ich» обов’язково «mich» («Ich freue mich»), а для «du» — «dich» («Freust du dich?»)!',
    examTip:
      'Goethe-Zertifikat A1 (Schreiben Teil 2): фраза «Ich freue mich auf deine Antwort» (З нетерпінням чекаю на твою відповідь) — ідеальне завершення будь-якого дружнього листа на іспиті.',
    exercises: [
      {
        topicTag: 'Невідокремлювані префікси та sich',
        sourceLessonId: 'a1_18',
        type: 'choice',
        prompt: 'Обери правильний зворотний займенник: Ich freue ___ sehr über das Geschenk!',
        options: ['sich', 'mich', 'mir'],
        answer: 'mich',
        explanation: 'Для займенника «ich» зворотна частка у Akkusativ має форму «mich»: Ich freue mich.'
      },
      {
        topicTag: 'Невідокремлювані префікси та sich',
        sourceLessonId: 'a1_18',
        type: 'fill',
        prompt: 'Впиши форму дієслова verstehen (невідокремлюваний префікс ver-): ___ du diese Regel?',
        placeholder: 'Форма verstehen...',
        answer: 'Verstehst',
        explanation: 'Префікс ver- невідокремлюваний, тому дієслово не розривається: Verstehst du...?'
      },
      {
        topicTag: 'Невідокремлювані префікси та sich',
        sourceLessonId: 'a1_18',
        type: 'choice',
        prompt: 'Як правильно сказати: «Ти миєш руки?» (sich waschen — зміна a → ä для du)?',
        options: [
          'Wäschst du sich die Hände?',
          'Wäschst du dich?',
          'Waschst du dich?'
        ],
        answer: 'Wäschst du dich?',
        explanation: 'Для «du» дієслово waschen змінює a на ä (wäschst), а зворотний займенник — dich.'
      },
      {
        topicTag: 'Невідокремлювані префікси та sich',
        sourceLessonId: 'a1_18',
        type: 'builder',
        prompt: 'Збери речення (sich beeilen — поспішати): «Ми мусимо сьогодні поквапитися».',
        tokens: ['uns', 'beeilen.', 'heute', 'Wir', 'müssen'],
        answer: 'Wir müssen uns heute beeilen.',
        explanation: 'Для «wir» зворотний займенник — «uns», він стоїть одразу після відмінюваного дієслова müssen.'
      },
      {
        topicTag: 'Невідокремлювані префікси та sich',
        sourceLessonId: 'a1_18',
        type: 'choice',
        prompt: 'Обери правильну форму Perfekt від дієслова erklären (пояснювати, префікс er-):',
        options: ['geerklärt', 'erklärt', 'erklären'],
        answer: 'erklärt',
        explanation: 'Префікс er- належить до невідокремлюваних, тому в Partizip II префікс ge- не додається: erklärt.'
      },
      {
        topicTag: 'Невідокремлювані префікси та sich',
        sourceLessonId: 'a1_18',
        type: 'fill',
        prompt: 'Впиши зворотний займенник для «ihr» (ви): Setzt ___ bitte! (sich setzen — сідати)',
        placeholder: 'Займенник...',
        answer: 'euch',
        explanation: 'Для займенника «ihr» зворотна форма — euch: Setzt euch bitte!'
      },
      {
        topicTag: 'Невідокремлювані префікси та sich',
        sourceLessonId: 'a1_18',
        type: 'choice',
        prompt: 'Який із цих префіксів є НЕВІДОКРЕМЛЮВАНИМ (пишеться завжди разом)?',
        options: ['auf-', 'ein-', 'ver-'],
        answer: 'ver-',
        explanation: 'Префікс ver- (як і be-, er-, ent-, zer-) завжди пишеться разом із дієсловом.'
      },
      {
        topicTag: 'Невідокремлювані префікси та sich',
        sourceLessonId: 'a1_18',
        type: 'builder',
        prompt: 'Збери фінальну фразу для листа: «Я радію (чекаю) на твою відповідь».',
        tokens: ['auf deine Antwort.', 'mich', 'freue', 'Ich'],
        answer: 'Ich freue mich auf deine Antwort.',
        explanation: 'Ich (1) → freue (2) → mich (3) → auf deine Antwort (4).'
      }
    ]
  },

  {
    id: 'a1_19',
    level: 'A1',
    order: 19,
    isFree: false,
    title: 'Модальні дієслова у Präteritum + mögen / möchten',
    germanTitle: 'Modalverben im Präteritum (konnte, musste, wollte...)',
    goal: 'Говорити про минулі можливості, обов’язки та плани («я міг», «я мусив», «я хотів») та розрізняти mögen і möchten.',
    ruleSummary:
      'У розповіді про минуле модальні дієслова вживаються у простому минулому часі Präteritum: können → konnte, müssen → musste, wollen → wollte, dürfen → durfte, sollen → sollte. Головний лайфхак: у Präteritum зникають усі умлаути, а форма для ich і er/sie/es збігається! Інфінітив основного дієслова так само стоїть у кінці.',
    tables: [
      {
        title: '1. Модальні дієслова у Präteritum (без умлаутів)',
        subtitle: 'Повна таблиця для всіх осіб у минулому часі',
        headers: ['Інфінітив', 'ich / er, sie, es', 'du', 'wir / sie, Sie', 'ihr'],
        rows: [
          ['können', 'konnte', 'konntest', 'konnten', 'konntet'],
          ['müssen', 'musste', 'musstest', 'mussten', 'musstet'],
          ['wollen', 'wollte', 'wolltest', 'wollten', 'wolltet'],
          ['dürfen', 'durfte', 'durftest', 'durften', 'durftet'],
          ['sollen', 'sollte', 'solltest', 'sollten', 'solltet']
        ],
        example: 'Gestern konnte ich nicht kommen, weil ich arbeiten musste.'
      },
      {
        title: '2. mögen (подобатися взагалі) vs möchten (хотів би зараз)',
        subtitle: 'Відмінювання mögen у теперішньому часі',
        headers: ['Особа', 'mögen (Präsens)', 'möchten'],
        rows: [
          ['ich / er, sie, es', 'mag', 'möchte'],
          ['du', 'magst', 'möchtest'],
          ['wir / sie, Sie', 'mögen', 'möchten'],
          ['ihr', 'mögt', 'möchtet']
        ],
        example: 'Ich mag Pizza, aber heute möchte ich Suppe.'
      }
    ],
    ukrainianTrap:
      'Не зберігай умлаут у минулому часі: «ich könnnte» чи «ich müsste» — це вже умовний спосіб («міг би / мусив би»), а простий минулий факт («міг / мусив») пишеться БЕЗ крапок: «ich konnte», «ich musste».',
    examTip:
      'Goethe-Zertifikat A1 (Lesen & Schreiben): пояснення причини в минулому («Ich konnte leider nicht kommen, ich musste arbeiten») — одна з найпопулярніших екзаменаційних конструкцій.',
    exercises: [
      {
        topicTag: 'Модальні дієслова у Präteritum',
        sourceLessonId: 'a1_19',
        type: 'choice',
        prompt: 'Обери правильний минулий час (Präteritum): Gestern ___ ich leider nicht kommen. (können)',
        options: ['kann', 'konnte', 'könnte'],
        answer: 'konnte',
        explanation: 'У минулому часі Präteritum дієслово können втрачає умлаут: ich konnte.'
      },
      {
        topicTag: 'Модальні дієслова у Präteritum',
        sourceLessonId: 'a1_19',
        type: 'fill',
        prompt: 'Впиши Präteritum від müssen: Wir ___ am Samstag früh aufstehen.',
        placeholder: 'Форма müssen...',
        answer: 'mussten',
        explanation: 'Для «wir» минулий час від müssen (без умлаута) — «mussten».'
      },
      {
        topicTag: 'Модальні дієслова у Präteritum',
        sourceLessonId: 'a1_19',
        type: 'choice',
        prompt: 'У чому різниця між «Ich mag Tee» та «Ich möchte einen Tee»?',
        options: [
          '«Ich mag Tee» — люблю чай взагалі; «Ich möchte einen Tee» — хочу випити зараз',
          'Обидві фрази означають минулий час',
          '«Ich mag» вживається тільки у множині'
        ],
        answer: '«Ich mag Tee» — люблю чай взагалі; «Ich möchte einen Tee» — хочу випити зараз',
        explanation: 'mögen (ich mag) описує постійні вподобання, а möchten (ich möchte) — ввічливе бажання в конкретний момент.'
      },
      {
        topicTag: 'Модальні дієслова у Präteritum',
        sourceLessonId: 'a1_19',
        type: 'builder',
        prompt: 'Збери речення: «Раніше вона хотіла жити в Берліні» (wollen, Präteritum).',
        tokens: ['in Berlin wohnen.', 'wollte', 'Früher', 'sie'],
        answer: 'Früher wollte sie in Berlin wohnen.',
        explanation: 'Früher (1) → wollte (2, минулий час від wollen) → sie (3) → in Berlin wohnen (кінець).'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова mögen: ___ du Schokolade? (для du)',
        placeholder: 'Форма mögen...',
        answer: 'Magst',
        explanation: 'Відмінювання mögen в однині: ich mag, du magst, er/sie/es mag.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильний минулий час від dürfen: Als Kind ___ ich nicht lange fernsehen.',
        options: ['darf', 'durfte', 'dürfte'],
        answer: 'durfte',
        explanation: 'Präteritum від dürfen (без умлаута) для «ich» — «durfte».'
      },
      {
        type: 'builder',
        prompt: 'Збери речення: «Він мусив учора багато вчити» (müssen, Präteritum).',
        tokens: ['viel lernen.', 'Er', 'gestern', 'musste'],
        answer: 'Er musste gestern viel lernen.',
        explanation: 'Для «er» форма Präteritum від müssen — «musste» (без умлаута і без -t у кінці).'
      },
      {
        type: 'choice',
        prompt: 'Яка форма Präteritum для «du» від дієслова können («Ти міг...»)?',
        options: ['du kannst', 'du konntest', 'du konntet'],
        answer: 'du konntest',
        explanation: 'У Präteritum для «du» додається закінчення -est: du konntest.'
      }
    ]
  },

  {
    id: 'a1_20',
    level: 'A1',
    order: 20,
    isFree: false,
    title: 'Займенники man, формальне es, dieser та welcher',
    germanTitle: 'Pronomen: man, es (Es gibt), dieser & welcher',
    goal: 'Вживати безособове man, конструкцію es gibt + Akkusativ, вказівний dieser та питальний welcher.',
    ruleSummary:
      '1) man («хтось / люди взагалі») завжди стоїть у Nominativ і вимагає дієслова в 3-й особі однини (man spricht, man darf). 2) Формальне es вживається у безособових виразах (Es regnet, Es gibt + Akkusativ). 3) dieser/diese/dieses («цей/ця/це») та welcher/welche/welches («який/яка/яке») беруть закінчення означеного артикля (у Akkusativ чоловічого роду — diesen / welchen).',
    tables: [
      {
        title: '1. Займенники man, es gibt та відмінювання dieser / welcher',
        subtitle: 'Зверни увагу: після es gibt завжди стоїть Akkusativ',
        headers: ['Конструкція / Слово', 'Граматичне правило', 'Приклад'],
        rows: [
          ['man', '3-тя особа однини дієслова (як er/sie/es)', 'Hier spricht man Deutsch.'],
          ['es gibt + Akkusativ', 'чол. рід: einen / den', 'In der Nähe gibt es einen Bahnhof.'],
          ['dieser / welcher (Nom.)', 'dieser / diese / dieses | welcher / welche / welches', 'Dieser Tisch ist praktisch.'],
          ['dieser / welcher (Akk. чол.)', 'diesen / welchen', 'Welchen Bus nimmst du? — Diesen hier.']
        ],
        example: 'In Berlin gibt es viele Museen und hier spricht man Deutsch.'
      }
    ],
    ukrainianTrap:
      'Після «Es gibt» («є / існує») у німецькій завжди йде АКУЗАТИВ (Akkusativ): «Es gibt einen Tisch» (чоловічий рід отримує -en!), а не «ein Tisch».',
    examTip:
      'Goethe-Zertifikat A1 (Lesen & Hören): конструкція «Es gibt...» постійно зустрічається в оголошеннях про місто, квартиру або розклад («In der Stadt gibt es viele Museen»).',
    exercises: [
      {
        topicTag: 'Займенники man, es, dieser, welcher',
        sourceLessonId: 'a1_20',
        type: 'choice',
        prompt: 'Обери правильну форму після «Es gibt»: In der Nähe gibt es ___ Bahnhof. (der Bahnhof)',
        options: ['ein', 'einen', 'eine'],
        answer: 'einen',
        explanation: 'Після «es gibt» вживається Akkusativ. Bahnhof — чоловічого роду (der), тому einen Bahnhof.'
      },
      {
        topicTag: 'Займенники man, es, dieser, welcher',
        sourceLessonId: 'a1_20',
        type: 'fill',
        prompt: 'Впиши займенник узагальнення («хтось / люди»): Hier ___ man sehr gut Deutsch. (sprechen)',
        placeholder: 'Форма sprechen...',
        answer: 'spricht',
        explanation: 'Займенник «man» завжди узгоджується з дієсловом у 3-й особі однини (er/sie/es): man spricht.'
      },
      {
        topicTag: 'Займенники man, es, dieser, welcher',
        sourceLessonId: 'a1_20',
        type: 'choice',
        prompt: 'Обери правильну форму питального займенника: ___ Bus nimmst du? (der Bus, Akkusativ)',
        options: ['Welcher', 'Welchen', 'Welches'],
        answer: 'Welchen',
        explanation: 'Bus — чоловічого роду (der) у прямому додатку (Akkusativ), тому питальне слово має форму Welchen.'
      },
      {
        topicTag: 'Займенники man, es, dieser, welcher',
        sourceLessonId: 'a1_20',
        type: 'builder',
        prompt: 'Збери речення з «dieser» (чоловічий рід, Nominativ): «Цей стіл дуже зручний».',
        tokens: ['sehr praktisch.', 'ist', 'Dieser Tisch'],
        answer: 'Dieser Tisch ist sehr praktisch.',
        explanation: 'Tisch — чоловічого роду у Nominativ (підмет), тому форма — Dieser Tisch.'
      },
      {
        topicTag: 'Займенники man, es, dieser, welcher',
        sourceLessonId: 'a1_20',
        type: 'fill',
        prompt: 'Впиши форму займенника «dieser» у Akkusativ: Ich kaufe ___ Mantel. (der Mantel)',
        placeholder: 'Форма dieser...',
        answer: 'diesen',
        explanation: 'Mantel (пальто) — чоловічого роду (der) у Akkusativ після kaufen, тому diesen.'
      },
      {
        topicTag: 'Займенники man, es, dieser, welcher',
        sourceLessonId: 'a1_20',
        type: 'choice',
        prompt: 'Як правильно сказати про погоду: «Надворі йде дощ»?',
        options: ['Es regnet.', 'Er regnet.', 'Sie regnet.'],
        answer: 'Es regnet.',
        explanation: 'Для явищ погоди в німецькій вживається безособовий займенник «es»: Es regnet (іде дощ).'
      },
      {
        topicTag: 'Займенники man, es, dieser, welcher',
        sourceLessonId: 'a1_20',
        type: 'choice',
        prompt: 'Яка форма «welcher» для іменника середнього роду у Nominativ (наприклад, das Buch)?',
        options: ['Welcher', 'Welche', 'Welches'],
        answer: 'Welches',
        explanation: 'Для середнього роду (das) у Nominativ та Akkusativ вживається форма Welches.'
      },
      {
        topicTag: 'Займенники man, es, dieser, welcher',
        sourceLessonId: 'a1_20',
        type: 'builder',
        prompt: 'Збери речення: «У Берліні є багато можливостей».',
        tokens: ['viele Möglichkeiten.', 'gibt es', 'In Berlin'],
        answer: 'In Berlin gibt es viele Möglichkeiten.',
        explanation: 'In Berlin (1) → gibt (2) → es (3) → viele Möglichkeiten (4).'
      }
    ]
  },

  {
    id: 'a1_21',
    level: 'A1',
    order: 21,
    isFree: false,
    title: 'Прикметники та ступені порівняння (Komparativ & Superlativ)',
    germanTitle: 'Adjektive & Steigerung (so...wie, -er...als, am ...-sten)',
    goal: 'Порівнювати предмети й дії («такий самий, як», «швидший, ніж», «найкращий») та знати ключові винятки.',
    ruleSummary:
      'Після дієслів sein, werden, bleiben прикметник не відмінюється (Das Auto ist neu). Для порівняння однакового рівня вживаємо «so + прикметник + wie». Вищий ступінь утворюється суфіксом -er + «als» («швидше, ніж»). Найвищий ступінь — «am + прикметник + -sten». Винятки: gut → besser → am besten, gern → lieber → am liebsten, viel → mehr → am meisten.',
    tables: [
      {
        title: '1. Ступені порівняння та винятки',
        subtitle: 'Правила утворення Komparativ, Superlativ та нерегулярні форми',
        headers: ['Початкова форма', 'Вищий ступінь (+ als)', 'Найвищий ступінь (am ...-sten)'],
        rows: [
          ['schnell (швидкий)', 'schneller', 'am schnellsten'],
          ['klein (маленький)', 'kleiner', 'am kleinsten'],
          ['gut (добрий — виняток)', 'besser', 'am besten'],
          ['gern (охоче — виняток)', 'lieber', 'am liebsten'],
          ['viel (багато — виняток)', 'mehr', 'am meisten']
        ],
        example: 'Der Zug fährt schneller als der Bus, aber ich fahre am liebsten Rad.'
      }
    ],
    ukrainianTrap:
      'Після вищого ступеня в німецькій ставимо «als» («більший, ніж»), а після «so ... wie» («такий самий, як») — «wie». Не плутай їх між собою!',
    examTip:
      'Goethe-Zertifikat A1 / A2 (Sprechen): фраза «Ich fahre lieber mit dem Zug als mit dem Bus» звучить природно й допомагає висловити перевагу.',
    exercises: [
      {
        topicTag: 'Прикметники та ступені порівняння',
        sourceLessonId: 'a1_21',
        type: 'choice',
        prompt: 'Обери правильне слово для порівняння: Berlin ist größer ___ München.',
        options: ['wie', 'als', 'so'],
        answer: 'als',
        explanation: 'Після прикметника у вищому ступені (größer) вживається сполучник «als» (ніж).'
      },
      {
        topicTag: 'Прикметники та ступені порівняння',
        sourceLessonId: 'a1_21',
        type: 'fill',
        prompt: 'Впиши вищий ступінь від прикметника «gut» (добрий → кращий): Dieses Buch ist ___ als das alte.',
        placeholder: 'Форма gut...',
        answer: 'besser',
        explanation: 'Прикметник «gut» утворює вищий ступінь нерегулярно: gut → besser → am besten.'
      },
      {
        topicTag: 'Прикметники та ступені порівняння',
        sourceLessonId: 'a1_21',
        type: 'choice',
        prompt: 'Як сказати «найбільше люблю (охоче)» (виняток від gern)?',
        options: ['am gernsten', 'am liebsten', 'am besten'],
        answer: 'am liebsten',
        explanation: 'Ступені порівняння для «gern»: gern → lieber → am liebsten.'
      },
      {
        topicTag: 'Прикметники та ступені порівняння',
        sourceLessonId: 'a1_21',
        type: 'builder',
        prompt: 'Збери речення: «Вона така ж молода, як і він» (jung).',
        tokens: ['wie er.', 'so jung', 'Sie ist'],
        answer: 'Sie ist so jung wie er.',
        explanation: 'Для рівного порівняння використовуємо конструкцію «so + прикметник + wie».'
      },
      {
        topicTag: 'Прикметники та ступені порівняння',
        sourceLessonId: 'a1_21',
        type: 'fill',
        prompt: 'Впиши слово «wie» у порівнянні: Dieser Kaffee ist nicht so teuer ___ der Tee.',
        placeholder: 'Слово...',
        answer: 'wie',
        explanation: 'У конструкції «so ... wie» («такий самий, як») вживається «wie».'
      },
      {
        topicTag: 'Прикметники та ступені порівняння',
        sourceLessonId: 'a1_21',
        type: 'choice',
        prompt: 'Яка форма найвищого ступеня правильна для «schnell» (швидкий)?',
        options: ['am schnellsten', 'am schnellen', 'am schnellst'],
        answer: 'am schnellsten',
        explanation: 'Найвищий ступінь із «am» утворюється за формулою «am + основа + -sten»: am schnellsten.'
      },
      {
        topicTag: 'Прикметники та ступені порівняння',
        sourceLessonId: 'a1_21',
        type: 'choice',
        prompt: 'Чи змінюється прикметник після дієслова «sein» у реченні «Das Wetter ist heute warm»?',
        options: [
          'Ні, у предикативній позиції він не відмінюється',
          'Так, додається закінчення -e',
          'Так, додається закінчення -en'
        ],
        answer: 'Ні, у предикативній позиції він не відмінюється',
        explanation: 'Після дієслів sein, werden та bleiben прикметник не отримує відмінкових закінчень.'
      },
      {
        topicTag: 'Прикметники та ступені порівняння',
        sourceLessonId: 'a1_21',
        type: 'builder',
        prompt: 'Збери речення: «Потяг їде швидше, ніж автобус» (schnell).',
        tokens: ['als der Bus.', 'fährt', 'Der Zug', 'schneller'],
        answer: 'Der Zug fährt schneller als der Bus.',
        explanation: 'Der Zug (1) → fährt (2) → schneller (вищий ступінь) → als der Bus.'
      }
    ]
  },

  {
    id: 'a1_22',
    level: 'A1',
    order: 22,
    isFree: false,
    title: 'Синтаксис: правило TeKaMoLo та складносурядні речення',
    germanTitle: 'TeKaMoLo & Satzverbindungen (und, aber, oder, denn, deshalb)',
    goal: 'Правильно розставляти обставини у реченні (час, причина, спосіб дії, місце) та з’єднувати речення сполучниками.',
    ruleSummary:
      '1) У німецькому реченні обставини зазвичай ставляться у порядку TeKaMoLo: Temporal (коли?) → Kausal (чому?) → Modal (як?) → Lokal (де/куди?). 2) Сполучники und, aber, oder, denn займають «нульову позицію» і не впливають на порядок слів у другому реченні. 3) Прислівники deshalb (тому), dann (потім), sonst (інакше) займають 1-шу позицію, тому після них одразу йде дієслово!',
    tables: [
      {
        title: '1. Правило TeKaMoLo та сполучники (позиція 0 vs інверсія)',
        subtitle: 'Як розставити обставини й поєднати частини речення',
        headers: ['Правило / Група', 'Порядок слів', 'Приклад'],
        rows: [
          ['TeKaMoLo', 'Temporal → Kausal → Modal → Lokal', 'Er fährt heute mit dem Zug nach Berlin.'],
          ['Позиція 0 (und, aber, oder, denn)', 'Сполучник + Підмет (1) + ДІЄСЛОВО (2)', 'Ich gehe schlafen, denn ich bin müde.'],
          ['Позиція 1 (deshalb, dann, sonst)', 'Прислівник (1) + ДІЄСЛОВО (2) + Підмет (3)', 'Es regnet. Deshalb bleiben wir zu Hause.']
        ],
        example: 'Ich habe Zeit, aber ich bin müde. Deshalb bleibe ich zu Hause.'
      }
    ],
    ukrainianTrap:
      'Після «deshalb» («тому») дієслово стоїть ОДРАЗУ після «deshalb» («Deshalb bleibe ich...»), а не після підмета («Deshalb ich bleibe...» — це помилка!).',
    examTip:
      'Goethe-Zertifikat A1 / A2 (Schreiben): сполучники «aber», «denn» та «deshalb» роблять текст логічним і зв’язним у будь-якому короткому листі чи повідомленні.',
    exercises: [
      {
        topicTag: 'Синтаксис TeKaMoLo та сполучники',
        sourceLessonId: 'a1_22',
        type: 'choice',
        prompt: 'Обери правильне продовження після «deshalb»: Ich habe Kopfschmerzen. Deshalb ___',
        options: [
          'ich gehe heute nicht zur Party.',
          'gehe ich heute nicht zur Party.',
          'heute ich gehe nicht zur Party.'
        ],
        answer: 'gehe ich heute nicht zur Party.',
        explanation: '«Deshalb» займає 1-шу позицію в реченні, тому на 2-му місці стоїть дієслово «gehe», а потім підмет «ich».'
      },
      {
        topicTag: 'Синтаксис TeKaMoLo та сполучники',
        sourceLessonId: 'a1_22',
        type: 'fill',
        prompt: 'Впиши сполучник протиставлення («але»): Ich lerne gern Deutsch, ___ Grammatik ist manchmal schwer.',
        placeholder: 'Сполучник...',
        answer: 'aber',
        explanation: '«aber» («але») з’єднує речення у нульовій позиції, порядок слів після нього прямий: Grammatik (1) ist (2).'
      },
      {
        topicTag: 'Синтаксис TeKaMoLo та сполучники',
        sourceLessonId: 'a1_22',
        type: 'builder',
        prompt: 'Збери речення за правилом TeKaMoLo (час → спосіб → місце): «Він їде сьогодні потягом до Берліна».',
        tokens: ['mit dem Zug', 'heute', 'fährt', 'nach Berlin.', 'Er'],
        answer: 'Er fährt heute mit dem Zug nach Berlin.',
        explanation: 'Er (1) → fährt (2) → heute (Temporal — коли?) → mit dem Zug (Modal — як?) → nach Berlin (Lokal — куди?).'
      },
      {
        topicTag: 'Синтаксис TeKaMoLo та сполучники',
        sourceLessonId: 'a1_22',
        type: 'choice',
        prompt: 'Який сполучник пояснює причину, але НЕ відправляє дієслово в кінець речення?',
        options: ['weil', 'denn', 'wenn'],
        answer: 'denn',
        explanation: '«denn» («адже / бо») працює як сурядний сполучник (позиція 0), тому дієслово лишається на 2-му місці.'
      },
      {
        topicTag: 'Синтаксис TeKaMoLo та сполучники',
        sourceLessonId: 'a1_22',
        type: 'fill',
        prompt: 'Впиши сполучник («або»): Trinkst du Kaffee ___ Tee?',
        placeholder: 'Сполучник...',
        answer: 'oder',
        explanation: '«oder» означає «або» і поєднує однорідні члени або речення.'
      },
      {
        topicTag: 'Синтаксис TeKaMoLo та сполучники',
        sourceLessonId: 'a1_22',
        type: 'builder',
        prompt: 'Збери речення з «denn»: «Я йду спати, бо я дуже втомлений» (ich bin sehr müde).',
        tokens: ['ich bin sehr müde.', 'Ich gehe schlafen,', 'denn'],
        answer: 'Ich gehe schlafen, denn ich bin sehr müde.',
        explanation: 'Після «denn» зберігається прямий порядок слів: ich (1) bin (2) sehr müde.'
      },
      {
        topicTag: 'Синтаксис TeKaMoLo та сполучники',
        sourceLessonId: 'a1_22',
        type: 'choice',
        prompt: 'Який порядок обставин відповідає правилу TeKaMoLo?',
        options: [
          'Temporal → Kausal → Modal → Lokal',
          'Lokal → Modal → Temporal → Kausal',
          'Modal → Lokal → Kausal → Temporal'
        ],
        answer: 'Temporal → Kausal → Modal → Lokal',
        explanation: 'TeKaMoLo розшифровується як Temporal (час) — Kausal (причина) — Modal (спосіб) — Lokal (місце).'
      },
      {
        topicTag: 'Синтаксис TeKaMoLo та сполучники',
        sourceLessonId: 'a1_22',
        type: 'fill',
        prompt: 'Впиши слово («потім / тоді»): Zuerst frühstücke ich, ___ gehe ich zur Arbeit.',
        placeholder: 'Слово...',
        answer: 'dann',
        explanation: '«dann» («потім») стоїть на 1-му місці, тому дієслово «gehe» одразу йде після нього.'
      }
    ]
  },

  {
    id: 'a1_23',
    level: 'A1',
    order: 23,
    isFree: false,
    title: 'Складнопідрядні речення (weil, dass, wenn) та належність (Lisas Buch)',
    germanTitle: 'Nebensätze mit weil, dass, wenn & Genitiv/Besitz bei Namen',
    goal: 'Будувати підрядні речення з дієсловом у кінці та позначати належність через власні імена (Lisas Buch).',
    ruleSummary:
      '1) У складнопідрядному реченні після weil (тому що), dass (що) або wenn (коли / якщо) відмінюване дієслово ставиться в САМИЙ КІНЕЦЬ підрядного речення. 2) Для позначення належності з власними іменами у німецькій додаємо закінчення -s без апострофа: Lisas Buch, Toms Fahrrad (якщо ім’я вже закінчується на -s, -ß, -x, -z — ставимо апостроф: Max’ Buch).',
    tables: [
      {
        title: '1. Підрядні речення (weil, dass, wenn) та належність імен',
        subtitle: 'Дієслово йде в кінець; імена отримують -s без артикля',
        headers: ['Конструкція', 'Правило', 'Приклад'],
        rows: [
          ['weil (тому що)', '..., weil + підмет + ... + ДІЄСЛОВО (кінець)', 'Ich bleibe zu Hause, weil ich krank bin.'],
          ['dass (що)', '..., dass + підмет + ... + ДІЄСЛОВО (кінець)', 'Er sagt, dass er heute arbeitet.'],
          ['wenn (якщо / коли)', 'Wenn + підмет + ... + ДІЄСЛОВО, ДІЄСЛОВО ...', 'Wenn ich Zeit habe, gehe ich spazieren.'],
          ['Ім’я + -s', 'Ім’я + -s + іменник (без артикля)', 'Das ist Lisas neues Buch. (Max’ Buch)']
        ],
        example: 'Das ist Lisas Buch und ich lese es, weil es spannend ist.'
      }
    ],
    ukrainianTrap:
      'Коли кажемо «Лізина книга» («Lisas Buch»), перед «Buch» НЕ ставимо артикль («не Lisas das Buch», а просто «Lisas Buch»)! І не став апостроф у звичайних іменах на кшталт «Lisas» — в українській та англійській пишуть з апострофом, а в німецькій стандартно пишеться разом: Lisas Buch.',
    examTip:
      'Goethe-Zertifikat A1 / A2: прості речення з «weil» («...weil ich krank bin») та «dass» («Ich glaube, dass...») демонструють впевнене володіння синтаксисом.',
    exercises: [
      {
        topicTag: 'Підрядні речення та належність імен',
        sourceLessonId: 'a1_23',
        type: 'choice',
        prompt: 'Обери правильний порядок слів у підрядному реченні: Ich bleibe zu Hause, weil ich ___ habe.',
        options: ['keine Zeit', 'Zeit keine', 'nicht Zeit'],
        answer: 'keine Zeit',
        explanation: 'У підрядному реченні з «weil» дієслово («habe») стоїть у кінці: weil ich keine Zeit habe.'
      },
      {
        topicTag: 'Підрядні речення та належність імен',
        sourceLessonId: 'a1_23',
        type: 'fill',
        prompt: 'Утвори форму належності від імені «Lisa»: Wo ist ___ Tasche? (сумка Лізи)',
        placeholder: 'Форма Lisa...',
        answer: 'Lisas',
        explanation: 'До власного імені Lisa додаємо -s без апострофа й без артикля перед іменником: Lisas Tasche.'
      },
      {
        topicTag: 'Підрядні речення та належність імен',
        sourceLessonId: 'a1_23',
        type: 'builder',
        prompt: 'Збери речення з «dass»: «Він каже, що він сьогодні працює».',
        tokens: ['dass er', 'Er sagt,', 'heute arbeitet.', 'arbeitet.'],
        answer: 'Er sagt, dass er heute arbeitet.',
        explanation: 'Після «dass» відмінюване дієслово («arbeitet») переноситься в самий кінець підрядного речення.'
      },
      {
        topicTag: 'Підрядні речення та належність імен',
        sourceLessonId: 'a1_23',
        type: 'choice',
        prompt: 'Яке речення з «wenn» побудоване правильно?',
        options: [
          'Wenn ich Zeit habe, gehe ich spazieren.',
          'Wenn ich habe Zeit, gehe ich spazieren.',
          'Wenn ich Zeit habe, ich gehe spazieren.'
        ],
        answer: 'Wenn ich Zeit habe, gehe ich spazieren.',
        explanation: 'У підрядному реченні дієслово «habe» в кінці, а в головному після коми дієслово «gehe» стоїть одразу.'
      },
      {
        topicTag: 'Підрядні речення та належність імен',
        sourceLessonId: 'a1_23',
        type: 'fill',
        prompt: 'Впиши сполучник («тому що»): Sie geht zum Arzt, ___ sie krank ist.',
        placeholder: 'Сполучник...',
        answer: 'weil',
        explanation: '«weil» вводить причину («тому що вона хвора») і ставить дієслово «ist» у кінець.'
      },
      {
        topicTag: 'Підрядні речення та належність імен',
        sourceLessonId: 'a1_23',
        type: 'choice',
        prompt: 'Як правильно написати: «Це велосипед Тома» (Tom, das Fahrrad)?',
        options: [
          'Das ist Toms Fahrrad.',
          'Das ist das Toms Fahrrad.',
          'Das ist Tom’s das Fahrrad.'
        ],
        answer: 'Das ist Toms Fahrrad.',
        explanation: 'Ім’я Tom отримує -s (Toms), а артикль перед Fahrrad опускається.'
      },
      {
        topicTag: 'Підрядні речення та належність імен',
        sourceLessonId: 'a1_23',
        type: 'choice',
        prompt: 'Впиши сполучник («що»): Ich denke, ___ der Kurs interessant ist.',
        options: ['dass', 'weil', 'wann'],
        answer: 'dass',
        explanation: 'Після дієслів думки (denken, glauben, wissen) вживається сполучник «dass».'
      },
      {
        topicTag: 'Підрядні речення та належність імен',
        sourceLessonId: 'a1_23',
        type: 'builder',
        prompt: 'Збери речення з «wenn»: «Якщо йде дощ, ми залишаємося вдома».',
        tokens: ['bleiben wir zu Hause.', 'Wenn es regnet,', 'zu Hause bleiben wir.'],
        answer: 'Wenn es regnet, bleiben wir zu Hause.',
        explanation: 'Підрядне «Wenn es regnet» стоїть перед комою, а головне починається з дієслова «bleiben».'
      }
    ]
  },

  {
    id: 'a1_24',
    level: 'A1',
    order: 24,
    isFree: false,
    title: 'Числівники, дати, час, ціни та міри',
    germanTitle: 'Zahlen, Datum, Uhrzeit, Preise & Maße',
    goal: 'Називати числа, дати, час (офіційний і розмовний: halb, Viertel, vor, nach), ціни та одиниці виміру.',
    ruleSummary:
      '1) У двозначних числах німецькою спочатку називаємо одиниці, потім «und» і десятки: 24 = vierundzwanzig («чотири-і-двадцять»). 2) Порядкові числівники в датах: до 19 додаємо -te (am vierten Mai), від 20 — -ste (am zwanzigsten Juni); винятки: erste, dritte, siebte, achte. 3) У розмовному часі «halb acht» = 7:30 (пів до восьмої!).',
    tables: [
      {
        title: '1. Числівники, дати та розмовний час',
        subtitle: 'Як називати двозначні числа, числа місяця та години з halb і Viertel',
        headers: ['Тема', 'Правило', 'Приклад'],
        rows: [
          ['Двозначні числа', 'одиниці + und + десятки', '21 = einundzwanzig, 35 = fünfunddreißig'],
          ['Дати (am + ...-n)', '1–19: -te | від 20: -ste | винятки: erste, dritte, siebte, achte', 'am dritten Mai / am zwanzigsten Juni'],
          ['Розмовний час', 'halb = -30 хв до наступної години', 'halb neun = 08:30 | Viertel vor acht = 07:45']
        ],
        example: 'Der Kurs beginnt am dritten Mai um halb zehn (09:30).'
      }
    ],
    ukrainianTrap:
      '«halb acht» — це НЕ 8:30, а 7:30 (півдороги до восьмої години)! А в числах типу 47 («siebenundvierzig») спочатку чуємо «сім» (sieben), а потім «сорок» (vierzig).',
    examTip:
      'Goethe-Zertifikat A1 (Hören Teil 1 & 2): ціни в євро, номери потягів, дати та час зустрічей — це гарантовані бали на іспиті, якщо тренувати слух на числа й «halb»/«Viertel».',
    exercises: [
      {
        topicTag: 'Числівники, дати, час та ціни',
        sourceLessonId: 'a1_24',
        type: 'choice',
        prompt: 'Котра година за розмовним виразом «um halb zehn»?',
        options: ['10:30', '09:30', '09:15'],
        answer: '09:30',
        explanation: '«halb zehn» означає «пів до десятої», тобто 09:30.'
      },
      {
        topicTag: 'Числівники, дати, час та ціни',
        sourceLessonId: 'a1_24',
        type: 'fill',
        prompt: 'Як пишеться німецькою число 23 (спочатку одиниці, потім und і десятки)?',
        placeholder: 'Число словами...',
        answer: 'dreiundzwanzig',
        explanation: '23 = три (drei) + і (und) + двадцять (zwanzig) = dreiundzwanzig.'
      },
      {
        topicTag: 'Числівники, дати, час та ціни',
        sourceLessonId: 'a1_24',
        type: 'choice',
        prompt: 'Яка форма порядкового числівника правильна для 3-го числа (у даті з «am»)?',
        options: ['am dreiten', 'am dritten', 'am drei'],
        answer: 'am dritten',
        explanation: '«dritte» — виняток при утворенні порядкових числівників, а в даті з «am» додається закінчення -n: am dritten.'
      },
      {
        topicTag: 'Числівники, дати, час та ціни',
        sourceLessonId: 'a1_24',
        type: 'builder',
        prompt: 'Збери речення про ціну: «Книга коштує 15 євро» (fünfzehn Euro).',
        tokens: ['fünfzehn Euro.', 'kostet', 'Das Buch'],
        answer: 'Das Buch kostet fünfzehn Euro.',
        explanation: 'Das Buch (1) → kostet (2) → fünfzehn Euro (3).'
      },
      {
        topicTag: 'Числівники, дати, час та ціни',
        sourceLessonId: 'a1_24',
        type: 'choice',
        prompt: 'Що означає «Viertel vor acht»?',
        options: ['07:45 (без п’ятнадцяти вісім)', '08:15 (п’ятнадцять по восьмій)', '08:45'],
        answer: '07:45 (без п’ятнадцяти вісім)',
        explanation: '«Viertel» — чверть години (15 хв), «vor» — до: чверть до восьмої = 07:45.'
      },
      {
        topicTag: 'Числівники, дати, час та ціни',
        sourceLessonId: 'a1_24',
        type: 'fill',
        prompt: 'Впиши прийменник для точної дати: Ich bin ___ 5. Mai geboren.',
        placeholder: 'Прийменник...',
        answer: 'am',
        explanation: 'Перед конкретною датою вживаємо прийменник «am»: am 5. Mai.'
      },
      {
        topicTag: 'Числівники, дати, час та ціни',
        sourceLessonId: 'a1_24',
        type: 'choice',
        prompt: 'Яка форма порядкового числівника правильна для «1-й» (erste)?',
        options: ['einste', 'erste', 'einseste'],
        answer: 'erste',
        explanation: 'Порядковий числівник від «eins» — «erste» (перший).'
      },
      {
        topicTag: 'Числівники, дати, час та ціни',
        sourceLessonId: 'a1_24',
        type: 'builder',
        prompt: 'Збери речення: «Я купую один кілограм яблук» (ein Kilogramm Äpfel).',
        tokens: ['ein Kilogramm Äpfel.', 'kaufe', 'Ich'],
        answer: 'Ich kaufe ein Kilogramm Äpfel.',
        explanation: 'Ich (1) → kaufe (2) → ein Kilogramm Äpfel (3).'
      }
    ]
  },

  {
    id: 'a1_25_final',
    level: 'A1',
    order: 25,
    isFree: false,
    isFinalExam: true,
    title: 'Фінальний іспит курсу A1 (Перевірка всіх тем)',
    germanTitle: 'Abschlusstest A1 • Goethe-Zertifikat Niveau',
    goal: 'Підсумкова перевірка всього курсу A1. Якщо припустишся помилки — отримаєш додаткові завдання саме на цю тему!',
    ruleSummary:
      'Це фінальний контрольний тест за всіма темами рівня A1: порядок слів, дієслова, артиклі, відмінки Nominativ/Akkusativ/Dativ, заперечення nicht/kein, займенники, модальні дієслова, відокремлювані та невідокремлювані префікси, Imperativ, прийменники, прикметники, TeKaMoLo, складнопідрядні речення, дати та час. При помилці система автоматично додає вправи з відповідної теми.',
    tables: [
      {
        title: 'Правила фінального іспиту A1',
        subtitle: 'Як відбувається перевірка та автоматичне відпрацювання помилок',
        headers: ['Параметр', 'Умова'],
        rows: [
          ['Формат тесту', '14 контрольних завдань по ключових темах курсу A1'],
          ['Розумне відпрацювання', 'Помилка в темі X → +2 додаткові вправи саме з теми X в кінець тесту'],
          ['Прохідний поріг', 'від 70% правильних відповідей → «Засвоєно ✓» + 75 🪙']
        ],
        example: 'Für die erfolgreiche Prüfung sind mindestens 70% nötig.'
      }
    ],
    ukrainianTrap:
      'У фінальному іспиті всі правила змішані між собою — так само, як у реальному житті та на іспиті Goethe-Zertifikat A1. Перед відповіддю завжди перевіряй 3 речі: 1) де стоїть дієслово; 2) який рід у іменника (der/die/das); 3) чи це теперішній, чи минулий час.',
    examTip:
      'Після успішного складання цього тесту ти повністю готовий до граматичної частини іспиту Goethe-Zertifikat A1: Start Deutsch 1 та переходу на рівень A2!',
    exercises: [
      {
        topicTag: 'Порядок слів',
        sourceLessonId: 'a1_01',
        type: 'builder',
        prompt: '[Тема 1: Порядок слів] Збери речення: «У понеділок я маю прийом у лікаря».',
        tokens: ['ich', 'Am Montag', 'einen Termin beim Arzt.', 'habe'],
        answer: 'Am Montag habe ich einen Termin beim Arzt.',
        explanation: 'Після обставини часу Am Montag (1-ше місце) дієслово habe обов’язково стоїть на 2-му місці.'
      },
      {
        topicTag: 'Дієслова Präsens / sein / haben',
        sourceLessonId: 'a1_02',
        type: 'fill',
        prompt: '[Тема 2: sein / haben] Впиши правильну форму дієслова sein: ___ ihr heute Abend zu Hause?',
        placeholder: 'Форма sein...',
        answer: 'Seid',
        explanation: 'Для займенника «ihr» (ви — група друзів) форма дієслова sein — «seid».'
      },
      {
        topicTag: 'Сильні дієслова',
        sourceLessonId: 'a1_03',
        type: 'choice',
        prompt: '[Тема 3: Сильні дієслова] Обери правильну форму: Wann ___ der Zug nach München? (fahren)',
        options: ['fahrt', 'fährt', 'fahren'],
        answer: 'fährt',
        explanation: 'У 3-й особі однини (der Zug = er) голосна a в дієслові fahren отримує умлаут: fährt.'
      },
      {
        topicTag: 'Артиклі та множина',
        sourceLessonId: 'a1_04',
        type: 'choice',
        prompt: '[Тема 4: Артиклі] Який артикль має слово Anmeldung (реєстрація)?',
        options: ['der', 'die', 'das'],
        answer: 'die',
        explanation: 'Усі іменники із суфіксом -ung завжди жіночого роду — die.'
      },
      {
        topicTag: 'Відмінок Akkusativ',
        sourceLessonId: 'a1_05',
        type: 'fill',
        prompt: '[Тема 5: Akkusativ] Впиши неозначений артикль у Akkusativ: Ich brauche ___ Ausweis. (der Ausweis)',
        placeholder: 'Артикль...',
        answer: 'einen',
        explanation: 'Після brauchen потрібен Akkusativ. Ausweis — чоловічого роду (der), тому ein → einen.'
      },
      {
        topicTag: 'Заперечення nicht / kein',
        sourceLessonId: 'a1_06',
        type: 'choice',
        prompt: '[Тема 6: Заперечення] Як правильно сказати: «У мене сьогодні немає часу»?',
        options: [
          'Ich habe heute nicht Zeit.',
          'Ich habe heute keine Zeit.',
          'Ich habe heute nicht keine Zeit.'
        ],
        answer: 'Ich habe heute keine Zeit.',
        explanation: 'Іменник без артикля (Zeit, жіночий рід) заперечується словом keine без подвійного заперечення.'
      },
      {
        topicTag: 'Dativ (дієслова та займенники)',
        sourceLessonId: 'a1_15',
        type: 'choice',
        prompt: '[Тема 15: Dativ] Обери правильний займенник: Kannst du ___ (мені) bitte helfen?',
        options: ['mich', 'mir', 'ich'],
        answer: 'mir',
        explanation: 'Дієслово helfen завжди вимагає Dativ: ich → mir.'
      },
      {
        topicTag: 'Wechselpräpositionen (Wo? vs Wohin?)',
        sourceLessonId: 'a1_17',
        type: 'choice',
        prompt: '[Тема 17: Wechselpräpositionen] Обери форму (Wo?): Das Handy liegt auf ___ Tisch. (der Tisch)',
        options: ['den', 'dem', 'der'],
        answer: 'dem',
        explanation: 'Телефон уже лежить на столі (статика, Wo?), тому потрібен Dativ: auf dem Tisch.'
      },
      {
        topicTag: 'Модальні дієслова',
        sourceLessonId: 'a1_09',
        type: 'builder',
        prompt: '[Тема 9: Модальні дієслова] Збери речення: «Він мусить сьогодні багато працювати» (müssen).',
        tokens: ['arbeiten.', 'muss', 'Er', 'heute viel'],
        answer: 'Er muss heute viel arbeiten.',
        explanation: 'У 3-й особі однини (er) форма — muss (без -t), а інфінітив arbeiten стоїть у самому кінці.'
      },
      {
        topicTag: 'Відокремлювані префікси',
        sourceLessonId: 'a1_10',
        type: 'builder',
        prompt: '[Тема 10: Відокремлювані префікси] Збери речення (anrufen): «Я зателефоную тобі завтра».',
        tokens: ['morgen', 'rufe', 'an.', 'dich', 'Ich'],
        answer: 'Ich rufe dich morgen an.',
        explanation: 'Корінь rufe стоїть на 2-му місці, а відокремлюваний префікс an — у самому кінці.'
      },
      {
        topicTag: 'Наказовий спосіб (Imperativ)',
        sourceLessonId: 'a1_11',
        type: 'fill',
        prompt: '[Тема 11: Imperativ] Утвори форму на «ти» (du) від дієслова geben: ___ mir bitte das Buch!',
        placeholder: 'Форма Imperativ...',
        answer: 'Gib',
        explanation: 'du gibst → відкидаємо du та -st, зміна e → i зберігається: Gib!'
      },
      {
        topicTag: 'Прийменники часу та місця',
        sourceLessonId: 'a1_12',
        type: 'choice',
        prompt: '[Тема 12: Прийменники] Як правильно сказати: «Зараз я йду додому» (напрямок)?',
        options: [
          'Jetzt gehe ich zu Hause.',
          'Jetzt gehe ich nach Hause.',
          'Jetzt gehe ich am Hause.'
        ],
        answer: 'Jetzt gehe ich nach Hause.',
        explanation: 'Напрямок «куди? — додому» передається фразою nach Hause (а «де? — вдома» — zu Hause).'
      },
      {
        topicTag: 'Минулий час Präteritum (war / hatte)',
        sourceLessonId: 'a1_13',
        type: 'choice',
        prompt: '[Тема 13: Präteritum] Обери правильну форму: Gestern ___ wir im Kino. (sein)',
        options: ['sind', 'waren', 'war'],
        answer: 'waren',
        explanation: 'Для займенника «wir» (ми) форма минулого часу від sein — «waren».'
      },
      {
        topicTag: 'Минулий час Perfekt',
        sourceLessonId: 'a1_14',
        type: 'choice',
        prompt: '[Тема 14: Perfekt] Обери правильне допоміжне дієслово: Sie ___ gestern nach Berlin geflogen. (fliegen)',
        options: ['hat', 'ist', 'war'],
        answer: 'ist',
        explanation: 'fliegen (летіти) — дієслово руху з точки А в точку Б, тому в Perfekt вимагає sein (ist geflogen).'
      }
    ]
  }
];
