import React from 'react';
import { useQuizContext } from './QuizContext';
import shuffle from './shuffle';

const Question: React.FC = () => {
  const { submitAnswer } = useQuizContext();

  const answers = [
    <button onClick={() => submitAnswer(false)} key="A" className="rounded p-4 border border-red-300 text-red-300">
      rats
    </button>,
    <button onClick={() => submitAnswer(true)} key="B" className="rounded p-4 border border-red-300 text-red-300">
      mice
    </button>,
    <button onClick={() => submitAnswer(false)} key="C" className="rounded p-4 border border-red-300 text-red-300">
      pirates
    </button>,
    <button onClick={() => submitAnswer(false)} key="D" className="rounded p-4 border border-red-300 text-red-300">
      nutcrackers
    </button>,
  ];

  return (
    <div className="mycontent">
      In <span className="rounded p-1 bg-emerald-600 text-emerald-100">The Nutcracker</span> what chases the children around the tree?
      <div className="mt-4 flex flex-col gap-4">{shuffle(answers)}</div>
    </div>
  );
};

export default Question;
