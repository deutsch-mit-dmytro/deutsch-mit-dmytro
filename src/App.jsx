import React, { useState, useEffect, useMemo } from 'react';
import {
  Volume2, Flame, Trophy, Lock, CheckCircle2, XCircle,
  Share2, Sparkles, BookOpen, BrainCircuit, ArrowRight,
  RotateCcw, Crown, Check, Copy, X
} from 'lucide-react';

const VOCABULARY_DATA = [
  // A1 - Розмовна
  { id: 1, level: 'A1', category: 'colloquial', article: 'der', word: 'Kumpel', plural: 'die Kumpels', translation: 'приятель, друзяка', example: 'Mein Kumpel kommt heute Abend vorbei.', exampleUa: 'Мій приятель завітає сьогодні ввечері.' },
  { id: 2, level: 'A1', category: 'colloquial', article: '', word: 'quatschen', plural: '', translation: 'базікати, теревенити', example: 'Wir haben stundenlang im Café gequatscht.', exampleUa: 'Ми годинами теревенили в кав’ярні.' },
  { id: 3, level: 'A1', category: 'colloquial', article: 'das', word: 'Handy', plural: 'die Handys', translation: 'мобільний телефон', example: 'Wo liegt mein Handy schon wieder?', exampleUa: 'Де знову лежить мій телефон?' },
  { id: 4, level: 'A1', category: 'colloquial', article: '', word: 'lecker', plural: '', translation: 'смачний', example: 'Der Kuchen schmeckt wirklich lecker!', exampleUa: 'Пиріг смакує справді смачно!' },
  // A1 - Для іспитів
  { id: 5, level: 'A1', category: 'exam', article: 'die', word: 'Anmeldung', plural: 'die Anmeldungen', translation: 'реєстрація, прописка', example: 'Für den Kurs braucht man eine Anmeldung.', exampleUa: 'Для курсу потрібна реєстрація.' },
  { id: 6, level: 'A1', category: 'exam', article: 'der', word: 'Termin', plural: 'die Termine', translation: 'запис, призначена зустріч', example: 'Ich möchte einen Termin beim Arzt vereinbaren.', exampleUa: 'Я хочу домовитися про прийом у лікаря.' },
  { id: 7, level: 'A1', category: 'exam', article: '', word: 'buchstabieren', plural: '', translation: 'вимовляти по літерах', example: 'Können Sie Ihren Nachnamen bitte buchstabieren?', exampleUa: 'Чи можете ви, будь ласка, назвати своє прізвище по літерах?' },
  // A1 - Офіційна
  { id: 8, level: 'A1', category: 'official', article: 'der', word: 'Ausweis', plural: 'die Ausweise', translation: 'посвідчення особи', example: 'Zeigen Sie bitte Ihren Ausweis an der Kasse.', exampleUa: 'Покажіть, будь ласка, ваше посвідчення на касі.' },
  { id: 9, level: 'A1', category: 'official', article: 'die', word: 'Unterschrift', plural: 'die Unterschriften', translation: 'підпис', example: 'Hier fehlt noch Ihre Unterschrift.', exampleUa: 'Тут ще бракує вашого підпису.' },

  // A2 - Розмовна
  { id: 10, level: 'A2', category: 'colloquial', article: '', word: 'abhängen', plural: '', translation: 'залежати; тусуватися', example: 'Das hängt vom Wetter ab.', exampleUa: 'Це залежить від погоди.' },
  { id: 11, level: 'A2', category: 'colloquial', article: 'die', word: 'Lust', plural: '', translation: 'бажання, охота', example: 'Hast du heute Lust auf Kino?', exampleUa: 'Маєш сьогодні бажання піти в кіно?' },
  { id: 12, level: 'A2', category: 'colloquial', article: '', word: 'echt', plural: '', translation: 'справді, реально', example: 'Bist du dir da echt sicher?', exampleUa: 'Ти в цьому реально впевнений?' },
  // A2 - Для іспитів
  { id: 13, level: 'A2', category: 'exam', article: 'die', word: 'Erfahrung', plural: 'die Erfahrungen', translation: 'досвід', example: 'Er hat schon viel Erfahrung im Beruf.', exampleUa: 'Він уже має великий досвід у професії.' },
  { id: 14, level: 'A2', category: 'exam', article: '', word: 'sich entscheiden', plural: '', translation: 'вирішувати, приймати рішення', example: 'Ich habe mich für diesen Job entschieden.', exampleUa: 'Я зупинив свій вибір на цій роботі.' },
  // A2 - Офіційна
  { id: 15, level: 'A2', category: 'official', article: 'der', word: 'Antrag', plural: 'die Anträge', translation: 'заява, клопотання', example: 'Sie müssen einen Antrag auf Urlaub stellen.', exampleUa: 'Ви повинні подати заяву на відпустку.' },
  { id: 16, level: 'A2', category: 'official', article: 'die', word: 'Gebühr', plural: 'die Gebühren', translation: 'збір, мито, плата', example: 'Die Gebühr beträgt 25 Euro.', exampleUa: 'Збір становить 25 євро.' },

  // B1 - Розмовна
  { id: 17, level: 'B1', category: 'colloquial', article: '', word: 'sich aufregen', plural: '', translation: 'нервувати, обурюватися', example: 'Reg dich nicht wegen jeder Kleinigkeit auf!', exampleUa: 'Не нервуй через кожну дрібницю!' },
  { id: 18, level: 'B1', category: 'colloquial', article: 'der', word: 'Kram', plural: '', translation: 'мотлох, речі, справи', example: 'Pack deinen Kram zusammen, wir gehen.', exampleUa: 'Збирай свої манатки, ми йдемо.' },
  // B1 - Для іспитів
  { id: 19, level: 'B1', category: 'exam', article: 'der', word: 'Vorteil', plural: 'die Vorteile', translation: 'перевага', example: 'Ein großer Vorteil ist die flexible Arbeitszeit.', exampleUa: 'Великою перевагою є гнучкий робочий графік.' },
  { id: 20, level: 'B1', category: 'exam', article: '', word: 'vermeiden', plural: '', translation: 'уникати', example: 'Man sollte unnötigen Stress vermeiden.', exampleUa: 'Слід уникати зайвого стресу.' },
  // B1 - Офіційна
  { id: 21, level: 'B1', category: 'official', article: 'die', word: 'Bescheinigung', plural: 'die Bescheinigungen', translation: 'довідка, посвідчення', example: 'Wir benötigen eine ärztliche Bescheinigung.', exampleUa: 'Нам потрібна медична довідка.' },
  { id: 22, level: 'B1', category: 'official', article: '', word: 'kündigen', plural: '', translation: 'звільнятися, розривати договір', example: 'Er hat seinen Vertrag fristgerecht gekündigt.', exampleUa: 'Він вчасно розірвав свій договір.' },

  // B2 - Розмовна
  { id: 23, level: 'B2', category: 'colloquial', article: '', word: 'ausrasten', plural: '', translation: 'вийти з себе, зірватися', example: 'Als er das hörte, ist er komplett ausgerastet.', exampleUa: 'Коли він це почув, то повністю вийшов із себе.' },
  { id: 24, level: 'B2', category: 'colloquial', article: '', word: 'auf die Nerven gehen', plural: '', translation: 'діяти на нерви', example: 'Diese ständige Warterei geht mir auf die Nerven.', exampleUa: 'Це постійне очікування діє мені на нерви.' },
  // B2 - Для іспитів
  { id: 25, level: 'B2', category: 'exam', article: 'die', word: 'Herausforderung', plural: 'die Herausforderungen', translation: 'виклик, складне завдання', example: 'Der Umzug ins Ausland war eine große Herausforderung.', exampleUa: 'Переїзд за кордон став великим викликом.' },
  { id: 26, level: 'B2', category: 'exam', article: '', word: 'berücksichtigen', plural: '', translation: 'враховувати, брати до уваги', example: 'Man muss alle Aspekte dieses Problems berücksichtigen.', exampleUa: 'Потрібно врахувати всі аспекти цієї проблеми.' },
  // B2 - Офіційна
  { id: 27, level: 'B2', category: 'official', article: 'die', word: 'Voraussetzung', plural: 'die Voraussetzungen', translation: 'передумова, вимога', example: 'Gute Deutschkenntnisse sind eine wichtige Voraussetzung.', exampleUa: 'Добре знання німецької є важливою вимогою.' },
  { id: 28, level: 'B2', category: 'official', article: '', word: 'gewährleisten', plural: '', translation: 'гарантувати, забезпечувати', example: 'Die Firma gewährleistet höchste Qualität.', exampleUa: 'Компанія гарантує найвищу якість.' }
];

