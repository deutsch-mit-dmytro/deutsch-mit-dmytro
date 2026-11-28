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
  },

  {
    id: 'a2_5_perfekt_plusquamperfekt',
    level: 'A2',
    order: 5,
    isFree: false,
    title: 'Складний Perfekt та Plusquamperfekt',
    germanTitle: 'Komplexes Perfekt & Plusquamperfekt',
    goal: 'Правильно утворювати складні форми Perfekt (префікси, рух vs спокій) та позначати передісторію в минулому через Plusquamperfekt.',
    ruleSummary:
      'У Perfekt дієслова з відокремлюваними префіксами (auf-, an-, ein-, mit-, ab-) ставлять -ge- між префіксом і коренем (aufgestanden). Дієслова з невідділюваними префіксами (be-, ge-, er-, ver-, zer-, ent-, emp-) та дієслова на -ieren не отримують ge- (bestellt, studiert). Рух із точки А в точку Б або зміна стану вимагають sein (ich bin gefahren, er ist eingeschlafen), а стан спокою (stehen, liegen, sitzen, hängen) — haben (ich habe gelegen). Plusquamperfekt (hatte/war + Partizip II) показує дію, яка сталася раніше за іншу минулу дію (часто з nachdem).',
    visualFormula: [
      {
        label: 'Відокремлювані префікси (Perfekt)',
        formula: 'префікс + ge + основа + -(e)t / -en',
        example: 'Ich bin um 7 Uhr aufgestanden.'
      },
      {
        label: 'Невідділювані префікси та -ieren',
        formula: 'без ge-: bestellt, erklärt, repariert',
        example: 'Er hat das Paket pünktlich bestellt.'
      },
      {
        label: 'Стан спокою (haben) vs рух (sein)',
        formula: 'Ich habe im Bett gelegen (спокій) vs Ich bin nach Berlin gefahren (рух)',
        example: 'Das Buch hat auf dem Tisch gelegen.'
      },
      {
        label: 'Plusquamperfekt (передісторія)',
        formula: 'hatte / war + Partizip II',
        example: 'Nachdem wir gegessen hatten, gingen wir spazieren.'
      }
    ],
    ukrainianTrap:
      'Українською ми часто кажемо «Я лежав на дивані» без вказівки на рух, але в німецькій liegen, sitzen, stehen, hängen у Perfekt вживаються з haben (ich habe gelegen), а не з sein! Також не став ge- у дієсловах на -ieren (studieren → studiert, не gestudiert).',
    examTip:
      'Якщо у реченні є сполучник nachdem і в одній частині стоїть Präteritum (gingen, kam), у частині з nachdem для послідовності минулих подій часто використовується Plusquamperfekt (hatten, waren).',
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
        explanation: 'Sitzt/gesessen — дієслово стану спокою, у Perfekt воно вживається з haben (hat gesessen), а не з sein.'
      },
      {
        type: 'fill',
        prompt: 'Впиши правильну форму допоміжного дієслова: «___ du gut geschlafen?»',
        placeholder: 'Hast / Bist...',
        answer: 'Hast',
        explanation: 'Schlafen не виражає руху з точки А в точку Б чи зміни стану, тому Perfekt утворюється з haben: Hast du geschlafen?'
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
    goal: 'Утворювати Futur I з werden + Infinitiv для планів і припущень та розрізняти відтінки значень модальних дієслів.',
    ruleSummary:
      'Futur I утворюється з дієслова werden у теперішньому часі (на 2-му місці) та інфінітива основного дієслова (у кінці речення). Його вживають для планів, обіцянок та припущень про майбутнє або теперішнє. Модальні дієслова на рівні A2 передають не лише базове «хочу/можу», а й відтінки: müssen — об’єктивна необхідність, dürfen — дозвіл, nicht dürfen — заборона, sollen — порада/доручення, können — уміння або можливість.',
    visualFormula: [
      {
        label: 'Формула Futur I',
        formula: 'werden (2-ге місце) + ... + Infinitiv (у кінці)',
        example: 'Morgen werde ich früher aufstehen.'
      },
      {
        label: 'Заборона vs відсутність необхідності',
        formula: 'nicht dürfen (заборонено) vs nicht müssen / nicht brauchen zu (не обов’язково)',
        example: 'Hier darf man nicht rauchen.'
      },
      {
        label: 'Рекомендація або чиєсь прохання/правило',
        formula: 'sollen (варто / сказали зробити)',
        example: 'Der Arzt sagt, ich soll mehr Wasser trinken.'
      },
      {
        label: 'Припущення в теперішньому часі',
        formula: 'können / müssen + Infinitiv',
        example: 'Er ist nicht da — er kann im Stau stehen.'
      }
    ],
    ukrainianTrap:
      'Фраза «Du musst das nicht machen» означає «Тобі не обов’язково це робити» (відсутність обов’язку), а не «Тобі не можна це робити»! Заборона в німецькій — це «Du darfst das nicht machen» або «Man darf hier nicht...».',
    examTip:
      'У завданнях на читання та граматику звертайте увагу на контраст між müssen і dürfen/sollen: якщо йдеться про правила музею, лікаря чи закону, часто ховається саме dürfen (дозвіл/заборона) або sollen (рекомендація).',
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
    goal: 'Використовувати Konjunktiv II для ввічливих прохань, бажань, порад та нереальних умов у теперішньому часі.',
    ruleSummary:
      'Konjunktiv II допомагає звучати ввічливо, давати м’які поради й говорити про те, чого зараз немає або що нереальне. Найчастіше на рівні A2 вживають: würden + Infinitiv (якби / зробив би), hätte gern (хотів би мати), wäre gern (був би радий / хотів би бути), könntest/könnten (міг би / чи могли б) та solltest (тобі варто було б). Для нереальних умов вживають сполучник wenn і дієслово в кінці підрядного речення.',
    visualFormula: [
      {
        label: 'Ввічливі прохання та запити',
        formula: 'Könntest du ...? / Würden Sie mir bitte ...?',
        example: 'Könntest du mir bitte kurz helfen?'
      },
      {
        label: 'Бажання з «мати» і «бути»',
        formula: 'Ich hätte gern ... | Ich wäre gern ...',
        example: 'Ich hätte gern einen Kaffee, bitte.'
      },
      {
        label: 'Порада та рекомендація',
        formula: 'Du solltest ... | An deiner Stelle würde ich ...',
        example: 'Du solltest heute früher ins Bett gehen.'
      },
      {
        label: 'Нереальна умова (wenn)',
        formula: 'Wenn + підмет + ... + hätte/wäre/würde, дієслово ...',
        example: 'Wenn ich mehr Zeit hätte, würde ich Spanisch lernen.'
      }
    ],
    ukrainianTrap:
      'У розмовній і стандартній мові замість рідкісних форм Konjunktiv II більшості дієслів використовують «würde + Infinitiv» (наприклад, «ich würde reisen»), але для sein (wäre), haben (hätte) та модальних дієслів (könnte, müsste, sollte) краще брати саме їхні власні форми Konjunktiv II.',
    examTip:
      'У завданнях на ввічливу комунікацію (наприклад, прохання в готелі, магазині або до колеги) форми würden Sie, könnten Sie та hätte gern — маркер високого рівня ввічливості.',
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
        placeholder: 'hätt...',
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
        placeholder: 'würd...',
        answer: 'würde',
        explanation: 'Зворот «An deiner Stelle würde ich...» («На твоєму місці я б...») використовується для поради.'
      }
    ]
  },

  {
    id: 'a2_8_reflexiv_praepositionen_da_wo',
    level: 'A2',
    order: 8,
    isFree: false,
    title: 'Зворотні дієслова, керування та da-/wo-форми',
    germanTitle: 'Reflexive Verben, Verben mit Präpositionen & Pronominaladverbien',
    goal: 'Розрізняти Akkusativ і Dativ у зворотних дієсловах, вчити дієслівне керування з прийменниками та утворювати daran/woran.',
    ruleSummary:
      'Зворотні дієслова вживаються з займенником sich. Якщо в реченні немає іншого додатка в Akkusativ, sich стоїть в Akkusativ (ich freue mich). Якщо з’являється ще один об’єкт в Akkusativ (наприклад, «щось уявити» або «щось запам’ятати»), sich переходить у Dativ (ich stelle mir etwas vor, ich merke mir etwas). Багато дієслів мають фіксований прийменник (warten auf + Akk., denken an + Akk., teilnehmen an + Dat.). Якщо далі йде не предмет/особа, а ціле речення чи думка, замість прийменника + займенника використовують da(r)- + прийменник (daran, darauf), а в запитаннях — wo(r)- + прийменник (woran, worauf).',
    visualFormula: [
      {
        label: 'sich без іншого Akkusativ vs з ним',
        formula: 'Ich freue mich (Akk) | Ich merke mir (Dat) das Wort (Akk)',
        example: 'Ich stelle mir das Leben in Berlin vor.'
      },
      {
        label: 'Стале дієслівне керування',
        formula: 'warten auf + Akk | sich interessieren für + Akk | teilnehmen an + Dat',
        example: 'Wir warten auf den Zug.'
      },
      {
        label: 'Займенникові прислівники da(r)- / wo(r)-',
        formula: 'da + прийменник (якщо прийменник на голосну — додаємо -r-: daran, darauf)',
        example: 'Ich denke oft daran.'
      },
      {
        label: 'Питання з wo(r)-',
        formula: 'wo + прийменник (на голосну — -r-: woran, worauf, womit)',
        example: 'Woran denkst du gerade?'
      }
    ],
    ukrainianTrap:
      'У німецькій дієслівний прийменник часто не збігається з українським: ми кажемо «чекати на потяг» (укр. «на»), але німецькою «auf den Zug warten» (auf + Akk); «цікавитися музикою» (укр. без прийменника), але німецькою «sich für Musik interessieren» (für + Akk).',
    examTip:
      'Якщо прийменник починається на голосну (an, auf, über, um), при з’єднанні з da- або wo- обов’язково з’являється сполучна літера -r-: daran, darauf, darüber, woran, worauf.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: «Я добре запам’ятовую нові слова» (sich etwas merken).',
        options: [
          'Ich merke mir neue Wörter gut.',
          'Ich merke mich neue Wörter gut.',
          'Ich erinnere mir neue Wörter gut.'
        ],
        answer: 'Ich merke mir neue Wörter gut.',
        explanation: 'У конструкції «sich etwas merken» є додаток в Akkusativ (neue Wörter), тому зворотний займенник ставиться в Dativ — mir.'
      },
      {
        type: 'fill',
        prompt: 'Впиши правильний прийменник: «Sie interessiert sich sehr ___ Kunst.»',
        placeholder: 'für / an / auf...',
        answer: 'für',
        explanation: 'Дієслово sich interessieren вимагає прийменника für + Akkusativ: sich interessieren für.'
      },
      {
        type: 'builder',
        prompt: 'Склади запитання: «На що ти зараз чекаєш?» (warten auf).',
        tokens: ['Worauf', 'wartest', 'du', 'gerade?'],
        answer: 'Worauf wartest du gerade?',
        explanation: 'Дієслово warten керує прийменником auf. У питанні до неживого предмета/події утворюється форма worauf.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Я з нетерпінням чекаю на відпустку»?',
        options: [
          'Ich freue mich auf den Urlaub.',
          'Ich freue mich über den Urlaub.',
          'Ich freue mich an den Urlaub.'
        ],
        answer: 'Ich freue mich auf den Urlaub.',
        explanation: 'Радіти чомусь майбутньому/очікуваному — це sich freuen auf + Akkusativ.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму з da(r)-: «Das ist ein wichtiges Thema. Wir sprechen morgen ___.» (über)',
        placeholder: 'darüber...',
        answer: 'darüber',
        explanation: 'Sprechen über + Akkusativ. Оскільки über починається на голосну, з da- утворюється darüber.'
      }
    ]
  },

  {
    id: 'a2_9_passiv_grundlagen',
    level: 'A2',
    order: 9,
    isFree: false,
    title: 'Пасивний стан (Vorgangspassiv)',
    germanTitle: 'Vorgangspassiv im Präsens & Präteritum',
    goal: 'Розпізнавати та будувати прості речення у пасивному стані з werden + Partizip II у теперішньому і минулому часах.',
    ruleSummary:
      'Пасив вживають тоді, коли важливіша сама дія або результат, а не те, хто саме її виконує (наприклад, в інструкціях, новинах або описах процесів). У Präsens він утворюється з дієслова werden + Partizip II (Das Haus wird gebaut), а в Präteritum — з wurde/wurden + Partizip II (Das Haus wurde gebaut). Якщо потрібно вказати виконавця дії (ким/чим), часто використовують von + Dativ або durch + Akkusativ.',
    visualFormula: [
      {
        label: 'Пасив у Präsens',
        formula: 'werden (відмінюється) + ... + Partizip II (у кінці)',
        example: 'Hier wird Deutsch gesprochen.'
      },
      {
        label: 'Пасив у Präteritum',
        formula: 'wurde / wurden + ... + Partizip II (у кінці)',
        example: 'Das Gebäude wurde im Jahr 1995 gebaut.'
      },
      {
        label: 'Виконавець дії (von + Dativ)',
        formula: 'von + Dativ (особа або інституція)',
        example: 'Der Brief wird von dem Lehrer korrigiert.'
      },
      {
        label: 'Актив vs Пасив',
        formula: 'Aktiv: Man repariert das Auto → Passiv: Das Auto wird repariert',
        example: 'Die Rechnung wird online bezahlt.'
      }
    ],
    ukrainianTrap:
      'Не плутай пасив із werden + Infinitiv (майбутній час Futur I)! У пасиві в кінці стоїть саме форма Partizip II (repariert, gebaut, geschrieben), а в теперішньому часі für er/sie/es — wird (а не ist).',
    examTip:
      'У текстах на оголошеннях, правилах або інструкціях (наприклад, «Die Tür wird um 20 Uhr geschlossen») пасив показує дію, яка відбувається регулярно або сталася в минулому.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний пасив у Präsens: «Тут приймають картки».',
        options: [
          'Hier werden Kreditkarten akzeptiert.',
          'Hier sind Kreditkarten akzeptiert.',
          'Hier werden Kreditkarten akzeptieren.'
        ],
        answer: 'Hier werden Kreditkarten akzeptiert.',
        explanation: 'Kreditkarten — множина, тому дієслово werden стоїть у формі werden + Partizip II (akzeptiert).'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму дієслова werden у Präteritum: «Das Paket ___ gestern geliefert.»',
        placeholder: 'wurde...',
        answer: 'wurde',
        explanation: 'Для однини в минулому часі пасиву вживається форма wurde + Partizip II (geliefert).'
      },
      {
        type: 'builder',
        prompt: 'Склади речення у пасиві: «Текст перевіряється викладачем».',
        tokens: ['Der', 'Text', 'wird', 'vom', 'Lehrer', 'korrigiert.'],
        answer: 'Der Text wird vom Lehrer korrigiert.',
        explanation: 'Vom = von dem (Dativ). Дієслово wird стоїть на 2-му місці, Partizip II korrigiert — у кінці.'
      },
      {
        type: 'choice',
        prompt: 'Яке речення передає минулу дію в пасиві: «Будинок побудували взимку»?',
        options: [
          'Das Haus wurde im Winter gebaut.',
          'Das Haus ist im Winter bauen.',
          'Das Haus wird im Winter baut.'
        ],
        answer: 'Das Haus wurde im Winter gebaut.',
        explanation: 'Пасив у Präteritum утворюється з wurde + Partizip II (gebaut).'
      },
      {
        type: 'fill',
        prompt: 'Доповни пасивне речення: «Die Fenster ___ jeden Morgen geöffnet.»',
        placeholder: 'werden...',
        answer: 'werden',
        explanation: 'Die Fenster — множина, регулярна дія в теперішньому часі: werden ... geöffnet.'
      }
    ]
  },

  {
    id: 'a2_10_infinitiv_lassen',
    level: 'A2',
    order: 10,
    isFree: false,
    title: 'Інфінітивні звороти та дієслово lassen',
    germanTitle: 'Infinitiv mit zu, um/ohne/statt ... zu & lassen',
    goal: 'Правильно вживати zu + Infinitiv, звороти um...zu, ohne...zu, statt...zu та конструкції з дієсловом lassen.',
    ruleSummary:
      'Після багатьох дієслів і виразів (vergessen, beginnen, vorhaben, es ist wichtig, Zeit haben) вживається zu + Infinitiv (якщо дієслово має відокремлюваний префікс, zu ставиться між ним і коренем: aufzustehen). Звороти um...zu (щоб / для того щоб), ohne...zu (без того, щоб) і statt...zu (замість того, щоб) вимагають однакової особи в обох частинах і ставлять інфінітив із zu у кінець. Дієслово lassen у базовому значенні A2 часто означає «дозволяти» або «давати щось зробити» (без zu).',
    visualFormula: [
      {
        label: 'zu + Infinitiv (з відокремлюваним префіксом)',
        formula: 'префікс + zu + дієслово (у кінці)',
        example: 'Ich habe vergessen, das Licht auszumachen.'
      },
      {
        label: 'Мета, відсутність дії, заміна',
        formula: 'um ... zu (мета) | ohne ... zu (без) | statt ... zu (замість)',
        example: 'Ich lerne Deutsch, um in Deutschland zu arbeiten.'
      },
      {
        label: 'lassen («дозволяти / давати зробити»)',
        formula: 'lassen (2-ге місце) + ... + Infinitiv (без zu, у кінці)',
        example: 'Er lässt seine Haare schneiden.'
      },
      {
        label: 'lassen у значенні «дозволяти піти/залишити»',
        formula: 'Ich lasse den Schlüssel zu Hause.',
        example: 'Lass mich bitte in Ruhe!'
      }
    ],
    ukrainianTrap:
      'Звороти um...zu, ohne...zu, statt...zu вживаються лише тоді, коли підмет у реченні один і той самий! Якщо дія стосується іншої людини, будують складнопідрядне речення (наприклад, з damit або dass). Після lassen інфінітив іде БЕЗ zu.',
    examTip:
      'У завданнях на з’єднання речень шукайте слово «щоб» (з метою): якщо особа та сама — майже завжди підходить конструкція «um ... zu + Infinitiv».',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний варіант: «Він щодня бігає, щоб бути у формі».',
        options: [
          'Er läuft jeden Tag, um fit zu bleiben.',
          'Er läuft jeden Tag, um fit bleiben.',
          'Er läuft jeden Tag, ohne fit zu bleiben.'
        ],
        answer: 'Er läuft jeden Tag, um fit zu bleiben.',
        explanation: 'Мета дії передається зворотом um ... zu + Infinitiv: um fit zu bleiben.'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму з zu для відокремлюваного дієслова aufstehen: «Ich habe vor, morgen früh ___.»',
        placeholder: 'aufzustehen...',
        answer: 'aufzustehen',
        explanation: 'У дієслів з відокремлюваним префіксом частка zu ставиться між префіксом і основою: aufzustehen.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Вона пішла, не сказавши ні слова».',
        tokens: ['Sie', 'ist', 'gegangen,', 'ohne', 'ein', 'Wort', 'zu', 'sagen.'],
        answer: 'Sie ist gegangen, ohne ein Wort zu sagen.',
        explanation: 'Значення «не зробивши чогось / без того, щоб» передається через ohne ... zu + Infinitiv.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Я віддаю ремонтувати телефон» (lassen)?',
        options: [
          'Ich lasse mein Handy reparieren.',
          'Ich lasse mein Handy zu reparieren.',
          'Ich lasse mein Handy repariert.'
        ],
        answer: 'Ich lasse mein Handy reparieren.',
        explanation: 'Конструкція lassen + Infinitiv вживається без частки zu: lasse ... reparieren.'
      },
      {
        type: 'fill',
        prompt: 'Впиши зворот заміщення: «___ zu Hause zu bleiben, gehen wir ins Kino.»',
        placeholder: 'Statt...',
        answer: 'Statt',
        explanation: '«Замість того, щоб залишатися вдома» — це Statt ... zu Hause zu bleiben.'
      }
    ]
  },

  {
    id: 'a2_11_adjektivdeklination',
    level: 'A2',
    order: 11,
    isFree: false,
    title: 'Відмінювання прикметників (Adjektivdeklination)',
    germanTitle: 'Adjektivdeklination (schwach, gemischt, stark)',
    goal: 'Правильно добирати закінчення прикметника перед іменником у слабкому, змішаному та сильному відмінюванні.',
    ruleSummary:
      'Коли прикметник стоїть перед іменником, він отримує закінчення залежно від роду, числа, відмінка та слова перед ним. Якщо перед прикметником стоїть означений артикль або dieser/jeder/welcher, більшість форм мають закінчення -e або -en (слабке відмінювання). Якщо стоїть ein/kein/mein/dein, у Nom. чол./сер. та Akk. сер. закінчення прикметника показує рід (-er, -es, -e), а в інших випадках — -en (змішане відмінювання). Якщо слова-показника немає (або стоїть числівник/etwas/viele), закінчення прикметника бере на себе роль артикля (сильне відмінювання).',
    visualFormula: [
      {
        label: 'Слабке (після der/die/das/dieser)',
        formula: 'Nom/Akk одн.: -e | решта форм: -en',
        example: 'Der neue Kollege kommt heute.'
      },
      {
        label: 'Змішане (після ein/kein/mein)',
        formula: 'ein neuer Mann (m) | eine neue Frau (f) | ein neues Kind (n)',
        example: 'Ich habe ein neues Handy gekauft.'
      },
      {
        label: 'Сильне (без артикля / після vieler/etwas)',
        formula: 'закінчення як у der/die/das/die (у Gen. чол./сер. — -en)',
        example: 'Ich trinke gern warmen Tee.'
      },
      {
        label: 'Dativ у більшості випадків',
        formula: 'mit dem/einem/gutem + прикметник-en / -em',
        example: 'Sie fährt mit ihrem neuen Auto.'
      }
    ],
    ukrainianTrap:
      'В українській прикметник узгоджується з іменником незалежно від того, є перед ним займенник чи ні. У німецькій правило «хтось один має показати рід/відмінок»: якщо артикль уже показав рід (der, die, das, den, dem), прикметник найчастіше отримує -e або -en.',
    examTip:
      'На A2 найчастіше перевіряють Nominativ і Akkusativ однини після ein/kein/mein (ein guter Freund, einen guten Freund, ein gutes Buch) та Dativ з mit/bei/nach (mit dem neuen Wagen / mit gutem Kaffee).',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильне закінчення: «Він купив нову куртку» (die Jacke, Akkusativ).',
        options: [
          'Er hat eine neue Jacke gekauft.',
          'Er hat eine neues Jacke gekauft.',
          'Er hat eine neuen Jacke gekauft.'
        ],
        answer: 'Er hat eine neue Jacke gekauft.',
        explanation: 'Die Jacke — жіночий рід, Akkusativ. Після eine прикметник отримує закінчення -e: eine neue Jacke.'
      },
      {
        type: 'fill',
        prompt: 'Впиши закінчення прикметника: «Das ist ein alt___ Haus.» (das Haus, Nominativ)',
        placeholder: 'es...',
        answer: 'es',
        explanation: 'Das Haus — середній рід, Nominativ. Після неозначеного артикля ein прикметник має закінчення -es: ein altes Haus.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Я п’ю свіжу каву» (der Kaffee, без артикля).',
        tokens: ['Ich', 'trinke', 'frischen', 'Kaffee.'],
        answer: 'Ich trinke frischen Kaffee.',
        explanation: 'Без артикля перед чоловічим родом в Akkusativ прикметник отримує сильне закінчення -en: frischen Kaffee.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Ми їдемо з нашим старим другом» (der Freund, Dativ)?',
        options: [
          'Wir fahren mit unserem alten Freund.',
          'Wir fahren mit unserem alter Freund.',
          'Wir fahren mit unserem altes Freund.'
        ],
        answer: 'Wir fahren mit unserem alten Freund.',
        explanation: 'Після mit + Dativ (unserem) у змішаному відмінюванні прикметник отримує закінчення -en: unserem alten Freund.'
      },
      {
        type: 'fill',
        prompt: 'Впиши закінчення: «Der klein___ Junge spielt im Garten.» (der Junge, Nominativ)',
        placeholder: 'e...',
        answer: 'e',
        explanation: 'Після означеного артикля der у Nominativ однини прикметник отримує закінчення -e: Der kleine Junge.'
      }
    ]
  },

  {
    id: 'a2_12_komparation_partikeln',
    level: 'A2',
    order: 12,
    isFree: false,
    title: 'Ступені порівняння та модальні частки',
    germanTitle: 'Komparation, Vergleichssätze & Modalpartikeln',
    goal: 'Утворювати вищий і найвищий ступені порівняння з винятками та доречно вживати прислівники й частки (deshalb, trotzdem, doch, mal).',
    ruleSummary:
      'Вищий ступінь (Komparativ) утворюється суфіксом -er (часто з умлаутом односкладових голосних a/o/u: alt → älter), а порівняння «ніж» передається словом als (рівність — «такий самий... як» — через so ... wie). Найвищий ступінь (Superlativ) вживається з am ... -(e)sten або з артиклем перед іменником (der/die/das ... -ste). Модальні частки та прислівники (doch, mal, eigentlich, sowieso, deshalb, trotzdem) надають мовленню природного відтінку або зв’язують речення.',
    visualFormula: [
      {
        label: 'Неправильні ступені порівняння',
        formula: 'gut → besser → am besten | gern → lieber → am liebsten',
        example: 'Ich trinke lieber Tee als Kaffee.'
      },
      {
        label: 'Умлаут та винятки (hoch, nah)',
        formula: 'hoch → höher → am höchsten | nah → näher → am nächsten',
        example: 'Dieser Weg ist näher als der andere.'
      },
      {
        label: 'Порівняння: als vs wie',
        formula: 'größer als ... (більший, ніж) | so groß wie ... (такий самий, як)',
        example: 'Berlin ist größer als München.'
      },
      {
        label: 'Зв’язки та частки (deshalb, trotzdem, doch, mal)',
        formula: 'deshalb (тому) | trotzdem (попри це) | doch / mal (м’яке спонукання/підтвердження)',
        example: 'Schau doch mal her!'
      }
    ],
    ukrainianTrap:
      'Прикметник hoch у вищому ступені втрачає «c» і отримує умлаут: höher (а не hochere!). А після порівняльного ступеня вживається «als», а не «wie» (більший, ніж — größer als).',
    examTip:
      'Звертайте увагу на сполучники-прислівники deshalb («тому», наслідок) і trotzdem («попри це», протиставлення): після них у реченні дієслово стоїть одразу на 2-му місці (Deshalb bleibe ich... / Trotzdem gehe ich...).',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний ступінь порівняння: «Найкраще я готую ввечері».',
        options: [
          'Am besten koche ich am Abend.',
          'Am gutesten koche ich am Abend.',
          'Am mehrsten koche ich am Abend.'
        ],
        answer: 'Am besten koche ich am Abend.',
        explanation: 'Gut має нерегулярні форми: gut → besser → am besten.'
      },
      {
        type: 'fill',
        prompt: 'Впиши порівняльне слово: «Meine Wohnung ist größer ___ deine.»',
        placeholder: 'als / wie...',
        answer: 'als',
        explanation: 'Після вищого ступеня порівняння (größer) вживається сполучник als («ніж»).'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Попри дощ, ми пішли гуляти».',
        tokens: ['Trotzdem', 'sind', 'wir', 'spazieren', 'gegangen.'],
        answer: 'Trotzdem sind wir spazieren gegangen.',
        explanation: 'Trotzdem на 1-му місці вимагає дієслова (sind) одразу на 2-му місці.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Я охочіше п’ю воду, ніж сік» (gern)?',
        options: [
          'Ich trinke lieber Wasser als Saft.',
          'Ich trinke gerner Wasser als Saft.',
          'Ich trinke mehr gern Wasser als Saft.'
        ],
        answer: 'Ich trinke lieber Wasser als Saft.',
        explanation: 'Порівняльний ступінь від gern — lieber («охочіше»).'
      },
      {
        type: 'fill',
        prompt: 'Впиши форму від hoch: «Der Turm ist ___ als das Haus.»',
        placeholder: 'höher...',
        answer: 'höher',
        explanation: 'Вищий ступінь від hoch — höher.'
      }
    ]
  },

  {
    id: 'a2_13_nebensaetze_konjunktionen',
    level: 'A2',
    order: 13,
    isFree: false,
    title: 'Складнопідрядні речення та сполучники',
    germanTitle: 'Nebensätze mit weil, da, wenn, als, obwohl, dass & ob',
    goal: 'Правильно будувати підрядні речення з дієсловом у кінці та розрізняти сполучники часу, причини, допусту й непрямих питань.',
    ruleSummary:
      'У складнопідрядному реченні після сполучників weil, da (причина), wenn, als, bevor, nachdem, solange, sobald (час/умова), obwohl (допусту), dass (зміст) та ob (непряме запитання «чи») дієвідмінне дієслово переходить у самий кінець підрядного речення. Якщо підрядне речення стоїть перед головним, вони розділяються комою, а головне речення починається одразу з дієслова.',
    visualFormula: [
      {
        label: 'Дієслово — у кінець підрядного речення',
        formula: '..., weil / wenn / obwohl / dass + підмет + ... + ДІЄСЛОВО (у кінці)',
        example: 'Ich bleibe zu Hause, weil ich krank bin.'
      },
      {
        label: 'wenn (теперішнє / умова / повторення) vs als (минуле)',
        formula: 'Als ich ein Kind war (одного разу/період у минулому) | Wenn ich Zeit habe (тепер/щоразу)',
        example: 'Als ich in Berlin wohnte, besuchte ich viele Museen.'
      },
      {
        label: 'Допусту: obwohl («хоча»)',
        formula: 'Obwohl es regnet, gehe ich joggen.',
        example: 'Obwohl er müde ist, arbeitet er weiter.'
      },
      {
        label: 'Непряме запитання: ob («чи»)',
        formula: 'Ich weiß nicht, ob er heute kommt.',
        example: 'Kannst du mir sagen, wann der Zug abfährt?'
      }
    ],
    ukrainianTrap:
      'У німецькій не можна сказати «Als ich jung bin» про теперішнє або «Wenn ich gestern kam» про конкретну минулу подію! Для одноразових чи завершених подій у минулому вживають «als», а для умови чи повторюваних ситуацій — «wenn».',
    examTip:
      'У підрядному реченні з відокремлюваним дієсловом (наприклад, ankommen або aufstehen) префікс не відділяється і дієслово пишеться разом у кінці: «..., weil der Zug pünktlich ankommt.»',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний сполучник часу: «Коли я був маленьким, я жив у селі».',
        options: [
          'Als ich klein war, lebte ich auf dem Dorf.',
          'Wenn ich klein war, lebte ich auf dem Dorf.',
          'Dass ich klein war, lebte ich auf dem Dorf.'
        ],
        answer: 'Als ich klein war, lebte ich auf dem Dorf.',
        explanation: 'Для минулого періоду чи події в минулому використовується сполучник als.'
      },
      {
        type: 'fill',
        prompt: 'Впиши сполучник допусту: «___ es sehr kalt ist, geht er ohne Mütze.»',
        placeholder: 'Obwohl...',
        answer: 'Obwohl',
        explanation: 'Obwohl («хоча») вводить підрядне речення з дієсловом у кінці (ist).'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Я не знаю, чи прийде вона сьогодні».',
        tokens: ['Ich', 'weiß', 'nicht,', 'ob', 'sie', 'heute', 'kommt.'],
        answer: 'Ich weiß nicht, ob sie heute kommt.',
        explanation: 'Непряме запитання без питального слова починається з ob, а дієслово kommt стоїть у кінці.'
      },
      {
        type: 'choice',
        prompt: 'Як правильно побудувати речення з weil («тому що я маю час»)?',
        options: [
          'Ich helfe dir gern, weil ich Zeit habe.',
          'Ich helfe dir gern, weil ich habe Zeit.',
          'Ich helfe dir gern, weil habe ich Zeit.'
        ],
        answer: 'Ich helfe dir gern, weil ich Zeit habe.',
        explanation: 'Після weil дієвідмінне дієслово habe стоїть у самому кінці підрядного речення.'
      },
      {
        type: 'fill',
        prompt: 'Впиши сполучник змісту: «Er sagt, ___ er morgen später kommt.»',
        placeholder: 'dass...',
        answer: 'dass',
        explanation: 'Сполучник dass приєднує підрядне речення змісту, дієслово kommt — у кінці.'
      }
    ]
  },

  {
    id: 'a2_14_relativsaetze_wortbildung',
    level: 'A2',
    order: 14,
    isFree: false,
    title: 'Відносні речення, парні сполучники та словотвір',
    germanTitle: 'Relativsätze, zweiteilige Konjunktionen & Wortbildung',
    goal: 'Будувати відносні речення з der/die/das, вживати парні сполучники та розпізнавати рід іменників за суфіксами й субстантивацією.',
    ruleSummary:
      'Відносне речення пояснює іменник перед ним і починається з відносного займенника (der/die/das/die), рід і число якого беруться від цього іменника, а відмінок — від ролі в самому підрядному реченні (дієслово — у кінці). Двоскладні сполучники (nicht nur ... sondern auch, entweder ... oder, weder ... noch) поєднують однорідні члени або речення. У словотворі субстантивовані інфінітиви (das Essen, das Lernen) і зменшувальні на -chen/-lein завжди середнього роду (das), а суфікси -ung, -heit, -keit — завжди жіночого роду (die).',
    visualFormula: [
      {
        label: 'Відносне речення (Relativsatz)',
        formula: 'Іменник, + der/die/das/den/dem + ... + ДІЄСЛОВО (у кінці), ...',
        example: 'Das ist der Kollege, den ich gestern getroffen habe.'
      },
      {
        label: 'Двоскладні сполучники',
        formula: 'nicht nur ..., sondern auch ... | entweder ... oder ... | weder ... noch ...',
        example: 'Ich spreche nicht nur Deutsch, sondern auch Englisch.'
      },
      {
        label: 'Суфікси жіночого роду (завжди die)',
        formula: '-ung, -heit, -keit, -schaft, -tion',
        example: 'Die Anmeldung ist sehr wichtig.'
      },
      {
        label: 'Середній рід (завжди das): інфінітиви та -chen/-lein',
        formula: 'das + Інфінітив з великої літери | das + слово + -chen/-lein',
        example: 'Das Lernen macht mir Spaß.'
      }
    ],
    ukrainianTrap:
      'У відносному реченні відмінок займенника der/die/das залежить НЕ від головного речення, а від дієслова у самому відносному реченні (наприклад, «treffen» вимагає Akkusativ → den). Також усі субстантивовані дієслова в німецькій мають рід das (das Lesen, das Schreiben).',
    examTip:
      'Якщо у слові бачиш закінчення -ung, -heit або -keit, його артикль завжди «die»; якщо це інфінітив із великої літери або зменшувальне на -chen — завжди «das». Це економить час на будь-якому тесті.',
    exercises: [
      {
        type: 'choice',
        prompt: 'Обери правильний відносний займенник: «Це книга, яку я зараз читаю» (das Buch, Akkusativ).',
        options: [
          'Das ist das Buch, das ich gerade lese.',
          'Das ist das Buch, der ich gerade lese.',
          'Das ist das Buch, dem ich gerade lese.'
        ],
        answer: 'Das ist das Buch, das ich gerade lese.',
        explanation: 'Das Buch — середній рід, у відносному реченні в Akkusativ форма також das, дієслово lese — у кінці.'
      },
      {
        type: 'fill',
        prompt: 'Впиши артикль субстантивованого дієслова: «___ Schwimmen ist gesund.»',
        placeholder: 'Das...',
        answer: 'Das',
        explanation: 'Усі іменники, утворені від інфінітивів дієслів, мають середній рід: das Schwimmen.'
      },
      {
        type: 'builder',
        prompt: 'Склади речення: «Він не п’є ні кави, ні чаю».',
        tokens: ['Er', 'trinkt', 'weder', 'Kaffee', 'noch', 'Tee.'],
        answer: 'Er trinkt weder Kaffee noch Tee.',
        explanation: 'Двоскладний сполучник «ні ..., ні ...» у німецькій — це weder ... noch ...'
      },
      {
        type: 'choice',
        prompt: 'Як правильно сказати: «Вона володіє не лише німецькою, а й іспанською»?',
        options: [
          'Sie spricht nicht nur Deutsch, sondern auch Spanisch.',
          'Sie spricht nicht nur Deutsch, aber auch Spanisch.',
          'Sie spricht weder Deutsch, sondern auch Spanisch.'
        ],
        answer: 'Sie spricht nicht nur Deutsch, sondern auch Spanisch.',
        explanation: '«Не лише ..., а й ...» передається парою nicht nur ..., sondern auch ...'
      },
      {
        type: 'fill',
        prompt: 'Впиши артикль іменника на -keit: «___ Möglichkeit ist super.»',
        placeholder: 'Die...',
        answer: 'Die',
        explanation: 'Іменники із суфіксом -keit завжди мають жіночий рід: die Möglichkeit.'
      }
    ]
  },

  {
    id: 'a2_final_exam',
    level: 'A2',
    order: 15,
    isFree: false,
    isFinalExam: true,
    title: 'Фінальний іспит рівня A2',
    germanTitle: 'Abschlusstest A2 (Alle Themen & Fehler-Training)',
    goal: 'Перевірити засвоєння ключових тем A2 у змішаному тесті та автоматично закріпити теми, у яких виникли помилки.',
    ruleSummary:
      'Цей іспит перевіряє найважливіші граматичні механізми рівня A2: прийменники з Genitiv, n-Deklination, Präteritum та Perfekt, Konjunktiv II, керування з прийменниками, пасив, інфінітивні звороти та складнопідрядні речення. Якщо ти помилишся в завданні з певної теми, система автоматично додасть 2 додаткові вправи на закріплення цієї теми в кінець іспиту.',
    visualFormula: [
      {
        label: 'Формат іспиту',
        formula: '10 змішаних завдань + авто-закріплення при помилках',
        example: 'Für die erfolgreiche Prüfung sind mindestens 70% nötig.'
      },
      {
        label: 'Критерій зарахування',
        formula: 'від 70% правильних відповідей → «Засвоєно ✓» + 75 🪙',
        example: 'Jede richtige Antwort bringt +10 XP та +10 🪙.'
      }
    ],
    ukrainianTrap:
      'Не поспішай: уважно читай, який час або відмінок вимагає дієслово чи прийменник, і перевіряй позицію дієслова в головному та підрядному реченнях.',
    examTip:
      'Якщо якась тема з A2 ще здається непевною, перед іспитом зазирни у відповідний урок — шпаргалка та приклад допоможуть швидко згадати правило.',
    exercises: [
      {
        type: 'choice',
        sourceLessonId: 'a2_1_kasus_genitiv',
        topicTag: 'Прийменники з Genitiv',
        prompt: 'Обери правильний варіант: «Через погану погоду ми не їдемо в парк».',
        options: [
          'Wegen des schlechten Wetters fahren wir nicht in den Park.',
          'Wegen dem schlechten Wetter fahren wir nicht in den Park.',
          'Wegen den schlechten Wetter fahren wir nicht in den Park.'
        ],
        answer: 'Wegen des schlechten Wetters fahren wir nicht in den Park.',
        explanation: 'Wegen вимагає Genitiv: des schlechten Wetters.'
      },
      {
        type: 'choice',
        sourceLessonId: 'a2_3_n_deklination',
        topicTag: 'Слабке відмінювання (n-Deklination)',
        prompt: 'Обери правильний варіант: «Я добре знаю цього колегу».',
        options: [
          'Ich kenne diesen Kollegen gut.',
          'Ich kenne dieser Kollege gut.',
          'Ich kenne diesem Kollege gut.'
        ],
        answer: 'Ich kenne diesen Kollegen gut.',
        explanation: 'Der Kollege належить до n-Deklination, в Akkusativ однини → diesen Kollegen.'
      },
      {
        type: 'choice',
        sourceLessonId: 'a2_4_praeteritum',
        topicTag: 'Минулий час Präteritum',
        prompt: 'Обери правильну форму: «Учора я мусив довго працювати».',
        options: [
          'Gestern musste ich lange arbeiten.',
          'Gestern müsste ich lange arbeiten.',
          'Gestern muss ich lange arbeiten.'
        ],
        answer: 'Gestern musste ich lange arbeiten.',
        explanation: 'У Präteritum модальні дієслова не мають умлаута: müssen → musste.'
      },
      {
        type: 'choice',
        sourceLessonId: 'a2_5_perfekt_plusquamperfekt',
        topicTag: 'Складний Perfekt та Plusquamperfekt',
        prompt: 'Обери правильний Perfekt: «Він вчасно відправив листа» (abschicken).',
        options: [
          'Er hat den Brief pünktlich abgeschickt.',
          'Er hat den Brief pünktlich geabschickt.',
          'Er ist den Brief pünktlich abgeschickt.'
        ],
        answer: 'Er hat den Brief pünktlich abgeschickt.',
        explanation: 'Abschicken — відокремлюваний префікс ab-, тому ge- стоїть усередині: abgeschickt.'
      },
      {
        type: 'choice',
        sourceLessonId: 'a2_6_futur1_modalverben',
        topicTag: 'Futur I та модальні відтінки',
        prompt: 'Як сказати: «Тобі не обов’язково приходити рано» (немає потреби)?',
        options: [
          'Du musst nicht früh kommen.',
          'Du darfst nicht früh kommen.',
          'Du sollst nicht früh kommen.'
        ],
        answer: 'Du musst nicht früh kommen.',
        explanation: 'Відсутність обов’язку — nicht müssen, заборона — nicht dürfen.'
      },
      {
        type: 'choice',
        sourceLessonId: 'a2_7_konjunktiv_2',
        topicTag: 'Умовний спосіб Konjunktiv II',
        prompt: 'Обери ввічливе прохання: «Чи не міг би ти передати мені сіль?»',
        options: [
          'Könntest du mir bitte das Salz geben?',
          'Kannst du mir bitte das Salz geben?',
          'Konntest du mir bitte das Salz geben?'
        ],
        answer: 'Könntest du mir bitte das Salz geben?',
        explanation: 'Для ввічливого прохання вживається форма Konjunktiv II — könntest.'
      },
      {
        type: 'choice',
        sourceLessonId: 'a2_8_reflexiv_praepositionen_da_wo',
        topicTag: 'Зворотні дієслова та керування',
        prompt: 'Обери правильний варіант: «Я добре запам’ятовую нові слова» (sich etwas merken).',
        options: [
          'Ich merke mir neue Wörter gut.',
          'Ich merke mich neue Wörter gut.',
          'Ich erinnere mir neue Wörter gut.'
        ],
        answer: 'Ich merke mir neue Wörter gut.',
        explanation: 'При наявності додатка в Akkusativ (neue Wörter) зворотний займенник стоїть у Dativ — mir.'
      },
      {
        type: 'choice',
        sourceLessonId: 'a2_9_passiv_grundlagen',
        topicTag: 'Пасивний стан (Vorgangspassiv)',
        prompt: 'Обери правильний пасив у Präsens: «Тут приймають картки».',
        options: [
          'Hier werden Kreditkarten akzeptiert.',
          'Hier sind Kreditkarten akzeptiert.',
          'Hier werden Kreditkarten akzeptieren.'
        ],
        answer: 'Hier werden Kreditkarten akzeptiert.',
        explanation: 'Пасив у Präsens утворюється з werden + Partizip II (akzeptiert).'
      },
      {
        type: 'choice',
        sourceLessonId: 'a2_10_infinitiv_lassen',
        topicTag: 'Інфінітивні звороти та lassen',
        prompt: 'Обери правильний варіант: «Він щодня бігає, щоб бути у формі».',
        options: [
          'Er läuft jeden Tag, um fit zu bleiben.',
          'Er läuft jeden Tag, um fit bleiben.',
          'Er läuft jeden Tag, ohne fit zu bleiben.'
        ],
        answer: 'Er läuft jeden Tag, um fit zu bleiben.',
        explanation: 'Мета дії виражається зворотом um ... zu + Infinitiv.'
      },
      {
        type: 'choice',
        sourceLessonId: 'a2_13_nebensaetze_konjunktionen',
        topicTag: 'Складнопідрядні речення',
        prompt: 'Як правильно побудувати речення з weil («тому що я маю час»)?',
        options: [
          'Ich helfe dir gern, weil ich Zeit habe.',
          'Ich helfe dir gern, weil ich habe Zeit.',
          'Ich helfe dir gern, weil habe ich Zeit.'
        ],
        answer: 'Ich helfe dir gern, weil ich Zeit habe.',
        explanation: 'У підрядному реченні з weil дієвідмінне дієслово habe стоїть у самому кінці.'
      }
    ]
  }
];
