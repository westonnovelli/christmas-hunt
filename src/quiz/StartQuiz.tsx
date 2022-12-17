import React from 'react';
import { useQuizContext } from './QuizContext';

const StartQuiz: React.FC = () => {
  const { startQuiz } = useQuizContext();

  return <button onClick={startQuiz} className="bg-emerald-600 rounded text-emerald-100 p-2">Start Quiz</button>;
};

export default StartQuiz;
