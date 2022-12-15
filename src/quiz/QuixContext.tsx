import React from 'react';

interface QuizContext {
  stage: number;
  answers: boolean[];
  submitAnswer: (correct: boolean) => void;
  restartQuiz: () => void;
  startQuiz: () => void;
}

export const QuizContext = React.createContext<QuizContext>({
  stage: 0,
  answers: [],
  submitAnswer: () => {},
  restartQuiz: () => {},
  startQuiz: () => {},
});

export const computeScore = (answers: boolean[]): number => {
  if (answers.length == 0) return 0;
  const correctAnswer = answers.reduce<number>((score, correct) => {
    return correct ? score + 1 : score;
  }, 0);

  return  correctAnswer / answers.length;
};

export function useQuizContext() {
  const context = React.useContext(QuizContext);

  if (context === undefined) {
    throw new Error('useQuizContext must be used within a QuizContextProvider');
  }

  return context;
}

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stage, setStage] = React.useState(0);
  const [answers, setAnswers] = React.useState<QuizContext['answers']>([]);

  const submitAnswer = React.useCallback((correct: boolean) => {
    setAnswers((prev) => prev.concat([correct]));
    setStage((prev) => prev + 1);
  }, []);

  const restartQuiz = React.useCallback(() => {
    setAnswers([]);
    setStage(0);
  }, []);

  const startQuiz = React.useCallback(() => {
    setStage(1);
  }, []);

  const value = React.useMemo(
    () => ({
      stage,
      answers,
      submitAnswer,
      restartQuiz,
      startQuiz
    }),
    [stage, answers]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
