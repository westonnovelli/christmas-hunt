import React from 'react';
import { useQuizContext } from './QuixContext';

const StartQuiz: React.FC = () => {
  const { startQuiz } = useQuizContext();

  return <button onClick={startQuiz}>Start Quiz</button>;
};

export default StartQuiz;
