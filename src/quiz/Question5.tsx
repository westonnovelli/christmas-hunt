import React from 'react';
import { useQuizContext } from './QuizContext';
import shuffle from './shuffle';

const Question: React.FC = () => {
  const { submitAnswer } = useQuizContext();

  const answers = [
    <button onClick={() => submitAnswer(false)} key="A" className="rounded p-4 border border-red-300 text-red-300">
      Boxing Day
    </button>,
    <button onClick={() => submitAnswer(false)} key="B" className="rounded p-4 border border-red-300 text-red-300">
      Canadian Thanksgiving
    </button>,
    <button onClick={() => submitAnswer(false)} key="C" className="rounded p-4 border border-red-300 text-red-300">
      St. Luke's Feast Day
    </button>,
    <button onClick={() => submitAnswer(true)} key="D" className="rounded p-4 border border-red-300 text-red-300">
      Epiphany
    </button>,
  ];

  return (
    <div className="mycontent">
      What happens <span className="text-red-300">12 days</span> after Christmas?
      <div className="mt-4 flex flex-col gap-4">{shuffle(answers)}</div>
    </div>
  );
};

export default Question;
