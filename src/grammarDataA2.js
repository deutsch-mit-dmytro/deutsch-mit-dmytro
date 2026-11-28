export const GRAMMAR_LESSONS_A2 = [
  {
    id: 'a2_1_kasus_genitiv',
    level: 'A2',
    order: 1,
    isFree: true,
    title: 'Відмінки та прийменники з Genitiv',
    germanTitle: 'Kasus-System & Präpositionen mit Genitiv',
    goal: 'Навчитися впевнено розрізняти Nominativ, Akkusativ, Dativ і вживати Genitiv після прийменників wegen, trotz, während, statt.',
    ruleSummary:
      'На рівні A2 до трьох базових відмінків (Nominativ — хто/що?, Akkusativ — кого/що?, Dativ — кому/чому?) додається Genitiv (кого/чого?). Найчастіше він потрібен після чотирьох прийменників: wegen (через), trotz (попри), während (під час) та statt/anstatt (замість). У Genitiv чоловічий і середній рід отримують артикль des і закінчення -(e)s у іменника, а жіночий рід і множина — артикль der.',
    visualFormula: [
      {
        label: 'Чоловічий / середній рід (Genitiv)',
        formula: 'wegen / trotz + des + Іменник-(e)s',
        example: 'Wegen des Regens bleiben wir zu Hause.'
      },
      {
        label: 'Жіночий рід / множина (Genitiv)',
        formula: 'während / statt + der + Іменник',
        example: 'Während der Arbeit trinke ich keinen Kaffee.'
      },
      {
        label: 'Власні назви в Genitiv',
        formula: 'Ім’я + -s + Іменник (без артикля)',
        example: 'Das ist Annas neues Auto.'
      },
      {
        label: 'Контраст Akkusativ vs Dativ',
        formula: 'Akk (кого/що: den/die/das) vs Dat (кому/де: dem/der/dem)',
        example: 'Ich gebe dem Freund (Dat) den Schlüssel (Akk).'
      }
    ],
    ukrainianTrap:
      'В українській ми кажемо «через дощ» (знахідний відмінок), тому хочеться сказати «wegen den Regen». У німецькій письмовій та іспитовій нормі після wegen, trotz, während, statt вимагається Genitiv: «wegen des Regens»! Не забудьте також додати -s/-es до самого іменника чоловічого або середнього роду.',
    examTip:
      'На іспиті Goethe/telc A2 прийменники wegen і trotz часто перевіряють у завданнях на заповнення пропусків. Якщо бачите закінчення -s у іменника (des Wetters, des Kurses) — сміливо обирайте артикль des.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: «Через погану погоду ми не їдемо в парк».',
        options: [
          'Wegen des schlechten Wetters fahren wir nicht in den Park.',
          'Wegen dem schlechten Wetter fahren wir nicht in den Park.',
          'Wegen den schlechten Wetter fahren wir nicht in den Park.'
        ],
        answer: 'Wegen des schlechten Wetters fahren wir nicht in den Park.',
        explanation: 'Прийменник wegen вимагає Genitiv. Das Wetter у Genitiv → des Wetters.'
      },
      {
        type: 'fill',
        prompt: 'Впиши правильний артикль у Genitiv: «Trotz ___ Kälte geht er ohne Jacke spazieren.» (die Kälte)',
        placeholder: 'Введи артикль...',
        answer: 'der',
        explanation: 'Іменник die Kälte жіночого роду, у Genitiv жіночий рід має артикль der.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Під час уроку ми розмовляємо лише німецькою».',
        tokens: ['Während', 'des', 'Unterrichts', 'sprechen', 'wir', 'nur', 'Deutsch.'],
        answer: 'Während des Unterrichts sprechen wir nur Deutsch.',
        explanation: 'Während + Genitiv (der Unterricht → des Unterrichts) стоїть на 1-му місці, тому далі йде дієслово sprechen (інверсія).'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати «Замість чаю я замовляю каву» (der Tee)?',
        options: [
          'Statt des Tees bestelle ich einen Kaffee.',
          'Statt der Tee bestelle ich einen Kaffee.',
          'Statt den Tee bestelle ich einen Kaffee.'
        ],
        answer: 'Statt des Tees bestelle ich einen Kaffee.',
        explanation: 'Statt вимагає Genitiv: der Tee → des Tees.'
      },
      {
        type: 'fill',
        prompt: 'Постав іменник у правильну форму: «Ich helfe ___ Kollegin bei der Aufgabe.» (die Kollegin, Dativ)',
        placeholder: 'Введи артикль...',
        answer: 'der',
        explanation: 'Дієслово helfen завжди керує Dativ. Die Kollegin у Dativ змінюється на der Kollegin.'
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
    goal: 'Правильно змінювати dieser, jeder, welcher, вживати jemand/niemand/etwas/nichts та присвійні займенники без іменника.',
    ruleSummary:
      'Слова dieser (цей), jeder (кожний), welcher (який) та alle (усі) змінюються за відмінками точно так само, як означений артикль der/die/das/die. Неозначені займенники etwas (щось) і nichts (нічого) не змінюються, а jemand (хтось) і niemand (ніхто) у Dativ/Akkusativ можуть отримувати закінчення -em / -en або лишатися без нього. Присвійні займенники без іменника (мій, твій) у Nominativ чоловічого та середнього роду отримують сильні закінчення: meiner, meins!',
    visualFormula: [
      {
        label: 'dieser / jeder / welcher (як der/die/das)',
        formula: 'dieser Mann (Nom) → diesen Mann (Akk) → diesem Mann (Dat)',
        example: 'Welchen Film möchtest du heute sehen?'
      },
      {
        label: 'Присвійні БЕЗ іменника (Nominativ)',
        formula: 'чол.: meiner | жін.: meine | сер.: meins | мн.: meine',
        example: 'Ist das dein Stift? — Ja, das ist meiner.'
      },
      {
        label: 'Присвійні БЕЗ іменника (Akkusativ)',
        formula: 'чол.: meinen | жін.: meine | сер.: meins | мн.: meine',
        example: 'Ich finde meinen Schlüssel nicht, gib mir bitte deinen.'
      },
      {
        label: 'jemand / niemand / etwas / nichts',
        formula: 'etwas / nichts (незмінні) | jemand(em/en)',
        example: 'Hat jemand meinen Regenschirm gesehen?'
      }
    ],
    ukrainianTrap:
      'Перед іменником ми кажемо «mein Wagen» (без закінчення), але якщо іменник опускаємо, закінчення обов’язково з’являється: «Das ist meiner» (а не «Das ist mein»!). Для середнього роду в розмовній і стандартній мові вживається форма «meins / deins / seins» (Ist das dein Handy? — Ja, meins).',
    examTip:
      'У діалогах на іспиті звертайте увагу на рід іменника в першому реченні, щоб правильно обрати займенник-замінник у відповіді: der Pullover → meiner/meinen, das Buch → meins, die Tasche → meine.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильну репліку: «Ist das dein Koffer?» (der Koffer) — «Так, це мій».',
        options: [
          'Ja, das ist meiner.',
          'Ja, das ist mein.',
          'Ja, das ist meins.'
        ],
        answer: 'Ja, das ist meiner.',
        explanation: 'Der Koffer — чоловічий рід, Nominativ. Без іменника присвійний займенник отримує закінчення -er → meiner.'
      },
      {
        type: 'fill',
        prompt: 'Впиши правильну форму dieser: «Ich kaufe ___ blauen Pullover.» (der Pullover, Akkusativ)',
        placeholder: 'dies...',
        answer: 'diesen',
        explanation: 'Kaufen вимагає Akkusativ. Der Pullover (чол. рід) в Akkusativ → diesen Pullover.'
      },
      {
        type: 'builder',
        prompt: 'Склади запитання: «Яку сукню ти вдягнеш на вечірку?» (das Kleid)',
        tokens: ['Welches', 'Kleid', 'ziehst', 'du', 'zur', 'Party', 'an?'],
        answer: 'Welches Kleid ziehst du zur Party an?',
        explanation: 'Das Kleid — середній рід в Akkusativ, тому питальне слово має закінчення -es → Welches Kleid.'
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
        explanation: 'Для людей у значенні «ніхто» вживається niemand (дієслово після нього стоїть у 3-й особі однини: weiß).'
      },
      {
        type: 'fill',
        prompt: 'Доповни відповідь без іменника: «Wem gehört das Handy? — Das ist ___.» (твоє, dein)',
        placeholder: 'dein...',
        answer: 'deins',
        explanation: 'Das Handy — середній рід у Nominativ. Без іменника форма середнього роду — deins (або deines).'
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
    goal: 'Запам’ятати групу іменників чоловічого роду, які отримують закінчення -n або -en у всіх відмінках, крім Nominativ однини.',
    ruleSummary:
      'Деякі іменники чоловічого роду (переважно назви людей і тварин) належать до слабкого відмінювання (n-Deklination). У Nominativ однини вони мають звичайну форму (der Student), але в Akkusativ, Dativ та Genitiv однини (а також у множині) отримують закінчення -n або -en (den Studenten, dem Studenten, des Studenten).',
    visualFormula: [
      {
        label: 'Іменники на -e (додаємо -n)',
        formula: 'der Junge / Kollege / Kunde → den/dem/des Jungen, Kollegen, Kunden',
        example: 'Ich frage meinen Kollegen.'
      },
      {
        label: 'Іменники на приголосний (додаємо -en)',
        formula: 'der Student / Mensch / Nachbar / Polizist → den/dem/des Studenten',
        example: 'Wir helfen dem neuen Studenten.'
      },
      {
        label: 'Особливий випадок: der Herr',
        formula: 'Однина: den/dem/des Herrn | Множина: die Herren',
        example: 'Guten Tag, ich suche Herrn Müller.'
      },
      {
        label: 'Особливий випадок: der Name (Genitiv -ns)',
        formula: 'Nom: der Name | Akk/Dat: den/dem Namen | Gen: des Namens',
        example: 'Wie schreibt man Ihren Namen?'
      }
    ],
    ukrainianTrap:
      'Найчастіша помилка — залишити іменник без закінчення після прийменника або перехідного дієслова: «Ich kenne diesen Mann» (правильно, бо Mann — сильне відмінювання), але «Ich kenne diesen Jungen / Studenten / Kollegen» (обов’язково -n/-en!).',
    examTip:
      'Якщо бачите іменник чоловічого роду, що позначає особу й закінчується на -e (der Kollege, der Junge, der Experte, der Tourist/Student/Präsident), у 99% випадків у Dativ та Akkusativ йому потрібне закінчення -n/-en.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: «Я добре знаю цього колегу».',
        options: [
          'Ich kenne diesen Kollegen gut.',
          'Ich kenne dieser Kollege gut.',
          'Ich kenne diesem Kollege gut.'
        ],
        answer: 'Ich kenne diesen Kollegen gut.',
        explanation: 'Der Kollege належить до n-Deklination. В Akkusativ однини він отримує закінчення -n → diesen Kollegen.'
      },
      {
        type: 'fill',
        prompt: 'Впиши правильну форму іменника: «Der Arzt hilft dem kranken ___.» (der Junge)',
        placeholder: 'Jung...',
        answer: 'Jungen',
        explanation: 'Der Junge закінчується на -e і належить до слабкого відмінювання: у Dativ → dem Jungen.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Ти знаєш ім’я цього студента?»',
        tokens: ['Kennst', 'du', 'den', 'Namen', 'des', 'Studenten?'],
        answer: 'Kennst du den Namen des Studenten?',
        explanation: 'І der Name (Akk → den Namen), і der Student (Gen → des Studenten) належать до n-Deklination.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно звернутися в офіційному листі: «Шановний пане Вебер»?',
        options: [
          'Sehr geehrter Herr Weber,',
          'Sehr geehrter Herrn Weber,',
          'Sehr geehrten Herr Weber,'
        ],
        answer: 'Sehr geehrter Herr Weber,',
        explanation: 'Звертання стоїть у Nominativ однини, де форма ще без -n: Herr Weber (а в Akk/Dat було б Herrn Weber).'
      },
      {
        type: 'fill',
        prompt: 'Доповни речення: «Wir sprechen mit dem neuen ___.» (der Nachbar — сусід)',
        placeholder: 'Nachbar...',
        answer: 'Nachbarn',
        explanation: 'Der Nachbar у непрямих відмінках отримує закінчення -n → mit dem neuen Nachbarn.'
      }
    ]
  },

  {
    id: 'a2_4_praeteritum',
    level: 'A2',
    order: 4,
    isFree: false,
    title: 'Минулий час Präteritum',
    germanTitle: 'Das Präteritum (sein, haben, Modalverben & Erzählformen)',
    goal: 'Вільно використовувати форми минулого часу для sein, haben, werden, модальних дієслів та найпоширеніших дієслів у розповідях.',
    ruleSummary:
      'У розмовній німецькій мові для більшості дій у минулому вживають Perfekt, але для дієслів sein (бути), haben (мати), werden (ставати) та всіх модальних дієслів (können, müssen, wollen, dürfen, sollen) нормою навіть у розмові є Präteritum! Також Präteritum є основним часом у новинах, казках і зв’язних письмових розповідях.',
    visualFormula: [
      {
        label: 'sein / haben / werden у Präteritum',
        formula: 'ich/er war | ich/er hatte | ich/er wurde',
        example: 'Gestern war ich müde und hatte keine Zeit.'
      },
      {
        label: 'Модальні дієслова (БЕЗ умлаутів!)',
        formula: 'konnte, musste, wollte, durfte, sollte',
        example: 'Als Kind durfte ich nicht lange fernsehen.'
      },
      {
        label: 'Слабкі дієслова (основа + -te)',
        formula: 'machen → machte | wohnen → wohnte | arbeiten → arbeitete',
        example: 'Früher wohnte meine Familie in Lwiw.'
      },
      {
        label: 'Сильні дієслова (зміна кореневої голосної)',
        formula: 'gehen → ging | kommen → kam | sehen → sah | fahren → fuhr',
        example: 'Er kam spät nach Hause und ging sofort schlafen.'
      }
    ],
    ukrainianTrap:
      'У модальних дієсловах können, müssen, dürfen у теперішньому часі є умлаут (können), але в Präteritum умлаут ЗНИКАЄ: «ich konnte» (а не «könnte» — бо «könnte» це вже умовний спосіб Konjunktiv II!). Також 1-ша і 3-тя особа однини (ich / er, sie, es) у Präteritum завжди однакові та не мають закінчення -t.',
    examTip:
      'На іспиті A2 у частині Schreiben (написання листа чи розповіді про відпустку/вихідні) поєднання Perfekt для дій + Präteritum для war, hatte і модальних дієслів (wir wollten, ich musste) дає найвищий бал за граматику.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильну форму: «Учора я мусив довго працювати».',
        options: [
          'Gestern musste ich lange arbeiten.',
          'Gestern müsste ich lange arbeiten.',
          'Gestern muss ich lange arbeiten.'
        ],
        answer: 'Gestern musste ich lange arbeiten.',
        explanation: 'У Präteritum модальні дієслова втрачають умлаут: müssen → musste.'
      },
      {
        type: 'fill',
        prompt: 'Впиши дієслово sein у Präteritum: «Wo ___ ihr am Wochenende?»',
        placeholder: 'w...',
        answer: 'wart',
        explanation: 'Дієслово sein у Präteritum для ihr (ви) має форму wart (ich war, du warst, er war, wir waren, ihr wart, sie waren).'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «У дитинстві я хотів стати пілотом».',
        tokens: ['Als', 'Kind', 'wollte', 'ich', 'Pilot', 'werden.'],
        answer: 'Als Kind wollte ich Pilot werden.',
        explanation: 'Wollte (Präteritum від wollen) стоїть на 2-му місці, а інфінітив werden — у самому кінці речення.'
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
        explanation: 'Gehen — сильне дієслово, його форма в Präteritum — ging (er ging).'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму Präteritum від haben: «Wir ___ leider kein Geld dabei.»',
        placeholder: 'hatt...',
        answer: 'hatten',
        explanation: 'Haben у Präteritum для wir має форму hatten.'
      }
    ]
  }
];
