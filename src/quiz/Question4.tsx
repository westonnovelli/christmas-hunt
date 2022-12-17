import React from 'react';
import { useQuizContext } from './QuizContext';
import shuffle from './shuffle';

const Question: React.FC = () => {
  const { submitAnswer } = useQuizContext();

  const answers = [
    <button onClick={() => submitAnswer(true)} key="A" className="rounded p-4 border border-red-300 text-red-300">
      Deer
    </button>,
    <button onClick={() => submitAnswer(false)} key="B" className="rounded p-4 border border-red-300 text-red-300">
      Children
    </button>,
    <button onClick={() => submitAnswer(false)} key="C" className="rounded p-4 border border-red-300 text-red-300">
      Sailors
    </button>,
    <button onClick={() => submitAnswer(false)} key="D" className="rounded p-4 border border-red-300 text-red-300">
      Russia
    </button>,
  ];

  return (
    <div className="mycontent">
      Which of the following is Saint Nicholas <span className="text-red-300">NOT</span> considered the patron saint of?
      <div className="mt-4 flex flex-col gap-4">{shuffle(answers)}</div>
    </div>
  );
};

export default Question;
