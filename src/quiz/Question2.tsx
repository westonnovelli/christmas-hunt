import React from 'react';
import { useQuizContext } from './QuizContext';
import shuffle from './shuffle';

const Question: React.FC = () => {
  const { submitAnswer } = useQuizContext();

  const answers = [
    <button onClick={() => submitAnswer(false)} key="A" className="rounded p-4 border border-red-300 text-red-300">
      ¡Fleas nah Víta!
    </button>,
    <button onClick={() => submitAnswer(false)} key="B" className="rounded p-4 border border-red-300 text-red-300">
      ¡Feliz cumpleaños!
    </button>,
    <button onClick={() => submitAnswer(true)} key="C" className="rounded p-4 border border-red-300 text-red-300">
      ¡Feliz Navidad!
    </button>,
    <button onClick={() => submitAnswer(false)} key="D" className="rounded p-4 border border-red-300 text-red-300">
      Bien Jesús!
    </button>,
  ];

  return (
    <div className="mycontent">
      How do you say <span className="bg-red-600 text-emerald-100 p-1 rounded">Merry Christmas</span> in Spanish?
      <div className="mt-4 flex flex-col gap-4">{shuffle(answers)}</div>
    </div>
  );
};

export default Question;
