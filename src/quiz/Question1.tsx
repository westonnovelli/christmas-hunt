import React from 'react';
import { useQuizContext } from './QuixContext';
import shuffle from './shuffle';

const Question1: React.FC = () => {
  const { submitAnswer } = useQuizContext();

  const answers = [
    <button onClick={() => submitAnswer(false)} key="A" className="rounded p-4 border border-amber-200 text-amber-200">
      rats
    </button>,
    <button onClick={() => submitAnswer(true)} key="B" className="rounded p-4 border border-amber-200 text-amber-200">
      mice
    </button>,
    <button onClick={() => submitAnswer(false)} key="C" className="rounded p-4 border border-amber-200 text-amber-200">
      pirates
    </button>,
    <button onClick={() => submitAnswer(false)} key="D" className="rounded p-4 border border-amber-200 text-amber-200">
      nutcrackers
    </button>,
  ];

  return (
    <div className="mycontent">
      In <span className="rounded p-1 bg-amber-200 text-red-500">The Nutcracker</span> what chases the children around the tree?
      <div className="mt-4 flex flex-col gap-4">{shuffle(answers)}</div>
    </div>
  );
};

export default Question1;
