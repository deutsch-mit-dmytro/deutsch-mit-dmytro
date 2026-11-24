import React, { useState, useEffect, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Volume2, Flame, Trophy, Lock, CheckCircle2, XCircle,
  Share2, Sparkles, BookOpen, BrainCircuit, ArrowRight,
  RotateCcw, Crown, Check, Copy, X, Loader2, LogOut, User, ShieldCheck, FileText
} from 'lucide-react';

const SUPABASE_URL = 'https://vdjduptyloghojeqaglw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_L9Gw77mlbgOdzYt4-a6nEA_ZqeNxiui';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const FREE_WORDS_LIMIT = 5;

const VOICE_PROFILES = [
  { id: 'random', label: '🎲 Різні голоси', pitch: 1.0, rate: 0.92, gender: 'any' },
  { id: 'anna', label: '👩 Anna (чіткий)', pitch: 1.06, rate: 0.93, gender: 'female' },
  { id: 'martin', label: '👨 Martin (спокійний)', pitch: 0.84, rate: 0.90, gender: 'male' },
  { id: 'helena', label: '👩 Helena (жвавий)', pitch: 1.15, rate: 0.96, gender: 'female' },
  { id: 'markus', label: '👨 Markus (глибокий)', pitch: 0.76, rate: 0.88, gender: 'male' }
];

const PRIVACY_TEXT = [
  { title: '1. Загальні положення', body: 'Ця Політика конфіденційності визначає порядок обробки персональних даних користувачів платформи deutsch mit Dmytro, володільцем якої є Горішняк Дмитро Володимирович.' },
  { title: '2. Які дані збираються', body: 'Для створення акаунта та збереження навчального прогресу збираються лише email, зашифрований хеш пароля та статистика навчання (бали XP, вивчені слова, статус підписки).' },
  { title: '3. Платіжні дані', body: 'Сервіс не зберігає дані банківських карток. Оплата відбувається на захищеній сторінці сертифікованого платіжного провайдера.' },
  { title: '4. Захист та видалення даних', body: 'Дані зберігаються у захищеній базі Supabase (HTTPS/TLS, Row Level Security) згідно із законодавством України та GDPR. Запит на видалення даних: sirobabadima9@gmail.com.' }
];

const OFFER_TEXT = [
  { title: '1. Предмет договору', body: 'Виконавець (Горішняк Дмитро Володимирович) надає Користувачеві доступ до інтерактивного тренажера німецької мови deutsch mit Dmytro на умовах обраного тарифу PRO.' },
  { title: '2. Порядок надання доступу', body: 'Ознайомчий доступ (перші 5 слів у відкритих категоріях A1 та розмовної лексики A2) надається безкоштовно. Повний доступ до рівнів A1–B2 активується після оплати на 1, 3 або 6 місяців.' },
  { title: '3. Повернення коштів', body: 'Оскільки цифровий доступ надається миттєво у повному обсязі, повернення коштів можливе протягом 14 днів лише у разі технічної неможливості надання доступу з вини Виконавця. Контакт: sirobabadima9@gmail.com.' }
];

