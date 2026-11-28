export const GRAMMAR_LESSONS_A2 = [
  {
    id: 'a2_1_kasus_genitiv',
    level: 'A2',
    order: 1,
    isFree: true,
    title: 'Відмінки та прийменники з Genitiv',
    germanTitle: 'Kasus-System & Präpositionen mit Genitiv',
    goal: 'Розкласти по поличках усі 4 відмінки німецької мови, розібратися з закінченнями і впевнено вживати Genitiv після прийменників.',
    ruleSummary:
      'У німецькій мові 4 відмінки: Nominativ (хто? що? — підмет), Akkusativ (кого? що? — прямий додаток або напрямок руху), Dativ (кому? чому? де? — непрямий додаток або місце) та Genitiv (кого? чого? — приналежність або залежність від прийменника). На рівні A2 найважливіше запам’ятати, що прийменники wegen (через), trotz (попри), während (під час) та statt/anstatt (замість) у стандартній і письмовій мові вимагають Genitiv. У Genitiv чоловічий і середній рід отримують артикль des і закінчення -es (для односкладових слів: des Tages, des Jahres) або -s (для багатоскладових і слів на -e/-el/-er: des Wetters, des Lehrers), а жіночий рід і множина — артикль der (у множині додаткових закінчень іменник не бере).',
    visualFormula: [
      {
        label: '1. Означений артикль у всіх 4 відмінках',
        formula: 'Чоловічий: der → den → dem → des (+ -(e)s)\nЖіночий: die → die → der → der\nСередній: das → das → dem → des (+ -(e)s)\nМножина: die → die → den (+ -n) → der',
        example: 'Ich gebe dem Freund (Dat) den Schlüssel (Akk) des Autos (Gen).'
      },
      {
        label: '2. Неозначений артикль (ein / eine) у 4 відмінках',
        formula: 'Чоловічий: ein → einen → einem → eines (+ -(e)s)\nЖіночий: eine → eine → einer → einer\nСередній: ein → ein → einem → eines (+ -(e)s)',
        example: 'Trotz eines langen Arbeitstages geht er laufen.'
      },
      {
        label: '3. Прийменник wegen (через / з причини)',
        formula: 'wegen + Genitiv\nЧол./сер.: wegen des + Іменник-(e)s\nЖін./мн.: wegen der + Іменник',
        example: 'Wegen des starken Regens bleiben wir heute zu Hause.'
      },
      {
        label: '4. Прийменник trotz (попри / незважаючи на)',
        formula: 'trotz + Genitiv\nЧол./сер.: trotz des + Іменник-(e)s\nЖін./мн.: trotz der + Іменник',
        example: 'Trotz der Müdigkeit lernt sie noch 20 Wörter.'
      },
      {
        label: '5. Прийменники während (під час) та statt/anstatt (замість)',
        formula: 'während / statt / anstatt + Genitiv\nЧол./сер.: während des + Іменник-(e)s\nЖін./мн.: während der + Іменник',
        example: 'Während des Films essen wir Popcorn; statt des Tees trinke ich Wasser.'
      },
      {
        label: '6. Власні імена та географічні назви в Genitiv',
        formula: 'Ім’я/назва + -s (без артикля)\nЯкщо ім’я закінчується на -s, -ß, -x, -z: апостроф (Max’)',
        example: 'Das ist Annas neues Buch und das ist Max’ Fahrrad.'
      }
    ],
    ukrainianTrap:
      'В українській ми кажемо «через дощ» або «під час уроку», тому часто хочеться сказати «wegen den Regen» або «während dem Unterricht». У німецькій після wegen, trotz, während і statt у нормативній мові й на іспитах потрібен саме Genitiv: «wegen des Regens» та «während des Unterrichts». І не забувай про -s / -es у кінці іменника чоловічого чи середнього роду!',
    examTip:
      'Якщо у реченні стоїть wegen, trotz, während або statt і далі йде іменник чоловічого чи середнього роду, зверни увагу на два сигнали: артикль des (або eines/dieses) і закінчення -s/-es у самого слова.',
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
      'Слова dieser (цей), jeder (кожний), welcher (який) та alle (усі) працюють за тим самим принципом відмінкових закінчень, що й означений артикль der/die/das/die. Неозначені займенники etwas (щось) і nichts (нічого) не змінюються за відмінками; jemand (хтось) і niemand (ніхто) вживаються для людей. Коли присвійний займенник (mein, dein, sein, ihr, unser, euer, ihr/Ihr) стоїть БЕЗ іменника (наприклад, у відповіді «Це мій» / «Це моє»), він бере відмінкове закінчення на себе: meiner, meins, meine.',
    visualFormula: [
      {
        label: '1. dieser / jeder / welcher — як означений артикль',
        formula: 'Чоловічий: dieser → diesen → diesem\nЖіночий: diese → diese → dieser\nСередній: dieses → dieses → diesem\nМножина: diese → diese → diesen (+ -n)',
        example: 'Welchen Film möchtest du heute sehen? — Diesen hier!'
      },
      {
        label: '2. Присвійні БЕЗ іменника (Nominativ)',
        formula: 'Чоловічий (der): meiner / deiner / seiner / ihrer / unserer / eurer\nЖіночий (die): meine / deine / seine / ihre / unsere / eure\nСередній (das): meins / deins / seins / ihres / unseres / eures\nМножина (die): meine / deine / seine / ihre / unsere / eure',
        example: 'Ist das dein Stift? — Ja, das ist meiner.'
      },
      {
        label: '3. Присвійні БЕЗ іменника (Akkusativ)',
        formula: 'Чоловічий (den): meinen / deinen / seinen / ihren / unseren / euren\nЖіночий (die): meine / deine / seine / ihre / unsere / eure\nСередній (das): meins / deins / seins / ihres / unseres / eures\nМножина (die): meine / deine / seine / ihre / unsere / eure',
        example: 'Ich habe meinen Regenschirm vergessen. — Nimm meinen!'
      },
      {
        label: '4. Присвійні БЕЗ іменника (Dativ)',
        formula: 'Чоловічий / середній (dem): meinem / deinem / seinem / ihrem / unserem / eurem\nЖіночий (der): meiner / deiner / seiner / ihrer / unserer / eurer\nМножина (den): meinen / deinen / seinen / ihren / unseren / euren',
        example: 'Mit welchem Auto fährst du? — Mit meinem.'
      },
      {
        label: '5. jemand (хтось) та niemand (ніхто)',
        formula: 'Nominativ: jemand / niemand\nAkkusativ: jemanden / niemanden (або jemand / niemand)\nDativ: jemandem / niemandem (або jemand / niemand)',
        example: 'Niemand hat heute angerufen.'
      },
      {
        label: '6. etwas (щось) та nichts (нічого)',
        formula: 'Не змінюються за відмінками та родами!\nВживаються з прикметником з великої літери: etwas Neues, nichts Gutes',
        example: 'Hast du etwas Interessantes gelesen? — Nein, nichts.'
      }
    ],
    ukrainianTrap:
      'Коли іменник є (mein Buch, dein Mantel), закінчення в Nominativ немає. Але якщо ми прибираємо іменник і кажемо «Це моє» або «Це мій», з’являється закінчення: «Das ist meins» (про das Buch/Handy) або «Das ist meiner» (про der Mantel/Stift). Не кажи просто «Das ist mein» у значенні «Це мій».',
    examTip:
      'Спочатку подумки визнач рід і відмінок іменника, про який іде мова в реченні, а вже потім підбирай закінчення для dieser/welcher або займенника без іменника.',
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
      'У німецькій є особлива група іменників чоловічого роду (переважно назви людей і тварин), яка в усіх відмінках, крім Nominativ однини, отримує закінчення -n або -en. Правило просте: якщо слово закінчується на -e (der Kollege, der Junge, der Kunde), додаємо -n; якщо на приголосний (der Student, der Mensch, der Nachbar, der Polizist), найчастіше додаємо -en (або -n, як у der Nachbar). Окремо варто запам’ятати der Herr та der Name.',
    visualFormula: [
      {
        label: '1. Слова на -e → додаємо -n',
        formula: 'der Kollege, der Junge, der Kunde, der Löwe\nNom одн.: der Kollege\nAkk / Dat / Gen одн. та Множина: den / dem / des / die Kollegen',
        example: 'Ich spreche heute mit meinem Kollegen.'
      },
      {
        label: '2. Слова на приголосний → найчастіше -en',
        formula: 'der Student, der Mensch, der Polizist, der Tourist\nNom одн.: der Student\nAkk / Dat / Gen одн. та Множина: den / dem / des / die Studenten',
        example: 'Der Professor hilft dem Studenten.'
      },
      {
        label: '3. Слова на приголосний з закінченням -n',
        formula: 'der Nachbar, der Bauer, der Prinz\nNom одн.: der Nachbar\nAkk / Dat / Gen одн.: den / dem / des Nachbarn',
        example: 'Unser Nachbar hat einen großen Hund.'
      },
      {
        label: '4. Винятки: der Herr та der Name',
        formula: 'der Herr: одн. den/dem/des Herrn | мн. die Herren\nder Name: Nom der Name | Akk/Dat den/dem Namen | Gen des Namens',
        example: 'Wie ist Ihr Name? — Ich kenne den Namen nicht.'
      }
    ],
    ukrainianTrap:
      'У Nominativ однини слово виглядає звично: «Der Student lernt Deutsch». Але щойно з’являється Akkusativ, Dativ чи Genitiv однини, з’являється -(e)n: «Ich sehe den Studenten», «Ich helfe dem Studenten». Не плутай зі звичайними іменниками чоловічого роду на кшталт der Tisch або der Lehrer (вони так не змінюються).',
    examTip:
      'Якщо в реченні є іменник чоловічого роду, який означає людину й стоїть після дієслова/прийменника в Akk або Dat (наприклад, sehen, kennen, fragen, helfen, mit), перевір, чи не належить він до n-Deklination.',
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
      'Präteritum — це проста (однослівна) форма минулого часу. У розмовній німецькій дієслова sein, haben, werden і всі модальні дієслова вживаються в Präteritum щодня, а інші дієслова в цьому часі часто зустрічаються в оповіданнях, статтях і книжках. Уважно стеж за тим, що в 1-й та 3-й особі однини (ich, er/sie/es) закінчення немає, а в модальних дієсловах зникає умлаут (крім sollen і wollen, у яких його й так не було).',
    visualFormula: [
      {
        label: '1. sein (бути) у Präteritum — усі особи',
        formula: 'ich war\ndu warst\ner/sie/es war\nwir waren\nihr wart\nsie/Sie waren',
        example: 'Gestern war ich sehr müde.'
      },
      {
        label: '2. haben (мати) у Präteritum — усі особи',
        formula: 'ich hatte\ndu hattest\ner/sie/es hatte\nwir hatten\nihr hattet\nsie/Sie hatten',
        example: 'Letzte Woche hatte ich viel Arbeit.'
      },
      {
        label: '3. werden (ставати) у Präteritum — усі особи',
        formula: 'ich wurde\ndu wurdest\ner/sie/es wurde\nwir wurden\nihr wurdet\nsie/Sie wurden',
        example: 'Im Sommer wurde es plötzlich warm.'
      },
      {
        label: '4. Модальні дієслова у Präteritum (без умлаута!)',
        formula: 'können → ich/er konnte, du konntest, wir konnten\nmüssen → ich/er musste, du musstest, wir mussten\ndürfen → ich/er durfte, du durftest, wir durften\nwollen → ich/er wollte, du wolltest, wir wollten\nsollen → ich/er sollte, du solltest, wir sollten',
        example: 'Als Kind durfte ich nicht lange aufbleiben.'
      },
      {
        label: '5. Слабкі дієслова: основа + -te + особове закінчення',
        formula: 'machen (основа mach-): ich machte, du machtest, er machte, wir machten, ihr machtet, sie machten\nЯкщо основа на -d/-t/-chn/-ffn: + -ete (arbeiten → ich arbeitete)',
        example: 'Früher arbeitete er in einem Büro.'
      },
      {
        label: '6. Сильні дієслова: зміна кореневої голосної',
        formula: 'gehen → ging (ich ging, du gingst, er ging, wir gingen)\nkommen → kam (ich kam, du kamst, er kam, wir kamen)\nsehen → sah (ich sah, du sahst, er sah, wir sahen)\nfahren → fuhr (ich fuhr, du fuhrst, er fuhr, wir fuhren)',
        example: 'Wir fuhren mit dem Zug nach Prag.'
      }
    ],
    ukrainianTrap:
      'Не плутай Präteritum модальних дієслів (ich konnte — «я міг», ich musste — «я мусив») із Konjunktiv II (ich könnte — «я міг би», ich müsste — «мені довелося б»). У Präteritum умлаута немає!',
    examTip:
      'У розповіді про минуле (наприклад, у листі про поїздку чи в тексті для читання) спочатку придивись до дієслова: якщо це war, hatte, wurde або konnte/musste/wollte — це вже минулий час без допоміжного haben/sein.',
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
  }
];
