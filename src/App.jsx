import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Volume2, Flame, Trophy, CheckCircle2, XCircle,
  Share2, Sparkles, BookOpen, BrainCircuit, ArrowRight,
  RotateCcw, Crown, Check, Copy, X, Loader2, LogOut, User, ShieldCheck, FileText, ExternalLink, Search, Keyboard, Compass, Camera, Pencil, Coins, Lightbulb, ShoppingBag, Heart
} from 'lucide-react';

const SUPABASE_URL = 'https://vdjduptyloghojeqaglw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_L9Gw77mlbgOdzYt4-a6nEA_ZqeNxiui';
const MONO_JAR_URL = 'https://send.monobank.ua/jar/6yGqswy7kR';
const LEVEL_TEST_URL = 'https://sites.google.com/view/deutschmitdmytro/full-page-embed';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const FREE_WORDS_LIMIT = 5;

const PRIVACY_TEXT = [
  { title: '1. Загальні положення', body: 'Ця Політика конфіденційності визначає порядок обробки персональних даних користувачів платформи deutsch mit Dmytro, володільцем якої є Горішняк Дмитро Володимирович.' },
  { title: '2. Які дані збираються', body: 'Для створення акаунта та збереження навчального прогресу збираються лише email, ім’я профілю, фото аватара, зашифрований хеш пароля та статистика навчання (бали XP, монети, прогрес улюбленця, вивчені слова, статус підписки).' },
  { title: '3. Платіжні дані', body: 'Сервіс не зберігає дані банківських карток. Оплата відбувається на захищеній сторінці сертифікованого платіжного провайдера.' },
  { title: '4. Захист та видалення даних', body: 'Дані зберігаються у захищеній базі Supabase (HTTPS/TLS, Row Level Security) згідно із законодавством України та GDPR. Запит на видалення даних: sirobabadima9@gmail.com.' }
];

const OFFER_TEXT = [
  { title: '1. Предмет договору', body: 'Виконавець (Горішняк Дмитро Володимирович) надає Користувачеві доступ до інтерактивного тренажера німецької мови deutsch mit Dmytro на умовах обраного тарифу PRO.' },
  { title: '2. Порядок надання доступу', body: 'Ознайомчий доступ (перші 5 слів у кожній категорії всіх рівнів A1–B2 — усього 60 слів) надається безкоштовно. Повний доступ до всієї бази слів рівнів A1–B2 активується після оплати на 1, 3 або 6 місяців.' },
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

const ARTICLES = ['der', 'die', 'das'];
const UMLAUT_CHARS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];

const PLANS = [
  { id: '1m', months: 1, title: '1 місяць', price: 169, oldPrice: null, discount: null, perMonth: 169 },
  { id: '3m', months: 3, title: '3 місяці', price: 482, oldPrice: 507, discount: '-5%', perMonth: 161, popular: true },
  { id: '6m', months: 6, title: '6 місяців', price: 913, oldPrice: 1014, discount: '-10%', perMonth: 152 }
];

const CAT_STAGES = [
  { level: 1, minXp: 0, title: 'Кошеня-початківець', emoji: '🐱', badge: 'Рівень 1' },
  { level: 2, minXp: 100, title: 'Допитливий мурчик', emoji: '😺', badge: 'Рівень 2' },
  { level: 3, minXp: 300, title: 'Кіт-словничок', emoji: '😸', badge: 'Рівень 3' },
  { level: 4, minXp: 650, title: 'Берлінський поліглот', emoji: '😼', badge: 'Рівень 4' },
  { level: 5, minXp: 1200, title: 'Магістр deutsch mit Dmytro', emoji: '🦁', badge: 'Рівень 5' }
];

const SHOP_ITEMS = [
  { id: 'milk', type: 'food', icon: '🥛', name: 'Тепле молочко', desc: '+20% ситості, +15 досвіду кота', price: 25, hunger: 20, petXp: 15 },
  { id: 'brezel', type: 'food', icon: '🥨', name: 'Німецький брецель', desc: '+35% ситості, +30 досвіду кота', price: 50, hunger: 35, petXp: 30 },
  { id: 'salmon', type: 'food', icon: '🍣', name: 'Філе лосося', desc: '+60% ситості, +55 досвіду кота', price: 90, hunger: 60, petXp: 55 },
  { id: 'cake', type: 'food', icon: '🍰', name: 'Шварцвальдський торт', desc: '100% ситості, +90 досвіду кота', price: 140, hunger: 100, petXp: 90 },
  { id: 'yarn', type: 'toy', icon: '🧶', name: 'Клубок вовни', desc: '+15% ситості, +45 досвіду кота', price: 65, hunger: 15, petXp: 45 },
  { id: 'laser', type: 'toy', icon: '🔦', name: 'Лазерна указка', desc: '+10% ситості, +80 досвіду кота', price: 110, hunger: 10, petXp: 80 },
  { id: 'acc_scarf', type: 'accessory', icon: '🧣', name: 'Шарф Німеччини', desc: 'Стильний аксесуар на кота', price: 180, petXp: 50 },
  { id: 'acc_glasses', type: 'accessory', icon: '👓', name: 'Окуляри розумника', desc: 'Образ справжнього філолога', price: 320, petXp: 90 },
  { id: 'acc_hat', type: 'accessory', icon: '🎩', name: 'Баварський капелюх', desc: 'Класика з Мюнхена', price: 500, petXp: 140 },
  { id: 'acc_crown', type: 'accessory', icon: '👑', name: 'Корона магістра', desc: 'Найвищий статус для кота', price: 900, petXp: 250 },
];

const DEFAULT_PET = {
  name: 'Schnurri',
  hunger: 80,
  xp: 0,
  feedsCount: 0,
  hintsUsed: 0,
  coinsSpent: 0,
  spellingDone: 0,
  ownedItems: [],
  equippedAccessory: null,
  freeHintDate: null
};

