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
    visualFormula: [
      { label: '1. Розповідь (прямий)', formula: '[Хто?] + [ДІЄСЛОВО (2)] + [Де / Коли?]', example: 'Ich wohne in Berlin.' },
      { label: '2. Розповідь (інверсія)', formula: '[Коли / Де?] + [ДІЄСЛОВО (2)] + [Хто?]', example: 'Heute wohne ich in Berlin.' },
      { label: '3. W-питання', formula: '[W-слово] + [ДІЄСЛОВО (2)] + [Хто?]', example: 'Woher kommst du?' },
      { label: '4. Питання Так/Ні', formula: '[ДІЄСЛОВО (1)] + [Хто?] + [Решта]?', example: 'Kommst du heute?' },
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
    visualFormula: [
      { label: 'Стандарт (kommen)', formula: 'ich komme • du kommst • er/sie/es kommt • wir/sie/Sie kommen • ihr kommt', example: 'Wir kommen aus der Ukraine.' },
      { label: 'Основа на -t/-d (arbeiten)', formula: 'du arbeitest • er/sie/es arbeitet • ihr arbeitet (додаємо -e-)', example: 'Er arbeitet heute im Büro.' },
      { label: 'sein (бути)', formula: 'ich bin • du bist • er/sie/es ist • wir/sie/Sie sind • ihr seid', example: 'Ich bin 20 Jahre alt.' },
      { label: 'haben (мати)', formula: 'ich habe • du hast • er/sie/es hat • wir/sie/Sie haben • ihr habt', example: 'Er hat heute keine Zeit.' },
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
    visualFormula: [
      { label: 'a → ä (fahren, schlafen)', formula: 'ich fahre → du fährst, er fährt (wir fahren!)', example: 'Er fährt mit dem Bus zur Arbeit.' },
      { label: 'e → i (sprechen, essen, helfen)', formula: 'ich spreche → du sprichst, er spricht', example: 'Sprichst du Deutsch und Englisch?' },
      { label: 'e → ie (lesen, sehen)', formula: 'ich lese → du liest, er liest', example: 'Sie liest gerne Bücher.' },
      { label: 'Виняток: nehmen (брати)', formula: 'ich nehme → du nimmst, er nimmt (подвоєння m!)', example: 'Er nimmt einen Kaffee.' },
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
    visualFormula: [
      { label: 'Чоловічий рід (der)', formula: 'ein Ausweis (якесь посвідчення) → der Ausweis (це/конкретне посвідчення)', example: 'Der Ausweis liegt auf dem Tisch.' },
      { label: 'Жіночий рід (die)', formula: 'eine Anmeldung → die Anmeldung (суфікси -ung, -heit, -keit → завжди die!)', example: 'Die Anmeldung ist kostenlos.' },
      { label: 'Середній рід (das)', formula: 'ein Buch → das Buch (суфікси -chen, -lein → завжди das!)', example: 'Das Buch ist sehr interessant.' },
      { label: 'Множина (Plural)', formula: 'der Kumpel → die Kumpels • die Anmeldung → die Anmeldungen', example: 'Viele Kumpels kommen heute.' },
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
    visualFormula: [
      { label: 'Чоловічий рід (ЗМІНЮЄТЬСЯ!)', formula: 'der → den • ein → einen', example: 'Ich brauche einen / den Ausweis.' },
      { label: 'Жіночий рід (без змін)', formula: 'die → die • eine → eine', example: 'Ich brauche eine / die Anmeldung.' },
      { label: 'Середній рід (без змін)', formula: 'das → das • ein → ein', example: 'Ich kaufe ein / das Buch.' },
      { label: 'Топ-дієслова Akkusativ', formula: 'haben, brauchen, suchen, kaufen, essen, trinken, lesen, sehen, nehmen', example: 'Er trinkt einen Kaffee.' },
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
  }
];
