import React, { useState, useEffect, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Volume2,
  Crown,
  User,
  LogOut,
  CheckCircle2,
  XCircle,
  Sparkles,
  BookOpen,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Share2,
  Trophy,
  Lock,
  ExternalLink,
  Copy,
  Check,
  X,
  FileText
} from 'lucide-react';
import { LEGAL_INFO } from './src/legal';

const SUPABASE_URL = 'https://vdjduptyloghojeqaglw.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkamR1cHR5bG9naG9qZXFhZ2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MzY3NTUsImV4cCI6MjA1ODQxMjc1NX0.m8r_j-n5d3q_e_v-A8R9zL2gH6yJ4wX1pC0tQ7uV3kM';
const MONO_JAR_URL = 'https://send.monobank.ua/jar/6yGqswy7kR';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const CATEGORIES = [
  { id: 'casual', label: 'Розмовна', icon: '💬' },
  { id: 'exam', label: 'Для іспитів', icon: '🎓' },
  { id: 'formal', label: 'Офіційна', icon: '💼' },
];

export default function App() {
  const [words, setWords] = useState([]);
  const [loadingWords, setLoadingWords] = useState(true);

  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [xp, setXp] = useState(() => Number(localStorage.getItem('dmd_xp') || 370));

  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [selectedCategory, setSelectedCategory] = useState('casual');
  const [mode, setMode] = useState('cards');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizOptions, setQuizOptions] = useState([]);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProModal, setShowProModal] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);

  const [authMode, setAuthMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const isPro = useMemo(() => {
    if (!profile?.is_pro) return false;
    if (!profile?.pro_until) return true;
    return new Date(profile.pro_until) > new Date();
  }, [profile]);

  // Завантаження слів із public/words.json
  useEffect(() => {
    fetch('/words.json')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        setWords(Array.isArray(data) ? data : []);
      })
      .catch(() => setWords([]))
      .finally(() => setLoadingWords(false));
  }, []);

  // Авторизація Supabase
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) fetchProfile(session.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user) fetchProfile(session.user);
      else setProfile(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function fetchProfile(user) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error && error.code === 'PGRST116') {
      const { data: created } = await supabase
        .from('profiles')
        .insert({
          id: user.id,
          email: user.email?.toLowerCase(),
          xp,
          is_pro: false,
        })
        .select()
        .single();
      if (created) setProfile(created);
    } else if (data) {
      setProfile(data);
      if (typeof data.xp === 'number') setXp(data.xp);
    }
  }

  async function addXp(points) {
    const nextXp = xp + points;
    setXp(nextXp);
    localStorage.setItem('dmd_xp', String(nextXp));
    if (session?.user) {
      await supabase.from('profiles').update({ xp: nextXp }).eq('id', session.user.id);
    }
  }

  const filteredWords = useMemo(() => {
    const list = words.filter(
      (w) =>
        (w.level || 'A1').toUpperCase() === selectedLevel &&
        (w.category || 'casual').toLowerCase() === selectedCategory
    );
    return list.length > 0 ? list : words.slice(0, 20);
  }, [words, selectedLevel, selectedCategory]);

  const accessibleWords = useMemo(() => {
    if (isPro) return filteredWords;
    return filteredWords.slice(0, 10);
  }, [filteredWords, isPro]);

  const currentWord = accessibleWords[currentIndex] || accessibleWords[0];

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setQuizAnswer(null);
  }, [selectedLevel, selectedCategory, mode]);

  useEffect(() => {
    if (mode !== 'quiz' || !currentWord) return;
    const pool = words.filter(
      (w) => w.translation && w.translation !== currentWord.translation
    );
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [...shuffled.map((w) => w.translation), currentWord.translation].sort(
      () => Math.random() - 0.5
    );
    setQuizOptions(opts);
    setQuizAnswer(null);
  }, [currentIndex, mode, currentWord, words]);

  function speakGerman(text) {
    if (!text || typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  }

  function handleSelectLevel(lvl) {
    if ((lvl === 'B1' || lvl === 'B2') && !isPro) {
      setShowProModal(true);
      return;
    }
    setSelectedLevel(lvl);
  }

  function handleNext() {
    if (!isPro && currentIndex + 1 >= 10 && filteredWords.length > 10) {
      setShowProModal(true);
      return;
    }
    setIsFlipped(false);
    setQuizAnswer(null);
    setCurrentIndex((prev) => (prev + 1) % accessibleWords.length);
  }

  function handlePrev() {
    setIsFlipped(false);
    setQuizAnswer(null);
    setCurrentIndex((prev) => (prev - 1 + accessibleWords.length) % accessibleWords.length);
  }

  function handleQuizPick(option) {
    if (quizAnswer !== null) return;
    setQuizAnswer(option);
    if (option === currentWord.translation) {
      addXp(20);
    }
  }

  async function handleAuthSubmit(e) {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);
    try {
      if (authMode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      }
      setShowAuthModal(false);
    } catch (err) {
      setAuthError(err.message || 'Помилка авторизації');
    } finally {
      setAuthLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setSession(null);
    setProfile(null);
  }

  function getStatusLabel(points) {
    if (points >= 1000) return 'Поліглот (Polyglott)';
    if (points >= 500) return 'Знавець німецької (Sprachkenner)';
    return 'Майстер німецької (Sprachprofi)';
  }

  function copyUserEmail() {
    if (!session?.user?.email) return;
    navigator.clipboard.writeText(session.user.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
              DE
            </div>
            <div>
              <div className="font-bold text-slate-900 leading-tight">
                deutsch <span className="text-amber-600">mit Dmytro</span>
              </div>
              <div className="text-xs text-slate-500">
                База слів: {words.length} шт. · A1–B2
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-full text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>{xp}</span>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'deutsch mit Dmytro',
                    url: window.location.href,
                  });
                }
              }}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition"
              title="Поділитися"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {session ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-100 transition"
                title={session.user.email}
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Вийти</span>
              </button>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-100 transition"
              >
                <User className="w-3.5 h-3.5" />
                <span>Увійти</span>
              </button>
            )}

            <button
              onClick={() => setShowProModal(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                isPro
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <Crown className="w-3.5 h-3.5" />
              <span>{isPro ? 'PRO Активний' : 'PRO'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl w-full mx-auto px-4 pt-6 space-y-6 flex-1">
        {/* Controls Card */}
        <section className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              1. Обери свій рівень
            </span>
            <span className="text-xs text-slate-500">
              Статус: <strong className="text-slate-800">{getStatusLabel(xp)}</strong>
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {LEVELS.map((lvl) => {
              const locked = (lvl === 'B1' || lvl === 'B2') && !isPro;
              const active = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => handleSelectLevel(lvl)}
                  className={`py-2.5 px-3 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 border transition ${
                    active
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span>{lvl}</span>
                  {locked && <Lock className="w-3.5 h-3.5 text-amber-500" />}
                </button>
              );
            })}
          </div>

          <div className="space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              2. Обери ціль та категорію
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition ${
                      active
                        ? 'bg-amber-50/70 border-amber-400 ring-1 ring-amber-400'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{cat.icon}</span>
                      <div>
                        <div className="font-bold text-sm text-slate-900">{cat.label}</div>
                        <div className="text-xs text-slate-500">Рівень {selectedLevel}</div>
                      </div>
                    </div>
                    {active && <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mode Switch & Counter */}
        <div className="flex items-center justify-between">
          <div className="inline-flex bg-slate-200/70 p-1 rounded-xl">
            <button
              onClick={() => setMode('cards')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition ${
                mode === 'cards'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Картки слів</span>
            </button>
            <button
              onClick={() => setMode('quiz')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition ${
                mode === 'quiz'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Тест (+20 XP)</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Слово <strong className="text-slate-900">{accessibleWords.length ? currentIndex + 1 : 0}</strong> з{' '}
            <strong className="text-slate-900">{accessibleWords.length}</strong>
            {!isPro && filteredWords.length > 10 && (
              <button
                onClick={() => setShowProModal(true)}
                className="ml-2 text-amber-600 font-bold hover:underline"
              >
                (PRO: {filteredWords.length})
              </button>
            )}
          </div>
        </div>

        {/* Loading or Flashcard / Quiz */}
        {loadingWords ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center text-sm text-slate-500">
            Завантаження бази слів...
          </div>
        ) : (
          <>
            {currentWord && mode === 'cards' && (
              <div className="space-y-4">
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 min-h-[290px] flex flex-col justify-between cursor-pointer hover:border-slate-300 transition select-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                      {selectedLevel} ·{' '}
                      {CATEGORIES.find((c) => c.id === selectedCategory)?.label || 'Розмовна'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakGerman(
                          currentWord.article
                            ? `${currentWord.article} ${currentWord.german}`
                            : currentWord.german
                        );
                      }}
                      className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 flex items-center justify-center transition"
                      title="Прослухати вимову"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  {!isFlipped ? (
                    <div className="text-center my-auto py-6 space-y-2">
                      {currentWord.article && (
                        <span className="inline-block px-3 py-0.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold">
                          {currentWord.article}
                        </span>
                      )}
                      <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                        {currentWord.german}
                      </h2>
                      {currentWord.plural && (
                        <p className="text-sm text-slate-400">Множина: {currentWord.plural}</p>
                      )}
                    </div>
                  ) : (
                    <div className="text-center my-auto py-4 space-y-4">
                      <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                        {currentWord.translation}
                      </div>
                      {currentWord.example && (
                        <div className="bg-slate-50 rounded-2xl p-4 max-w-lg mx-auto border border-slate-100 space-y-1">
                          <div className="text-sm font-semibold text-slate-800">
                            «{currentWord.example}»
                          </div>
                          {currentWord.exampleTranslation && (
                            <div className="text-xs text-slate-500">
                              {currentWord.exampleTranslation}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Натисни на картку, щоб перевернути</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={handlePrev}
                    className="flex-1 py-3 px-4 rounded-xl bg-white border border-slate-200 font-bold text-sm text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Назад</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 flex items-center justify-center gap-1.5 transition"
                  >
                    <span>Наступне слово</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {currentWord && mode === 'quiz' && (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Обери правильний переклад
                  </span>
                  <button
                    onClick={() => speakGerman(currentWord.german)}
                    className="p-2 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 transition"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-center py-4">
                  {currentWord.article && (
                    <span className="text-xs font-bold text-sky-600 block mb-1">
                      {currentWord.article}
                    </span>
                  )}
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {currentWord.german}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quizOptions.map((opt, idx) => {
                    const isPicked = quizAnswer === opt;
                    const isCorrect = opt === currentWord.translation;
                    let style = 'bg-white border-slate-200 hover:border-slate-400 text-slate-800';
                    if (quizAnswer !== null) {
                      if (isCorrect) {
                        style = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold';
                      } else if (isPicked) {
                        style = 'bg-red-50 border-red-400 text-red-700';
                      } else {
                        style = 'bg-slate-50 border-slate-200 text-slate-400';
                      }
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleQuizPick(opt)}
                        className={`p-4 rounded-xl border text-left text-sm font-medium flex items-center justify-between transition ${style}`}
                      >
                        <span>{opt}</span>
                        {quizAnswer !== null && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {quizAnswer !== null && isPicked && !isCorrect && (
                          <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {quizAnswer !== null && (
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="py-2.5 px-5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 flex items-center gap-1.5 transition"
                    >
                      <span>Далі</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl w-full mx-auto px-4 pt-10 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
        <span>© {new Date().getFullYear()} deutsch mit Dmytro</span>
        <button
          onClick={() => setShowLegalModal(true)}
          className="inline-flex items-center gap-1 hover:text-slate-600 underline"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Умови та оферта</span>
        </button>
      </footer>

      {/* Legal Modal */}
      {showLegalModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-slate-900">Правова інформація</h3>
              <button
                onClick={() => setShowLegalModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-600 whitespace-pre-line leading-relaxed">
              {typeof LEGAL_INFO === 'string'
                ? LEGAL_INFO
                : JSON.stringify(LEGAL_INFO, null, 2)}
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-slate-900">
                {authMode === 'login' ? 'Вхід в акаунт' : 'Реєстрація'}
              </h3>
              <button
                onClick={() => setShowAuthModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Пароль</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Мінімум 6 символів"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-slate-900"
                />
              </div>

              {authError && <p className="text-xs text-red-600 font-medium">{authError}</p>}

              <button
                type="submit"
                disabled={authLoading}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition disabled:opacity-50"
              >
                {authLoading
                  ? 'Зачекайте...'
                  : authMode === 'login'
                  ? 'Увійти'
                  : 'Створити акаунт'}
              </button>
            </form>

            <div className="text-center text-xs text-slate-500">
              {authMode === 'login' ? (
                <>
                  Ще немає акаунту?{' '}
                  <button
                    onClick={() => setAuthMode('signup')}
                    className="text-amber-600 font-bold hover:underline"
                  >
                    Зареєструватися
                  </button>
                </>
              ) : (
                <>
                  Вже є акаунт?{' '}
                  <button
                    onClick={() => setAuthMode('login')}
                    className="text-amber-600 font-bold hover:underline"
                  >
                    Увійти
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* PRO Modal */}
      {showProModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900">deutsch mit Dmytro PRO</h3>
                  <p className="text-xs text-slate-500">Повний доступ до всіх рівнів та слів</p>
                </div>
              </div>
              <button
                onClick={() => setShowProModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Усі рівні: A1, A2, B1 та B2 без обмежень</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Повна база слів у кожній категорії та щоденне поповнення</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Автоматична активація за 10 секунд після оплати</span>
              </li>
            </ul>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="text-xs text-slate-500">1 місяць</div>
                <div className="font-extrabold text-base text-slate-900 mt-0.5">165 ₴</div>
              </div>
              <div className="p-3 rounded-2xl border-2 border-amber-400 bg-amber-50/50">
                <div className="text-xs text-amber-700 font-bold">3 місяці</div>
                <div className="font-extrabold text-base text-slate-900 mt-0.5">475 ₴</div>
              </div>
              <div className="p-3 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="text-xs text-slate-500">6 місяців</div>
                <div className="font-extrabold text-base text-slate-900 mt-0.5">900 ₴</div>
              </div>
            </div>

            {!session ? (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center space-y-2.5">
                <p className="text-xs text-amber-900 font-medium">
                  Спершу увійдіть або зареєструйтесь, щоб система знала, на який e-mail активувати
                  PRO-доступ.
                </p>
                <button
                  onClick={() => {
                    setShowProModal(false);
                    setShowAuthModal(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                >
                  Увійти / Зареєструватися
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2">
                  <div className="text-xs text-slate-600">
                    1. Скопіюйте ваш e-mail та вставте його в <strong>коментар до платежу</strong>{' '}
                    у Monobank:
                  </div>
                  <div className="flex items-center justify-between gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2">
                    <span className="text-xs font-mono font-bold text-slate-800 truncate">
                      {session.user.email}
                    </span>
                    <button
                      onClick={copyUserEmail}
                      className="flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 shrink-0"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Скопійовано</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Копіювати</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <a
                  href={MONO_JAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <span>Оплатити на Монобанку</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