const ACHIEVEMENTS = [
  { id: 'first_step', icon: '🚀', title: 'Перший крок', desc: 'Почати навчання на платформі', check: (s) => s.streakDays >= 1 || s.learnedCount >= 1, getProgress: (s) => ({ current: Math.min(Math.max(s.streakDays, s.learnedCount), 1), target: 1 }) },
  { id: 'words_10', icon: '📖', title: 'Перша десятка', desc: 'Вивчити 10 німецьких слів', check: (s) => s.learnedCount >= 10, getProgress: (s) => ({ current: Math.min(s.learnedCount, 10), target: 10 }) },
  { id: 'words_25', icon: '🧠', title: 'Впевнений словник', desc: 'Вивчити 25 німецьких слів', check: (s) => s.learnedCount >= 25, getProgress: (s) => ({ current: Math.min(s.learnedCount, 25), target: 25 }) },
  { id: 'words_50', icon: '📚', title: 'Пів сотні в активі', desc: 'Вивчити 50 німецьких слів', check: (s) => s.learnedCount >= 50, getProgress: (s) => ({ current: Math.min(s.learnedCount, 50), target: 50 }) },
  { id: 'words_100', icon: '💯', title: 'Сотня слів', desc: 'Вивчити 100 німецьких слів', check: (s) => s.learnedCount >= 100, getProgress: (s) => ({ current: Math.min(s.learnedCount, 100), target: 100 }) },
  { id: 'words_200', icon: '🎓', title: 'Словниковий запас PRO', desc: 'Вивчити 200 німецьких слів', check: (s) => s.learnedCount >= 200, getProgress: (s) => ({ current: Math.min(s.learnedCount, 200), target: 200 }) },
  { id: 'words_250', icon: '👑', title: 'Повна база', desc: 'Вивчити 250+ слів із бази', check: (s) => s.learnedCount >= 250, getProgress: (s) => ({ current: Math.min(s.learnedCount, 250), target: 250 }) },
  { id: 'xp_100', icon: '⚡', title: 'Розминка', desc: 'Набрати 100 балів XP', check: (s) => s.xp >= 100, getProgress: (s) => ({ current: Math.min(s.xp, 100), target: 100 }) },
  { id: 'xp_300', icon: '✨', title: 'Перші 300 XP', desc: 'Набрати 300 балів XP', check: (s) => s.xp >= 300, getProgress: (s) => ({ current: Math.min(s.xp, 300), target: 300 }) },
  { id: 'xp_500', icon: '🔥', title: 'Пів тисячі балів', desc: 'Набрати 500 балів XP', check: (s) => s.xp >= 500, getProgress: (s) => ({ current: Math.min(s.xp, 500), target: 500 }) },
  { id: 'xp_1000', icon: '🏆', title: 'Тисячник', desc: 'Набрати 1 000 балів XP', check: (s) => s.xp >= 1000, getProgress: (s) => ({ current: Math.min(s.xp, 1000), target: 1000 }) },
  { id: 'xp_2500', icon: '💎', title: 'Марафонець XP', desc: 'Набрати 2 500 балів XP', check: (s) => s.xp >= 2500, getProgress: (s) => ({ current: Math.min(s.xp, 2500), target: 2500 }) },
  { id: 'xp_5000', icon: '🇩🇪', title: 'Легенда deutsch mit Dmytro', desc: 'Набрати 5 000 балів XP', check: (s) => s.xp >= 5000, getProgress: (s) => ({ current: Math.min(s.xp, 5000), target: 5000 }) },
  { id: 'streak_3', icon: '🕯️', title: 'Три дні поспіль', desc: 'Тримати серію 3 дні', check: (s) => s.streakDays >= 3, getProgress: (s) => ({ current: Math.min(s.streakDays, 3), target: 3 }) },
  { id: 'streak_7', icon: '📅', title: 'Тиждень без пропусків', desc: 'Тримати серію 7 днів поспіль', check: (s) => s.streakDays >= 7, getProgress: (s) => ({ current: Math.min(s.streakDays, 7), target: 7 }) },
  { id: 'streak_14', icon: '💪', title: 'Два тижні дисципліни', desc: 'Тримати серію 14 днів поспіль', check: (s) => s.streakDays >= 14, getProgress: (s) => ({ current: Math.min(s.streakDays, 14), target: 14 }) },
  { id: 'streak_30', icon: '🏅', title: 'Місяць німецької', desc: 'Тримати серію 30 днів поспіль', check: (s) => s.streakDays >= 30, getProgress: (s) => ({ current: Math.min(s.streakDays, 30), target: 30 }) },
  { id: 'level_a2', icon: '🎯', title: 'Знавець A2', desc: 'Вивчити перше слово рівня A2', check: (s) => s.hasLevelA2, getProgress: (s) => ({ current: s.hasLevelA2 ? 1 : 0, target: 1 }) },
  { id: 'level_b', icon: '🚀', title: 'Рівень B1–B2 у грі', desc: 'Вивчити перше слово рівня B1 або B2', check: (s) => s.hasLevelB1OrB2, getProgress: (s) => ({ current: s.hasLevelB1OrB2 ? 1 : 0, target: 1 }) },
  { id: 'pro_member', icon: '👑', title: 'Учень PRO', desc: 'Активувати повний абонемент PRO', check: (s) => s.isPro, getProgress: (s) => ({ current: s.isPro ? 1 : 0, target: 1 }) },

  // Нові досягнення для кота, правопису, монет і підказок (16 шт.)
  { id: 'cat_feed_1', icon: '🥛', title: 'Перший сніданок кота', desc: 'Погодувати або погратися з котом уперше', check: (s) => s.feedsCount >= 1, getProgress: (s) => ({ current: Math.min(s.feedsCount, 1), target: 1 }) },
  { id: 'cat_feed_5', icon: '🥨', title: 'Турботливий господар', desc: 'Погодувати кота 5 разів', check: (s) => s.feedsCount >= 5, getProgress: (s) => ({ current: Math.min(s.feedsCount, 5), target: 5 }) },
  { id: 'cat_feed_15', icon: '🍣', title: 'Шеф-кухар для кота', desc: 'Погодувати кота 15 разів', check: (s) => s.feedsCount >= 15, getProgress: (s) => ({ current: Math.min(s.feedsCount, 15), target: 15 }) },
  { id: 'cat_full', icon: '😻', title: 'Повне муркотіння', desc: 'Довести ситість кота до 100%', check: (s) => s.catHunger >= 100, getProgress: (s) => ({ current: Math.min(s.catHunger, 100), target: 100 }) },
  { id: 'cat_lvl_2', icon: '😺', title: 'Кіт підріс', desc: 'Прокачати кота до 2-го рівня', check: (s) => s.catLevel >= 2, getProgress: (s) => ({ current: Math.min(s.catLevel, 2), target: 2 }) },
  { id: 'cat_lvl_3', icon: '😸', title: 'Кіт-словничок', desc: 'Прокачати кота до 3-го рівня', check: (s) => s.catLevel >= 3, getProgress: (s) => ({ current: Math.min(s.catLevel, 3), target: 3 }) },
  { id: 'cat_lvl_5', icon: '🦁', title: 'Легендарний кіт', desc: 'Прокачати кота до 5-го рівня', check: (s) => s.catLevel >= 5, getProgress: (s) => ({ current: Math.min(s.catLevel, 5), target: 5 }) },
  { id: 'cat_acc_1', icon: '🧣', title: 'Перша обновка', desc: 'Купити перший аксесуар для кота', check: (s) => s.accessoriesCount >= 1, getProgress: (s) => ({ current: Math.min(s.accessoriesCount, 1), target: 1 }) },
  { id: 'cat_acc_4', icon: '🎩', title: 'Кіт-модник', desc: 'Зібрати всі 4 аксесуари для кота', check: (s) => s.accessoriesCount >= 4, getProgress: (s) => ({ current: Math.min(s.accessoriesCount, 4), target: 4 }) },
  { id: 'coins_200', icon: '🪙', title: 'Перші 200 монет', desc: 'Мати 200 монет на балансі', check: (s) => s.coins >= 200, getProgress: (s) => ({ current: Math.min(s.coins, 200), target: 200 }) },
  { id: 'coins_spent_300', icon: '🛍️', title: 'Щедрий власник', desc: 'Витратити 300 монет у крамничці кота', check: (s) => s.coinsSpent >= 300, getProgress: (s) => ({ current: Math.min(s.coinsSpent, 300), target: 300 }) },
  { id: 'coins_spent_1000', icon: '🏦', title: 'VIP-клієнт крамнички', desc: 'Витратити 1 000 монет на догляд за котом', check: (s) => s.coinsSpent >= 1000, getProgress: (s) => ({ current: Math.min(s.coinsSpent, 1000), target: 1000 }) },
  { id: 'hint_1', icon: '💡', title: 'Мяу-підказка', desc: 'Попросити підказку у кота під час вправи', check: (s) => s.hintsUsed >= 1, getProgress: (s) => ({ current: Math.min(s.hintsUsed, 1), target: 1 }) },
  { id: 'hint_10', icon: '🔮', title: 'Робота в команді', desc: 'Використати підказку кота 10 разів', check: (s) => s.hintsUsed >= 10, getProgress: (s) => ({ current: Math.min(s.hintsUsed, 10), target: 10 }) },
  { id: 'spell_1', icon: '✍️', title: 'Без жодної помилки', desc: 'Написати перше слово у режимі Правопис', check: (s) => s.spellingDone >= 1, getProgress: (s) => ({ current: Math.min(s.spellingDone, 1), target: 1 }) },
  { id: 'spell_15', icon: '🎯', title: 'Майстер артиклів та умлаутів', desc: 'Правильно написати 15 слів у Правописі', check: (s) => s.spellingDone >= 15, getProgress: (s) => ({ current: Math.min(s.spellingDone, 15), target: 15 }) },
];

const getLocalDateStr = (date = new Date()) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const getYesterdayDateStr = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return getLocalDateStr(d);
};

const resolveStreakOnLoad = (savedStreak, savedDate) => {
  const today = getLocalDateStr();
  const yesterday = getYesterdayDateStr();
  const numStreak = Math.max(Number(savedStreak) || 0, 0);

  if (!savedDate) {
    return { streak: numStreak || 1, lastActiveDate: null };
  }
  if (savedDate === today || savedDate === yesterday) {
    return { streak: Math.max(numStreak, 1), lastActiveDate: savedDate };
  }
  return { streak: 1, lastActiveDate: null };
};

const advanceStreakOnActivity = (currentStreak, lastActiveDate) => {
  const today = getLocalDateStr();
  const yesterday = getYesterdayDateStr();
  const numStreak = Math.max(Number(currentStreak) || 0, 0);

  if (lastActiveDate === today) {
    return { streak: Math.max(numStreak, 1), lastActiveDate: today };
  }
  if (lastActiveDate === yesterday) {
    return { streak: Math.max(numStreak, 1) + 1, lastActiveDate: today };
  }
  return { streak: 1, lastActiveDate: today };
};