const FALLBACK_DATA = [
  { id: 1, level: 'A1', category: 'colloquial', article: 'der', word: 'Kumpel', plural: 'die Kumpels', translation: 'приятель, друзяка', example: 'Mein Kumpel kommt heute Abend vorbei.', exampleUa: 'Мій приятель завітає сьогодні ввечері.' },
  { id: 2, level: 'A1', category: 'exam', article: 'die', word: 'Anmeldung', plural: 'die Anmeldungen', translation: 'реєстрація, прописка', example: 'Für den Kurs braucht man eine Anmeldung.', exampleUa: 'Для курсу потрібна реєстрація.' },
  { id: 3, level: 'A1', category: 'official', article: 'der', word: 'Ausweis', plural: 'die Ausweise', translation: 'посвідчення особи', example: 'Zeigen Sie bitte Ihren Ausweis an der Kasse.', exampleUa: 'Покажіть, будь ласка, ваше посвідчення на касі.' },
  { id: 4, level: 'A2', category: 'colloquial', article: 'die', word: 'Lust', plural: '', translation: 'бажання, охота', example: 'Hast du heute Lust auf Kino?', exampleUa: 'Маєш сьогодні бажання піти в кіно?' },
  { id: 5, level: 'B1', category: 'exam', article: 'der', word: 'Vorteil', plural: 'die Vorteile', translation: 'перевага', example: 'Ein großer Vorteil ist die flexible Arbeitszeit.', exampleUa: 'Великою перевагою є гнучкий робочий графік.' },
  { id: 6, level: 'B2', category: 'official', article: 'die', word: 'Voraussetzung', plural: 'die Voraussetzungen', translation: 'передумова, вимога', example: 'Gute Deutschkenntnisse sind eine wichtige Voraussetzung.', exampleUa: 'Добре знання німецької є важливою вимогою.' }
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
  const [vocabulary, setVocabulary] = useState(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  const [authError, setAuthError] = useState('');

  const [legalModal, setLegalModal] = useState(null);

  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [selectedCategory, setSelectedCategory] = useState('colloquial');
  const [selectedVoice, setSelectedVoice] = useState('random');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [mode, setMode] = useState('cards');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [xp, setXp] = useState(() => Number(localStorage.getItem('dmd_xp')) || 0);
  const [xpGain, setXpGain] = useState(null);
  const [streak, setStreak] = useState(() => Number(localStorage.getItem('dmd_streak')) || 1);
  const [learnedIds, setLearnedIds] = useState(() => JSON.parse(localStorage.getItem('dmd_learned') || '[]'));
  const [isPro, setIsPro] = useState(() => localStorage.getItem('dmd_pro') === 'true');

  const [showPaywall, setShowPaywall] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('3m');
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizOptions, setQuizOptions] = useState([]);

  useEffect(() => {
    async function fetchWords() {
      setLoading(true);
      const { data, error } = await supabase.from('vocabulary').select('*').order('id', { ascending: true });
      if (!error && data && data.length > 0) {
        setVocabulary(data.map((row) => ({
          id: row.id, level: row.level, category: row.category,
          article: row.article || '', word: row.word, plural: row.plural || '',
          translation: row.translation, example: row.example, exampleUa: row.example_ua
        })));
      }
      setLoading(false);
    }
    fetchWords();
  }, []);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  }, []);

  const syncUserProfile = async (authUser) => {
    if (!authUser) return;
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', authUser.id).single();

    if (profile) {
      const mergedXp = Math.max(profile.xp || 0, Number(localStorage.getItem('dmd_xp')) || 0);
      const localLearned = JSON.parse(localStorage.getItem('dmd_learned') || '[]');
      const dbLearned = Array.isArray(profile.learned_ids) ? profile.learned_ids : [];
      const mergedLearned = Array.from(new Set([...dbLearned, ...localLearned]));
      const proActive = Boolean(profile.is_pro && (!profile.pro_until || new Date(profile.pro_until) > new Date()));

      setXp(mergedXp);
      setStreak(Math.max(profile.streak || 1, Number(localStorage.getItem('dmd_streak')) || 1));
      setLearnedIds(mergedLearned);
      setIsPro(proActive);

      await supabase.from('profiles').update({
        xp: mergedXp, learned_ids: mergedLearned, updated_at: new Date().toISOString()
      }).eq('id', authUser.id);
    } else {
      await supabase.from('profiles').insert({
        id: authUser.id, email: authUser.email,
        xp: Number(localStorage.getItem('dmd_xp')) || 0,
        streak: Number(localStorage.getItem('dmd_streak')) || 1,
        learned_ids: JSON.parse(localStorage.getItem('dmd_learned') || '[]'),
        is_pro: false
      });
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) syncUserProfile(currentUser);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (event === 'PASSWORD_RECOVERY') {
        setAuthMode('update_password');
        setAuthError('');
        setAuthMessage('');
        setShowAuthModal(true);
      } else if (currentUser) {
        syncUserProfile(currentUser);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    localStorage.setItem('dmd_xp', xp);
    localStorage.setItem('dmd_streak', streak);
    localStorage.setItem('dmd_learned', JSON.stringify(learnedIds));
    localStorage.setItem('dmd_pro', isPro);

    if (user) {
      supabase.from('profiles').update({
        xp, streak, learned_ids: learnedIds, is_pro: isPro, updated_at: new Date().toISOString()
      }).eq('id', user.id).then(() => {});
    }
  }, [xp, streak, learnedIds, isPro, user]);

  const speakGerman = (text) => {
    const cleanText = (text || '').trim();
    if (!cleanText || !('speechSynthesis' in window)) return;

    const synth = window.speechSynthesis;
    if (synth.speaking) synth.cancel();
    synth.resume();

    const specificProfiles = VOICE_PROFILES.filter((p) => p.id !== 'random');
    const profile = selectedVoice === 'random'
      ? specificProfiles[Math.floor(Math.random() * specificProfiles.length)]
      : specificProfiles.find((p) => p.id === selectedVoice) || specificProfiles[0];

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'de-DE';
    utterance.pitch = profile.pitch;
    utterance.rate = profile.rate;

    const deVoices = synth.getVoices().filter((v) => v.lang.toLowerCase().startsWith('de'));
    if (deVoices.length > 0) {
      const maleVoice = deVoices.find((v) => /martin|markus|viktor|stefan|male|hans/i.test(v.name));
      const femaleVoice = deVoices.find((v) => /anna|helena|petra|marlene|female|katja/i.test(v.name));
      if (profile.gender === 'male' && maleVoice) utterance.voice = maleVoice;
      else if (profile.gender === 'female' && femaleVoice) utterance.voice = femaleVoice;
      else utterance.voice = deVoices[0];
    }

    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    synth.speak(utterance);
  };

  const openAuth = (targetMode = 'login') => {
    setAuthMode(targetMode);
    setAuthError('');
    setAuthMessage('');
    setShowAuthModal(true);
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthMessage('');
    setAuthLoading(true);

    try {
      if (authMode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email: authEmail.trim(), password: authPassword });
        if (error) setAuthError('Невірна пошта або пароль. Натисни «Забули пароль?», щоб задати новий.');
        else { setShowAuthModal(false); setAuthPassword(''); }
      } else if (authMode === 'register') {
        if (!agreedTerms) { setAuthError('Підтверди згоду з Політикою конфіденційності та Офертою.'); return; }
        if (authPassword.length < 6) { setAuthError('Пароль має містити щонайменше 6 символів.'); return; }
        const { data, error } = await supabase.auth.signUp({
          email: authEmail.trim(), password: authPassword, options: { emailRedirectTo: window.location.origin }
        });
        if (error) setAuthError(error.message || 'Помилка реєстрації.');
        else if (data?.session) { setShowAuthModal(false); setAuthPassword(''); }
        else setAuthMessage(`Лист підтвердження надіслано на ${authEmail}. Перейди за посиланням у листі.`);
      } else if (authMode === 'forgot') {
        const { error } = await supabase.auth.resetPasswordForEmail(authEmail.trim(), { redirectTo: window.location.origin });
        if (error) setAuthError('Не вдалося надіслати лист. Перевір пошту.');
        else setAuthMessage(`Посилання для відновлення пароля надіслано на ${authEmail}.`);
      } else if (authMode === 'update_password') {
        if (newPassword.length < 6) { setAuthError('Мінімум 6 символів.'); return; }
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        if (error) setAuthError('Не вдалося оновити пароль.');
        else { setAuthMessage('Пароль успішно оновлено!'); setNewPassword(''); setTimeout(() => setShowAuthModal(false), 1500); }
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsPro(false);
    localStorage.removeItem('dmd_pro');
  };

  const addXp = (points) => {
    setXp((prev) => prev + points);
    setXpGain(`+${points} XP`);
    setTimeout(() => setXpGain(null), 1500);
  };

  const isLocked = (lvl, cat) => {
    if (isPro) return false;
    if (lvl === 'A1') return false;
    if (lvl === 'A2' && cat === 'colloquial') return false;
    return true;
  };

  const handleSelectModule = (lvl, cat) => {
    if (isLocked(lvl, cat)) { setShowPaywall(true); return; }
    setSelectedLevel(lvl);
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setIsFlipped(false);
    setQuizAnswer(null);
  };

  const allCategoryWords = useMemo(() => {
    const list = vocabulary.filter((item) => item.level === selectedLevel && item.category === selectedCategory);
    return list.length > 0 ? list : vocabulary;
  }, [vocabulary, selectedLevel, selectedCategory]);

  const filteredWords = useMemo(() => {
    return isPro ? allCategoryWords : allCategoryWords.slice(0, FREE_WORDS_LIMIT);
  }, [allCategoryWords, isPro]);

  const goToNextWord = () => {
    const nextIndex = currentIndex + 1;
    if (!isPro && nextIndex >= filteredWords.length && allCategoryWords.length > FREE_WORDS_LIMIT) {
      setShowPaywall(true);
      return;
    }
    setIsFlipped(false);
    setCurrentIndex(nextIndex % filteredWords.length);
  };

  const currentWord = filteredWords[currentIndex] || filteredWords[0];
  const isCurrentLearned = currentWord ? learnedIds.includes(currentWord.id) : false;

  useEffect(() => {
    if (!currentWord) return;
    const others = vocabulary.filter((w) => w.id !== currentWord.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    setQuizOptions([...others, currentWord].sort(() => 0.5 - Math.random()));
    setQuizAnswer(null);
  }, [currentWord, mode, vocabulary]);

  const getArticleColor = (article) => {
    if (article === 'der') return 'text-blue-600 bg-blue-50 border-blue-200';
    if (article === 'die') return 'text-rose-600 bg-rose-50 border-rose-200';
    if (article === 'das') return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    return 'text-slate-600 bg-slate-100 border-slate-200';
  };

  const handleMarkLearned = () => {
    if (!isCurrentLearned) {
      setLearnedIds((prev) => [...prev, currentWord.id]);
      addXp(15);
    } else {
      addXp(5);
    }
    goToNextWord();
  };

  const handleQuizChoice = (option) => {
    if (quizAnswer) return;
    setQuizAnswer(option.id);
    if (option.id === currentWord.id) {
      addXp(20);
      if (!learnedIds.includes(currentWord.id)) setLearnedIds((prev) => [...prev, currentWord.id]);
      speakGerman(currentWord.word);
    }
  };

  const getRank = () => {
    if (xp < 100) return 'Початківець (Anfänger)';
    if (xp < 300) return 'Знавець лексики (Wortkenner)';
    if (xp < 600) return 'Майстер німецької (Sprachprofi)';
    return 'Легенда deutsch mit Dmytro';
  };

  const shareText = `🇩🇪 Мій прогрес у deutsch mit Dmytro:\n✨ ${xp} XP балів\n📚 Вивчено слів: ${learnedIds.length}\n🔥 Серія: ${streak} дн.`;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-red-500 to-slate-900 flex items-center justify-center text-white font-bold shadow-sm">
              DE
            </div>
            <div>
              <h1 className="font-bold text-sm sm:text-lg leading-tight tracking-tight">
                deutsch mit <span className="text-amber-600">Dmytro</span>
              </h1>
              <p className="text-[11px] text-slate-500 hidden sm:block">База слів: {vocabulary.length} шт. • A1–B2</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <div className="relative flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-amber-200">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>{xp}</span>
              {xpGain && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                  {xpGain}
                </span>
              )}
            </div>

            <div className="hidden xs:flex items-center gap-1 bg-orange-50 text-orange-700 px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-orange-200">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span>{streak}</span>
            </div>

            <button onClick={() => setShowShareModal(true)} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition">
              <Share2 className="w-4 h-4" />
            </button>

            {!user ? (
              <button onClick={() => openAuth('login')} className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition">
                <User className="w-3.5 h-3.5" />
                <span>Увійти</span>
              </button>
            ) : (
              <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-full text-xs font-medium text-slate-700">
                <span className="max-w-[90px] sm:max-w-[140px] truncate">{user.email}</span>
                <button onClick={handleLogout} className="p-1 rounded-full hover:bg-slate-200 text-slate-500 hover:text-rose-600">
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {!isPro ? (
              <button onClick={() => setShowPaywall(true)} className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition shadow-sm">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Абонемент</span>
                <span className="sm:hidden">PRO</span>
              </button>
            ) : (
              <span className="flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2.5 py-1.5 rounded-full text-xs font-bold">
                <Crown className="w-3.5 h-3.5" /> PRO
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl w-full mx-auto px-4 pt-6 pb-12 space-y-6 flex-1">
        <section className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">1. Обери свій рівень</h2>
            <span className="text-xs text-slate-500 font-medium">Статус: <strong className="text-slate-800">{getRank()}</strong></span>
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
                    active ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{lvl}</span>
                  {locked && <Lock className="w-3.5 h-3.5 text-amber-500" />}
                </button>
              );
            })}
          </div>

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
                      active ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{cat.icon}</span>
                      <div>
                        <div className="font-semibold text-sm">{cat.label}</div>
                        <div className="text-[11px] text-slate-400">
                          {locked ? `Рівень ${selectedLevel} • PRO` : !isPro ? `Перші ${FREE_WORDS_LIMIT} слів безкоштовно` : `Рівень ${selectedLevel}`}
                        </div>
                      </div>
                    </div>
                    {locked ? <Lock className="w-4 h-4 text-amber-500" /> : active && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

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

          <div className="flex items-center gap-2.5">
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:border-amber-400"
            >
              {VOICE_PROFILES.map((v) => (
                <option key={v.id} value={v.id}>{v.label}</option>
              ))}
            </select>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500">
              {loading && <Loader2 className="w-4 h-4 animate-spin text-amber-600" />}
              <span>
                <strong className="text-slate-900">{currentIndex + 1}</strong> / {filteredWords.length}
                {!isPro && allCategoryWords.length > FREE_WORDS_LIMIT && (
                  <button onClick={() => setShowPaywall(true)} className="ml-1.5 text-amber-700 font-semibold hover:underline">
                    (усього {allCategoryWords.length} у PRO)
                  </button>
                )}
              </span>
            </div>
          </div>
        </div>

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
                  className={`p-3 rounded-full transition ${
                    isSpeaking ? 'bg-amber-500 text-white scale-105' : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                  }`}
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
                <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">{currentWord.word}</h3>
                {currentWord.plural && <p className="text-sm text-slate-400">Множина: {currentWord.plural}</p>}

                {isFlipped ? (
                  <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
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
                {isCurrentLearned && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Вивчено
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={goToNextWord} className="flex-1 py-3.5 px-4 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 font-semibold text-slate-700 transition flex items-center justify-center gap-2">
                <RotateCcw className="w-4 h-4" /> Повторити пізніше
              </button>
              <button onClick={handleMarkLearned} className="flex-1 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition flex items-center justify-center gap-2 shadow-sm">
                <span>{isCurrentLearned ? 'Закріпити слово (+5 XP)' : 'Знаю це слово (+15 XP)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        )}

        {currentWord && mode === 'quiz' && (
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Обери правильний переклад</span>
              <button onClick={() => speakGerman(`${currentWord.article} ${currentWord.word}`)} className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full hover:bg-amber-100">
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
                  <button key={option.id} onClick={() => handleQuizChoice(option)} className={`p-4 rounded-2xl border-2 text-left transition flex items-center justify-between ${btnStyle}`}>
                    <span>{option.translation}</span>
                    {quizAnswer && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                    {quizAnswer && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {quizAnswer && (
              <div className="pt-2 flex justify-end">
                <button onClick={goToNextWord} className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
                  Наступне слово <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </section>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} <strong>deutsch mit Dmytro</strong></div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setLegalModal('privacy')} className="hover:text-slate-900 underline">Політика конфіденційності</button>
            <button onClick={() => setLegalModal('offer')} className="hover:text-slate-900 underline">Публічна оферта</button>
            <a href="mailto:sirobabadima9@gmail.com" className="hover:text-slate-900">Підтримка</a>
          </div>
        </div>
      </footer>

      {showAuthModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-5">
            <button onClick={() => setShowAuthModal(false)} className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600"><X className="w-4 h-4" /></button>

            {(authMode === 'login' || authMode === 'register') && (
              <div className="inline-flex bg-slate-100 p-1 rounded-xl w-full">
                <button type="button" onClick={() => openAuth('login')} className={`flex-1 py-2 rounded-lg text-xs font-bold ${authMode === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Вхід</button>
                <button type="button" onClick={() => openAuth('register')} className={`flex-1 py-2 rounded-lg text-xs font-bold ${authMode === 'register' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>Реєстрація</button>
              </div>
            )}

            <h3 className="text-2xl font-extrabold text-slate-900">
              {authMode === 'login' && 'З поверненням!'}
              {authMode === 'register' && 'Створити акаунт'}
              {authMode === 'forgot' && 'Відновлення пароля'}
              {authMode === 'update_password' && 'Новий пароль'}
            </h3>

            {authMessage ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center space-y-2">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
                <p className="text-xs text-emerald-900">{authMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="space-y-3.5">
                {authMode !== 'update_password' && (
                  <input type="email" required value={authEmail} onChange={(e) => setAuthEmail(e.target.value)} placeholder="Електронна пошта" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm" />
                )}

                {(authMode === 'login' || authMode === 'register') && (
                  <div className="space-y-1">
                    <input type="password" required minLength={6} value={authPassword} onChange={(e) => setAuthPassword(e.target.value)} placeholder="Пароль (мінімум 6 символів)" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm" />
                    {authMode === 'login' && (
                      <div className="text-right">
                        <button type="button" onClick={() => openAuth('forgot')} className="text-xs font-semibold text-amber-600 hover:underline">Забули пароль?</button>
                      </div>
                    )}
                  </div>
                )}

                {authMode === 'update_password' && (
                  <input type="password" required minLength={6} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Новий пароль (мінімум 6 символів)" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm" />
                )}

                {authMode === 'register' && (
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                    <input type="checkbox" checked={agreedTerms} onChange={(e) => setAgreedTerms(e.target.checked)} className="mt-0.5 rounded" />
                    <span>
                      Погоджуюся з <button type="button" onClick={() => setLegalModal('privacy')} className="text-amber-700 underline font-semibold">Політикою конфіденційності</button> та <button type="button" onClick={() => setLegalModal('offer')} className="text-amber-700 underline font-semibold">Публічною офертою</button>.
                    </span>
                  </label>
                )}

                {authError && <p className="text-xs font-semibold text-rose-600">{authError}</p>}

                <button type="submit" disabled={authLoading} className="w-full py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2">
                  {authLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>
                    {authMode === 'login' && 'Увійти'}
                    {authMode === 'register' && 'Зареєструватися'}
                    {authMode === 'forgot' && 'Відновити пароль'}
                    {authMode === 'update_password' && 'Зберегти пароль'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {legalModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                {legalModal === 'privacy' ? <ShieldCheck className="w-5 h-5 text-emerald-600" /> : <FileText className="w-5 h-5 text-amber-600" />}
                <h3 className="font-extrabold text-lg">{legalModal === 'privacy' ? 'Політика конфіденційності' : 'Публічна оферта'}</h3>
              </div>
              <button onClick={() => setLegalModal(null)} className="p-2 rounded-full bg-slate-100"><X className="w-4 h-4" /></button>
            </div>
            <div className="p-5 overflow-y-auto space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {(legalModal === 'privacy' ? PRIVACY_TEXT : OFFER_TEXT).map((item, idx) => (
                <p key={idx}><strong>{item.title}.</strong> {item.body}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {showPaywall && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-5">
            <button onClick={() => setShowPaywall(false)} className="absolute top-5 right-5 p-2 rounded-full bg-slate-100"><X className="w-4 h-4" /></button>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold"><Crown className="w-3.5 h-3.5" /> Повний абонемент PRO</div>
              <h3 className="text-2xl font-extrabold">Відкрий усі слова та рівні A1–B2</h3>
              <p className="text-sm text-slate-600">Безкоштовно доступні перші 5 слів. З підпискою відкривається вся база слів без обмежень.</p>
            </div>

            {!user && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 flex items-center justify-between gap-3">
                <p className="text-xs text-amber-900">Спершу увійди в акаунт, щоб зберегти підписку.</p>
                <button onClick={() => { setShowPaywall(false); openAuth('register'); }} className="shrink-0 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-2 rounded-xl">Увійти</button>
              </div>
            )}

            <div className="grid grid-cols-3 gap-2.5">
              {PLANS.map((plan) => (
                <button key={plan.id} onClick={() => setSelectedPlan(plan.id)} className={`relative p-3.5 rounded-2xl border-2 text-left ${selectedPlan === plan.id ? 'border-amber-500 bg-amber-50/60' : 'border-slate-200'}`}>
                  {plan.discount && <span className="absolute -top-2.5 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{plan.discount}</span>}
                  <div className="text-xs font-bold text-slate-500">{plan.title}</div>
                  <div className="my-2 text-xl font-extrabold">{plan.price} ₴</div>
                  <div className="text-[11px] text-slate-600">{plan.perMonth} грн/міс</div>
                </button>
              ))}
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={() => {
                  if (!user) { setShowPaywall(false); openAuth('register'); return; }
                  alert('Оплата для ' + user.email + ' на суму ' + PLANS.find(p => p.id === selectedPlan).price + ' грн');
                }}
                className="w-full py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm"
              >
                Оформити абонемент ({PLANS.find((p) => p.id === selectedPlan)?.price} грн)
              </button>
              <button onClick={() => { setIsPro(true); setShowPaywall(false); }} className="w-full py-2.5 rounded-xl bg-amber-100 text-amber-900 font-semibold text-xs">
                🧪 Демо-режим: активувати PRO безкоштовно для тесту
              </button>
            </div>
          </div>
        </div>
      )}

      {showShareModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-5">
            <button onClick={() => setShowShareModal(false)} className="absolute top-5 right-5 p-2 rounded-full bg-slate-100"><X className="w-4 h-4" /></button>
            <h3 className="text-xl font-extrabold">Поділитися прогресом</h3>
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white p-6 rounded-2xl space-y-4">
              <div className="flex justify-between"><span className="font-bold text-amber-400 text-sm">deutsch mit Dmytro 🇩🇪</span><Sparkles className="w-4 h-4 text-amber-300" /></div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/10 rounded-xl p-2.5"><div className="text-xl font-extrabold">{xp}</div><div className="text-[10px] uppercase">Балів XP</div></div>
                <div className="bg-white/10 rounded-xl p-2.5"><div className="text-xl font-extrabold">{learnedIds.length}</div><div className="text-[10px] uppercase">Слів</div></div>
                <div className="bg-white/10 rounded-xl p-2.5"><div className="text-xl font-extrabold">{streak} 🔥</div><div className="text-[10px] uppercase">Днів</div></div>
              </div>
            </div>
            <button onClick={handleCopyShare} className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Скопійовано!' : 'Скопіювати результат'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
