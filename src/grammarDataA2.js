export const GRAMMAR_LESSONS_A2 = [
  {
    id: 'a2_1_kasus_genitiv',
    level: 'A2',
    order: 1,
    isFree: true,
    title: 'Відмінки та прийменники з Genitiv',
    germanTitle: 'Kasus-System & Präpositionen mit Genitiv',
    goal: 'Розкласти по поличках усі 4 відмінки, розібратися з артиклями та впевнено вживати Genitiv після прийменників wegen, trotz, während, statt.',
    ruleSummary:
      'У німецькій мові 4 відмінки: Nominativ (хто? що? — підмет), Akkusativ (кого? що? — прямий додаток або напрямок руху), Dativ (кому? чому? де? — непрямий додаток або місце) та Genitiv (кого? чого? — приналежність або залежність від прийменника). На рівні A2 прийменники wegen (через), trotz (попри), während (під час) та statt/anstatt (замість) у стандартній і письмовій мові вимагають Genitiv. У Genitiv чоловічий і середній рід отримують артикль des і закінчення -(e)s у іменника, а жіночий рід і множина — артикль der.',
    tables: [
      {
        title: '1. Означений артикль у всіх 4 відмінках',
        subtitle: 'Базова таблиця для орієнтування у родах, числах та відмінках',
        headers: ['Рід / Число', 'Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        rows: [
          ['Чоловічий (der)', 'der Mann', 'den Mann', 'dem Mann', 'des Mannes'],
          ['Жіночий (die)', 'die Frau', 'die Frau', 'der Frau', 'der Frau'],
          ['Середній (das)', 'das Kind', 'das Kind', 'dem Kind', 'des Kindes'],
          ['Множина (die)', 'die Kinder', 'die Kinder', 'den Kindern', 'der Kinder']
        ],
        example: 'Ich gebe dem Freund den Schlüssel des Autos.'
      },
      {
        title: '2. Неозначений артикль (ein / eine) у 4 відмінках',
        subtitle: 'В однині; у множині неозначеного артикля немає (вживається без артикля або з keine)',
        headers: ['Рід', 'Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
        rows: [
          ['Чоловічий', 'ein Tag', 'einen Tag', 'einem Tag', 'eines Tages'],
          ['Жіночий', 'eine Woche', 'eine Woche', 'einer Woche', 'einer Woche'],
          ['Середній', 'ein Jahr', 'ein Jahr', 'einem Jahr', 'eines Jahres']
        ],
        example: 'Trotz eines langen Arbeitstages geht er noch laufen.'
      },
      {
        title: '3. Прийменники з Genitiv: wegen, trotz, während, statt',
        subtitle: 'Як змінюються артикль і сам іменник після цих прийменників',
        headers: ['Прийменник', 'Переклад', 'Чол. / Сер. рід', 'Жін. рід / Множина'],
        rows: [
          ['wegen', 'через, з причини', 'wegen des Regens', 'wegen der Kälte / der Ferien'],
          ['trotz', 'попри, незважаючи на', 'trotz des Sturms', 'trotz der Müdigkeit'],
          ['während', 'під час, протягом', 'während des Films', 'während der Pause'],
          ['statt / anstatt', 'замість', 'statt des Tees', 'statt der Arbeit']
        ],
        example: 'Wegen des starken Regens bleiben wir zu Hause.'
      },
      {
        title: '4. Закінчення іменника в Genitiv та власні назви',
        subtitle: 'Коли додаємо -es, коли -s, а як працюють імена',
        headers: ['Тип слова', 'Правило', 'Приклад'],
        rows: [
          ['Односкладовий іменник (der/das)', 'найчастіше -es', 'des Tages, des Jahres, des Freundes'],
          ['Багатоскладовий / на -er, -el, -en', 'найчастіше -s', 'des Wetters, des Lehrers, des Morgens'],
          ['Власне ім’я / місто', 'ім’я + -s перед іменником (без артикля)', 'Annas Buch, Berlins Straßen'],
          ['Ім’я на -s, -ß, -x, -z', 'апостроф у кінці імені', 'Max’ Fahrrad, Thomas’ Tasche']
        ],
        example: 'Das ist Annas neues Buch und das ist Max’ Fahrrad.'
      }
    ],
    ukrainianTrap:
      'В українській ми кажемо «через дощ» або «під час уроку», тому хочеться сказати «wegen den Regen» або «während dem Unterricht». У німецькій після wegen, trotz, während і statt у нормативній мові й на іспитах потрібен Genitiv: «wegen des Regens» та «während des Unterrichts» + закінчення -(e)s у чоловічого/середнього роду.',
    examTip:
      'У тестах на граматику звертай увагу на пару: артикль des + закінчення -s/-es у самого іменника. Якщо слово жіночого роду чи у множині — в Genitiv буде der.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: «Через погану погоду ми не їдемо в парк» (das Wetter).',
        options: [
          'Wegen des schlechten Wetters fahren wir nicht in den Park.',
          'Wegen dem schlechten Wetter fahren wir nicht in den Park.',
          'Wegen den schlechten Wetter fahren wir nicht in den Park.'
        ],
        answer: 'Wegen des schlechten Wetters fahren wir nicht in den Park.',
        explanation: 'Wegen вимагає Genitiv. Середній рід das Wetter у Genitiv має артикль des і закінчення -s → des Wetters.'
      },
      {
        type: 'fill',
        prompt: 'Впиши артикль у Genitiv: «Trotz ___ Kälte geht er ohne Jacke spazieren.» (die Kälte — жін. рід)',
        placeholder: 'der / des...',
        answer: 'der',
        explanation: 'Іменник die Kälte жіночого роду, у Genitiv жіночий рід має артикль der.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Під час уроку ми розмовляємо лише німецькою» (der Unterricht).',
        tokens: ['Während', 'des', 'Unterrichts', 'sprechen', 'wir', 'nur', 'Deutsch.'],
        answer: 'Während des Unterrichts sprechen wir nur Deutsch.',
        explanation: 'Während + Genitiv (der Unterricht → des Unterrichts) стоїть на 1-й позиції, далі йде дієслово sprechen (2-га позиція).'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Замість чаю я замовляю каву» (der Tee)?',
        options: [
          'Statt des Tees bestelle ich einen Kaffee.',
          'Statt der Tee bestelle ich einen Kaffee.',
          'Statt den Tee bestelle ich einen Kaffee.'
        ],
        answer: 'Statt des Tees bestelle ich einen Kaffee.',
        explanation: 'Statt вимагає Genitiv: чоловічий рід der Tee у Genitiv → des Tees.'
      },
      {
        type: 'fill',
        prompt: 'Впиши правильну форму артикля в Dativ: «Ich helfe ___ Kollegin bei der Aufgabe.» (die Kollegin)',
        placeholder: 'der / die...',
        answer: 'der',
        explanation: 'Дієслово helfen вимагає Dativ. Жіночий рід die Kollegin у Dativ → der Kollegin.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно передати приналежність з іменем Anna: «Це новий телефон Анни»?',
        options: [
          'Das ist Annas neues Handy.',
          'Das ist der Anna neues Handy.',
          'Das ist Anna neues Handy.'
        ],
        answer: 'Das ist Annas neues Handy.',
        explanation: 'Власні імена у Genitiv ставляться перед іменником без артикля і отримують закінчення -s: Annas neues Handy.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Попри втому, вона ще читає книгу» (die Müdigkeit).',
        tokens: ['Trotz', 'der', 'Müdigkeit', 'liest', 'sie', 'noch', 'ein', 'Buch.'],
        answer: 'Trotz der Müdigkeit liest sie noch ein Buch.',
        explanation: 'Trotz + Genitiv жіночого роду (die Müdigkeit → der Müdigkeit) на 1-му місці, далі дієслово liest.'
      }
    ]
  },

  {
    id: 'a2_2_pronomen_artikelwoerter',
    level: 'A2',
    order: 2,
    isFree: false,
    title: 'Артиклеві слова та присвійні займенники',
    germanTitle: 'Artikelwörter, Indefinitpronomen & Possessivpronomen',
    goal: 'Спокійно розібратися, як змінюються dieser, jeder, welcher, як вживати jemand/niemand/etwas/nichts і як утворювати присвійні займенники без іменника.',
    ruleSummary:
      'Слова dieser (цей), jeder (кожний), welcher (який) та alle (усі) змінюються за відмінками за тим самим принципом, що й означений артикль der/die/das/die. Неозначені займенники etwas (щось) і nichts (нічого) не змінюються; jemand (хтось) і niemand (ніхто) вживаються для людей. Коли присвійний займенник (mein, dein, sein, ihr, unser, euer, ihr/Ihr) стоїть БЕЗ іменника (наприклад, «Це мій» / «Це моє»), він бере відмінкове закінчення на себе.',
    tables: [
      {
        title: '1. Відмінювання dieser / jeder / welcher (як der/die/das)',
        subtitle: 'Закінчення збігаються з означеним артиклем у Nominativ, Akkusativ та Dativ',
        headers: ['Рід / Число', 'Nominativ', 'Akkusativ', 'Dativ'],
        rows: [
          ['Чоловічий', 'dieser / jeder / welcher', 'diesen / jeden / welchen', 'diesem / jedem / welchem'],
          ['Жіночий', 'diese / jede / welche', 'diese / jede / welche', 'dieser / jeder / welcher'],
          ['Середній', 'dieses / jedes / welches', 'dieses / jedes / welches', 'diesem / jedem / welchem'],
          ['Множина', 'diese / alle / welche', 'diese / alle / welche', 'diesen / allen / welchen']
        ],
        example: 'Welchen Film möchtest du heute sehen? — Diesen hier!'
      },
      {
        title: '2. Присвійні займенники БЕЗ іменника (Nominativ та Akkusativ)',
        subtitle: 'Вживаються самостійно, коли сам іменник уже названий раніше або зрозумілий з контексту',
        headers: ['Особа / Рід', 'Nom. чол. (der)', 'Nom. жін. / мн. (die)', 'Nom. сер. (das)', 'Akk. чол. (den)'],
        rows: [
          ['ich (mein)', 'meiner', 'meine', 'meins', 'meinen'],
          ['du (dein)', 'deiner', 'deine', 'deins', 'deinen'],
          ['er/es (sein)', 'seiner', 'seine', 'seins', 'seinen'],
          ['sie/Plural (ihr)', 'ihrer', 'ihre', 'ihres', 'ihren'],
          ['wir (unser)', 'unserer', 'unsere', 'unseres', 'unseren'],
          ['ihr (euer)', 'eurer', 'eure', 'eures', 'euren']
        ],
        example: 'Ist das dein Stift? — Ja, das ist meiner. / Ich habe meinen Schlüssel vergessen. — Nimm meinen!'
      },
      {
        title: '3. Присвійні займенники БЕЗ іменника (Dativ)',
        subtitle: 'Коли займенник-замінник стоїть у Dativ',
        headers: ['Особа', 'Dat. чол. / сер. (dem)', 'Dat. жін. (der)', 'Dat. множина (den)'],
        rows: [
          ['ich (mein)', 'meinem', 'meiner', 'meinen'],
          ['du (dein)', 'deinem', 'deiner', 'deinen'],
          ['er/es (sein)', 'seinem', 'seiner', 'seinen'],
          ['sie/Plural (ihr)', 'ihrem', 'ihrer', 'ihren'],
          ['wir (unser)', 'unserem', 'unserer', 'unseren'],
          ['ihr (euer)', 'eurem', 'eurer', 'euren']
        ],
        example: 'Mit welchem Auto fährst du? — Mit meinem.'
      },
      {
        title: '4. Неозначені займенники: jemand, niemand, etwas, nichts',
        subtitle: 'Правила вживання для осіб і предметів/ідей',
        headers: ['Займенник', 'Значення', 'Особливість вживання'],
        rows: [
          ['jemand', 'хтось', 'Про людей; у непрямих відмінках може мати -en/-em або залишатися без змін'],
          ['niemand', 'ніхто', 'Про людей; дієслово стоїть у 3-й особі однини (Niemand weiß...)'],
          ['etwas', 'щось', 'Не змінюється; прикметник після нього пишеться з великої літери: etwas Neues'],
          ['nichts', 'нічого', 'Не змінюється; прикметник після нього пишеться з великої літери: nichts Gutes']
        ],
        example: 'Hat jemand meinen Regenschirm gesehen? — Nein, niemand.'
      }
    ],
    ukrainianTrap:
      'Коли іменник є (mein Buch, dein Mantel), закінчення в Nominativ немає. Але якщо іменник опускаємо і кажемо «Це моє» або «Це мій», з’являється закінчення: «Das ist meins» (про das Buch/Handy) або «Das ist meiner» (про der Mantel/Stift).',
    examTip:
      'Спочатку подумки визнач рід і відмінок іменника в першому реченні, а вже потім підбирай закінчення для dieser/welcher або присвійного займенника без іменника.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильну відповідь: «Ist das dein Koffer?» (der Koffer) — «Так, це мій».',
        options: [
          'Ja, das ist meiner.',
          'Ja, das ist mein.',
          'Ja, das ist meins.'
        ],
        answer: 'Ja, das ist meiner.',
        explanation: 'Der Koffer — чоловічий рід у Nominativ. Без іменника форма чоловічого роду — meiner.'
      },
      {
        type: 'fill',
        prompt: 'Впиши правильну форму dieser: «Ich kaufe ___ blauen Pullover.» (der Pullover, Akkusativ)',
        placeholder: 'diesen...',
        answer: 'diesen',
        explanation: 'Kaufen вимагає Akkusativ. Для чоловічого роду (der Pullover) форма dieser в Akkusativ — diesen.'
      },
      {
        type: 'builder',
        prompt: 'Склади запитання: «Яку сукню ти вдягнеш на вечірку?» (das Kleid, Akkusativ)',
        tokens: ['Welches', 'Kleid', 'ziehst', 'du', 'zur', 'Party', 'an?'],
        answer: 'Welches Kleid ziehst du zur Party an?',
        explanation: 'Das Kleid — середній рід, тому питальне слово має закінчення -es: Welches Kleid.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Ніхто не знає відповіді»?',
        options: [
          'Niemand weiß die Antwort.',
          'Nichts weiß die Antwort.',
          'Keine weiß die Antwort.'
        ],
        answer: 'Niemand weiß die Antwort.',
        explanation: 'Про людей у значенні «ніхто» вживається niemand; дієслово стоїть у 3-й особі однини (weiß).'
      },
      {
        type: 'fill',
        prompt: 'Доповни відповідь без іменника: «Wem gehört das Handy? — Das ist ___.» (твоє, dein)',
        placeholder: 'deins...',
        answer: 'deins',
        explanation: 'Das Handy — середній рід у Nominativ. Без іменника середній рід має форму deins.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму після etwas: «Ти хочеш чогось теплого попити?»',
        options: [
          'Möchtest du etwas Warmes trinken?',
          'Möchtest du etwas warm trinken?',
          'Möchtest du etwas warmer trinken?'
        ],
        answer: 'Möchtest du etwas Warmes trinken?',
        explanation: 'Після etwas прикметник пишеться з великої літери і найчастіше має закінчення -es: etwas Warmes.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Я не можу знайти свій ключ, позич мені свій» (der Schlüssel, Akkusativ).',
        tokens: ['Ich', 'finde', 'meinen', 'Schlüssel', 'nicht,', 'leih', 'mir', 'deinen.'],
        answer: 'Ich finde meinen Schlüssel nicht, leih mir deinen.',
        explanation: 'Der Schlüssel в Akkusativ чоловічого роду → meinen; без іменника в Akkusativ → deinen.'
      }
    ]
  },

  {
    id: 'a2_3_n_deklination',
    level: 'A2',
    order: 3,
    isFree: false,
    title: 'Слабке відмінювання іменників (n-Deklination)',
    germanTitle: 'Die n-Deklination',
    goal: 'Зрозуміти, які іменники чоловічого роду належать до n-Deklination, і чітко бачити, де додається -(e)n.',
    ruleSummary:
      'У німецькій є особлива група іменників чоловічого роду (переважно назви людей і тварин), яка в усіх відмінках, крім Nominativ однини, отримує закінчення -n або -en. Правило просте: якщо слово закінчується на -e (der Kollege, der Junge, der Kunde), додаємо -n; якщо на приголосний (der Student, der Mensch, der Polizist), найчастіше додаємо -en (або -n, як у der Nachbar). Окремо варто запам’ятати der Herr та der Name.',
    tables: [
      {
        title: '1. Слова на -e → додаємо -n',
        subtitle: 'У Nominativ однини є -e, у всіх непрямих відмінках однини та в множині — -en',
        headers: ['Слово', 'Nom. однина', 'Akk. / Dat. однина', 'Gen. однина / Множина'],
        rows: [
          ['der Kollege (колега)', 'der Kollege', 'den / dem Kollegen', 'des Kollegen / die Kollegen'],
          ['der Junge (хлопець)', 'der Junge', 'den / dem Jungen', 'des Jungen / die Jungen'],
          ['der Kunde (клієнт)', 'der Kunde', 'den / dem Kunden', 'des Kunden / die Kunden'],
          ['der Löwe (лев)', 'der Löwe', 'den / dem Löwen', 'des Löwen / die Löwen']
        ],
        example: 'Ich spreche heute mit meinem Kollegen.'
      },
      {
        title: '2. Слова на приголосний → найчастіше -en або -n',
        subtitle: 'Часті слова рівня A2/B1, які належать до слабкого відмінювання',
        headers: ['Слово', 'Nom. однина', 'Akk. / Dat. однина', 'Gen. однина / Множина'],
        rows: [
          ['der Student (студент)', 'der Student', 'den / dem Studenten', 'des Studenten / die Studenten'],
          ['der Mensch (людина)', 'der Mensch', 'den / dem Menschen', 'des Menschen / die Menschen'],
          ['der Polizist (поліцейський)', 'der Polizist', 'den / dem Polizisten', 'des Polizisten / die Polizisten'],
          ['der Nachbar (сусід)', 'der Nachbar', 'den / dem Nachbarn', 'des Nachbarn / die Nachbarn']
        ],
        example: 'Der Professor hilft dem Studenten.'
      },
      {
        title: '3. Винятки: der Herr та der Name',
        subtitle: 'Ці два слова мають свої особливості форм',
        headers: ['Слово', 'Nom. однина', 'Akk. / Dat. однина', 'Gen. однина / Множина'],
        rows: [
          ['der Herr (пан)', 'der Herr', 'den / dem Herrn', 'des Herrn / die Herren'],
          ['der Name (ім’я)', 'der Name', 'den / dem Namen', 'des Namens / die Namen']
        ],
        example: 'Wie ist Ihr Name? — Ich kenne den Namen nicht.'
      }
    ],
    ukrainianTrap:
      'У Nominativ однини слово виглядає звично: «Der Student lernt Deutsch». Але щойно з’являється Akkusativ, Dativ чи Genitiv однини, з’являється -(e)n: «Ich sehe den Studenten», «Ich helfe dem Studenten». Не плутай зі звичайними іменниками чоловічого роду на кшталт der Tisch або der Lehrer.',
    examTip:
      'Якщо в реченні є іменник чоловічого роду, який означає людину й стоїть після дієслова/прийменника в Akk або Dat (sehen, kennen, fragen, helfen, mit), перевір, чи не належить він до n-Deklination.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: «Я добре знаю цього колегу» (der Kollege).',
        options: [
          'Ich kenne diesen Kollegen gut.',
          'Ich kenne dieser Kollege gut.',
          'Ich kenne diesem Kollege gut.'
        ],
        answer: 'Ich kenne diesen Kollegen gut.',
        explanation: 'Der Kollege закінчується на -e і належить до n-Deklination: в Akkusativ однини → diesen Kollegen.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму іменника в Dativ: «Der Arzt hilft dem kranken ___.» (der Junge)',
        placeholder: 'Jungen...',
        answer: 'Jungen',
        explanation: 'Der Junge у Dativ однини отримує закінчення -n → dem Jungen.'
      },
      {
        type: 'builder',
        prompt: 'Склади запитання: «Ти знаєш ім’я цього студента?» (der Name, der Student).',
        tokens: ['Kennst', 'du', 'den', 'Namen', 'des', 'Studenten?'],
        answer: 'Kennst du den Namen des Studenten?',
        explanation: 'Der Name (Akk → den Namen) та der Student (Gen → des Studenten) належать до слабкого відмінювання.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно звернутися в офіційному привітанні: «Шановний пане Вебер»?',
        options: [
          'Sehr geehrter Herr Weber,',
          'Sehr geehrter Herrn Weber,',
          'Sehr geehrten Herr Weber,'
        ],
        answer: 'Sehr geehrter Herr Weber,',
        explanation: 'У звертанні стоїть Nominativ однини, де форма має вигляд Herr Weber.'
      },
      {
        type: 'fill',
        prompt: 'Доповни речення в Dativ: «Wir sprechen mit dem neuen ___.» (der Nachbar)',
        placeholder: 'Nachbarn...',
        answer: 'Nachbarn',
        explanation: 'Der Nachbar у непрямих відмінках отримує закінчення -n → dem neuen Nachbarn.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильне речення: «Турист запитує дорогу» (der Tourist).',
        options: [
          'Der Tourist fragt nach dem Weg.',
          'Der Touristen fragt nach dem Weg.',
          'Den Tourist fragt nach dem Weg.'
        ],
        answer: 'Der Tourist fragt nach dem Weg.',
        explanation: 'Тут слово der Tourist виконує роль підмета в Nominativ однини, тому воно без закінчення -en.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Вона допомагає новому клієнту» (der Kunde, Dativ).',
        tokens: ['Sie', 'hilft', 'dem', 'neuen', 'Kunden.'],
        answer: 'Sie hilft dem neuen Kunden.',
        explanation: 'Helfen + Dativ; der Kunde у Dativ однини отримує закінчення -n → dem neuen Kunden.'
      }
    ]
  },

  {
    id: 'a2_4_praeteritum',
    level: 'A2',
    order: 4,
    isFree: false,
    title: 'Минулий час Präteritum',
    germanTitle: 'Das Präteritum (sein, haben, werden, Modalverben & Verben)',
    goal: 'Без стресу вивчити повні таблиці Präteritum для sein, haben, werden, модальних дієслів і навчитися утворювати форми слабких та сильних дієслів.',
    ruleSummary:
      'Präteritum — це проста (однослівна) форма минулого часу. У розмовній німецькій дієслова sein, haben, werden і всі модальні дієслова вживаються в Präteritum щодня, а інші дієслова в цьому часі часто зустрічаються в оповіданнях, статтях і книжках. Уважно стеж за тим, що в 1-й та 3-й особі однини (ich, er/sie/es) закінчення немає, а в модальних дієсловах зникає умлаут.',
    tables: [
      {
        title: '1. sein (бути), haben (мати) та werden (ставати) у Präteritum',
        subtitle: 'Повна таблиця усіх 6 осіб',
        headers: ['Особа', 'sein', 'haben', 'werden'],
        rows: [
          ['ich', 'war', 'hatte', 'wurde'],
          ['du', 'warst', 'hattest', 'wurdest'],
          ['er / sie / es', 'war', 'hatte', 'wurde'],
          ['wir', 'waren', 'hatten', 'wurden'],
          ['ihr', 'wart', 'hattet', 'wurdet'],
          ['sie / Sie', 'waren', 'hatten', 'wurden']
        ],
        example: 'Gestern war ich müde, hatte wenig Zeit und wurde schnell krank.'
      },
      {
        title: '2. Модальні дієслова у Präteritum (БЕЗ умлаута!)',
        subtitle: 'Окремо розписані основи та форми для ключових осіб',
        headers: ['Інфінітив', 'ich / er, sie, es', 'du', 'wir / sie, Sie', 'ihr'],
        rows: [
          ['können (могти)', 'konnte', 'konntest', 'konnten', 'konntet'],
          ['müssen (мусити)', 'musste', 'musstest', 'mussten', 'musstet'],
          ['dürfen (мати дозвіл)', 'durfte', 'durftest', 'durften', 'durftet'],
          ['wollen (хотіти)', 'wollte', 'wolltest', 'wollten', 'wolltet'],
          ['sollen (бути винним/варто)', 'sollte', 'solltest', 'sollten', 'solltet']
        ],
        example: 'Als Kind durfte ich nicht lange fernsehen, aber ich wollte immer lesen.'
      },
      {
        title: '3. Слабкі дієслова: основа + -te + особове закінчення',
        subtitle: 'Якщо основа закінчується на -d, -t, -chn, -ffn, додається -ete (arbeiten → arbeitete)',
        headers: ['Особа', 'Закінчення', 'machen (mach-)', 'arbeiten (arbeit-)'],
        rows: [
          ['ich', '-te / -ete', 'machte', 'arbeitete'],
          ['du', '-test / -etest', 'machtest', 'arbeitetest'],
          ['er / sie / es', '-te / -ete', 'machte', 'arbeitete'],
          ['wir', '-ten / -eten', 'machten', 'arbeiteten'],
          ['ihr', '-tet / -etet', 'machtet', 'arbeitetet'],
          ['sie / Sie', '-ten / -eten', 'machten', 'arbeiteten']
        ],
        example: 'Früher arbeitete er in einem Büro und machte oft Überstunden.'
      },
      {
        title: '4. Сильні дієслова: зміна кореневої голосної',
        subtitle: 'У 1-й і 3-й особі однини (ich / er) закінчення немає; далі — стандартні закінчення (-st, -en, -t)',
        headers: ['Інфінітив', 'ich / er, sie, es', 'du', 'wir / sie, Sie', 'ihr'],
        rows: [
          ['gehen (іти)', 'ging', 'gingst', 'gingen', 'gingt'],
          ['kommen (приходити)', 'kam', 'kamst', 'kamen', 'kamt'],
          ['sehen (бачити)', 'sah', 'sahst', 'sahen', 'saht'],
          ['fahren (їхати)', 'fuhr', 'fuhrst', 'fuhren', 'fuhrt']
        ],
        example: 'Er kam spät nach Hause und ging sofort schlafen.'
      }
    ],
    ukrainianTrap:
      'Не плутай Präteritum модальних дієслів (ich konnte — «я міг», ich musste — «я мусив») із Konjunktiv II (ich könnte — «я міг би», ich müsste — «мені довелося б»). У Präteritum умлаута немає!',
    examTip:
      'У розповіді про минуле (лист про відпустку чи текст на іспиті) звертай увагу на war, hatte, wurde та konnte/musste/wollte — вони вже передають минулий час без haben/sein.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильну форму Präteritum: «Учора я мусив довго працювати» (müssen).',
        options: [
          'Gestern musste ich lange arbeiten.',
          'Gestern müsste ich lange arbeiten.',
          'Gestern muss ich lange arbeiten.'
        ],
        answer: 'Gestern musste ich lange arbeiten.',
        explanation: 'У Präteritum модальне дієслово müssen втрачає умлаут і має форму musste.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму sein у Präteritum для «ihr»: «Wo ___ ihr am Wochenende?»',
        placeholder: 'wart...',
        answer: 'wart',
        explanation: 'Для ihr дієслово sein у Präteritum має форму wart.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «У дитинстві я хотів стати пілотом» (wollen).',
        tokens: ['Als', 'Kind', 'wollte', 'ich', 'Pilot', 'werden.'],
        answer: 'Als Kind wollte ich Pilot werden.',
        explanation: 'Wollte стоїть на 2-му місці, інфінітив werden — у кінці.'
      },
      {
        type: 'choice',
        prompt: 'Яка форма Präteritum правильна для дієслова gehen (він пішов)?',
        options: [
          'Er ging nach Hause.',
          'Er gehte nach Hause.',
          'Er gegangen nach Hause.'
        ],
        answer: 'Er ging nach Hause.',
        explanation: 'Gehen — сильне дієслово; його форма в Präteritum — ging.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму haben у Präteritum для «wir»: «Wir ___ leider kein Geld dabei.»',
        placeholder: 'hatten...',
        answer: 'hatten',
        explanation: 'Haben у Präteritum для wir має форму hatten.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму werden у Präteritum для «ich»: «Мені стало холодно».',
        options: [
          'Mir wurde kalt.',
          'Mir werde kalt.',
          'Mir worde kalt.'
        ],
        answer: 'Mir wurde kalt.',
        explanation: 'Werden у Präteritum для 1-ї та 3-ї особи однини має форму wurde.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Вона вчора прийшла додому о восьмій» (kommen).',
        tokens: ['Sie', 'kam', 'gestern', 'um', 'acht', 'Uhr', 'nach', 'Hause.'],
        answer: 'Sie kam gestern um acht Uhr nach Hause.',
        explanation: 'Kommen — сильне дієслово; форма Präteritum для sie — kam.'
      }
    ]
  },

  {
    id: 'a2_5_perfekt_plusquamperfekt',
    level: 'A2',
    order: 5,
    isFree: false,
    title: 'Складний Perfekt та Plusquamperfekt',
    germanTitle: 'Komplexes Perfekt & Plusquamperfekt',
    goal: 'Розібратися з утворенням Partizip II у складних випадках, вибором haben/sein і послідовністю дій у минулому через Plusquamperfekt.',
    ruleSummary:
      'Perfekt утворюється з допоміжного дієслова haben або sein у теперішньому часі (на 2-му місці) та Partizip II (у кінці речення). На рівні A2 важливо знати, як ставиться частка -ge- у дієсловах із префіксами та на -ieren, коли вживається sein vs haben, і як Plusquamperfekt (hatte/war + Partizip II) показує дію, що сталася раніше за іншу минулу дію.',
    tables: [
      {
        title: '1. Утворення Partizip II: префікси та суфікси',
        subtitle: 'Куди ставиться -ge- і коли його взагалі немає',
        headers: ['Тип дієслова', 'Правило утворення', 'Приклади'],
        rows: [
          ['Відокремлювані префікси (ab-, an-, auf-, ein-, mit-, vor-)', 'префікс + ge + основа + -(e)t / -en', 'aufgestanden, abgeschickt, eingekauft'],
          ['Невідділювані префікси (be-, ge-, er-, ver-, zer-, ent-, emp-)', 'БЕЗ ge-', 'bestellt, erklärt, vergessen, verstanden'],
          ['Дієслова на -ieren', 'БЕЗ ge- (основа + -t)', 'studiert, repariert, organisiert, telefoniert'],
          ['Звичайні сильні / слабкі без префіксів', 'ge + основа + -en або -t', 'gegangen, gelesen, gemacht, gekocht']
        ],
        example: 'Ich bin um 7 Uhr aufgestanden und habe danach das Paket abgeschickt.'
      },
      {
        title: '2. haben чи sein у Perfekt?',
        subtitle: 'Як визначити допоміжне дієслово без здогадок',
        headers: ['Допоміжне дієслово', 'Коли вживається', 'Приклади'],
        rows: [
          ['sein', 'Рух із точки А в точку Б або зміна стану; також sein, werden, bleiben, passieren', 'ich bin gefahren, er ist eingeschlafen, es ist passiert'],
          ['haben', 'Більшість інших дієслів, перехідні дієслова з Akkusativ, зворотні дієслова та стан спокою', 'ich habe gearbeitet, ich habe mich gefreut, ich habe gelegen']
        ],
        example: 'Das Buch hat auf dem Tisch gelegen, dann bin ich in die Stadt gefahren.'
      },
      {
        title: '3. Plusquamperfekt (передминулий час)',
        subtitle: 'Дія, яка сталася ДО іншої минулої дії (часто в реченнях із nachdem)',
        headers: ['Частина речення', 'Час', 'Приклад'],
        rows: [
          ['Раніша дія (часто після nachdem)', 'Plusquamperfekt: hatte / war + Partizip II', 'Nachdem wir gegessen hatten...'],
          ['Основна минула дія', 'Präteritum або Perfekt', '...gingen wir spazieren.']
        ],
        example: 'Nachdem wir gefrühstückt hatten, verließen wir das Hotel.'
      }
    ],
    ukrainianTrap:
      'Дієслова стану спокою (stehen, liegen, sitzen, hängen) у Perfekt вживаються з haben: «Ich habe im Bett gelegen» (а не «ich bin gelegen»). А дієслова на -ieren не отримують ge-: «Er hat Deutsch studiert».',
    examTip:
      'У завданнях із nachdem звертай увагу на час: якщо в головному реченні дія в минулому (gingen, kam), у підрядному з nachdem часто вживається Plusquamperfekt (hatten / waren + Partizip II).',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний Perfekt: «Він вчасно відправив листа» (abschicken).',
        options: [
          'Er hat den Brief pünktlich abgeschickt.',
          'Er hat den Brief pünktlich geabschickt.',
          'Er ist den Brief pünktlich abgeschickt.'
        ],
        answer: 'Er hat den Brief pünktlich abgeschickt.',
        explanation: 'Abschicken має відокремлюваний префікс ab-, тому ge- ставиться всередину: abgeschickt. Допоміжне дієслово — hat.'
      },
      {
        type: 'fill',
        prompt: 'Впиши Partizip II дієслова studieren: «Sie hat in Wien Deutsch ___.»',
        placeholder: 'studiert...',
        answer: 'studiert',
        explanation: 'Дієслова на -ieren утворюють Partizip II без префікса ge-: studiert.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Після того як ми поснідали, ми вийшли з дому».',
        tokens: ['Nachdem', 'wir', 'gefrühstückt', 'hatten,', 'gingen', 'wir', 'aus', 'dem', 'Haus.'],
        answer: 'Nachdem wir gefrühstückt hatten, gingen wir aus dem Haus.',
        explanation: 'Попередня дія в минулому передається через Plusquamperfekt (gefrühstückt hatten), а основна дія — у Präteritum (gingen).'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Вона довго сиділа в кафе» (sitzen)?',
        options: [
          'Sie hat lange im Café gesessen.',
          'Sie ist lange im Café gesessen.',
          'Sie hat lange im Café gesitzt.'
        ],
        answer: 'Sie hat lange im Café gesessen.',
        explanation: 'Gesessen — дієслово стану спокою, у Perfekt воно вживається з haben (hat gesessen), а не з sein.'
      },
      {
        type: 'fill',
        prompt: 'Впиши правильну форму допоміжного дієслова: «___ du gut geschlafen?»',
        placeholder: 'Hast / Bist...',
        answer: 'Hast',
        explanation: 'Schlafen не виражає руху з точки А в точку Б чи зміни стану, тому Perfekt утворюється з haben: Hast du geschlafen?'
      },
      {
        type: 'choice',
        prompt: 'Обери правильне речення зі зміною стану: «Вона швидко заснула» (einschlafen).',
        options: [
          'Sie ist schnell eingeschlafen.',
          'Sie hat schnell eingeschlafen.',
          'Sie ist schnell geeingeschlafen.'
        ],
        answer: 'Sie ist schnell eingeschlafen.',
        explanation: 'Einschlafen означає зміну стану, тому Perfekt утворюється з sein (ist eingeschlafen), а ge- ставиться після префікса ein-.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Він заздалегідь замовив квитки» (bestellen).',
        tokens: ['Er', 'hat', 'die', 'Tickets', 'rechtzeitig', 'bestellt.'],
        answer: 'Er hat die Tickets rechtzeitig bestellt.',
        explanation: 'Bestellen має невідділюваний префікс be-, тому Partizip II утворюється без ge-: bestellt.'
      }
    ]
  },

  {
    id: 'a2_6_futur1_modalverben',
    level: 'A2',
    order: 6,
    isFree: false,
    title: 'Майбутній час Futur I та модальні відтінки',
    germanTitle: 'Futur I & Nuancen der Modalverben',
    goal: 'Вивчити повне відмінювання werden для Futur I, повторити відмінювання модальних дієслів і розрізняти відтінки необхідності, дозволу, заборони та поради.',
    ruleSummary:
      'Futur I утворюється з допоміжного дієслова werden у теперішньому часі (на 2-му місці) та інфінітива основного дієслова (у самому кінці речення). Його вживають для планів, обіцянок і припущень. Модальні дієслова на рівні A2 передають тонкі відтінки: müssen — об’єктивна необхідність, nicht müssen — відсутність обов’язку, dürfen — дозвіл, nicht dürfen — заборона, sollen — порада або чиєсь прохання/правило.',
    tables: [
      {
        title: '1. Відмінювання werden у теперішньому часі (для Futur I)',
        subtitle: 'Зверни увагу на форму для du (wirst) та er/sie/es (wird)',
        headers: ['Особа', 'werden (Präsens)', 'Приклад у Futur I'],
        rows: [
          ['ich', 'werde', 'Morgen werde ich früher aufstehen.'],
          ['du', 'wirst', 'Wirst du am Wochenende kommen?'],
          ['er / sie / es', 'wird', 'Er wird bestimmt bald anrufen.'],
          ['wir', 'werden', 'Bald werden wir die Prüfung ablegen.'],
          ['ihr', 'werdet', 'Werdet ihr heute Abend zu Hause bleiben?'],
          ['sie / Sie', 'werden', 'Sie werden uns morgen informieren.']
        ],
        example: 'Nächsten Sommer werden wir nach Österreich fahren.'
      },
      {
        title: '2. Повна таблиця модальних дієслів у Präsens',
        subtitle: 'В однині (ich, du, er/sie/es) модальні дієслова мають особливі форми',
        headers: ['Дієслово', 'ich', 'du', 'er / sie / es', 'wir / sie, Sie', 'ihr'],
        rows: [
          ['können', 'kann', 'kannst', 'kann', 'können', 'könnt'],
          ['müssen', 'muss', 'musst', 'muss', 'müssen', 'müsst'],
          ['dürfen', 'darf', 'darfst', 'darf', 'dürfen', 'dürft'],
          ['wollen', 'will', 'willst', 'will', 'wollen', 'wollt'],
          ['sollen', 'soll', 'sollst', 'soll', 'sollen', 'sollt']
        ],
        example: 'Hier darf man nicht rauchen, aber man kann draußen Kaffee trinken.'
      },
      {
        title: '3. Відтінки значень та типові пастки',
        subtitle: 'Як розрізняти обов’язок, відсутність обов’язку, заборону та рекомендацію',
        headers: ['Конструкція', 'Значення', 'Приклад'],
        rows: [
          ['müssen', 'об’єктивна необхідність / обов’язок', 'Ich muss heute bis 18 Uhr arbeiten.'],
          ['nicht müssen', 'НЕ обов’язково (є вибір)', 'Du musst heute nicht kochen — wir essen auswärts.'],
          ['nicht dürfen', 'ЗАБОРОНЕНО (правило / закон)', 'Hier darf man nicht parken.'],
          ['sollen', 'порада / чиєсь прохання або правило', 'Der Arzt sagt, ich soll mehr schlafen.']
        ],
        example: 'Du musst das nicht machen, aber du darfst hier nicht stehen.'
      }
    ],
    ukrainianTrap:
      '«Du musst das nicht machen» означає «Тобі не обов’язково це робити», а не «Тобі не можна». Заборона — це «Du darfst das nicht machen». Також у Futur I в кінці речення стоїть інфінітив (fahren, machen), а не Partizip II!',
    examTip:
      'У завданнях на правила, оголошення або поради лікаря/викладача звертай увагу на різницю між müssen, dürfen і sollen.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильне речення у Futur I: «Наступного літа ми поїдемо до Австрії».',
        options: [
          'Nächsten Sommer werden wir nach Österreich fahren.',
          'Nächsten Sommer werden wir nach Österreich gefahren.',
          'Nächsten Sommer sind wir nach Österreich fahren.'
        ],
        answer: 'Nächsten Sommer werden wir nach Österreich fahren.',
        explanation: 'Futur I будується з werden (wir werden) та інфінітива в кінці (fahren).'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова werden для «er/sie/es»: «Er ___ bestimmt bald anrufen.»',
        placeholder: 'wird...',
        answer: 'wird',
        explanation: 'У теперішньому часі для 3-ї особи однини (er/sie/es) дієслово werden має форму wird.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Тут не можна фотографувати» (заборона).',
        tokens: ['Hier', 'darf', 'man', 'nicht', 'fotografieren.'],
        answer: 'Hier darf man nicht fotografieren.',
        explanation: 'Заборона передається дієсловом dürfen у запереченні: darf man nicht.'
      },
      {
        type: 'choice',
        prompt: 'Як сказати: «Тобі не обов’язково приходити рано» (немає потреби)?',
        options: [
          'Du musst nicht früh kommen.',
          'Du darfst nicht früh kommen.',
          'Du sollst nicht früh kommen.'
        ],
        answer: 'Du musst nicht früh kommen.',
        explanation: 'Відсутність обов’язку виражається через nicht müssen (не обов’язково), тоді як nicht dürfen означає заборону.'
      },
      {
        type: 'fill',
        prompt: 'Впиши модальне дієслово зі значенням поради/доручення: «___ ich das Fenster schließen?»',
        placeholder: 'Soll / Darf...',
        answer: 'Soll',
        explanation: 'Питання «Чи мені зачинити вікно?» (запитуючи про доречність/бажання співрозмовника) природно передається через Soll ich...?'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму werden для «du» у Futur I: «Ти прийдеш завтра?»',
        options: [
          'Wirst du morgen kommen?',
          'Wirdst du morgen kommen?',
          'Werst du morgen kommen?'
        ],
        answer: 'Wirst du morgen kommen?',
        explanation: 'Для «du» дієслово werden у теперішньому часі має форму wirst.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Лікар каже, що мені варто пити більше води» (sollen).',
        tokens: ['Der', 'Arzt', 'sagt,', 'ich', 'soll', 'mehr', 'Wasser', 'trinken.'],
        answer: 'Der Arzt sagt, ich soll mehr Wasser trinken.',
        explanation: 'Рекомендація/доручення іншої особи передається через sollen (ich soll).'
      }
    ]
  },

  {
    id: 'a2_7_konjunktiv_2',
    level: 'A2',
    order: 7,
    isFree: false,
    title: 'Умовний спосіб Konjunktiv II',
    germanTitle: 'Konjunktiv II (Höflichkeit, Ratschläge & irreale Wünsche)',
    goal: 'Вивчити основні форми Konjunktiv II та використовувати їх для ввічливих прохань, бажань, порад і нереальних умов у теперішньому часі.',
    ruleSummary:
      'Konjunktiv II у німецькій мові передає ввічливість, м’які поради, бажання та нереальні (уявні) ситуації в теперішньому часі. Найчастіше на рівні A2 використовують готові форми для sein (wäre), haben (hätte), модальних дієслів (könnte, müsste, sollte) та конструкцію «würde + Infinitiv» для більшості інших дієслів.',
    tables: [
      {
        title: '1. Повні таблиці: wäre (sein) та hätte (haben)',
        subtitle: 'Ключові форми для бажань, станів і нереальних умов',
        headers: ['Особа', 'sein → wäre', 'haben → hätte'],
        rows: [
          ['ich', 'wäre', 'hätte'],
          ['du', 'wär(e)st', 'hättest'],
          ['er / sie / es', 'wäre', 'hätte'],
          ['wir', 'wären', 'hätten'],
          ['ihr', 'wärt', 'hättet'],
          ['sie / Sie', 'wären', 'hätten']
        ],
        example: 'Ich hätte gern einen Kaffee und wäre gern in Wien.'
      },
      {
        title: '2. Модальні дієслова у Konjunktiv II (з умлаутом!)',
        subtitle: 'Порівняй з Präteritum: у Konjunktiv II у können, müssen, dürfen з’являється умлаут',
        headers: ['Дієслово', 'ich / er, sie, es', 'du', 'wir / sie, Sie'],
        rows: [
          ['können (могти б)', 'könnte', 'könntest', 'könnten'],
          ['müssen (мусив би)', 'müsste', 'müsstest', 'müssten'],
          ['dürfen (можна було б)', 'dürfte', 'dürftest', 'dürften'],
          ['sollen (варто було б)', 'sollte', 'solltest', 'sollten']
        ],
        example: 'Könntest du mir bitte helfen? — Du solltest mehr schlafen.'
      },
      {
        title: '3. würde + Infinitiv та нереальні умови з wenn',
        subtitle: 'Як будувати речення «Якби ..., то ...»',
        headers: ['Функція', 'Модель', 'Приклад'],
        rows: [
          ['Ввічливе прохання / дія', 'Würden Sie / Würdest du + ... + Infinitiv?', 'Würden Sie mir bitte den Weg zeigen?'],
          ['Порада', 'An deiner Stelle würde ich + ... + Infinitiv.', 'An deiner Stelle würde ich das Angebot annehmen.'],
          ['Нереальна умова (wenn)', 'Wenn + підмет + ... + hätte/wäre, + würde/hätte/wäre + Infinitiv', 'Wenn ich mehr Zeit hätte, würde ich öfter reisen.']
        ],
        example: 'Wenn ich mehr Geld hätte, würde ich ein neues Fahrrad kaufen.'
      }
    ],
    ukrainianTrap:
      'У реченні з нереальною умовою («Якби я мав час...») у німецькій часто ставлять Konjunktiv II (hätte, wäre), хоча в українській ми кажемо теперішнім часом. Також не плутай «konnte» (минулий факт «міг») і «könnte» (умова/ввічливість «міг би»).',
    examTip:
      'Для ввічливих запитів на іспиті або в діловому листуванні найкраще працюють форми Könnten Sie / Würden Sie та Ich hätte gern...',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери ввічливе прохання: «Чи не міг би ти передати мені сіль?»',
        options: [
          'Könntest du mir bitte das Salz geben?',
          'Kannst du mir bitte das Salz geben?',
          'Konntest du mir bitte das Salz geben?'
        ],
        answer: 'Könntest du mir bitte das Salz geben?',
        explanation: 'Для ввічливого прохання використовується форма Konjunktiv II від können — könntest.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму для ввічливого замовлення: «Ich ___ gern ein Wasser ohne Kohlensäure.»',
        placeholder: 'hätte...',
        answer: 'hätte',
        explanation: 'Конструкція «хотів би мати» утворюється з hätte gern (Konjunktiv II від haben).'
      },
      {
        type: 'builder',
        prompt: 'Склади пораду: «Тобі варто більше відпочивати».',
        tokens: ['Du', 'solltest', 'mehr', 'Pause', 'machen.'],
        answer: 'Du solltest mehr Pause machen.',
        explanation: 'Порада передається формою solltest (Konjunktiv II від sollen).'
      },
      {
        type: 'choice',
        prompt: 'Як правильно завершити нереальну умову: «Якби у мене було більше грошей, я б подорожував»?',
        options: [
          'Wenn ich mehr Geld hätte, würde ich reisen.',
          'Wenn ich mehr Geld habe, würde ich reisen.',
          'Wenn ich mehr Geld hätte, werde ich reisen.'
        ],
        answer: 'Wenn ich mehr Geld hätte, würde ich reisen.',
        explanation: 'Нереальна умова в теперішньому часі вимагає Konjunktiv II: hätte у підрядному реченні та würde + Infinitiv у головному.'
      },
      {
        type: 'fill',
        prompt: 'Доповни речення: «An deiner Stelle ___ ich den Job annehmen.»',
        placeholder: 'würde...',
        answer: 'würde',
        explanation: 'Зворот «An deiner Stelle würde ich...» («На твоєму місці я б...») використовується для поради.'
      },
      {
        type: 'choice',
        prompt: 'Обери правильну форму Konjunktiv II від sein: «Я був би радий допомогти».',
        options: [
          'Ich wäre gern bereit zu helfen.',
          'Ich war gern bereit zu helfen.',
          'Ich werde gern bereit zu helfen.'
        ],
        answer: 'Ich wäre gern bereit zu helfen.',
        explanation: 'Форма Konjunktiv II для «ich» від дієслова sein — wäre.'
      },
      {
        type: 'builder',
        prompt: 'Склади ввічливе запитання: «Чи не могли б ви мені допомогти?»',
        tokens: ['Würden', 'Sie', 'mir', 'bitte', 'helfen?'],
        answer: 'Würden Sie mir bitte helfen?',
        explanation: 'Ввічливе звертання на Sie будується через Würden Sie ... + Infinitiv.'
      }
    ]
  }
];
