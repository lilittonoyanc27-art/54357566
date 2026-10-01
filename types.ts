export type Category = 'funciones' | 'modalidades' | 'elementos' | 'traduccion';

export type QuestionType = 
  | 'multiple_choice' 
  | 'open' 
  | 'true_false' 
  | 'trap' 
  | 'identify_concept' 
  | 'situation';

export interface Option {
  id: string;
  textEs: string;
  textHy: string;
}

export interface Question {
  id: string;
  category: Category;
  type: QuestionType;
  questionEs: string;
  questionHy: string;
  phraseEs?: string;
  phraseHy?: string;
  situationEs?: string;
  situationHy?: string;
  options?: Option[];
  correctAnswerEs: string;
  correctAnswerHy: string;
  explanationEs: string;
  explanationHy: string;
  keywordEs?: string;
  keywordHy?: string;
  trapWarningEs?: string;
  trapWarningHy?: string;
  // Keywords used to evaluate open answers flexibly
  keywordsMatch?: string[];
}

export interface ExamAnswer {
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  score: number; // 0 or 1
}

export interface ExamSummary {
  funcionesScore: number;
  funcionesTotal: number;
  modalidadesScore: number;
  modalidadesTotal: number;
  elementosScore: number;
  elementosTotal: number;
  traduccionScore: number;
  traduccionTotal: number;
  totalScore: number;
  totalQuestions: number;
  finalGradeOutOf10: number;
  strengths: { es: string; hy: string }[];
  weaknesses: { es: string; hy: string }[];
  recommendedTopic: { es: string; hy: string };
  targetedReviewQuestions: Question[];
}
