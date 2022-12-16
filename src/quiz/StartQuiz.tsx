import React from 'react';
import { useQuizContext } from './QuixContext';

const StartQuiz: React.FC = () => {
  const { startQuiz } = useQuizContext();

  return <button onClick={startQuiz} className="bg-orange-200 rounded text-red-500 p-2">Start Quiz</button>;
};

export default StartQuiz;
