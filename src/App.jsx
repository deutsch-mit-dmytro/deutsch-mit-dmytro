import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  { id: 'random', label: '🎲 Різні голоси' },
  { id: 'de-DE-KatjaNeural', label: '👩 Katja (чіткий)' },
  { id: 'de-DE-ConradNeural', label: '👨 Conrad (спокійний)' },
  { id: 'de-DE-AmalaNeural', label: '👩 Amala (жвавий)' },
  { id: 'de-DE-KillianNeural', label: '👨 Killian (глибокий)' }
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
  { id: 2, level: 'A1', category: 'exam', article: 'die', word: 'Anmeldung', plural: 'die Anmeldungen', translation: 'реєстрація,