const formatProUntilDate = (isoString) => {
  if (!isoString) return 'Безстроковий доступ';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '';
  return `до ${date.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
};

const getCatStageInfo = (petXp = 0) => {
  let current = CAT_STAGES[0];
  let next = null;
  for (let i = 0; i < CAT_STAGES.length; i++) {
    if (petXp >= CAT_STAGES[i].minXp) {
      current = CAT_STAGES[i];
      next = CAT_STAGES[i + 1] || null;
    }
  }
  const progressPercent = next
    ? Math.min(100, Math.round(((petXp - current.minXp) / (next.minXp - current.minXp)) * 100))
    : 100;
  return { current, next, progressPercent };
};

const buildCatHint = (wordObj, currentMode) => {
  if (!wordObj) return 'Обери слово, і я підкажу!';
  const w = (wordObj.word || '').trim();
  const art = (wordObj.article || '').trim().toLowerCase();

  if (currentMode === 'quiz') {
    if (wordObj.example) {
      return `Контекст із життя: «${wordObj.example}»`;
    }
    return `Це слово рівня ${wordObj.level}, перша літера перекладу: «${(wordObj.translation || '')[0] || ''}...»`;
  }

  const tips = [];
  if (art === 'der') tips.push('Чоловічий рід (der)');
  if (art === 'die') {
    if (w.endsWith('ung') || w.endsWith('heit') || w.endsWith('keit') || w.endsWith('schaft')) {
      tips.push('Закінчення вказує на жіночий рід (die)');
    } else {
      tips.push('Жіночий рід (die)');
    }
  }
  if (art === 'das') tips.push('Середній рід (das)');

  if (w.length >= 2) {
    tips.push(`Починається на «${w.slice(0, 2)}...» (${w.length} літер)`);
  }
  if (/[äöüßÄÖÜ]/.test(w)) {
    tips.push('У слові є умлаут або ß!');
  }
  return tips.join(' • ');
};

const resizeAvatarFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const size = 240;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        const minSide = Math.min(img.width, img.height);
        const sx = (img.width - minSide) / 2;
        const sy = (img.height - minSide) / 2;
        ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.onerror = reject;
      img.src = event.target?.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

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
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);
  const [profileTab, setProfileTab] = useState('pet'); // 'pet' | 'overview' | 'achievements' | 'dictionary'
  const [achFilter, setAchFilter] = useState('all');
  const [dictSearch, setDictSearch] = useState('');
  const [dictLevelFilter, setDictLevelFilter] = useState('ALL');

  const [fullName, setFullName] = useState(() => localStorage.getItem('dmd_full_name') || '');
  const [nameDraft, setNameDraft] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(() => localStorage.getItem('dmd_avatar_url') || '');
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileSavedMsg, setProfileSavedMsg] = useState('');
  const avatarInputRef = useRef(null);

  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [selectedCategory, setSelectedCategory] = useState('colloquial');
  const [reviewLearnedInModule, setReviewLearnedInModule] = useState(false);
  const [practiceAllLearnedMode, setPracticeAllLearnedMode] = useState(false);
  const [practiceLevelFilter, setPracticeLevelFilter] = useState('ALL');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef(null);

  const [mode, setMode] = useState('cards'); // 'cards' | 'quiz' | 'spelling'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const [xp, setXp] = useState(() => Number(localStorage.getItem('dmd_xp')) || 0);
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem('dmd_coins');
    return saved !== null ? Number(saved) : (Number(localStorage.getItem('dmd_xp')) || 0);
  });
  const [xpGain, setXpGain] = useState(null);

  // Стан улюбленця-кота
  const [pet, setPet] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('dmd_pet') || 'null');
      return saved ? { ...DEFAULT_PET, ...saved } : DEFAULT_PET;
    } catch {
      return DEFAULT_PET;
    }
  });
  const [isEditingPetName, setIsEditingPetName] = useState(false);
  const [petNameDraft, setPetNameDraft] = useState('');
  const [catReaction, setCatReaction] = useState('Мяу! Готовий вчити нові німецькі слова? 🐾');
  const [activeHint, setActiveHint] = useState('');

  const [streak, setStreak] = useState(() => {
    const savedStreak = Number(localStorage.getItem('dmd_streak')) || 1;
    const savedDate = localStorage.getItem('dmd_last_active');
    return resolveStreakOnLoad(savedStreak, savedDate).streak;
  });
  const [lastActiveDate, setLastActiveDate] = useState(() => {
    const savedStreak = Number(localStorage.getItem('dmd_streak')) || 1;
    const savedDate = localStorage.getItem('dmd_last_active');
    return resolveStreakOnLoad(savedStreak, savedDate).lastActiveDate;
  });
  const lastActiveDateRef = useRef(lastActiveDate);
  useEffect(() => {
    lastActiveDateRef.current = lastActiveDate;
  }, [lastActiveDate]);

  const [learnedIds, setLearnedIds] = useState(() => JSON.parse(localStorage.getItem('dmd_learned') || '[]'));
  const [isPro, setIsPro] = useState(() => localStorage.getItem('dmd_pro') === 'true');
  const [proUntil, setProUntil] = useState(() => localStorage.getItem('dmd_pro_until') || null);

  const [showPaywall, setShowPaywall] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('3m');
  const [emailCopied, setEmailCopied] = useState(false);
  const [checkingPro, setCheckingPro] = useState(false);
  const [proCheckMsg, setProCheckMsg] = useState('');

  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizOptions, setQuizOptions] = useState([]);

  const [selectedArticle, setSelectedArticle] = useState('');
  const [spellingInput, setSpellingInput] = useState('');
  const [spellingResult, setSpellingResult] = useState(null);
  const spellingInputRef = useRef(null);

  const touchDailyStreak = () => {
    setStreak((prevStreak) => {
      const next = advanceStreakOnActivity(prevStreak, lastActiveDateRef.current);
      lastActiveDateRef.current = next.lastActiveDate;
      setLastActiveDate(next.lastActiveDate);
      return next.streak;
    });
  };

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

  const syncUserProfile = async (authUser) => {
    if (!authUser) return false;
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', authUser.id).single();

    if (profile) {
      const mergedXp = Math.max(profile.xp || 0, Number(localStorage.getItem('dmd_xp')) || 0);
      const localCoins = localStorage.getItem('dmd_coins') !== null ? Number(localStorage.getItem('dmd_coins')) : mergedXp;
      const mergedCoins = profile.coins !== null && profile.coins !== undefined ? Math.max(profile.coins, localCoins) : mergedXp;

      const localLearned = JSON.parse(localStorage.getItem('dmd_learned') || '[]');
      const dbLearned = Array.isArray(profile.learned_ids) ? profile.learned_ids : [];
      const mergedLearned = Array.from(new Set([...dbLearned, ...localLearned]));
      const proActive = Boolean(profile.is_pro && (!profile.pro_until || new Date(profile.pro_until) > new Date()));

      const baseStreak = Math.max(profile.streak || 1, Number(localStorage.getItem('dmd_streak')) || 1);
      const latestDate = profile.last_active_date || localStorage.getItem('dmd_last_active') || null;
      const resolved = resolveStreakOnLoad(baseStreak, latestDate);

      const resolvedName = profile.full_name || localStorage.getItem('dmd_full_name') || '';
      const resolvedAvatar = profile.avatar_url || localStorage.getItem('dmd_avatar_url') || '';

      const dbPet = profile.pet_data && typeof profile.pet_data === 'object' ? profile.pet_data : {};
      const localPet = JSON.parse(localStorage.getItem('dmd_pet') || '{}');
      const mergedPet = {
        ...DEFAULT_PET,
        ...localPet,
        ...dbPet,
        xp: Math.max(dbPet.xp || 0, localPet.xp || 0),
        feedsCount: Math.max(dbPet.feedsCount || 0, localPet.feedsCount || 0),
        hintsUsed: Math.max(dbPet.hintsUsed || 0, localPet.hintsUsed || 0),
        coinsSpent: Math.max(dbPet.coinsSpent || 0, localPet.coinsSpent || 0),
        spellingDone: Math.max(dbPet.spellingDone || 0, localPet.spellingDone || 0),
        ownedItems: Array.from(new Set([...(dbPet.ownedItems || []), ...(localPet.ownedItems || [])])),
      };

      setXp(mergedXp);
      setCoins(mergedCoins);
      setPet(mergedPet);
      setStreak(resolved.streak);
      lastActiveDateRef.current = resolved.lastActiveDate;
      setLastActiveDate(resolved.lastActiveDate);
      setLearnedIds(mergedLearned);
      setIsPro(proActive);
      setProUntil(proActive ? (profile.pro_until || null) : null);
      setFullName(resolvedName);
      setAvatarUrl(resolvedAvatar);

      await supabase.from('profiles').update({
        xp: mergedXp,
        coins: mergedCoins,
        pet_data: mergedPet,
        streak: resolved.streak,
        last_active_date: resolved.lastActiveDate,
        learned_ids: mergedLearned,
        full_name: resolvedName || null,
        avatar_url: resolvedAvatar || null,
        updated_at: new Date().toISOString()
      }).eq('id', authUser.id);

      return proActive;
    } else {
      const initialStreak = Number(localStorage.getItem('dmd_streak')) || 1;
      const initialXp = Number(localStorage.getItem('dmd_xp')) || 0;
      const savedName = localStorage.getItem('dmd_full_name') || '';
      const savedAvatar = localStorage.getItem('dmd_avatar_url') || '';
      setStreak(initialStreak);
      setCoins(initialXp);
      lastActiveDateRef.current = null;
      setLastActiveDate(null);
      setProUntil(null);

      await supabase.from('profiles').insert({
        id: authUser.id,
        email: authUser.email,
        full_name: savedName || null,
        avatar_url: savedAvatar || null,
        xp: initialXp,
        coins: initialXp,
        pet_data: DEFAULT_PET,
        streak: initialStreak,
        last_active_date: null,
        learned_ids: JSON.parse(localStorage.getItem('dmd_learned') || '[]'),
        is_pro: false
      });
      return false;
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
    localStorage.setItem('dmd_coins', coins);
    localStorage.setItem('dmd_pet', JSON.stringify(pet));
    localStorage.setItem('dmd_streak', streak);
    if (lastActiveDate) localStorage.setItem('dmd_last_active', lastActiveDate);
    else localStorage.removeItem('dmd_last_active');
    localStorage.setItem('dmd_learned', JSON.stringify(learnedIds));
    localStorage.setItem('dmd_pro', isPro);
    if (proUntil) localStorage.setItem('dmd_pro_until', proUntil);
    else localStorage.removeItem('dmd_pro_until');

    if (user) {
      supabase.from('profiles').update({
        xp,
        coins,
        pet_data: pet,
        streak,
        last_active_date: lastActiveDate || null,
        learned_ids: learnedIds,
        updated_at: new Date().toISOString()
      }).eq('id', user.id).then(() => {});
    }
  }, [xp, coins, pet, streak, lastActiveDate, learnedIds, isPro, proUntil, user]);

  const handleSaveProfileName = async (e) => {
    e.preventDefault();
    const trimmed = nameDraft.trim();
    setSavingProfile(true);
    setFullName(trimmed);
    localStorage.setItem('dmd_full_name', trimmed);
    if (user) {
      await supabase.from('profiles').update({
        full_name: trimmed || null,
        updated_at: new Date().toISOString()
      }).eq('id', user.id);
    }
    setSavingProfile(false);
    setIsEditingName(false);
    setProfileSavedMsg('Ім’я збережено!');
    setTimeout(() => setProfileSavedMsg(''), 2000);
  };

  const handleAvatarFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSavingProfile(true);
    try {
      const compressedDataUrl = await resizeAvatarFile(file);
      setAvatarUrl(compressedDataUrl);
      localStorage.setItem('dmd_avatar_url', compressedDataUrl);
      if (user) {
        await supabase.from('profiles').update({
          avatar_url: compressedDataUrl,
          updated_at: new Date().toISOString()
        }).eq('id', user.id);
      }
      setProfileSavedMsg('Фото оновлено!');
      setTimeout(() => setProfileSavedMsg(''), 2000);
    } finally {
      setSavingProfile(false);
      e.target.value = '';
    }
  };

  const handleRemoveAvatar = async () => {
    setSavingProfile(true);
    setAvatarUrl('');
    localStorage.removeItem('dmd_avatar_url');
    if (user) {
      await supabase.from('profiles').update({
        avatar_url: null,
        updated_at: new Date().toISOString()
      }).eq('id', user.id);
    }
    setSavingProfile(false);
  };

  const handleCheckProStatus = async () => {
    if (!user) return;
    setCheckingPro(true);
    setProCheckMsg('');
    const active = await syncUserProfile(user);
    setCheckingPro(false);
    if (active) {
      setShowPaywall(false);
    } else {
      setProCheckMsg('Оплата ще обробляється банком. Зачекай 10 секунд і натисни ще раз.');
    }
  };

  const speakGerman = (text) => {
    const cleanText = (text || '').trim();
    if (!cleanText) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    setIsSpeaking(true);
    const audio = new Audio(`/api/tts?text=${encodeURIComponent(cleanText)}&voice=de-DE-KatjaNeural`);
    audioRef.current = audio;

    audio.onended = () => setIsSpeaking(false);
    audio.onerror = () => {
      setIsSpeaking(false);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(cleanText);
        u.lang = 'de-DE';
        u.rate = 0.92;
        window.speechSynthesis.speak(u);
      }
    };

    audio.play().catch(() => setIsSpeaking(false));
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
    setProUntil(null);
    setFullName('');
    setAvatarUrl('');
    setShowProfileDrawer(false);
    localStorage.removeItem('dmd_pro');
    localStorage.removeItem('dmd_pro_until');
    localStorage.removeItem('dmd_full_name');
    localStorage.removeItem('dmd_avatar_url');
  };

  const addXpAndCoins = (points) => {
    setXp((prev) => prev + points);
    setCoins((prev) => prev + points);
    setXpGain(`+${points} XP • +${points} 🪙`);
    setTimeout(() => setXpGain(null), 1700);
  };

  const handleBuyShopItem = (item) => {
    if (item.type === 'accessory') {
      const alreadyOwned = (pet.ownedItems || []).includes(item.id);
      if (alreadyOwned) {
        const nextEq = pet.equippedAccessory === item.id ? null : item.id;
        setPet((prev) => ({ ...prev, equippedAccessory: nextEq }));
        setCatReaction(nextEq ? `Мур-мяу! Як мені личить ${item.name}? 😻` : 'Зняв аксесуар, відпочиваю 🐱');
        return;
      }
      if (coins < item.price) return;
      setCoins((prev) => prev - item.price);
      setPet((prev) => ({
        ...prev,
        xp: (prev.xp || 0) + (item.petXp || 0),
        coinsSpent: (prev.coinsSpent || 0) + item.price,
        ownedItems: [...(prev.ownedItems || []), item.id],
        equippedAccessory: item.id,
      }));
      setCatReaction(`Дякую за обновку «${item.name}»! Одразу приміряв 😻`);
      return;
    }

    if (coins < item.price) return;
    setCoins((prev) => prev - item.price);
    setPet((prev) => ({
      ...prev,
      hunger: Math.min(100, (prev.hunger ?? 80) + (item.hunger || 20)),
      xp: (prev.xp || 0) + (item.petXp || 15),
      feedsCount: (prev.feedsCount || 0) + 1,
      coinsSpent: (prev.coinsSpent || 0) + item.price,
    }));
    setCatReaction(
      item.type === 'toy'
        ? `Муррр! Класна гра з «${item.name}»! +${item.petXp} досвіду кота 🧶`
        : `Ням-ням! «${item.name}» — смакота! Ситість зросла 😻`
    );
  };

  const handleSavePetName = (e) => {
    e.preventDefault();
    const trimmed = petNameDraft.trim();
    if (!trimmed) return;
    setPet((prev) => ({ ...prev, name: trimmed }));
    setIsEditingPetName(false);
    setCatReaction(`Мяу! Відтепер я — ${trimmed}! 🐾`);
  };

  const handleSelectModule = (lvl, cat) => {
    setSelectedLevel(lvl);
    setSelectedCategory(cat);
    setReviewLearnedInModule(false);
    setPracticeAllLearnedMode(false);
    setCurrentIndex(0);
    setIsFlipped(false);
    setQuizAnswer(null);
    setSelectedArticle('');
    setSpellingInput('');
    setSpellingResult(null);
    setActiveHint('');
  };

  const learnedWordsList = useMemo(
    () => vocabulary.filter((word) => learnedIds.includes(word.id)),
    [vocabulary, learnedIds]
  );

  const allCategoryWords = useMemo(() => {
    const list = vocabulary.filter((item) => item.level === selectedLevel && item.category === selectedCategory);
    return list.length > 0 ? list : vocabulary;
  }, [vocabulary, selectedLevel, selectedCategory]);

  const availableModuleWords = useMemo(() => {
    return isPro ? allCategoryWords : allCategoryWords.slice(0, FREE_WORDS_LIMIT);
  }, [allCategoryWords, isPro]);

  const unlearnedCategoryWords = useMemo(
    () => availableModuleWords.filter((item) => !learnedIds.includes(item.id)),
    [availableModuleWords, learnedIds]
  );

  const learnedCategoryWords = useMemo(
    () => availableModuleWords.filter((item) => learnedIds.includes(item.id)),
    [availableModuleWords, learnedIds]
  );

  const filteredWords = useMemo(() => {
    if (practiceAllLearnedMode) {
      if (practiceLevelFilter === 'ALL') return learnedWordsList;
      const byLvl = learnedWordsList.filter((w) => w.level === practiceLevelFilter);
      return byLvl.length > 0 ? byLvl : learnedWordsList;
    }
    if (reviewLearnedInModule) return learnedCategoryWords;
    return unlearnedCategoryWords;
  }, [practiceAllLearnedMode, practiceLevelFilter, learnedWordsList, reviewLearnedInModule, learnedCategoryWords, unlearnedCategoryWords]);

  useEffect(() => {
    if (currentIndex >= filteredWords.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, filteredWords.length]);

  const goToNextWord = () => {
    if (filteredWords.length === 0) return;
    const nextIndex = currentIndex + 1;
    if (
      !isPro &&
      !reviewLearnedInModule &&
      !practiceAllLearnedMode &&
      nextIndex >= filteredWords.length &&
      allCategoryWords.length > availableModuleWords.length
    ) {
      setShowPaywall(true);
      return;
    }
    setIsFlipped(false);
    setSelectedArticle('');
    setSpellingInput('');
    setSpellingResult(null);
    setActiveHint('');
    setCurrentIndex(nextIndex % filteredWords.length);
  };

  const currentWord = filteredWords[currentIndex] || null;
  const isCurrentLearned = currentWord ? learnedIds.includes(currentWord.id) : false;

  useEffect(() => {
    if (!currentWord) return;
    const others = vocabulary.filter((w) => w.id !== currentWord.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    setQuizOptions([...others, currentWord].sort(() => 0.5 - Math.random()));
    setQuizAnswer(null);
    setSelectedArticle('');
    setSpellingInput('');
    setSpellingResult(null);
    setActiveHint('');
  }, [currentWord, mode, vocabulary]);

  const todayStr = getLocalDateStr();
  const hasFreeHintToday = (pet.hunger ?? 80) >= 70 && pet.freeHintDate !== todayStr;
  const hintCost = hasFreeHintToday ? 0 : 10;

  const handleRequestCatHint = () => {
    if (!currentWord || activeHint) return;
    if (hintCost > 0 && coins < hintCost) {
      setCatReaction('Мяу... Не вистачає 10 монет на підказку. Вивчи слово на картці! 🪙');
      return;
    }
    if (hintCost > 0) {
      setCoins((prev) => prev - hintCost);
    }
    const hintText = buildCatHint(currentWord, mode);
    setActiveHint(hintText);
    setPet((prev) => ({
      ...prev,
      hintsUsed: (prev.hintsUsed || 0) + 1,
      coinsSpent: (prev.coinsSpent || 0) + hintCost,
      freeHintDate: hintCost === 0 ? todayStr : prev.freeHintDate,
    }));
    setCatReaction(`Лови підказку! ${hintText}`);
  };

  const getArticleColor = (article) => {
    if (article === 'der') return 'text-blue-600 bg-blue-50 border-blue-200';
    if (article === 'die') return 'text-rose-600 bg-rose-50 border-rose-200';
    if (article === 'das') return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    return 'text-slate-600 bg-slate-100 border-slate-200';
  };

  const getArticleSelectStyle = (art, isSelected) => {
    if (!isSelected) return 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400';
    if (art === 'der') return 'bg-blue-600 border-blue-600 text-white shadow-sm';
    if (art === 'die') return 'bg-rose-600 border-rose-600 text-white shadow-sm';
    return 'bg-emerald-600 border-emerald-600 text-white shadow-sm';
  };

  const handleMarkLearned = () => {
    if (!currentWord) return;
    touchDailyStreak();
    if (!isCurrentLearned) {
      setLearnedIds((prev) => (prev.includes(currentWord.id) ? prev : [...prev, currentWord.id]));
      addXpAndCoins(15);
      setCatReaction(`Super! +15 монет у скарбничку! (${pet.name} муркоче 😻)`);
    } else {
      addXpAndCoins(5);
      setCatReaction('Закріпили! +5 монет за повторення 🐾');
    }
    setIsFlipped(false);
    setCurrentIndex((prev) => {
      const nextLen = practiceAllLearnedMode
        ? filteredWords.length
        : reviewLearnedInModule
          ? learnedCategoryWords.length
          : Math.max(unlearnedCategoryWords.length - (isCurrentLearned ? 0 : 1), 0);
      if (nextLen <= 0) return 0;
      return (prev + 1) % nextLen;
    });
  };

  const handleQuizChoice = (option) => {
    if (quizAnswer || !currentWord) return;
    setQuizAnswer(option.id);
    if (option.id === currentWord.id) {
      touchDailyStreak();
      addXpAndCoins(20);
      setCatReaction('Genau richtig! +20 монет — можемо купити смаколик 🥨');
      if (!learnedIds.includes(currentWord.id)) setLearnedIds((prev) => [...prev, currentWord.id]);
      speakGerman(currentWord.word);
    } else {
      setCatReaction('Мяу, нічого страшного! Запам’ятай правильний варіант 🐱');
    }
  };

  const handleInsertUmlaut = (char) => {
    if (spellingResult) return;
    const input = spellingInputRef.current;
    if (!input) {
      setSpellingInput((prev) => prev + char);
      return;
    }
    const start = input.selectionStart ?? spellingInput.length;
    const end = input.selectionEnd ?? spellingInput.length;
    const updated = spellingInput.slice(0, start) + char + spellingInput.slice(end);
    setSpellingInput(updated);
    requestAnimationFrame(() => {
      input.focus();
      input.setSelectionRange(start + char.length, start + char.length);
    });
  };

  const handleSpellingSubmit = (e) => {
    e.preventDefault();
    if (!currentWord || spellingResult) return;

    const needsArticle = ARTICLES.includes((currentWord.article || '').toLowerCase());
    if (needsArticle && !selectedArticle) return;
    if (!spellingInput.trim()) return;

    const expectedArticle = (currentWord.article || '').trim().toLowerCase();
    const expectedWord = (currentWord.word || '').trim();
    const typedWord = spellingInput.trim();

    const articleOk = !needsArticle || selectedArticle.toLowerCase() === expectedArticle;
    const wordOk = typedWord === expectedWord;
    const allOk = articleOk && wordOk;

    setSpellingResult({ articleOk, wordOk, allOk });
    speakGerman(`${currentWord.article} ${currentWord.word}`);

    if (allOk) {
      touchDailyStreak();
      addXpAndCoins(25);
      setPet((prev) => ({ ...prev, spellingDone: (prev.spellingDone || 0) + 1 }));
      setCatReaction('Perfekt! Бездоганний правопис! +25 монет 😻');
      if (!learnedIds.includes(currentWord.id)) {
        setLearnedIds((prev) => [...prev, currentWord.id]);
      }
    } else {
      setCatReaction('Майже! Зверни увагу на артикль і велику літеру 🐾');
    }
  };

  const getRank = () => {
    if (xp < 100) return 'Початківець (Anfänger)';
    if (xp < 300) return 'Знавець лексики (Wortkenner)';
    if (xp < 600) return 'Майстер німецької (Sprachprofi)';
    return 'Легенда deutsch mit Dmytro';
  };

  const catStageInfo = useMemo(() => getCatStageInfo(pet.xp || 0), [pet.xp]);
  const equippedAccessoryObj = useMemo(
    () => SHOP_ITEMS.find((item) => item.id === pet.equippedAccessory) || null,
    [pet.equippedAccessory]
  );

  const ownedAccessoriesCount = useMemo(
    () => (pet.ownedItems || []).filter((id) => id.startsWith('acc_')).length,
    [pet.ownedItems]
  );

  const achievementStats = useMemo(() => ({
    xp: xp || 0,
    coins: coins || 0,
    learnedCount: learnedIds.length,
    streakDays: streak || 0,
    isPro: Boolean(isPro),
    hasLevelA2: learnedWordsList.some((word) => word.level === 'A2'),
    hasLevelB1OrB2: learnedWordsList.some((word) => word.level === 'B1' || word.level === 'B2'),
    feedsCount: pet.feedsCount || 0,
    catHunger: pet.hunger ?? 80,
    catLevel: catStageInfo.current.level,
    accessoriesCount: ownedAccessoriesCount,
    coinsSpent: pet.coinsSpent || 0,
    hintsUsed: pet.hintsUsed || 0,
    spellingDone: pet.spellingDone || 0,
  }), [xp, coins, learnedIds.length, streak, isPro, learnedWordsList, pet, catStageInfo.current.level, ownedAccessoriesCount]);

  const userAchievements = useMemo(() => {
    return ACHIEVEMENTS.map((ach) => {
      const unlocked = Boolean(ach.check(achievementStats));
      const prog = ach.getProgress ? ach.getProgress(achievementStats) : { current: unlocked ? 1 : 0, target: 1 };
      return {
        ...ach,
        unlocked,
        current: prog.current,
        target: prog.target,
        percent: Math.min(100, Math.round((prog.current / Math.max(prog.target, 1)) * 100)),
      };
    });
  }, [achievementStats]);

  const unlockedCount = useMemo(
    () => userAchievements.filter((item) => item.unlocked).length,
    [userAchievements]
  );

  const nextAchievement = useMemo(
    () => userAchievements.find((item) => !item.unlocked) || null,
    [userAchievements]
  );

  const filteredAchievements = useMemo(() => {
    if (achFilter === 'unlocked') return userAchievements.filter((a) => a.unlocked);
    if (achFilter === 'locked') return userAchievements.filter((a) => !a.unlocked);
    return userAchievements;
  }, [userAchievements, achFilter]);

  const levelProgressSummary = useMemo(() => {
    return LEVELS.map((lvl) => {
      const totalInLevel = vocabulary.filter((w) => w.level === lvl).length;
      const learnedInLevel = learnedWordsList.filter((w) => w.level === lvl).length;
      const percent = totalInLevel > 0 ? Math.min(100, Math.round((learnedInLevel / totalInLevel) * 100)) : 0;
      return { level: lvl, learned: learnedInLevel, total: totalInLevel, percent };
    });
  }, [vocabulary, learnedWordsList]);

  const filteredDictionaryWords = useMemo(() => {
    const query = dictSearch.trim().toLowerCase();
    return learnedWordsList.filter((w) => {
      const matchesLevel = dictLevelFilter === 'ALL' || w.level === dictLevelFilter;
      if (!matchesLevel) return false;
      if (!query) return true;
      return (
        (w.word || '').toLowerCase().includes(query) ||
        (w.translation || '').toLowerCase().includes(query) ||
        (w.article || '').toLowerCase().includes(query)
      );
    });
  }, [learnedWordsList, dictSearch, dictLevelFilter]);

  const handleStartLearnedQuizFromProfile = () => {
    if (learnedWordsList.length === 0) return;
    setPracticeLevelFilter(dictLevelFilter);
    setPracticeAllLearnedMode(true);
    setReviewLearnedInModule(false);
    setMode('quiz');
    setCurrentIndex(0);
    setIsFlipped(false);
    setQuizAnswer(null);
    setShowProfileDrawer(false);
  };

  const openProfileDrawer = (tab = 'pet') => {
    setProfileTab(tab);
    setNameDraft(fullName);
    setPetNameDraft(pet.name || 'Schnurri');
    setIsEditingName(false);
    setIsEditingPetName(false);
    setProfileSavedMsg('');
    setShowProfileDrawer(true);
  };

  const displayUserName = fullName.trim() || (user?.email ? user.email.split('@')[0] : 'Учень');
  const userInitial = displayUserName.charAt(0).toUpperCase();

  const shareText = `🇩🇪 Мій прогрес у deutsch mit Dmytro:\n✨ ${xp} XP балів • 🪙 ${coins} монет\n📚 Вивчено слів: ${learnedIds.length}\n🔥 Серія: ${streak} дн.\n🐱 Кіт ${pet.name}: ${catStageInfo.current.title}\n🏅 Досягнень: ${unlockedCount}/${userAchievements.length}`;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPayEmail = () => {
    if (!user?.email) return;
    navigator.clipboard.writeText(user.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const currentPlanObj = PLANS.find((p) => p.id === selectedPlan) || PLANS[1];
  const hasMoreWordsInPro = !isPro && !practiceAllLearnedMode && allCategoryWords.length > availableModuleWords.length;
  const currentNeedsArticle = currentWord ? ARTICLES.includes((currentWord.article || '').toLowerCase()) : false;

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

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Баланс монет для кота */}
            <button
              type="button"
              onClick={() => user ? openProfileDrawer('pet') : openAuth('login')}
              className="relative flex items-center gap-1 bg-amber-50 hover:bg-amber-100 text-amber-800 px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-bold border border-amber-200 transition"
              title="Монети для догляду за котом"
            >
              <Coins className="w-3.5 h-3.5 text-amber-500" />
              <span>{coins}</span>
              {xpGain && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap z-40">
                  {xpGain}
                </span>
              )}
            </button>

            <div className="hidden md:flex items-center gap-1 bg-slate-100 text-slate-700 px-2.5 py-1.5 rounded-full text-xs font-semibold">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>{xp} XP</span>
            </div>

            <div className="flex items-center gap-1 bg-orange-50 text-orange-700 px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-orange-200">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span>{streak}</span>
            </div>

            <button onClick={() => setShowShareModal(true)} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition hidden sm:inline-flex" title="Поділитися прогресом">
              <Share2 className="w-4 h-4" />
            </button>

            {!user ? (
              <button onClick={() => openAuth('login')} className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition">
                <User className="w-3.5 h-3.5" />
                <span>Увійти</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => openProfileDrawer('pet')}
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 pl-1.5 pr-2.5 py-1 rounded-full text-xs font-semibold text-slate-800 transition"
                title="Відкрити кабінет і кота"
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt={displayUserName} className="w-6 h-6 rounded-full object-cover border border-slate-300 shrink-0" />
                ) : (
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {userInitial}
                  </span>
                )}
                <span className="max-w-[75px] sm:max-w-[115px] truncate">{displayUserName}</span>
                <span className="text-sm leading-none">{catStageInfo.current.emoji}</span>
              </button>
            )}

            {!isPro ? (
              <button onClick={() => { setProCheckMsg(''); setShowPaywall(true); }} className="flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold transition shadow-sm">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">PRO</span>
              </button>
            ) : (
              <span className="flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2 py-1.5 rounded-full text-xs font-bold">
                <Crown className="w-3.5 h-3.5" />
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl w-full mx-auto px-4 pt-6 pb-12 space-y-6 flex-1">
        {/* Міні-панель кота-помічника */}
        <section className="bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => user ? openProfileDrawer('pet') : openAuth('login')}
              className="relative w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl shrink-0 hover:scale-105 transition"
              title="Перейти до кота"
            >
              <span>{catStageInfo.current.emoji}</span>
              {equippedAccessoryObj && (
                <span className="absolute -top-1.5 -right-1.5 text-sm bg-white rounded-full px-0.5 shadow-xs">
                  {equippedAccessoryObj.icon}
                </span>
              )}
            </button>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-extrabold text-slate-900">{pet.name}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  {catStageInfo.current.badge}
                </span>
                <span className="text-[11px] font-semibold text-rose-600 flex items-center gap-0.5">
                  <Heart className="w-3 h-3 fill-rose-500 text-rose-500" /> {pet.hunger ?? 80}%
                </span>
              </div>
              <p className="text-xs text-slate-600 truncate mt-0.5">{catReaction}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {currentWord && (mode === 'quiz' || mode === 'spelling') && (
              <button
                type="button"
                onClick={handleRequestCatHint}
                disabled={Boolean(activeHint)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 disabled:opacity-50 text-amber-950 text-xs font-bold transition"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>{hintCost === 0 ? 'Підказка (0 🪙)' : `Підказка (${hintCost} 🪙)`}</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => user ? openProfileDrawer('pet') : openAuth('login')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>Погодувати</span>
            </button>
          </div>
        </section>

        <section className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">1. Обери свій рівень</h2>
              <a
                href={LEVEL_TEST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-bold transition"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Визначити рівень</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <span className="text-xs text-slate-500 font-medium">Статус: <strong className="text-slate-800">{getRank()}</strong></span>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {LEVELS.map((lvl) => {
              const active = !practiceAllLearnedMode && selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => handleSelectModule(lvl, selectedCategory)}
                  className={`relative py-3 rounded-xl font-bold text-base transition flex items-center justify-center gap-1.5 border ${
                    active ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>{lvl}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2.5">2. Обери ціль та категорію</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {CATEGORIES.map((cat) => {
                const active = !practiceAllLearnedMode && selectedCategory === cat.id;
                const catWordsCount = vocabulary.filter((w) => w.level === selectedLevel && w.category === cat.id).length;
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
                          {!isPro
                            ? `Перші ${FREE_WORDS_LIMIT} слів безкоштовно`
                            : `Рівень ${selectedLevel} (${catWordsCount} сл.)`}
                        </div>
                      </div>
                    </div>
                    {active && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex flex-wrap bg-slate-200/70 p-1 rounded-xl gap-1">
              <button
                onClick={() => setMode('cards')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  mode === 'cards' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4" /> Картки
              </button>
              <button
                onClick={() => setMode('quiz')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  mode === 'quiz' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BrainCircuit className="w-4 h-4" /> Тест (+20)
              </button>
              <button
                onClick={() => setMode('spelling')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                  mode === 'spelling' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Keyboard className="w-4 h-4" /> Правопис (+25)
              </button>
            </div>

            {(reviewLearnedInModule || practiceAllLearnedMode) && (
              <button
                type="button"
                onClick={() => {
                  setReviewLearnedInModule(false);
                  setPracticeAllLearnedMode(false);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className="px-3 py-2 rounded-xl bg-amber-100 text-amber-900 text-xs font-bold hover:bg-amber-200 transition"
              >
                Повернутися до нових слів
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500">
            {loading && <Loader2 className="w-4 h-4 animate-spin text-amber-600" />}
            {filteredWords.length > 0 ? (
              <span>
                {practiceAllLearnedMode
                  ? `Тренування словника${practiceLevelFilter !== 'ALL' ? ` (${practiceLevelFilter})` : ''}: `
                  : reviewLearnedInModule
                    ? 'Повторення: слово '
                    : 'Нове слово '}
                <strong className="text-slate-900">{currentIndex + 1}</strong> з {filteredWords.length}
                {hasMoreWordsInPro && (
                  <button onClick={() => setShowPaywall(true)} className="ml-1.5 text-amber-700 font-semibold hover:underline">
                    (усього {allCategoryWords.length} у PRO)
                  </button>
                )}
              </span>
            ) : (
              <span>Нових слів у доступі: <strong className="text-slate-900">0</strong></span>
            )}
          </div>
        </div>

        {!currentWord && (
          <section className="bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-slate-900">
                {hasMoreWordsInPro
                  ? 'Ознайомчі 5 слів цієї категорії пройдено!'
                  : 'Усі слова цієї категорії вже вивчені!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {hasMoreWordsInPro
                  ? `Ти вже вивчив усі 5 безкоштовних слів у цій категорії (загалом доступно 60 безкоштовних слів по всіх рівнях і категоріях). Відкрий PRO, щоб отримати доступ до всіх ${allCategoryWords.length} слів категорії.`
                  : 'Вивчені слова вже збережені у твоєму кабінеті. Можеш повторити їх тут або відкрити повний список у кабінеті учня.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              {hasMoreWordsInPro && (
                <button
                  type="button"
                  onClick={() => { setProCheckMsg(''); setShowPaywall(true); }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition"
                >
                  <Crown className="w-4 h-4 text-amber-400" /> Відкрити всі слова PRO
                </button>
              )}
              {learnedCategoryWords.length > 0 && (
                <button
                  type="button"
                  onClick={() => { setReviewLearnedInModule(true); setCurrentIndex(0); setIsFlipped(false); }}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm transition"
                >
                  Повторити вивчені ({learnedCategoryWords.length})
                </button>
              )}
              {user && (
                <button
                  type="button"
                  onClick={() => openProfileDrawer('dictionary')}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition"
                >
                  Мій словник
                </button>
              )}
            </div>
          </section>
        )}

        {currentWord && mode === 'cards' && (
          <section className="space-y-4">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="bg-white border-2 border-slate-200 hover:border-amber-300 rounded-3xl p-6 sm:p-10 min-h-[300px] flex flex-col justify-between cursor-pointer transition shadow-sm relative"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                  {currentWord.level} • {CATEGORIES.find((c) => c.id === currentWord.category)?.label}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakGerman(`${currentWord.article} ${currentWord.word}`);
                  }}
                  className={`p-3 rounded-full transition ${
                    isSpeaking ? 'bg-amber-500 text-white scale-105' : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                  }`}
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
                <span>{isCurrentLearned ? 'Закріпити (+5 🪙)' : 'Знаю (+15 🪙)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        )}

        {currentWord && mode === 'quiz' && (
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Обери правильний переклад</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRequestCatHint}
                  disabled={Boolean(activeHint)}
                  className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1.5 rounded-full hover:bg-amber-200 disabled:opacity-50"
                >
                  <Lightbulb className="w-3.5 h-3.5" /> {hintCost === 0 ? 'Підказка' : `${hintCost} 🪙`}
                </button>
                <button onClick={() => speakGerman(`${currentWord.article} ${currentWord.word}`)} className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full hover:bg-amber-100">
                  <Volume2 className="w-4 h-4" /> Озвучити
                </button>
              </div>
            </div>

            {activeHint && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-2.5 text-xs text-amber-950 font-medium flex items-center gap-2">
                <span>{catStageInfo.current.emoji}</span>
                <span>{activeHint}</span>
              </div>
            )}

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

        {currentWord && mode === 'spelling' && (
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {currentNeedsArticle ? 'Обери артикль і напиши слово німецькою' : 'Напиши слово німецькою'}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleRequestCatHint}
                  disabled={Boolean(activeHint) || Boolean(spellingResult)}
                  className="flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1.5 rounded-full hover:bg-amber-200 disabled:opacity-50"
                >
                  <Lightbulb className="w-3.5 h-3.5" /> {hintCost === 0 ? 'Підказка' : `${hintCost} 🪙`}
                </button>
                <button
                  type="button"
                  onClick={() => speakGerman(`${currentWord.article} ${currentWord.word}`)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full hover:bg-amber-100"
                >
                  <Volume2 className="w-4 h-4" /> Озвучити
                </button>
              </div>
            </div>

            {activeHint && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-2.5 text-xs text-amber-950 font-medium flex items-center gap-2 max-w-lg mx-auto">
                <span>{catStageInfo.current.emoji}</span>
                <span>{activeHint}</span>
              </div>
            )}

            <div className="text-center py-3 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-500">
                {currentWord.level} • {CATEGORIES.find((c) => c.id === currentWord.category)?.label}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">{currentWord.translation}</h3>
              <p className="text-xs text-slate-400">Іменники пиши з великої літери (напр. Kumpel)</p>
            </div>

            <form onSubmit={handleSpellingSubmit} className="space-y-4 max-w-lg mx-auto">
              {currentNeedsArticle && (
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">1. Артикль</label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {ARTICLES.map((art) => {
                      const isSelected = selectedArticle === art;
                      return (
                        <button
                          key={art}
                          type="button"
                          disabled={Boolean(spellingResult)}
                          onClick={() => setSelectedArticle(art)}
                          className={`py-2.5 rounded-xl border-2 font-bold text-sm transition ${getArticleSelectStyle(art, isSelected)}`}
                        >
                          {art}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {currentNeedsArticle ? '2. Німецьке слово' : 'Німецьке слово'}
                </label>
                <input
                  ref={spellingInputRef}
                  type="text"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  disabled={Boolean(spellingResult)}
                  value={spellingInput}
                  onChange={(e) => setSpellingInput(e.target.value)}
                  placeholder="Введи слово німецькою..."
                  className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-amber-400 focus:outline-none text-base sm:text-lg font-bold text-slate-900 bg-slate-50/60"
                />

                {!spellingResult && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] text-slate-400 mr-1">Умлаути:</span>
                    {UMLAUT_CHARS.map((char) => (
                      <button
                        key={char}
                        type="button"
                        onClick={() => handleInsertUmlaut(char)}
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-900 border border-slate-200 text-sm font-bold text-slate-700 transition"
                      >
                        {char}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {!spellingResult ? (
                <div className="flex items-center gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={goToNextWord}
                    className="py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-600 transition"
                  >
                    Пропустити
                  </button>
                  <button
                    type="submit"
                    disabled={(currentNeedsArticle && !selectedArticle) || !spellingInput.trim()}
                    className="flex-1 py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white font-bold text-sm transition shadow-sm"
                  >
                    Перевірити відповідь
                  </button>
                </div>
              ) : (
                <div
                  className={`p-4 rounded-2xl border-2 space-y-2.5 ${
                    spellingResult.allOk
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                      : 'bg-rose-50 border-rose-400 text-rose-950'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-extrabold text-sm sm:text-base">
                      {spellingResult.allOk ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span>Ідеально! +25 XP • +25 🪙</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                          <span>Є помилка — перевір написання</span>
                        </>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => speakGerman(`${currentWord.article} ${currentWord.word}`)}
                      className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-700"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {!spellingResult.allOk && (
                    <div className="text-xs space-y-1">
                      {currentNeedsArticle && !spellingResult.articleOk && (
                        <p>
                          Артикль: ти обрав <strong>{selectedArticle}</strong>, правильно — <strong>{currentWord.article}</strong>.
                        </p>
                      )}
                      {!spellingResult.wordOk && (
                        <p>
                          Слово: ти написав <strong>«{spellingInput.trim()}»</strong>, правильно — <strong>«{currentWord.word}»</strong> (зверни увагу на велику літеру).
                        </p>
                      )}
                    </div>
                  )}

                  <div className="bg-white/80 p-3 rounded-xl text-xs space-y-1">
                    <div className="font-bold text-slate-900">
                      {currentWord.article ? `${currentWord.article} ` : ''}{currentWord.word}
                      {currentWord.plural ? ` (${currentWord.plural})` : ''} — {currentWord.translation}
                    </div>
                    {currentWord.example && (
                      <div className="text-slate-600 pt-0.5">
                        «{currentWord.example}» — <span className="text-slate-500">{currentWord.exampleUa}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={goToNextWord}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2"
                    >
                      Наступне слово <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
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

      {/* Висувний кабінет учня (Drawer справа) */}
      {user && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            showProfileDrawer ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            onClick={() => setShowProfileDrawer(false)}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs"
          />

          <aside
            className={`absolute top-0 right-0 h-full w-full max-w-md sm:max-w-lg bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
              showProfileDrawer ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-5 border-b border-slate-100 flex items-start justify-between gap-3 shrink-0 bg-gradient-to-br from-slate-50 to-amber-50/40">
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                <div className="relative shrink-0">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt={displayUserName}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-red-500 to-slate-900 text-white text-xl font-extrabold flex items-center justify-center shadow-md">
                      {userInitial}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => avatarInputRef.current?.click()}
                    disabled={savingProfile}
                    className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-md transition"
                    title="Змінити фото"
                  >
                    <Camera className="w-3 h-3" />
                  </button>
                  <input
                    ref={avatarInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarFileChange}
                    className="hidden"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  {!isEditingName ? (
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 truncate">{displayUserName}</h3>
                      <button
                        type="button"
                        onClick={() => { setNameDraft(fullName); setIsEditingName(true); }}
                        className="p-1 rounded-lg text-slate-400 hover:text-amber-700 hover:bg-amber-100/60 transition shrink-0"
                        title="Змінити ім’я"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSaveProfileName} className="flex items-center gap-1.5">
                      <input
                        type="text"
                        maxLength={40}
                        autoFocus
                        value={nameDraft}
                        onChange={(e) => setNameDraft(e.target.value)}
                        placeholder="Твоє ім’я..."
                        className="w-full px-2.5 py-1 rounded-lg border border-amber-400 bg-white text-sm font-bold text-slate-900 focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={savingProfile}
                        className="p-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shrink-0"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditingName(false)}
                        className="p-1.5 rounded-lg bg-slate-200 text-slate-600 hover:bg-slate-300 shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}

                  <p className="text-xs text-slate-500 truncate">{user.email}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    {isPro ? (
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[11px] font-bold">
                        <Crown className="w-3 h-3" /> PRO {formatProUntilDate(proUntil)}
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => { setShowProfileDrawer(false); setProCheckMsg(''); setShowPaywall(true); }}
                        className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold transition"
                      >
                        <Crown className="w-3 h-3 text-amber-400" /> Активувати PRO
                      </button>
                    )}
                    {avatarUrl && (
                      <button
                        type="button"
                        onClick={handleRemoveAvatar}
                        className="text-[11px] text-slate-400 hover:text-rose-600 underline"
                      >
                        Видалити фото
                      </button>
                    )}
                  </div>
                  {profileSavedMsg && (
                    <p className="text-[11px] font-semibold text-emerald-600 mt-0.5">{profileSavedMsg}</p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowProfileDrawer(false)}
                className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 4 вкладки висувного кабінету */}
            <div className="px-5 pt-3 pb-2 shrink-0">
              <div className="grid grid-cols-4 gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setProfileTab('pet')}
                  className={`py-2 px-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition ${
                    profileTab === 'pet' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🐱 Кіт
                </button>
                <button
                  type="button"
                  onClick={() => setProfileTab('overview')}
                  className={`py-2 px-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition ${
                    profileTab === 'overview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Огляд
                </button>
                <button
                  type="button"
                  onClick={() => setProfileTab('achievements')}
                  className={`py-2 px-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition ${
                    profileTab === 'achievements' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ачівки ({unlockedCount}/{userAchievements.length})
                </button>
                <button
                  type="button"
                  onClick={() => setProfileTab('dictionary')}
                  className={`py-2 px-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition ${
                    profileTab === 'dictionary' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Словник ({learnedWordsList.length})
                </button>
              </div>
            </div>

            <div className="overflow-y-auto flex-1 px-5 py-3 space-y-5">
              {profileTab === 'pet' && (
                <div className="space-y-4">
                  {/* Картка кота */}
                  <div className="bg-gradient-to-br from-amber-50 via-orange-50/70 to-white border-2 border-amber-200 rounded-3xl p-5 text-center space-y-3 relative">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-amber-200/70 text-amber-950 font-extrabold">
                        {catStageInfo.current.badge} • {catStageInfo.current.title}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-amber-200 font-extrabold text-amber-900">
                        <Coins className="w-3.5 h-3.5 text-amber-500" /> {coins}
                      </span>
                    </div>

                    <div className="relative w-24 h-24 mx-auto rounded-3xl bg-white border-2 border-amber-200 shadow-sm flex items-center justify-center text-6xl select-none">
                      <span>{catStageInfo.current.emoji}</span>
                      {equippedAccessoryObj && (
                        <span className="absolute -top-3 -right-3 text-3xl bg-amber-50 border border-amber-200 rounded-2xl p-1 shadow-xs">
                          {equippedAccessoryObj.icon}
                        </span>
                      )}
                    </div>

                    <div>
                      {!isEditingPetName ? (
                        <div className="inline-flex items-center gap-1.5">
                          <h4 className="text-xl font-extrabold text-slate-900">{pet.name}</h4>
                          <button
                            type="button"
                            onClick={() => { setPetNameDraft(pet.name); setIsEditingPetName(true); }}
                            className="p-1 rounded-lg text-slate-400 hover:text-amber-700 hover:bg-amber-100"
                            title="Перейменувати кота"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleSavePetName} className="inline-flex items-center gap-1.5">
                          <input
                            type="text"
                            maxLength={25}
                            autoFocus
                            value={petNameDraft}
                            onChange={(e) => setPetNameDraft(e.target.value)}
                            className="px-2.5 py-1 rounded-lg border border-amber-400 bg-white text-sm font-bold text-slate-900"
                          />
                          <button type="submit" className="p-1.5 rounded-lg bg-emerald-600 text-white">
                            <Check className="w-3.5 h-3.5" />
                          </button>
                          <button type="button" onClick={() => setIsEditingPetName(false)} className="p-1.5 rounded-lg bg-slate-200 text-slate-600">
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </form>
                      )}
                      <p className="text-xs text-slate-600 mt-1">{catReaction}</p>
                    </div>

                    {/* Шкали ситості та росту кота */}
                    <div className="grid grid-cols-2 gap-3 text-left pt-1">
                      <div className="bg-white/90 p-3 rounded-2xl border border-rose-100 space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-rose-700 flex items-center gap-1">
                            <Heart className="w-3 h-3 fill-rose-500 text-rose-500" /> Ситість
                          </span>
                          <span className="text-slate-700">{pet.hunger ?? 80}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-rose-100 overflow-hidden">
                          <div
                            className="h-full bg-rose-500 rounded-full transition-all"
                            style={{ width: `${pet.hunger ?? 80}%` }}
                          />
                        </div>
                        <p className="text-[10px] text-slate-400">
                          {(pet.hunger ?? 80) >= 70 ? 'Від 70% — 1 підказка на день безкоштовно!' : 'Погодуй до 70% для бонусу'}
                        </p>
                      </div>

                      <div className="bg-white/90 p-3 rounded-2xl border border-amber-100 space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className="text-amber-800">Ріст кота</span>
                          <span className="text-slate-700">
                            {catStageInfo.next ? `${pet.xp || 0}/${catStageInfo.next.minXp}` : 'MAX'}
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-amber-100 overflow-hidden">
                          <div
                            className="h-full bg-amber-500 rounded-full transition-all"
                            style={{ width: `${catStageInfo.progressPercent}%` }}
                          />
                        </div>
                        <p className="text-[10px] text-slate-400">
                          {catStageInfo.next ? `До «${catStageInfo.next.title}»` : 'Максимальний рівень!'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Крамничка для кота */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Крамничка смаколиків та аксесуарів</h4>
                      <span className="text-xs font-bold text-amber-700">Твій баланс: {coins} 🪙</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {SHOP_ITEMS.map((item) => {
                        const isAccessory = item.type === 'accessory';
                        const isOwned = isAccessory && (pet.ownedItems || []).includes(item.id);
                        const isEquipped = isAccessory && pet.equippedAccessory === item.id;
                        const canAfford = coins >= item.price;

                        return (
                          <div
                            key={item.id}
                            className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-slate-200 bg-slate-50/70"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="text-2xl shrink-0">{item.icon}</span>
                              <div className="min-w-0">
                                <div className="text-xs font-extrabold text-slate-900 truncate">{item.name}</div>
                                <div className="text-[11px] text-slate-500 leading-snug">{item.desc}</div>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleBuyShopItem(item)}
                              disabled={!isOwned && !canAfford}
                              className={`shrink-0 px-3 py-2 rounded-xl text-xs font-extrabold transition ${
                                isEquipped
                                  ? 'bg-emerald-600 text-white'
                                  : isOwned
                                    ? 'bg-slate-200 hover:bg-slate-300 text-slate-800'
                                    : canAfford
                                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xs'
                                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                              }`}
                            >
                              {isEquipped ? 'Одягнено ✓' : isOwned ? 'Одягнути' : `${item.price} 🪙`}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {profileTab === 'overview' && (
                <>
                  <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Поточний ранг</div>
                      <div className="text-sm sm:text-base font-extrabold text-amber-400 mt-0.5">{getRank()}</div>
                    </div>
                    <Trophy className="w-7 h-7 text-amber-400 shrink-0" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3">
                      <div className="text-lg font-extrabold text-amber-900">{xp}</div>
                      <div className="text-[10px] font-semibold text-amber-700 uppercase">Усього XP</div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-3">
                      <div className="text-lg font-extrabold text-yellow-900">{coins} 🪙</div>
                      <div className="text-[10px] font-semibold text-yellow-700 uppercase">Монети</div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3">
                      <div className="text-lg font-extrabold text-emerald-900">{learnedIds.length}</div>
                      <div className="text-[10px] font-semibold text-emerald-700 uppercase">Слів</div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-3">
                      <div className="text-lg font-extrabold text-orange-900">{streak} 🔥</div>
                      <div className="text-[10px] font-semibold text-orange-700 uppercase">Серія</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Прогрес за рівнями A1–B2</h4>
                      <span className="text-xs font-bold text-slate-700">
                        {learnedWordsList.length} / {vocabulary.length} слів
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      {levelProgressSummary.map((item) => (
                        <div key={item.level} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-800">Рівень {item.level}</span>
                            <span className="text-slate-500 font-medium">
                              {item.learned} з {item.total} ({item.percent}%)
                            </span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                            <div
                              className="h-full bg-amber-500 rounded-full transition-all"
                              style={{ width: `${item.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {nextAchievement && (
                    <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-amber-900">
                          Наступна нагорода: {nextAchievement.icon} {nextAchievement.title}
                        </span>
                        <span className="font-bold text-amber-800">
                          {nextAchievement.current} / {nextAchievement.target}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-amber-200/70 overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full transition-all"
                          style={{ width: `${nextAchievement.percent}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-amber-800">{nextAchievement.desc}</p>
                    </div>
                  )}
                </>
              )}

              {profileTab === 'achievements' && (
                <div className="space-y-4">
                  {nextAchievement ? (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-amber-950">
                          Найближча ачівка: {nextAchievement.icon} {nextAchievement.title}
                        </span>
                        <span className="font-bold text-amber-800">
                          {nextAchievement.current} / {nextAchievement.target} ({nextAchievement.percent}%)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-amber-200 overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full transition-all"
                          style={{ width: `${nextAchievement.percent}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 text-center text-xs font-bold text-emerald-800">
                      Усі {userAchievements.length} досягнень відкрито!
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    {[
                      { id: 'all', label: `Усі (${userAchievements.length})` },
                      { id: 'unlocked', label: `Відкриті (${unlockedCount})` },
                      { id: 'locked', label: `Закриті (${userAchievements.length - unlockedCount})` },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setAchFilter(tab.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                          achFilter === tab.id
                            ? 'bg-slate-900 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {filteredAchievements.map((ach) => (
                      <div
                        key={ach.id}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-left ${
                          ach.unlocked
                            ? 'bg-amber-50/80 border-amber-200 text-slate-900'
                            : 'bg-slate-50 border-slate-200 text-slate-400 opacity-70'
                        }`}
                      >
                        <span className="text-xl shrink-0">{ach.unlocked ? ach.icon : '🔒'}</span>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold truncate">{ach.title}</div>
                          <div className="text-[11px] leading-snug">{ach.desc}</div>
                          {!ach.unlocked && ach.target > 1 && (
                            <div className="text-[10px] font-semibold text-slate-500 mt-1">
                              Прогрес: {ach.current} / {ach.target}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {profileTab === 'dictionary' && (
                <div className="space-y-3">
                  {learnedWordsList.length > 0 && (
                    <button
                      type="button"
                      onClick={handleStartLearnedQuizFromProfile}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xs"
                    >
                      <BrainCircuit className="w-4 h-4" />
                      <span>
                        Тренувати лише вивчені (Тест{dictLevelFilter !== 'ALL' ? ` • ${dictLevelFilter}` : ''})
                      </span>
                    </button>
                  )}

                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={dictSearch}
                        onChange={(e) => setDictSearch(e.target.value)}
                        placeholder="Пошук слова або перекладу..."
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="flex items-center gap-1 overflow-x-auto">
                      {['ALL', ...LEVELS].map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setDictLevelFilter(lvl)}
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                            dictLevelFilter === lvl
                              ? 'bg-slate-900 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {lvl === 'ALL' ? 'Усі' : lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {learnedWordsList.length === 0 ? (
                    <p className="text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                      Ти ще не додав вивчених слів. Натискай «Знаю це слово» або проходь тести, щоб вони з’явилися тут.
                    </p>
                  ) : filteredDictionaryWords.length === 0 ? (
                    <p className="text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                      За твоїм запитом слів не знайдено.
                    </p>
                  ) : (
                    <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl bg-slate-50/60">
                      {filteredDictionaryWords.map((w) => (
                        <div key={w.id} className="flex items-center justify-between gap-2 px-3.5 py-2.5 text-xs">
                          <div className="min-w-0">
                            <span className="font-bold text-slate-900">
                              {w.article ? `${w.article} ` : ''}{w.word}
                            </span>
                            <span className="text-slate-500 ml-1.5">— {w.translation}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => speakGerman(`${w.article} ${w.word}`)}
                              className="p-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 transition"
                              title="Повторити вимову"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setPracticeAllLearnedMode(false);
                                setSelectedLevel(w.level);
                                setSelectedCategory(w.category);
                                setReviewLearnedInModule(true);
                                setMode('cards');
                                setCurrentIndex(0);
                                setIsFlipped(false);
                                setShowProfileDrawer(false);
                              }}
                              className="px-2 py-1 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700 transition"
                            >
                              Повторити
                            </button>
                            <span className="px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-600">
                              {w.level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0 bg-white">
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 px-3 py-2 rounded-xl hover:bg-rose-50 transition"
              >
                <LogOut className="w-3.5 h-3.5" /> Вийти з акаунта
              </button>
              <button
                type="button"
                onClick={() => setShowProfileDrawer(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
              >
                Закрити
              </button>
            </div>
          </aside>
        </div>
      )}

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
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-5 max-h-[92vh] overflow-y-auto">
            <button onClick={() => setShowPaywall(false)} className="absolute top-5 right-5 p-2 rounded-full bg-slate-100"><X className="w-4 h-4" /></button>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold"><Crown className="w-3.5 h-3.5" /> Повний абонемент PRO</div>
              <h3 className="text-2xl font-extrabold">Відкрий усі слова та рівні A1–B2</h3>
              <p className="text-sm text-slate-600">Безкоштовно доступні перші 5 слів у кожній категорії всіх рівнів A1–B2 (усього 60 слів). З підпискою відкривається вся база слів без обмежень.</p>
            </div>

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

            {!user ? (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center justify-between gap-3">
                <p className="text-xs text-amber-900">Спершу увійди в акаунт, щоб система знала, на який e-mail активувати підписку.</p>
                <button onClick={() => { setShowPaywall(false); openAuth('register'); }} className="shrink-0 bg-amber-500 text-slate-950 font-bold text-xs px-3.5 py-2.5 rounded-xl">Увійти</button>
              </div>
            ) : (
              <div className="space-y-3 pt-1">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Крок 1.</strong> Скопіюй свій e-mail та обов’язково встав його в <strong>коментар до платежу</strong> у Monobank (сума: <strong>{currentPlanObj.price} грн</strong>):
                  </p>
                  <div className="flex items-center justify-between gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2">
                    <span className="text-xs font-mono font-bold text-slate-800 truncate">{user.email}</span>
                    <button onClick={handleCopyPayEmail} className="shrink-0 flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800">
                      {emailCopied ? <><Check className="w-3.5 h-3.5" /> Скопійовано</> : <><Copy className="w-3.5 h-3.5" /> Копіювати</>}
                    </button>
                  </div>
                </div>

                <a
                  href={MONO_JAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <span>Оплатити {currentPlanObj.price} грн на Монобанку</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCheckProStatus}
                  disabled={checkingPro}
                  className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  {checkingPro && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Я вже оплатив — перевірити доступ PRO</span>
                </button>

                {proCheckMsg && (
                  <p className="text-xs text-center text-amber-700 font-medium">{proCheckMsg}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {showShareModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto">
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

            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">Досягнення</h4>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  {unlockedCount} з {userAchievements.length}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2 max-h-56 overflow-y-auto pr-1">
                {userAchievements.map((ach) => (
                  <div
                    key={ach.id}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border text-left ${
                      ach.unlocked ? 'bg-amber-50/80 border-amber-200 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-400 opacity-65'
                    }`}
                  >
                    <span className="text-xl shrink-0">{ach.unlocked ? ach.icon : '🔒'}</span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{ach.title}</div>
                      <div className="text-[11px] leading-snug">{ach.desc}</div>
                    </div>
                  </div>
                ))}
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
