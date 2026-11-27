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
    visualFormula: [
      { label: 'kein (іменник з ein / без артикля)', formula: 'ein Kumpel → kein Kumpel • eine Zeit → keine Zeit • Akkusativ (der): keinen', example: 'Ich habe heute keine Zeit.' },
      { label: 'nicht + дієслово (у кінці)', formula: '[Підмет] + [Дієслово] + ... + nicht', example: 'Ich arbeite heute nicht.' },
      { label: 'nicht + прикметник / місце', formula: '[Підмет] + [Дієслово] + nicht + [Прикметник / Місце]', example: 'Das Buch ist nicht teuer. / Er wohnt nicht in Berlin.' },
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
    visualFormula: [
      { label: 'Основа за власником', formula: 'ich: mein • du: dein • er/es: sein • sie: ihr • wir: unser • ihr: euer • sie/Sie: ihr/Ihr', example: 'Das ist mein Kumpel.' },
      { label: 'Nominativ (Хто? Що?)', formula: 'der: mein • die: meine • das: mein • Plural: meine', example: 'Meine Anmeldung ist fertig.' },
      { label: 'Akkusativ (Кого? Що?)', formula: 'der → meinen! (die: meine, das: mein, Pl.: meine)', example: 'Ich suche meinen Ausweis.' },
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
    visualFormula: [
      { label: 'Однина (Nominativ → Akkusativ)', formula: 'ich → mich • du → dich • er → ihn • sie → sie • es → es', example: 'Kennst du den Mann? — Ja, ich kenne ihn.' },
      { label: 'Множина (Nominativ → Akkusativ)', formula: 'wir → uns • ihr → euch • sie → sie • Sie → Sie', example: 'Besuchst du uns morgen?' },
      { label: 'Заміна речей за родом', formula: 'der Tisch → ihn • die Lampe → sie • das Buch → es', example: 'Wie findest du den Tisch? — Ich finde ihn super.' },
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
        explanation: 'Підмет Sie (1) → дієслово versteht (2) → займенник uns (3) → sehr gut (4).'
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
    id: 'a1_09',
    level: 'A1',
    order: 9,
    isFree: false,
    title: 'Модальні дієслова (können, müssen, wollen...)',
    germanTitle: 'Modalverben & Satzklammer',
    goal: 'Виражати вміння, необхідність, бажання та дозвіл і правильно будувати рамкову конструкцію.',
    ruleSummary:
      'У німецькій є 6 модальних дієслів: können (могти/вміти), müssen (мусити), wollen (хотіти), dürfen (мати дозвіл), sollen (мати обов’язок/пораду) та möchten (хотів би). Вони стоять на 2-му місці та змінюються за особою, а основне дієслово в інфінітиві (без zu!) летить у САМИЙ КІНЕЦЬ речення.',
    visualFormula: [
      { label: 'Рамкова конструкція', formula: '[Хто?] + [МОДАЛЬНЕ (2)] + [Де / Коли / Що?] + [ІНФІНІТИВ (кінець)]', example: 'Ich muss heute viel arbeiten.' },
      { label: 'Секрет відмінювання', formula: 'ich = er/sie/es (однакові, без -t!): ich kann, er kann • ich muss, er muss • ich will, er will', example: 'Er kann sehr gut Deutsch sprechen.' },
      { label: 'Ввічливе möchten', formula: 'ich möchte • du möchtest • er/sie/es möchte • wir/sie/Sie möchten', example: 'Ich möchte einen Kaffee bestellen.' },
    ],
    ukrainianTrap:
      'У 3-й особі однини (er/sie/es) модальні дієслова НЕ мають закінчення -t: «er kann», «sie muss», «er will» (ніколи не кажи «er kannt» чи «er musst»!). І не став друге дієслово одразу після модального — відправляй його в кінець речення.',
    examTip:
      'Goethe-Zertifikat A1 (Lesen Teil 2 & Sprechen): на вивісках постійно трапляється «Hier darf man nicht rauchen» (заборона), а в усному іспиті — «Können Sie mir bitte helfen?».',
    exercises: [
      {
        type: 'builder',
        prompt: 'Збери речення з рамковою конструкцією: «Я можу сьогодні прийти ввечері».',
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
        prompt: 'Як ввічливо замовити чай: «Я хотів би випити чай»?',
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
    visualFormula: [
      { label: 'У Präsens (префікс у кінці!)', formula: 'einkaufen → Ich kaufe heute im Supermarkt ein.', example: 'Der Zug kommt um 10 Uhr an. (ankommen)' },
      { label: 'З модальним дієсловом (разом)', formula: 'Ich muss heute im Supermarkt einkaufen.', example: 'Kannst du mich bitte anrufen? (anrufen)' },
      { label: 'Топ-префікси рівня A1', formula: 'auf- (aufstehen), an- (anrufen, ankommen), ein- (einkaufen), aus- (aussteigen), mit- (mitkommen), fern- (fernsehen)', example: 'Ich stehe um 7 Uhr auf.' },
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
    visualFormula: [
      { label: 'На «ти» (du)', formula: 'du kommst → Komm! • du liest → Lies! (e→i залишається, а ä→a!)', example: 'Gib mir bitte das Buch!' },
      { label: 'На «ви» (ihr)', formula: 'ihr kommt → Kommt! • ihr fahrt → Fahrt!', example: 'Macht bitte die Übung!' },
      { label: 'Ввічливо (Sie)', formula: 'Sie kommen → Kommen Sie bitte! (sein → Seien Sie!)', example: 'Zeigen Sie bitte Ihren Ausweis!' },
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
    visualFormula: [
      { label: 'Час: um / am / im', formula: 'um 9 Uhr • am Montag / am Morgen • im Mai / im Winter', example: 'Der Kurs beginnt am Montag um 9 Uhr.' },
      { label: 'Додому vs Вдома', formula: 'nach Hause (куди? — додому) • zu Hause (де? — вдома)', example: 'Ich gehe nach Hause. / Ich bin zu Hause.' },
      { label: 'Скорочення в Dativ', formula: 'in dem = im • an dem = am • zu dem = zum • zu der = zur • mit dem Bus', example: 'Ich fahre mit dem Bus zur Arbeit.' },
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
    visualFormula: [
      { label: 'sein → war (бути)', formula: 'ich war • du warst • er/sie/es war • wir/sie/Sie waren • ihr wart', example: 'Gestern war ich im Kino.' },
      { label: 'haben → hatte (мати)', formula: 'ich hatte • du hattest • er/sie/es hatte • wir/sie/Sie hatten • ihr hattet', example: 'Wir hatten gestern keine Zeit.' },
      { label: 'Порівняння часів', formula: 'Heute bin ich müde. → Gestern war ich müde.', example: 'Früher hatte ich keinen Hund.' },
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
    visualFormula: [
      { label: 'Формула Perfekt', formula: '[Хто?] + [haben / sein (2)] + [Де / Що?] + [Partizip II (кінець)]', example: 'Ich habe gestern ein Buch gekauft.' },
      { label: 'Слабкі дієслова (ge-...-t)', formula: 'machen → gemacht • kaufen → gekauft • lernen → gelernt', example: 'Wir haben viel Deutsch gelernt.' },
      { label: 'Без префікса ge-!', formula: '-ieren (studiert, telefoniert) • невідокремлювані be-, ver- (besucht, verstanden)', example: 'Er hat seine Eltern besucht.' },
      { label: 'Топ сильних на A1 (ge-...-en) + sein', formula: 'gegessen, getrunken, gelesen, geschrieben, geschlafen • SEIN: gegangen, gefahren, geflogen, gekommen', example: 'Wir sind nach Berlin gefahren.' },
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
    id: 'a1_15_final',
    level: 'A1',
    order: 15,
    isFree: false,
    isFinalExam: true,
    title: 'Фінальний іспит курсу A1 (Перевірка всіх тем)',
    germanTitle: 'Abschlusstest A1 • Goethe-Zertifikat Niveau',
    goal: 'Підсумкова перевірка всього курсу A1. Якщо припустишся помилки — отримаєш додаткові завдання саме на цю тему!',
    ruleSummary:
      'Це фінальний контрольний тест за всіма 14 темами рівня A1: порядок слів, відмінювання дієслів, сильні дієслова, артиклі, Akkusativ, заперечення nicht/kein, присвійні та особові займенники, модальні дієслова, відокремлювані префікси, Imperativ, прийменники часу/місця та минулий час Präteritum/Perfekt. Якщо в якомусь завданні буде помилка, тренажер одразу додасть вправи на відпрацювання цієї теми.',
    visualFormula: [
      { label: 'Формат фінального тесту', formula: '14 контрольних завдань по 1 на кожну тему курсу A1', example: 'Прохідний бал: від 80% без невідпрацьованих помилок' },
      { label: 'Розумне відпрацювання', formula: 'Помилка в темі X → автоматично додаються вправи саме з теми X', example: 'Поки не закріпиш слабке місце — іспит не відпустить 😉' },
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
        topicTag: 'Присвійні займенники',
        sourceLessonId: 'a1_07',
        type: 'fill',
        prompt: '[Тема 7: Присвійні займенники] Впиши «мій» у Akkusativ: Ich besuche heute ___ Freund. (der Freund)',
        placeholder: 'Форма mein...',
        answer: 'meinen',
        explanation: 'Freund — чоловічого роду (der) у Akkusativ після besuchen, тому mein → meinen.'
      },
      {
        topicTag: 'Особові займенники в Akkusativ',
        sourceLessonId: 'a1_08',
        type: 'choice',
        prompt: '[Тема 8: Особові займенники] Заміни іменник: Kaufst du den Tisch? (der Tisch) — Ja, ich kaufe ___.',
        options: ['er', 'ihn', 'es'],
        answer: 'ihn',
        explanation: 'Tisch — чоловічого роду (der), у Akkusativ «його» — це ihn.'
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