const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const CATEGORIES = [
  { id: 'colloquial', label: 'Розмовна', icon: '💬' },
  { id: 'exam', label: 'Для іспитів', icon: '🎓' },
  { id: 'official', label: 'Офіційна', icon: '💼' }
];

const PLANS = [
  { id: '1m', months: 1, title: '1 місяць', price: 169, oldPrice: null, discount: null, perMonth: 169 },
  { id: '3m', months: 3, title: '3 місяці', price: 482, oldPrice: 507, discount: '-5%', perMonth: 161, popular: true },
  { id: '6m', months: 6, title: '6 місяців', price: 913, oldPrice: 1014, discount: '-10%', perMonth: 152 }
];

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [selectedCategory, setSelectedCategory] = useState('colloquial');
  const [mode, setMode] = useState('cards'); // 'cards' | 'quiz'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [xp, setXp] = useState(() => Number(localStorage.getItem('dmd_xp')) || 0);
  const [streak, setStreak] = useState(() => Number(localStorage.getItem('dmd_streak')) || 1);
  const [learnedIds, setLearnedIds] = useState(() => JSON.parse(localStorage.getItem('dmd_learned') || '[]'));
  const [isPro, setIsPro] = useState(() => localStorage.getItem('dmd_pro') === 'true');

  const [showPaywall, setShowPaywall] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('3m');
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Quiz state
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizOptions, setQuizOptions] = useState([]);

  useEffect(() => {
    localStorage.setItem('dmd_xp', xp);
    localStorage.setItem('dmd_streak', streak);
    localStorage.setItem('dmd_learned', JSON.stringify(learnedIds));
    localStorage.setItem('dmd_pro', isPro);
  }, [xp, streak, learnedIds, isPro]);

  const isLocked = (lvl, cat) => {
    if (isPro) return false;
    if (lvl === 'A1') return false;
    if (lvl === 'A2' && cat === 'colloquial') return false;
    return true;
  };

  const handleSelectModule = (lvl, cat) => {
    if (isLocked(lvl, cat)) {
      setShowPaywall(true);
      return;
    }
    setSelectedLevel(lvl);
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setIsFlipped(false);
    setQuizAnswer(null);
  };

  const filteredWords = useMemo(() => {
    return VOCABULARY_DATA.filter(
      (item) => item.level === selectedLevel && item.category === selectedCategory
    );
  }, [selectedLevel, selectedCategory]);

  const currentWord = filteredWords[currentIndex] || filteredWords[0];

  useEffect(() => {
    if (!currentWord) return;
    const others = VOCABULARY_DATA.filter((w) => w.id !== currentWord.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    const options = [...others, currentWord].sort(() => 0.5 - Math.random());
    setQuizOptions(options);
    setQuizAnswer(null);
  }, [currentWord, mode]);

  const speakGerman = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  };

  const getArticleColor = (article) => {
    if (article === 'der') return 'text-blue-600 bg-blue-50 border-blue-200';
    if (article === 'die') return 'text-rose-600 bg-rose-50 border-rose-200';
    if (article === 'das') return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    return 'text-slate-600 bg-slate-100 border-slate-200';
  };

  const handleMarkLearned = () => {
    if (!learnedIds.includes(currentWord.id)) {
      setLearnedIds([...learnedIds, currentWord.id]);
      setXp((prev) => prev + 15);
    } else {
      setXp((prev) => prev + 5);
    }
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const handleQuizChoice = (option) => {
    if (quizAnswer) return;
    setQuizAnswer(option.id);
    if (option.id === currentWord.id) {
      setXp((prev) => prev + 20);
      if (!learnedIds.includes(currentWord.id)) {
        setLearnedIds([...learnedIds, currentWord.id]);
      }
      speakGerman(currentWord.word);
    }
  };

  const getRank = () => {
    if (xp < 100) return 'Початківець (Anfänger)';
    if (xp < 300) return 'Знавець лексики (Wortkenner)';
    if (xp < 600) return 'Майстер німецької (Sprachprofi)';
    return 'Легенда deutsch mit Dmytro';
  };

  const shareText = `🇩🇪 Мій прогрес у deutsch mit Dmytro:\n✨ ${xp} XP балів\n📚 Вивчено слів: ${learnedIds.length}\n🔥 Серія: ${streak} дн.\nВивчай німецьку A1–B2 за категоріями!`;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-red-500 to-slate-900 flex items-center justify-center text-white font-bold shadow-sm">
              DE
            </div>
            <div>
              <h1 className="font-bold text-base sm:text-lg leading-tight tracking-tight">
                deutsch mit <span className="text-amber-600">Dmytro</span>
              </h1>
              <p className="text-[11px] text-slate-500 hidden sm:block">Лексичний тренажер A1–B2</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-amber-200">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>{xp} XP</span>
            </div>

            <div className="flex items-center gap-1 bg-orange-50 text-orange-700 px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-orange-200">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span>{streak}</span>
            </div>

            <button
              onClick={() => setShowShareModal(true)}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              title="Поділитися результатом"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {!isPro ? (
              <button
                onClick={() => setShowPaywall(true)}
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition shadow-sm"
              >
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>Абонемент</span>
              </button>
            ) : (
              <span className="flex items-center gap-1 bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full text-xs font-bold">
                <Crown className="w-3.5 h-3.5" /> PRO активний
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-6 space-y-6">
        {/* Level Selector */}
        <section className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">1. Обери свій рівень</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Статус: <strong className="text-slate-800">{getRank()}</strong>
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {LEVELS.map((lvl) => {
              const active = selectedLevel === lvl;
              const locked = isLocked(lvl, selectedCategory);
              return (
                <button
                  key={lvl}
                  onClick={() => handleSelectModule(lvl, selectedCategory)}
                  className={`relative py-3 rounded-xl font-bold text-base transition flex items-center justify-center gap-1.5 border ${
                    active
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{lvl}</span>
                  {locked && <Lock className="w-3.5 h-3.5 text-amber-500" />}
                </button>
              );
            })}
          </div>

          {/* Category Selector */}
          <div className="pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2.5">2. Обери ціль та категорію</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.id;
                const locked = isLocked(selectedLevel, cat.id);
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectModule(selectedLevel, cat.id)}
                    className={`p-3 rounded-xl border text-left transition flex items-center justify-between ${
                      active
                        ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{cat.icon}</span>
                      <div>
                        <div className="font-semibold text-sm">{cat.label}</div>
                        <div className="text-[11px] text-slate-400">Рівень {selectedLevel}</div>
                      </div>
                    </div>
                    {locked ? (
                      <Lock className="w-4 h-4 text-amber-500" />
                    ) : (
                      active && <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mode Switcher & Progress */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex bg-slate-200/70 p-1 rounded-xl">
            <button
              onClick={() => setMode('cards')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                mode === 'cards' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Картки слів
            </button>
            <button
              onClick={() => setMode('quiz')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                mode === 'quiz' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BrainCircuit className="w-4 h-4" /> Тест (+20 XP)
            </button>
          </div>

          <div className="text-sm font-medium text-slate-500">
            Слово <span className="text-slate-900 font-bold">{currentIndex + 1}</span> з {filteredWords.length}
          </div>
        </div>

        {/* Learning Area */}
        {currentWord && mode === 'cards' && (
          <section className="space-y-4">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="bg-white border-2 border-slate-200 hover:border-amber-300 rounded-3xl p-6 sm:p-10 min-h-[300px] flex flex-col justify-between cursor-pointer transition shadow-sm relative"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                  {selectedLevel} • {CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakGerman(`${currentWord.article} ${currentWord.word}`);
                  }}
                  className="p-3 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 transition"
                  title="Прослухати вимову"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center my-6 space-y-3">
                {currentWord.article && (
                  <span className={`inline-block px-3 py-0.5 rounded-lg text-sm font-bold border ${getArticleColor(currentWord.article)}`}>
                    {currentWord.article}
                  </span>
                )}
                <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                  {currentWord.word}
                </h3>
                {currentWord.plural && (
                  <p className="text-sm text-slate-400">Множина: {currentWord.plural}</p>
                )}

                {isFlipped ? (
                  <div className="pt-6 mt-6 border-t border-slate-100 space-y-3 animate-fadeIn">
                    <p className="text-2xl font-bold text-amber-600">{currentWord.translation}</p>
                    <div className="bg-slate-50 p-4 rounded-2xl max-w-lg mx-auto text-left space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-slate-800">«{currentWord.example}»</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakGerman(currentWord.example);
                          }}
                          className="text-slate-400 hover:text-amber-600 p-1"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-500">{currentWord.exampleUa}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 pt-6">Натисни на картку, щоб побачити переклад і приклад</p>
                )}
              </div>

              <div className="flex justify-center">
                {learnedIds.includes(currentWord.id) && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Вивчено
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsFlipped(false);
                  setCurrentIndex((prev) => (prev + 1) % filteredWords.length);
                }}
                className="flex-1 py-3.5 px-4 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 font-semibold text-slate-700 transition flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Повторити пізніше
              </button>
              <button
                onClick={handleMarkLearned}
                className="flex-1 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Знаю це слово (+15 XP)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        )}

        {/* Quiz Mode */}
        {currentWord && mode === 'quiz' && (
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Обери правильний переклад</span>
              <button
                onClick={() => speakGerman(`${currentWord.article} ${currentWord.word}`)}
                className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full hover:bg-amber-100"
              >
                <Volume2 className="w-4 h-4" /> Озвучити
              </button>
            </div>

            <div className="text-center py-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {currentWord.article && <span className="text-slate-400 font-semibold mr-2">{currentWord.article}</span>}
                {currentWord.word}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quizOptions.map((option) => {
                const isSelected = quizAnswer === option.id;
                const isCorrect = option.id === currentWord.id;
                let btnStyle = 'bg-slate-50 border-slate-200 hover:border-slate-400 text-slate-800';

                if (quizAnswer) {
                  if (isCorrect) btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                  else if (isSelected) btnStyle = 'bg-rose-50 border-rose-500 text-rose-900';
                  else btnStyle = 'bg-slate-50 border-slate-200 opacity-50';
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleQuizChoice(option)}
                    className={`p-4 rounded-2xl border-2 text-left transition flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option.translation}</span>
                    {quizAnswer && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                    {quizAnswer && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {quizAnswer && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % filteredWords.length)}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                >
                  Наступне слово <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </section>
        )}
      </main>

      {/* Paywall Modal (Subscriptions) */}
      {showPaywall && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-fadeIn">
            <button
              onClick={() => setShowPaywall(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold">
                <Crown className="w-3.5 h-3.5" /> Повний абонемент deutsch mit Dmytro
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Відкрий усі рівні A1–B2 без обмежень</h3>
              <p className="text-sm text-slate-600">
                Повний доступ до розмовної лексики, баз для підготовки до іспитів (Goethe, telc) та офіційної німецької мови.
              </p>
            </div>

            {/* Subscription Plans */}
            <div className="grid grid-cols-3 gap-2.5">
              {PLANS.map((plan) => {
                const active = selectedPlan === plan.id;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative p-3.5 rounded-2xl border-2 text-left transition flex flex-col justify-between ${
                      active
                        ? 'border-amber-500 bg-amber-50/60 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {plan.discount && (
                      <span className="absolute -top-2.5 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {plan.discount}
                      </span>
                    )}
                    <div className="text-xs font-bold text-slate-500">{plan.title}</div>
                    <div className="my-2">
                      <div className="text-xl font-extrabold text-slate-900">{plan.price} ₴</div>
                      {plan.oldPrice && (
                        <div className="text-[11px] text-slate-400 line-through">{plan.oldPrice} ₴</div>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-600 font-medium">{plan.perMonth} грн/міс</div>
                  </button>
                );
              })}
            </div>

            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Усі рівні: A1, A2, B1 та B2
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Постійне поповнення нових слів та прикладів
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Озвучення вимови та безлімітні тести
              </li>
            </ul>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => {
                  alert('Тут буде перехід на оплату WayForPay / Monobank на суму ' + PLANS.find(p => p.id === selectedPlan).price + ' грн');
                }}
                className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition shadow-md"
              >
                Оформити абонемент ({PLANS.find((p) => p.id === selectedPlan)?.price} грн)
              </button>

              <button
                onClick={() => {
                  setIsPro(true);
                  setShowPaywall(false);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold text-xs transition"
              >
                🧪 Демо-режим: активувати PRO безкоштовно для тесту
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-5">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-extrabold text-slate-900">Поділитися прогресом</h3>

            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white p-6 rounded-2xl space-y-4 shadow-inner">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-400 text-sm">deutsch mit Dmytro 🇩🇪</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center py-2">
                <div className="bg-white/10 rounded-xl p-2.5">
                  <div className="text-xl font-extrabold">{xp}</div>
                  <div className="text-[10px] text-slate-300 uppercase">Балів XP</div>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <div className="text-xl font-extrabold">{learnedIds.length}</div>
                  <div className="text-[10px] text-slate-300 uppercase">Слів</div>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <div className="text-xl font-extrabold">{streak} 🔥</div>
                  <div className="text-[10px] text-slate-300 uppercase">Днів поспіль</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 text-center">Ранг: {getRank()}</p>
            </div>

            <button
              onClick={handleCopyShare}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Скопійовано для Stories / Telegram!' : 'Скопіювати текст результату'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
