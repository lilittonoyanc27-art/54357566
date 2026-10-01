import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  Volume2, 
  ChevronRight, 
  RotateCcw, 
  AlertTriangle, 
  ArrowRight, 
  Languages, 
  BookMarked, 
  Award,
  Layers,
  ChevronDown,
  ChevronUp,
  Clock,
  Send,
  Zap,
  Check,
  Search,
  Type
} from 'lucide-react';
import { Question, Category, ExamSummary, Option } from './types';
import { 
  PREP_QUESTIONS, 
  REAL_EXAM_QUESTIONS, 
  TEORIA_FUNCIONES, 
  TEORIA_MODALIDADES, 
  TEORIA_ELEMENTOS, 
  TARGETED_PRACTICE_QUESTIONS 
} from './data';

// Helper for Spanish text-to-speech pronunciation
function speakSpanish(text: string) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[«»¿?¡!]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// Interactive Click-to-Translate Component
// Clicking on the Spanish text toggles/reveals the Armenian translation!
interface ClickTranslateProps {
  textEs: string;
  textHy: string;
  alwaysShow?: boolean;
  className?: string;
  esClassName?: string;
  hyClassName?: string;
  allowSpeech?: boolean;
}

const ClickTranslate: React.FC<ClickTranslateProps> = ({
  textEs,
  textHy,
  alwaysShow = false,
  className = '',
  esClassName = '',
  hyClassName = '',
  allowSpeech = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const showArmenian = alwaysShow || isOpen;

  return (
    <div className={`group relative inline-block w-full ${className}`}>
      <div 
        onClick={() => !alwaysShow && setIsOpen(!isOpen)}
        className={`flex items-start justify-between gap-3 p-2 rounded-xl transition-all cursor-pointer hover:bg-amber-50/70 border border-transparent hover:border-amber-200 ${esClassName}`}
        title={alwaysShow ? "Texto en español" : "👆 Haz clic para ver la traducción en armenio / Սեղմիր հայերեն թարգմանության համար"}
      >
        <span className="flex-1 font-semibold text-slate-900 leading-relaxed">
          {textEs}
        </span>
        <div className="flex items-center gap-2 shrink-0 pt-0.5">
          {allowSpeech && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                speakSpanish(textEs);
              }}
              className="p-1.5 rounded-lg text-slate-500 hover:text-amber-700 hover:bg-amber-100 transition-colors"
              title="Escuchar pronunciación en español"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          )}
          {!alwaysShow && (
            <span 
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border transition-all ${
                isOpen 
                  ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs' 
                  : 'bg-slate-100 text-slate-700 border-slate-300 group-hover:bg-amber-100 group-hover:border-amber-300 group-hover:text-amber-900'
              }`}
            >
              <span className="text-sm">🇦🇲</span>
              <span>{isOpen ? 'Թաքցնել' : 'Սեղմել՝ հայերեն'}</span>
            </span>
          )}
        </div>
      </div>

      {showArmenian && textHy && (
        <div className={`mt-2 p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 flex items-start gap-3 shadow-xs transition-reveal armenian-text ${hyClassName}`}>
          <span className="text-base shrink-0 pt-0.5">🇦🇲</span>
          <span className="flex-1 font-medium leading-relaxed">{textHy}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  // Navigation: 'prep' (Etapa 1), 'exam' (Etapa 2), 'results' (Reporte final), 'theory' (Fichas teóricas)
  const [currentStage, setCurrentStage] = useState<'prep' | 'exam' | 'results' | 'theory'>('prep');
  
  // Translation mode: false = click Spanish to reveal Armenian, true = always display Armenian
  const [alwaysShowArmenian, setAlwaysShowArmenian] = useState<boolean>(false);

  // Font Size scale: 'normal' | 'large' | 'xlarge'
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('large');

  // ETAPA 1 STATE
  const [prepIndex, setPrepIndex] = useState<number>(0);
  const [prepUserAnswer, setPrepUserAnswer] = useState<string>('');
  const [prepSubmitted, setPrepSubmitted] = useState<boolean>(false);
  const [prepFilter, setPrepFilter] = useState<Category | 'all'>('all');
  const [prepHistory, setPrepHistory] = useState<{ [qId: string]: { answer: string; isCorrect: boolean } }>({});

  // Filtered prep questions
  const filteredPrepQuestions = useMemo(() => {
    if (prepFilter === 'all') return PREP_QUESTIONS;
    return PREP_QUESTIONS.filter(q => q.category === prepFilter);
  }, [prepFilter]);

  const currentPrepQuestion: Question = filteredPrepQuestions[prepIndex] || PREP_QUESTIONS[0];

  // ETAPA 2 (EXAM REAL - 30 questions) STATE
  const [examIndex, setExamIndex] = useState<number>(0);
  const [examAnswers, setExamAnswers] = useState<{ [qId: string]: string }>({});
  const [examSelectedOption, setExamSelectedOption] = useState<string>('');
  const [examCustomInput, setExamCustomInput] = useState<string>('');
  const [examSummary, setExamSummary] = useState<ExamSummary | null>(null);

  // Follow-up targeted practice questions state (active after results)
  const [targetedCategory, setTargetedCategory] = useState<Category | null>(null);
  const [targetedIndex, setTargetedIndex] = useState<number>(0);
  const [targetedSelected, setTargetedSelected] = useState<string>('');
  const [targetedSubmitted, setTargetedSubmitted] = useState<boolean>(false);

  // Theory Tab selected category
  const [theoryCategory, setTheoryCategory] = useState<Category>('funciones');

  // -------------------------------------------------------------
  // HELPER: Flexible answer checking
  // -------------------------------------------------------------
  const checkAnswerAccuracy = (userAns: string, q: Question): boolean => {
    if (!userAns || !userAns.trim()) return false;
    const cleanUser = userAns.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const cleanCorrect = q.correctAnswerEs.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Direct contains or equality
    if (cleanUser === cleanCorrect || cleanCorrect.includes(cleanUser) || cleanUser.includes(cleanCorrect)) {
      return true;
    }

    // Match by acceptable keywords
    if (q.keywordsMatch && q.keywordsMatch.length > 0) {
      for (const kw of q.keywordsMatch) {
        const cleanKw = kw.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (cleanUser.includes(cleanKw)) {
          return true;
        }
      }
    }

    // Check option match
    if (q.options) {
      const matchedOpt = q.options.find(opt => {
        const t = opt.textEs.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return t === cleanUser || cleanUser.includes(t);
      });
      if (matchedOpt && (cleanCorrect.includes(matchedOpt.textEs.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) || cleanUser.includes('a') && q.correctAnswerEs.startsWith('Función'))) {
        return true;
      }
    }

    return false;
  };

  // -------------------------------------------------------------
  // PREPARATION (ETAPA 1) HANDLERS
  // -------------------------------------------------------------
  const handlePrepSubmit = (selectedText?: string) => {
    const textToSubmit = selectedText || prepUserAnswer;
    if (!textToSubmit.trim()) return;

    // Check if user entered trigger for Stage 2 Exam
    const upperText = textToSubmit.toUpperCase();
    if (
      upperText.includes('ESTOY LISTA PARA EL EXAMEN') ||
      upperText.includes('ESTOY LISTO PARA EL EXAMEN') ||
      textToSubmit.includes('ՊԱՏՐԱՍՏ ԵՄ ՔՆՆՈՒԹՅԱՆԸ')
    ) {
      startRealExam();
      return;
    }

    const isCorrect = checkAnswerAccuracy(textToSubmit, currentPrepQuestion);
    setPrepHistory(prev => ({
      ...prev,
      [currentPrepQuestion.id]: { answer: textToSubmit, isCorrect }
    }));
    setPrepUserAnswer(textToSubmit);
    setPrepSubmitted(true);
  };

  const handleNextPrepQuestion = () => {
    if (prepIndex < filteredPrepQuestions.length - 1) {
      setPrepIndex(prev => prev + 1);
      setPrepUserAnswer('');
      setPrepSubmitted(false);
    } else {
      setPrepIndex(0);
      setPrepUserAnswer('');
      setPrepSubmitted(false);
    }
  };

  const handlePrevPrepQuestion = () => {
    if (prepIndex > 0) {
      setPrepIndex(prev => prev - 1);
      const prevQ = filteredPrepQuestions[prepIndex - 1];
      if (prevQ && prepHistory[prevQ.id]) {
        setPrepUserAnswer(prepHistory[prevQ.id].answer);
        setPrepSubmitted(true);
      } else {
        setPrepUserAnswer('');
        setPrepSubmitted(false);
      }
    }
  };

  // -------------------------------------------------------------
  // REAL EXAM (ETAPA 2) HANDLERS
  // -------------------------------------------------------------
  const startRealExam = () => {
    setCurrentStage('exam');
    setExamIndex(0);
    setExamAnswers({});
    setExamSelectedOption('');
    setExamCustomInput('');
    setExamSummary(null);
  };

  const currentExamQuestion = REAL_EXAM_QUESTIONS[examIndex];

  const handleExamNext = () => {
    const chosenAnswer = examSelectedOption || examCustomInput;
    if (!chosenAnswer.trim()) return;

    const updatedAnswers = {
      ...examAnswers,
      [currentExamQuestion.id]: chosenAnswer.trim()
    };
    setExamAnswers(updatedAnswers);

    setExamSelectedOption('');
    setExamCustomInput('');

    if (examIndex < REAL_EXAM_QUESTIONS.length - 1) {
      setExamIndex(prev => prev + 1);
    } else {
      calculateExamResults(updatedAnswers);
    }
  };

  const calculateExamResults = (answersMap: { [qId: string]: string }) => {
    let funcScore = 0;
    let modScore = 0;
    let elemScore = 0;
    let tradScore = 0;

    REAL_EXAM_QUESTIONS.forEach(q => {
      const uAns = answersMap[q.id] || '';
      const isOk = checkAnswerAccuracy(uAns, q);
      if (isOk) {
        if (q.category === 'funciones') funcScore++;
        else if (q.category === 'modalidades') modScore++;
        else if (q.category === 'elementos') elemScore++;
        else if (q.category === 'traduccion') tradScore++;
      }
    });

    const totalScore = funcScore + modScore + elemScore + tradScore;
    const finalGradeOutOf10 = Number(((totalScore / 30) * 10).toFixed(1));

    const strengths: { es: string; hy: string }[] = [];
    const weaknesses: { es: string; hy: string }[] = [];

    if (funcScore >= 8) {
      strengths.push({
        es: 'Excelente dominio de las 6 Funciones del Lenguaje (Referencial, Expresiva, Apelativa, Fática, Metalingüística y Poética).',
        hy: 'Լեզվի 6 գործառույթների գերազանց իմացություն:'
      });
    } else {
      weaknesses.push({
        es: 'Confusión en Funciones del Lenguaje, especialmente entre función Expresiva y Apelativa o la trampa de los signos de exclamación.',
        hy: 'Լեզվի գործառույթների սխալներ (հատկապես զգացմունքայինի և հրամայականի միջև):'
      });
    }

    if (modScore >= 6) {
      strengths.push({
        es: 'Sólida identificación de las Modalidades Oracionales (Enunciativa, Desiderativa con «ojalá», Dubitativa con «quizá», etc.).',
        hy: 'Նախադասությունների տեսակների վստահ ճանաչում (հատկապես ojalá, quizá բանալի բառերով):'
      });
    } else {
      weaknesses.push({
        es: 'Dificultad para reconocer oraciones Desiderativas («Ojalá») o Dubitativas («Tal vez», «A lo mejor»).',
        hy: 'Դժվարություն կասկած (dubitativa) կամ ցանկություն (desiderativa) արտահայտող նախադասություններում:'
      });
    }

    if (elemScore >= 6) {
      strengths.push({
        es: 'Claridad total distinguiendo CANAL (soporte físico) de CÓDIGO (idioma/signos) en situaciones reales.',
        hy: 'Հստակ պատկերացում CANAL-ի (միջոցի) և CÓDIGO-ի (կոդի/լեզվի) տարբերության մասին:'
      });
    } else {
      weaknesses.push({
        es: 'Confusión entre CANAL (medio físico como WhatsApp o teléfono) y CÓDIGO (el idioma español).',
        hy: 'Կոդի (իսպաներեն լեզվի) և միջոցի (WhatsApp/հեռախոս) շփոթում:'
      });
    }

    if (tradScore >= 3) {
      strengths.push({
        es: 'Gran precisión en la traducción Armenio → Español aplicando pronombres («le dice») y subjuntivos.',
        hy: 'Հայերենից իսպաներեն թարգմանության բարձր ճշգրտություն:'
      });
    } else {
      weaknesses.push({
        es: 'Errores en estructuras gramaticales de traducción («le dice al alumno», oraciones dubitativas).',
        hy: 'Քերականական անճշտություններ թարգմանության մեջ:'
      });
    }

    const categoryScores = [
      { cat: 'funciones', scoreRatio: funcScore / 10, es: 'Funciones del Lenguaje (Լեզվի գործառույթները)', hy: 'Լեզվի գործառույթները' },
      { cat: 'modalidades', scoreRatio: modScore / 8, es: 'Modalidades Oracionales (Նախադասությունների տեսակները)', hy: 'Նախադասությունների տեսակները' },
      { cat: 'elementos', scoreRatio: elemScore / 8, es: 'Elementos de la Comunicación (Հաղորդակցության տարրերը - CANAL vs CÓDIGO)', hy: 'Հաղորդակցության տարրերը (միջոց vs կոդ)' },
      { cat: 'traduccion', scoreRatio: tradScore / 4, es: 'Traducción Armenio → Español (Հայերեն → Իսպաներեն թարգմանություն)', hy: 'Հայերեն → Իսպաներեն թարգմանություն' },
    ];
    categoryScores.sort((a, b) => a.scoreRatio - b.scoreRatio);

    const lowest = categoryScores[0];

    const targetedQuestions: Question[] = [];
    if (TARGETED_PRACTICE_QUESTIONS.funciones) targetedQuestions.push(...TARGETED_PRACTICE_QUESTIONS.funciones);
    if (TARGETED_PRACTICE_QUESTIONS.modalidades) targetedQuestions.push(...TARGETED_PRACTICE_QUESTIONS.modalidades);
    if (TARGETED_PRACTICE_QUESTIONS.elementos) targetedQuestions.push(...TARGETED_PRACTICE_QUESTIONS.elementos);

    const finalSummary: ExamSummary = {
      funcionesScore: funcScore,
      funcionesTotal: 10,
      modalidadesScore: modScore,
      modalidadesTotal: 8,
      elementosScore: elemScore,
      elementosTotal: 8,
      traduccionScore: tradScore,
      traduccionTotal: 4,
      totalScore,
      totalQuestions: 30,
      finalGradeOutOf10,
      strengths,
      weaknesses: weaknesses.length > 0 ? weaknesses : [{
        es: '¡No hubo debilidades significativas! Gran preparación académica.',
        hy: 'Էական սխալներ չկան, հիանալի պատրաստություն:'
      }],
      recommendedTopic: { es: lowest.es, hy: lowest.hy },
      targetedReviewQuestions: targetedQuestions.slice(0, 5)
    };

    setExamSummary(finalSummary);
    setCurrentStage('results');
  };

  // Font size multiplier class
  const fontContainerClass = useMemo(() => {
    if (fontSizeLevel === 'xlarge') return 'text-lg md:text-xl';
    if (fontSizeLevel === 'large') return 'text-base md:text-lg';
    return 'text-sm md:text-base';
  }, [fontSizeLevel]);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-200 ${fontContainerClass}`}>
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white shadow-sm font-bold text-2xl">
              🇪🇸
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-lg md:text-xl text-slate-900 tracking-tight">
                  Preparador de Examen de Español
                </h1>
                <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded-full border border-amber-300">
                  🇦🇲 Հայերեն
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Funciones del Lenguaje • Modalidades Oracionales • Elementos de la Comunicación
              </p>
            </div>
          </div>

          {/* Quick controls: Font Size, Translation Toggle & Stage Selector */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Font size toggle */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700">
              <span className="px-2 text-slate-400 flex items-center gap-1">
                <Type className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Шрифт:</span>
              </span>
              <button
                type="button"
                onClick={() => setFontSizeLevel('normal')}
                className={`px-2 py-1 rounded-lg transition-all ${
                  fontSizeLevel === 'normal' ? 'bg-white shadow-xs text-slate-900' : 'hover:text-slate-900'
                }`}
                title="Tamaño normal"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSizeLevel('large')}
                className={`px-2 py-1 rounded-lg transition-all text-sm ${
                  fontSizeLevel === 'large' ? 'bg-white shadow-xs text-amber-700' : 'hover:text-slate-900'
                }`}
                title="Tamaño grande (Recomendado)"
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => setFontSizeLevel('xlarge')}
                className={`px-2 py-1 rounded-lg transition-all text-base ${
                  fontSizeLevel === 'xlarge' ? 'bg-white shadow-xs text-red-600' : 'hover:text-slate-900'
                }`}
                title="Tamaño extra grande"
              >
                A++
              </button>
            </div>

            {/* Click-to-translate toggle mode */}
            <button
              type="button"
              onClick={() => setAlwaysShowArmenian(!alwaysShowArmenian)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs md:text-sm font-semibold border transition-all ${
                alwaysShowArmenian 
                  ? 'bg-amber-100 text-amber-950 border-amber-300 shadow-xs' 
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
              title="Alternar entre traducción al hacer clic o siempre visible"
            >
              <Languages className="w-4 h-4 text-amber-600" />
              <span>
                {alwaysShowArmenian ? '🇦🇲 Հայերեն միշտ' : '👆 Սեղմել՝ հայերեն'}
              </span>
            </button>

            {/* Stage Selector */}
            <div className="flex bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-xs md:text-sm font-bold">
              <button
                type="button"
                onClick={() => setCurrentStage('prep')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  currentStage === 'prep'
                    ? 'bg-white text-amber-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Etapa 1: Prep</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  if (examSummary && currentStage !== 'exam') {
                    setCurrentStage('results');
                  } else {
                    startRealExam();
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  currentStage === 'exam' || currentStage === 'results'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Examen (30)</span>
              </button>
              <button
                type="button"
                onClick={() => setCurrentStage('theory')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  currentStage === 'theory'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Fichas teóricas y reglas rápidas"
              >
                <BookMarked className="w-4 h-4" />
                <span className="hidden sm:inline">Teoría</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 md:p-6 flex flex-col gap-6">

        {/* ============================================================== */}
        {/* ETAPA 1: PREPARACIÓN Y CONVERSACIÓN (PROFESOR VIRTUAL)          */}
        {/* ============================================================== */}
        {currentStage === 'prep' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Stage Banner & Instructions */}
            <div className="bg-linear-to-r from-amber-500/15 via-orange-500/15 to-red-500/15 border-2 border-amber-300 rounded-3xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-amber-200 text-amber-950 border border-amber-400">
                    Etapa 1 / 1-ին Փուլ
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Preparación con tu Profesor Virtual
                  </h2>
                </div>
                <p className="text-base text-slate-800 mt-1 font-medium">
                  Elige una opción o escribe tu respuesta. Inmediatamente te indico si es <strong>VERDADERO (ВЕРНО)</strong> o <strong>INCORRECTO (НЕВЕРНО)</strong> y podrás presionar <strong>Continuar (Продолжить)</strong>.
                </p>
                <p className="text-sm text-amber-950 mt-1 font-semibold armenian-text">
                  🇦🇲 Ընտրիր պատասխանը։ Համակարգը կնշի՝ ՃԻՇՏ Է (ВЕРНО), թե՞ ՍԽԱԼ (НЕВЕРНО), որից հետո սեղմիր «Շարունակել» (Продолжить)։
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={startRealExam}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-sm font-black shadow-md transition-all hover:scale-[1.02]"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>¿Lista? Iniciar Examen (30)</span>
                </button>
              </div>
            </div>

            {/* Filter by Topic Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs md:text-sm">
              <span className="font-bold text-slate-500 shrink-0">Filtrar tema:</span>
              <button
                type="button"
                onClick={() => { setPrepFilter('all'); setPrepIndex(0); setPrepSubmitted(false); setPrepUserAnswer(''); }}
                className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 ${
                  prepFilter === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Todos los temas ({PREP_QUESTIONS.length})
              </button>
              <button
                type="button"
                onClick={() => { setPrepFilter('funciones'); setPrepIndex(0); setPrepSubmitted(false); setPrepUserAnswer(''); }}
                className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 ${
                  prepFilter === 'funciones'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                1. Funciones del Lenguaje
              </button>
              <button
                type="button"
                onClick={() => { setPrepFilter('modalidades'); setPrepIndex(0); setPrepSubmitted(false); setPrepUserAnswer(''); }}
                className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 ${
                  prepFilter === 'modalidades'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                2. Modalidades Oracionales
              </button>
              <button
                type="button"
                onClick={() => { setPrepFilter('elementos'); setPrepIndex(0); setPrepSubmitted(false); setPrepUserAnswer(''); }}
                className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 ${
                  prepFilter === 'elementos'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                3. Elementos (Canal vs Código)
              </button>
              <button
                type="button"
                onClick={() => { setPrepFilter('traduccion'); setPrepIndex(0); setPrepSubmitted(false); setPrepUserAnswer(''); }}
                className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 ${
                  prepFilter === 'traduccion'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                4. Traducción Armenio → Esp
              </button>
            </div>

            {/* Main Question Card with Big Font */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              {/* Question Header */}
              <div className="bg-slate-100/80 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-base shadow-xs">
                    {prepIndex + 1}
                  </span>
                  <span className="text-sm font-extrabold uppercase tracking-wider text-slate-600">
                    Pregunta {prepIndex + 1} de {filteredPrepQuestions.length}
                  </span>
                  {currentPrepQuestion.type === 'trap' && (
                    <span className="flex items-center gap-1.5 text-xs font-black px-2.5 py-1 rounded-lg bg-red-100 text-red-800 border border-red-300">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      Pregunta con trampa / Թակարդային հարց
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevPrepQuestion}
                    disabled={prepIndex === 0}
                    className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs md:text-sm font-bold text-slate-600 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Pregunta anterior"
                  >
                    ← Anterior
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPrepQuestion}
                    disabled={prepIndex >= filteredPrepQuestions.length - 1}
                    className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs md:text-sm font-bold text-slate-600 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Siguiente pregunta"
                  >
                    Siguiente →
                  </button>
                </div>
              </div>

              {/* Question Body */}
              <div className="p-6 md:p-8 flex flex-col gap-6">
                {/* Spanish & Armenian Question Title (Large Font) */}
                <div>
                  <div className="text-xs md:text-sm font-extrabold text-amber-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span>🇪🇸 Pregunta en español:</span>
                    <span className="text-slate-500 font-medium">(Haz clic en el texto para abrir o cerrar la traducción armenia)</span>
                  </div>
                  <ClickTranslate
                    textEs={currentPrepQuestion.questionEs}
                    textHy={currentPrepQuestion.questionHy}
                    alwaysShow={alwaysShowArmenian}
                    esClassName="text-xl md:text-2xl font-black text-slate-900 border border-slate-200 hover:border-amber-400 bg-slate-50/50 hover:bg-amber-50/50 p-3"
                    hyClassName="text-base md:text-lg font-semibold"
                    allowSpeech={true}
                  />
                </div>

                {/* Phrase Highlight if applicable */}
                {currentPrepQuestion.phraseEs && (
                  <div className="p-4 md:p-5 rounded-2xl bg-amber-50/90 border-2 border-amber-200">
                    <div className="text-xs md:text-sm font-black text-amber-800 uppercase tracking-wider mb-1">
                      Frase a analizar / Վերլուծվող նախադասություն:
                    </div>
                    <ClickTranslate
                      textEs={currentPrepQuestion.phraseEs}
                      textHy={currentPrepQuestion.phraseHy || ''}
                      alwaysShow={alwaysShowArmenian}
                      esClassName="text-xl md:text-2xl font-serif italic text-amber-950 font-bold"
                      allowSpeech={true}
                    />
                  </div>
                )}

                {/* Situation Context if applicable */}
                {currentPrepQuestion.situationEs && (
                  <div className="p-4 md:p-5 rounded-2xl bg-blue-50/90 border-2 border-blue-200">
                    <div className="text-xs md:text-sm font-black text-blue-900 uppercase tracking-wider mb-1">
                      Situación real / Իրական իրավիճակ:
                    </div>
                    <ClickTranslate
                      textEs={currentPrepQuestion.situationEs}
                      textHy={currentPrepQuestion.situationHy || ''}
                      alwaysShow={alwaysShowArmenian}
                      esClassName="text-base md:text-lg font-semibold text-blue-950"
                      allowSpeech={true}
                    />
                  </div>
                )}

                {/* Options List (Multiple Choice / Immediate Feedback on Click) */}
                {currentPrepQuestion.options && (
                  <div className="flex flex-col gap-3 pt-2">
                    <div className="text-xs md:text-sm font-extrabold text-slate-600 uppercase tracking-wider">
                      {prepSubmitted 
                        ? 'Opciones evaluadas (¡Observa cuál era la correcta!):' 
                        : 'Selecciona una opción para comprobar si es CORRECTA (ВЕРНО) o INCORRECTA (НЕВЕРНО):'}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {currentPrepQuestion.options.map((opt: Option) => {
                        const isSelected = prepUserAnswer === opt.textEs;
                        const isCorrectOpt = checkAnswerAccuracy(opt.textEs, currentPrepQuestion);
                        
                        let cardStyle = "border-2 border-slate-200 bg-white hover:border-amber-500 hover:bg-amber-50/50 text-slate-800 hover:shadow-xs";
                        let badgeContent = null;

                        if (prepSubmitted) {
                          if (isCorrectOpt) {
                            cardStyle = "border-2 border-emerald-500 bg-emerald-50/90 text-emerald-950 font-bold ring-2 ring-emerald-400 shadow-sm";
                            badgeContent = (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white font-black text-xs uppercase shadow-xs">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>ВЕРНО • ¡CORRECTO! • ՃԻՇՏ Է</span>
                              </span>
                            );
                          } else if (isSelected && !isCorrectOpt) {
                            cardStyle = "border-2 border-red-500 bg-red-50/90 text-red-950 font-semibold shadow-sm";
                            badgeContent = (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs uppercase shadow-xs">
                                <XCircle className="w-4 h-4" />
                                <span>НЕВЕРНО • INCORRECTO • ՍԽԱԼ Է</span>
                              </span>
                            );
                          } else {
                            cardStyle = "border border-slate-200 bg-slate-50 opacity-60 text-slate-600";
                          }
                        } else if (isSelected) {
                          cardStyle = "border-2 border-amber-500 bg-amber-50 text-amber-950 font-bold ring-2 ring-amber-400";
                        }

                        return (
                          <div
                            key={opt.id}
                            onClick={() => {
                              if (!prepSubmitted) {
                                handlePrepSubmit(opt.textEs);
                              }
                            }}
                            className={`p-4 md:p-5 rounded-2xl transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${cardStyle}`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <span className="text-base md:text-lg font-bold flex items-start gap-2.5">
                                <span className={`w-7 h-7 rounded-lg text-sm flex items-center justify-center font-mono font-bold shrink-0 mt-0.5 ${
                                  prepSubmitted && isCorrectOpt 
                                    ? 'bg-emerald-600 text-white' 
                                    : prepSubmitted && isSelected && !isCorrectOpt
                                      ? 'bg-red-600 text-white'
                                      : 'bg-slate-200 text-slate-800'
                                }`}>
                                  {opt.id.toUpperCase()}
                                </span>
                                <span className="leading-snug">{opt.textEs}</span>
                              </span>

                              {badgeContent && (
                                <div className="shrink-0">{badgeContent}</div>
                              )}
                            </div>

                            <span className="text-sm md:text-base text-slate-600 pl-9 font-medium armenian-text">
                              🇦🇲 {opt.textHy}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Free input / Open answer box */}
                <div className="pt-2 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs md:text-sm font-extrabold text-slate-600 uppercase tracking-wider">
                      O escribe tu respuesta aquí / Կամ գրիր քո պատասխանը:
                    </label>
                    <span className="text-xs text-slate-400 font-medium">
                      (Presiona Enter para responder)
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={prepUserAnswer}
                      onChange={(e) => setPrepUserAnswer(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && prepUserAnswer.trim()) {
                          handlePrepSubmit();
                        }
                      }}
                      placeholder="Escribe tu respuesta aquí..."
                      className="flex-1 px-4 py-3 rounded-2xl border-2 border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-hidden text-base bg-slate-50/70"
                    />
                    <button
                      type="button"
                      onClick={() => handlePrepSubmit()}
                      disabled={!prepUserAnswer.trim()}
                      className="px-5 py-3 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 text-white rounded-2xl text-base font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                    >
                      <span>Responder</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* TEACHER FEEDBACK: Clear VERNO / NEVERNO badge + Explanations + PROMINENT CONTINUAR BUTTON */}
                {prepSubmitted && (
                  <div className="mt-4 p-6 md:p-8 rounded-3xl border-2 border-slate-300 bg-slate-50 flex flex-col gap-5 animate-slideDown shadow-md">
                    
                    {/* Status Banner */}
                    <div className="flex items-center justify-between flex-wrap gap-4 p-4 rounded-2xl border-2 shadow-xs bg-white">
                      <div className="flex items-center gap-3">
                        {checkAnswerAccuracy(prepUserAnswer, currentPrepQuestion) ? (
                          <div className="flex items-center gap-3 text-emerald-800">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                            </div>
                            <div>
                              <div className="text-lg md:text-xl font-black text-emerald-900 tracking-tight">
                                ✅ ВЕРНО! ¡TU RESPUESTA ES CORRECTA!
                              </div>
                              <div className="text-sm md:text-base font-bold text-emerald-700 armenian-text">
                                🇦🇲 ՃԻՇՏ Է (Ճիշտ պատասխանեցիր)
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 text-red-800">
                            <div className="w-12 h-12 rounded-2xl bg-red-100 border-2 border-red-400 flex items-center justify-center shrink-0">
                              <XCircle className="w-7 h-7 text-red-600" />
                            </div>
                            <div>
                              <div className="text-lg md:text-xl font-black text-red-900 tracking-tight">
                                ❌ НЕВЕРНО! RESPUESTA INCORRECTA
                              </div>
                              <div className="text-sm md:text-base font-bold text-red-700 armenian-text">
                                🇦🇲 ՍԽԱԼ Է (Կարդա՛ ճիշտ պատասխանը ստորև)
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Prominent Next Button inside the banner too */}
                      <button
                        type="button"
                        onClick={handleNextPrepQuestion}
                        className="px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white rounded-2xl text-base md:text-lg font-black flex items-center gap-2.5 shadow-md hover:scale-[1.03] transition-all cursor-pointer"
                      >
                        <span>Продолжить / Շարունակել</span>
                        <ChevronRight className="w-5 h-5 text-amber-400" />
                      </button>
                    </div>

                    {/* Tu respuesta */}
                    <div className="text-sm md:text-base p-3.5 rounded-xl bg-white border border-slate-200">
                      <span className="font-bold text-slate-500">Твой ответ / Mi respuesta: </span>
                      <span className="font-bold text-slate-900">«{prepUserAnswer}»</span>
                    </div>

                    {/* Respuesta Correcta en ES y HY */}
                    <div className="p-4 md:p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300">
                      <div className="text-xs md:text-sm font-black text-emerald-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>✅ ПРАВИЛЬНЫЙ ОТВЕТ / RESPUESTA CORRECTA / ՃԻՇՏ ՊԱՏԱՍԽԱՆԸ՝</span>
                      </div>
                      <ClickTranslate
                        textEs={currentPrepQuestion.correctAnswerEs}
                        textHy={currentPrepQuestion.correctAnswerHy}
                        alwaysShow={true}
                        esClassName="font-black text-emerald-950 text-lg md:text-xl"
                        hyClassName="bg-white/90 border-emerald-400 text-emerald-900 font-bold text-base md:text-lg"
                        allowSpeech={true}
                      />
                    </div>

                    {/* Explicación en ES y HY */}
                    <div className="p-4 md:p-5 rounded-2xl bg-blue-50 border-2 border-blue-200 flex flex-col gap-2">
                      <div className="text-xs md:text-sm font-black text-blue-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span>💡 ОБЪЯСНЕНИЕ / EXPLICACIÓN / ԲԱՑԱՏՐՈՒԹՅՈՒՆ՝</span>
                      </div>
                      <ClickTranslate
                        textEs={currentPrepQuestion.explanationEs}
                        textHy={currentPrepQuestion.explanationHy}
                        alwaysShow={true}
                        esClassName="text-base md:text-lg text-slate-900 font-medium leading-relaxed"
                        hyClassName="bg-white/90 border-blue-300 text-blue-950 text-base md:text-lg font-medium"
                        allowSpeech={true}
                      />
                    </div>

                    {/* Palabras Clave */}
                    {currentPrepQuestion.keywordEs && (
                      <div className="flex items-center gap-2.5 text-sm md:text-base flex-wrap p-3 rounded-xl bg-white border border-slate-200">
                        <span className="font-extrabold text-slate-600">Ключевое слово / Palabra clave:</span>
                        <span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-950 border border-amber-300 font-black">
                          {currentPrepQuestion.keywordEs}
                        </span>
                        <span className="text-slate-400 font-bold">|</span>
                        <span className="text-slate-700 font-semibold armenian-text">🇦🇲 {currentPrepQuestion.keywordHy}</span>
                      </div>
                    )}

                    {/* Trampas si existen */}
                    {currentPrepQuestion.trapWarningEs && (
                      <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-400 text-sm md:text-base text-amber-950 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-black text-amber-900 uppercase">⚠️ ЛОВУШКА НА ЭКЗАМЕНЕ / ¡CUIDADO CON LA TRAMPA! / ՈՒՇԱԴԻՐ՝ ԹԱԿԱՐԴ․</div>
                          <div className="mt-1 font-semibold">{currentPrepQuestion.trapWarningEs}</div>
                          <div className="mt-1 text-amber-800 font-medium armenian-text">🇦🇲 {currentPrepQuestion.trapWarningHy}</div>
                        </div>
                      </div>
                    )}

                    {/* BIG PROMINENT CONTINUAR BUTTON */}
                    <div className="pt-2 flex justify-center">
                      <button
                        type="button"
                        onClick={handleNextPrepQuestion}
                        className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white rounded-2xl text-lg md:text-xl font-black flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <span>👉 ПРОДОЛЖИТЬ (Следующий вопрос) / CONTINUAR / ՇԱՐՈՒՆԱԿԵԼ</span>
                        <ArrowRight className="w-6 h-6" />
                      </button>
                    </div>

                  </div>
                )}
              </div>

              {/* Question Footer Navigation */}
              <div className="bg-slate-100 border-t border-slate-200 px-6 py-4 flex items-center justify-between text-xs md:text-sm text-slate-600 font-medium">
                <span>
                  Pregunta {prepIndex + 1} de {filteredPrepQuestions.length}
                </span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setPrepIndex(0);
                      setPrepSubmitted(false);
                      setPrepUserAnswer('');
                    }}
                    className="flex items-center gap-1.5 hover:text-slate-900 font-bold"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>С начала / Reiniciar</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Ready for Exam Shortcut banner */}
            <div className="p-5 rounded-3xl bg-white border-2 border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="font-extrabold text-base md:text-lg text-slate-900">
                  ¿Te sientes lista para el examen oficial de 30 preguntas?
                </h4>
                <p className="text-sm text-slate-600 mt-0.5">
                  10 funciones del lenguaje, 8 modalidades oracionales, 8 elementos de la comunicación y 4 traducciones.
                </p>
              </div>
              <button
                type="button"
                onClick={startRealExam}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-sm md:text-base font-black transition-all shadow-md shrink-0 cursor-pointer"
              >
                Պատրա՞ստ ես • Comenzar Examen Real (30)
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* ETAPA 2: EXAMEN REAL (30 PREGUNTAS)                              */}
        {/* ============================================================== */}
        {currentStage === 'exam' && currentExamQuestion && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Exam Header Status Bar */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-red-100 text-red-900 border border-red-300">
                    Etapa 2 / 2-րդ Փուլ
                  </span>
                  <h2 className="text-lg md:text-xl font-black text-slate-900">
                    EXAMEN REAL DE ESPAÑOL (30 PREGUNTAS)
                  </h2>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  Responde una por una. Al finalizar las 30 preguntas verás el desglose completo, notas por sección y el diagnóstico de errores.
                </p>
              </div>

              {/* Progress Tracker */}
              <div className="flex flex-col items-end w-full md:w-56 shrink-0">
                <div className="flex items-center justify-between w-full text-sm font-bold text-slate-800 mb-1.5">
                  <span>Progreso:</span>
                  <span className="font-mono text-red-600 text-base">{examIndex + 1} / 30</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-red-600 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((examIndex + 1) / 30) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Exam Question Box */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl shadow-sm p-6 md:p-8 flex flex-col gap-6">
              {/* Category indicator */}
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-slate-900 text-white font-black text-base flex items-center justify-center">
                    {examIndex + 1}
                  </span>
                  <div>
                    <div className="text-xs md:text-sm font-black text-slate-500 uppercase tracking-wider">
                      {currentExamQuestion.category === 'funciones' && '1. FUNCIONES DEL LENGUAJE (10 PREGUNTAS)'}
                      {currentExamQuestion.category === 'modalidades' && '2. MODALIDADES ORACIONALES (8 PREGUNTAS)'}
                      {currentExamQuestion.category === 'elementos' && '3. ELEMENTOS DE LA COMUNICACIÓN (8 PREGUNTAS)'}
                      {currentExamQuestion.category === 'traduccion' && '4. TRADUCCIÓN ARMENIO → ESPAÑOL (4 PREGUNTAS)'}
                    </div>
                  </div>
                </div>

                <span className="text-xs md:text-sm font-bold text-slate-400">
                  Sin pistas • Examen activo
                </span>
              </div>

              {/* Question text with Click-to-Translate */}
              <div>
                <ClickTranslate
                  textEs={currentExamQuestion.questionEs}
                  textHy={currentExamQuestion.questionHy}
                  alwaysShow={alwaysShowArmenian}
                  esClassName="text-xl md:text-2xl font-black text-slate-900 p-2"
                  hyClassName="text-base md:text-lg font-bold"
                  allowSpeech={true}
                />
              </div>

              {/* Phrase / Situation if present */}
              {currentExamQuestion.phraseHy && (
                <div className="p-5 rounded-2xl bg-amber-50/90 border-2 border-amber-200">
                  <div className="text-xs md:text-sm font-black text-amber-900 uppercase tracking-wider mb-1">
                    Նախադասություն՝
                  </div>
                  <div className="text-lg md:text-xl font-bold text-amber-950 font-serif armenian-text">
                    🇦🇲 {currentExamQuestion.phraseHy}
                  </div>
                </div>
              )}

              {currentExamQuestion.situationEs && (
                <div className="p-5 rounded-2xl bg-blue-50/90 border-2 border-blue-200">
                  <div className="text-xs md:text-sm font-black text-blue-900 uppercase tracking-wider mb-1">
                    Situación / Իրավիճակ՝
                  </div>
                  <ClickTranslate
                    textEs={currentExamQuestion.situationEs}
                    textHy={currentExamQuestion.situationHy || ''}
                    alwaysShow={alwaysShowArmenian}
                    esClassName="text-base md:text-lg font-semibold text-blue-950"
                  />
                </div>
              )}

              {/* Options */}
              {currentExamQuestion.options && (
                <div className="flex flex-col gap-3">
                  <div className="text-xs md:text-sm font-extrabold text-slate-500 uppercase tracking-wider">
                    Selecciona tu respuesta:
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {currentExamQuestion.options.map((opt: Option) => {
                      const isSelected = examSelectedOption === opt.textEs;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setExamSelectedOption(opt.textEs);
                            setExamCustomInput(opt.textEs);
                          }}
                          className={`p-4 md:p-5 rounded-2xl border-2 text-left transition-all flex flex-col gap-1 cursor-pointer ${
                            isSelected
                              ? 'border-red-600 bg-red-50/90 ring-2 ring-red-400 text-slate-900 font-bold shadow-xs'
                              : 'border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-lg text-sm font-mono font-bold flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'
                            }`}>
                              {opt.id.toUpperCase()}
                            </span>
                            <span className="text-base md:text-lg leading-snug">{opt.textEs}</span>
                          </div>
                          {alwaysShowArmenian && (
                            <span className="text-sm md:text-base text-slate-600 pl-10 font-medium armenian-text">
                              🇦🇲 {opt.textHy}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Or manual written answer */}
              <div className="flex flex-col gap-2">
                <label className="text-xs md:text-sm font-extrabold text-slate-600 uppercase tracking-wider">
                  O escribe tu respuesta escrita / Գրավոր պատասխան:
                </label>
                <input
                  type="text"
                  value={examCustomInput}
                  onChange={(e) => {
                    setExamCustomInput(e.target.value);
                    setExamSelectedOption(e.target.value);
                  }}
                  placeholder="Tu respuesta para esta pregunta..."
                  className="px-4 py-3.5 rounded-2xl border-2 border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-hidden text-base bg-slate-50/50"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (examSelectedOption || examCustomInput)) {
                      handleExamNext();
                    }
                  }}
                />
              </div>

              {/* Next Question / Continuar Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStage('prep')}
                  className="text-sm text-slate-500 hover:text-slate-800 font-bold"
                >
                  ← Salir a modo preparación
                </button>

                <button
                  type="button"
                  onClick={handleExamNext}
                  disabled={!(examSelectedOption.trim() || examCustomInput.trim())}
                  className="px-8 py-3.5 bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white rounded-2xl text-base md:text-lg font-black flex items-center gap-2.5 shadow-md hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <span>
                    {examIndex < 29 ? '👉 Продолжить / Continuar / Շարունակել' : 'Finalizar examen y ver resultados'}
                  </span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* REPORT FINAL POST-EXAMEN (DESGLOSE COMPLETO DE LAS 30 PREG.)    */}
        {/* ============================================================== */}
        {currentStage === 'results' && examSummary && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            {/* Final Grade Card */}
            <div className="bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold tracking-wider uppercase backdrop-blur-xs mb-2">
                    <Award className="w-4 h-4" />
                    <span>RESULTADO OFICIAL DEL EXAMEN</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                    {examSummary.finalGradeOutOf10 >= 9 && '¡SOBRESALIENTE! / ԳԵՐԱԶԱՆՑ'}
                    {examSummary.finalGradeOutOf10 >= 7 && examSummary.finalGradeOutOf10 < 9 && '¡NOTABLE! / ՇԱՏ ԼԱՎ'}
                    {examSummary.finalGradeOutOf10 >= 5 && examSummary.finalGradeOutOf10 < 7 && '¡APROBADO! / ԴՐԱԿԱՆ'}
                    {examSummary.finalGradeOutOf10 < 5 && 'NECESITA REPASO / ՎԵՐԱՆԱՅԵԼ'}
                  </h2>
                  <p className="text-slate-300 text-base mt-1 max-w-xl">
                    Has completado las 30 preguntas del examen real de español con apoyo en armenio.
                  </p>
                </div>

                {/* Score Circles */}
                <div className="flex items-center gap-5 bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm shrink-0">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-amber-400 font-mono">
                      {examSummary.totalScore}
                      <span className="text-xl text-slate-400 font-normal">/30</span>
                    </div>
                    <div className="text-xs font-bold text-slate-300 uppercase mt-1">
                      Aciertos totales
                    </div>
                  </div>

                  <div className="h-12 w-px bg-white/20" />

                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-emerald-400 font-mono">
                      {examSummary.finalGradeOutOf10}
                      <span className="text-xl text-slate-400 font-normal">/10</span>
                    </div>
                    <div className="text-xs font-bold text-slate-300 uppercase mt-1">
                      Nota final
                    </div>
                  </div>
                </div>
              </div>

              {/* Exact Category Breakdown as requested */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-xs font-bold text-slate-400">Funciones del Lenguaje</div>
                  <div className="text-2xl font-black text-amber-300 font-mono mt-0.5">
                    {examSummary.funcionesScore} / {examSummary.funcionesTotal}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">🇦🇲 Լեզվի գործառույթներ</div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-xs font-bold text-slate-400">Modalidades Oracionales</div>
                  <div className="text-2xl font-black text-emerald-300 font-mono mt-0.5">
                    {examSummary.modalidadesScore} / {examSummary.modalidadesTotal}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">🇦🇲 Նախադասության տեսակներ</div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-xs font-bold text-slate-400">Elementos de Comunicación</div>
                  <div className="text-2xl font-black text-blue-300 font-mono mt-0.5">
                    {examSummary.elementosScore} / {examSummary.elementosTotal}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">🇦🇲 Հաղորդակցման տարրեր</div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-xs font-bold text-slate-400">Traducción Armenio → Esp</div>
                  <div className="text-2xl font-black text-purple-300 font-mono mt-0.5">
                    {examSummary.traduccionScore} / {examSummary.traduccionTotal}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">🇦🇲 Հայերեն → Իսպաներեն</div>
                </div>
              </div>
            </div>

            {/* Diagnostic Report: 1. Aciertos, 2. Errores, 3. Tema a repasar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Strengths */}
              <div className="bg-white border-2 border-emerald-200 rounded-3xl p-6 shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-800 font-black text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>1. Qué respuestas hiciste bien</span>
                </div>
                <div className="text-xs font-bold text-emerald-700">🇦🇲 Ինչն արեցիր ճիշտ</div>
                <ul className="text-sm md:text-base text-slate-700 flex flex-col gap-2.5 mt-2">
                  {examSummary.strengths.map((s, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5 border-b border-emerald-100 pb-2 last:border-none">
                      <span className="font-bold text-slate-900">• {s.es}</span>
                      <span className="text-emerald-800 text-sm font-medium armenian-text">🇦🇲 {s.hy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-white border-2 border-red-200 rounded-3xl p-6 shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-red-800 font-black text-base">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span>2. Qué errores repetiste</span>
                </div>
                <div className="text-xs font-bold text-red-700">🇦🇲 Կրկնվող սխալները</div>
                <ul className="text-sm md:text-base text-slate-700 flex flex-col gap-2.5 mt-2">
                  {examSummary.weaknesses.map((w, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5 border-b border-red-100 pb-2 last:border-none">
                      <span className="font-bold text-slate-900">• {w.es}</span>
                      <span className="text-red-800 text-sm font-medium armenian-text">🇦🇲 {w.hy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendation */}
              <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-amber-900 font-black text-base">
                  <Zap className="w-5 h-5 text-amber-600" />
                  <span>3. Tema que debes repasar más</span>
                </div>
                <div className="text-xs font-bold text-amber-800">🇦🇲 Ո՞ր թեման է պետք կրկնել</div>
                <div className="p-4 bg-amber-50 rounded-2xl border-2 border-amber-300 mt-2">
                  <div className="font-black text-base text-amber-950">
                    {examSummary.recommendedTopic.es}
                  </div>
                  <div className="text-sm text-amber-900 mt-1 font-semibold armenian-text">
                    🇦🇲 {examSummary.recommendedTopic.hy}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStage('prep');
                  }}
                  className="mt-auto px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl text-sm font-black transition-all text-center cursor-pointer shadow-xs"
                >
                  Repasar este tema en Etapa 1
                </button>
              </div>
            </div>

            {/* 4. 5 PREGUNTAS NUEVAS SOLAMENTE SOBRE TUS ERRORES */}
            {examSummary.targetedReviewQuestions.length > 0 && (
              <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-purple-100 text-purple-900 border border-purple-300">
                      4. Refuerzo personalizado / Հատուկ ամրապնդում
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 mt-1">
                      5 preguntas nuevas exclusivamente sobre tus errores
                    </h3>
                  </div>
                  <span className="text-sm text-slate-500 font-mono font-bold">
                    Pregunta {targetedIndex + 1} de {examSummary.targetedReviewQuestions.length}
                  </span>
                </div>

                {(() => {
                  const tQ = examSummary.targetedReviewQuestions[targetedIndex];
                  if (!tQ) return null;

                  return (
                    <div className="p-5 md:p-6 rounded-2xl bg-purple-50/60 border-2 border-purple-200 flex flex-col gap-5">
                      <ClickTranslate
                        textEs={tQ.questionEs}
                        textHy={tQ.questionHy}
                        alwaysShow={alwaysShowArmenian}
                        esClassName="font-black text-lg md:text-xl text-slate-900"
                        hyClassName="text-base font-semibold"
                        allowSpeech={true}
                      />

                      {tQ.options && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {tQ.options.map(opt => {
                            const isChosen = targetedSelected === opt.textEs;
                            const isCorrect = checkAnswerAccuracy(opt.textEs, tQ);

                            let style = "border-2 border-slate-200 bg-white hover:bg-purple-50 text-slate-800";
                            if (targetedSubmitted) {
                              if (isCorrect) style = "border-2 border-emerald-500 bg-emerald-50 font-bold text-emerald-950";
                              else if (isChosen && !isCorrect) style = "border-2 border-red-500 bg-red-50 text-red-950";
                            } else if (isChosen) {
                              style = "border-2 border-purple-500 bg-purple-100 font-bold";
                            }

                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  if (!targetedSubmitted) {
                                    setTargetedSelected(opt.textEs);
                                    setTargetedSubmitted(true);
                                  }
                                }}
                                className={`p-4 rounded-xl border text-left text-sm md:text-base transition-all flex flex-col gap-1 cursor-pointer ${style}`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-bold">{opt.textEs}</span>
                                  {targetedSubmitted && isCorrect && (
                                    <span className="text-xs bg-emerald-600 text-white font-black px-2 py-0.5 rounded-md">ВЕРНО</span>
                                  )}
                                  {targetedSubmitted && isChosen && !isCorrect && (
                                    <span className="text-xs bg-red-600 text-white font-black px-2 py-0.5 rounded-md">НЕВЕРНО</span>
                                  )}
                                </div>
                                <span className="text-slate-600 armenian-text">🇦🇲 {opt.textHy}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {targetedSubmitted && (
                        <div className="p-4 bg-white rounded-2xl border-2 border-purple-300 flex flex-col gap-3 text-sm md:text-base">
                          <div className="font-black text-emerald-900 text-base">
                            ✅ Правильный ответ / Respuesta correcta: {tQ.correctAnswerEs}
                          </div>
                          <div className="text-slate-800 leading-relaxed">
                            {tQ.explanationEs}
                          </div>
                          <div className="text-slate-700 font-medium armenian-text">
                            🇦🇲 {tQ.explanationHy}
                          </div>

                          {targetedIndex < examSummary.targetedReviewQuestions.length - 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                setTargetedIndex(prev => prev + 1);
                                setTargetedSelected('');
                                setTargetedSubmitted(false);
                              }}
                              className="self-end px-5 py-2.5 bg-purple-700 text-white rounded-xl font-black text-sm hover:bg-purple-800 cursor-pointer shadow-xs"
                            >
                              👉 Продолжить (Следующий вопрос) →
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* FULL REVIEW OF ALL 30 QUESTIONS */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              <div className="p-6 bg-slate-100 border-b border-slate-200 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h3 className="font-black text-lg md:text-xl text-slate-900">
                    DESGLOSE COMPLETO DE LAS 30 PREGUNTAS DEL EXAMEN
                  </h3>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Revisa una por una tu respuesta (ВЕРНО / НЕВЕРНО), la respuesta correcta y la explicación bilingüe.
                  </p>
                </div>
                <span className="text-xs md:text-sm font-bold text-slate-700 bg-white px-3.5 py-1.5 rounded-full border border-slate-300">
                  30 preguntas analizadas
                </span>
              </div>

              <div className="divide-y divide-slate-200">
                {REAL_EXAM_QUESTIONS.map((q, idx) => {
                  const userAns = examAnswers[q.id] || '(Sin respuesta)';
                  const isOk = checkAnswerAccuracy(userAns, q);

                  return (
                    <div key={q.id} className="p-6 md:p-8 flex flex-col gap-4 hover:bg-slate-50/70 transition-colors">
                      {/* Header with question number and status */}
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-xl text-sm font-black flex items-center justify-center ${
                            isOk ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                          }`}>
                            {idx + 1}
                          </span>
                          <span className="font-black text-base md:text-lg text-slate-900">
                            PREGUNTA {idx + 1}
                          </span>
                        </div>

                        {isOk ? (
                          <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ВЕРНО • Correcta (+1 pto) • ՃԻՇՏ Է
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-black text-red-900 bg-red-100 px-3 py-1 rounded-full border border-red-300">
                            <XCircle className="w-4 h-4 text-red-600" />
                            НЕВЕРНО • Incorrecta (0 ptos) • ՍԽԱԼ Է
                          </span>
                        )}
                      </div>

                      {/* Question text */}
                      <div>
                        <ClickTranslate
                          textEs={q.questionEs}
                          textHy={q.questionHy}
                          alwaysShow={alwaysShowArmenian}
                          esClassName="font-bold text-slate-900 text-base md:text-lg"
                          allowSpeech={true}
                        />
                      </div>

                      {/* User's Answer */}
                      <div className="text-sm md:text-base p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="font-bold text-slate-500">Mi respuesta / Իմ պատասխանը: </span>
                        <span className={`font-bold ${isOk ? 'text-emerald-700' : 'text-red-600'}`}>
                          {userAns}
                        </span>
                      </div>

                      {/* Correct Answer ES & HY */}
                      <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-sm md:text-base">
                        <div className="font-black text-emerald-900 uppercase mb-1">
                          ✅ Respuesta correcta / Ճիշտ պատասխան՝
                        </div>
                        <div className="font-black text-emerald-950 text-base md:text-lg">
                          {q.correctAnswerEs}
                        </div>
                        <div className="text-emerald-900 mt-1 font-semibold armenian-text">
                          🇦🇲 {q.correctAnswerHy}
                        </div>
                      </div>

                      {/* Explanation ES & HY */}
                      <div className="p-4 rounded-2xl bg-blue-50 border-2 border-blue-200 text-sm md:text-base">
                        <div className="font-black text-blue-900 uppercase mb-1">
                          Explicación / Բացատրություն՝
                        </div>
                        <div className="text-slate-900 leading-relaxed font-medium">
                          {q.explanationEs}
                        </div>
                        <div className="text-blue-950 mt-1.5 leading-relaxed font-semibold armenian-text">
                          🇦🇲 {q.explanationHy}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Return actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
                <button
                  type="button"
                  onClick={startRealExam}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-sm md:text-base font-black transition-all cursor-pointer"
                >
                  Repetir Examen Real
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStage('prep')}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl text-sm md:text-base font-black transition-all cursor-pointer"
                >
                  Volver a Preparación (Etapa 1)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TABLA DE TEORÍA Y FICHAS DE CONSULTA BILINGÜES                   */}
        {/* ============================================================== */}
        {currentStage === 'theory' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Theory Banner */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-blue-100 text-blue-900 border border-blue-300">
                  Resumen Teórico Bilingüe / Տեսական Ամփոփում
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1.5">
                  Guía Rápida para el Examen Real
                </h2>
                <p className="text-sm md:text-base text-slate-600 mt-0.5">
                  Haz clic en cualquier término o frase en español para ver su traducción completa al armenio.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setTheoryCategory('funciones')}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all ${
                    theoryCategory === 'funciones'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  1. Funciones (6)
                </button>
                <button
                  type="button"
                  onClick={() => setTheoryCategory('modalidades')}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all ${
                    theoryCategory === 'modalidades'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  2. Modalidades (6)
                </button>
                <button
                  type="button"
                  onClick={() => setTheoryCategory('elementos')}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all ${
                    theoryCategory === 'elementos'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  3. Elementos (6)
                </button>
              </div>
            </div>

            {/* Theory Cards Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {(theoryCategory === 'funciones' ? TEORIA_FUNCIONES : theoryCategory === 'modalidades' ? TEORIA_MODALIDADES : TEORIA_ELEMENTOS).map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
                  {/* Title */}
                  <div>
                    <ClickTranslate
                      textEs={item.nameEs}
                      textHy={item.nameHy}
                      alwaysShow={true}
                      esClassName="text-lg md:text-xl font-black text-slate-900"
                      hyClassName="font-bold text-amber-950 text-base"
                    />
                  </div>

                  {/* Focus */}
                  <div className="text-sm md:text-base p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="font-extrabold text-slate-500">Elemento enfocado / Կենտրոնացում՝ </span>
                    <ClickTranslate
                      textEs={item.focusEs}
                      textHy={item.focusHy}
                      alwaysShow={alwaysShowArmenian}
                      esClassName="font-bold text-slate-900"
                    />
                  </div>

                  {/* Description */}
                  <div className="text-sm md:text-base text-slate-800 leading-relaxed font-medium">
                    <ClickTranslate
                      textEs={item.descEs}
                      textHy={item.descHy}
                      alwaysShow={alwaysShowArmenian}
                      esClassName="text-sm md:text-base leading-relaxed"
                    />
                  </div>

                  {/* Examples */}
                  <div className="mt-1 pt-3 border-t border-slate-100 flex flex-col gap-2">
                    <span className="text-xs md:text-sm font-black uppercase text-slate-400">
                      Ejemplos típicos de examen:
                    </span>
                    {item.examplesEs.map((ex, exIdx) => (
                      <div key={exIdx} className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                        <ClickTranslate
                          textEs={ex}
                          textHy={item.examplesHy[exIdx] || ''}
                          alwaysShow={alwaysShowArmenian}
                          esClassName="text-sm md:text-base font-semibold text-slate-900"
                          allowSpeech={true}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Keywords */}
                  <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
                    {item.keywords.map((kw, kwIdx) => (
                      <span key={kwIdx} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Canal vs Código Alert Card */}
            {theoryCategory === 'elementos' && (
              <div className="p-6 rounded-3xl bg-amber-500/15 border-2 border-amber-400 flex flex-col gap-3 shadow-xs">
                <div className="flex items-center gap-2 text-amber-950 font-black text-base md:text-lg">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                  <span>¡DISTINCIÓN CLAVE PARA EL EXAMEN: CANAL ≠ CÓDIGO!</span>
                </div>
                <p className="text-base text-amber-950 leading-relaxed font-medium">
                  <strong>El CANAL</strong> es el soporte material o técnico (el teléfono, el aire, el cartel impreso, WhatsApp o internet).
                  <br />
                  <strong>El CÓDIGO</strong> es el sistema lingüístico o convencional (el idioma español, el idioma armenio, o el código visual de señales de tráfico).
                </p>
                <p className="text-sm md:text-base text-amber-900 font-semibold armenian-text">
                  🇦🇲 <strong>CANAL ≠ CÓDIGO</strong>․ CANAL-ը ֆիզիկական միջոցն է (օդ, հեռախոս, WhatsApp, պաստառ)։ CÓDIGO-ն նշանային համակարգն է (իսպաներեն լեզուն, երթևեկության նշանները)։
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-5 mt-10 text-center text-xs md:text-sm text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-semibold">
            🇪🇸 Preparación interactiva para examen real de español • 🇦🇲 Աջակցող լեզուն՝ հայերեն
          </span>
          <span className="text-slate-400">
            Al hacer clic en el texto en español se abre la traducción en armenio
          </span>
        </div>
      </footer>
    </div>
  );
}
