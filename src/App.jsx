import React, { useState, useEffect, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Volume2, Flame, Trophy, Lock, CheckCircle2, XCircle,
  Share2, Sparkles, BookOpen, BrainCircuit, ArrowRight,
  RotateCcw, Crown, Check, Copy, X, Loader2, Mail, LogOut, User
} from 'lucide-react';

const SUPABASE_URL = 'https://vdjduptyloghojeqaglw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_L9Gw77mlbgOdzYt4-a6nEA_ZqeNxiui';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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

  // Стан користувача та авторизації
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [authSent, setAuthSent] = useState(false);
  const [authError, setAuthError] = useState('');

  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [selectedCategory, setSelectedCategory] = useState('colloquial');
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

  // Завантаження слів із Supabase
  useEffect(() => {
    async function fetchWords() {
      setLoading(true);
      const { data, error } = await supabase
        .from('vocabulary')
        .select('*')
        .order('id', { ascending: true });

      if (!error && data && data.length > 0) {
        const formatted = data.map((row) => ({
          id: row.id,
          level: row.level,
          category: row.category,
          article: row.article || '',
          word: row.word,
          plural: row.plural || '',
          translation: row.translation,
          example: row.example,
          exampleUa: row.example_ua
        }));
        setVocabulary(formatted);
      }
      setLoading(false);
    }
    fetchWords();
  }, []);

  // Завантаження або створення профілю в базі даних при вході
  const syncUserProfile = async (authUser) => {
    if (!authUser) return;
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', authUser.id)
      .single();

    if (profile) {
      const mergedXp = Math.max(profile.xp || 0, Number(localStorage.getItem('dmd_xp')) || 0);
      const localLearned = JSON.parse(localStorage.getItem('dmd_learned') || '[]');
      const dbLearned = Array.isArray(profile.learned_ids) ? profile.learned_ids : [];
      const mergedLearned = Array.from(new Set([...dbLearned, ...localLearned]));

      const proActive = Boolean(
        profile.is_pro && (!profile.pro_until || new Date(profile.pro_until) > new Date())
      );

      setXp(mergedXp);
      setStreak(Math.max(profile.streak || 1, Number(localStorage.getItem('dmd_streak')) || 1));
      setLearnedIds(mergedLearned);
      setIsPro(proActive);

      await supabase.from('profiles').update({
        xp: mergedXp,
        learned_ids: mergedLearned,
        updated_at: new Date().toISOString()
      }).eq('id', authUser.id);
    } else {
      const initialXp = Number(localStorage.getItem('dmd_xp')) || 0;
      const initialStreak = Number(localStorage.getItem('dmd_streak')) || 1;
      const initialLearned = JSON.parse(localStorage.getItem('dmd_learned') || '[]');

      await supabase.from('profiles').insert({
        id: authUser.id,
        email: authUser.email,
        xp: initialXp,
        streak: initialStreak,
        learned_ids: initialLearned,
        is_pro: false
      });
    }
  };

  // Відстеження сесії користувача
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) syncUserProfile(currentUser);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) syncUserProfile(currentUser);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Ініціалізація голосів озвучки
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  // Збереження прогресу локально та в хмару
  useEffect(() => {
    localStorage.setItem('dmd_xp', xp);
    localStorage.setItem('dmd_streak', streak);
    localStorage.setItem('dmd_learned', JSON.stringify(learnedIds));
    localStorage.setItem('dmd_pro', isPro);

    if (user) {
      supabase
        .from('profiles')
        .update({
          xp,
          streak,
          learned_ids: learnedIds,
          is_pro: isPro,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id)
        .then(() => {});
    }
  }, [xp, streak, learnedIds, isPro, user]);

  const handleSendLoginLink = async (e) => {
    e.preventDefault();
    if (!authEmail.trim()) return;
    setAuthLoading(true);
    setAuthError('');

    const { error } = await supabase.auth.signInWithOtp({
      email: authEmail.trim(),
      options: {
        emailRedirectTo: window.location.origin
      }
    });

    setAuthLoading(false);
    if (error) {
      setAuthError('Не вдалося надіслати лист. Перевір правильність пошти.');
    } else {
      setAuthSent(true);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsPro(false);
    localStorage.removeItem('dmd_pro');
  };

  const addXp = (points) =>
