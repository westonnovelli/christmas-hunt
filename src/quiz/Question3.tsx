import React from 'react';
import { useQuizContext } from './QuizContext';
import shuffle from './shuffle';

const Question: React.FC = () => {
  const { submitAnswer } = useQuizContext();

  const answers = [
    <button onClick={() => submitAnswer(false)} key="A" className="rounded p-4 border border-red-300 text-red-300">
      Luke
    </button>,
    <button onClick={() => submitAnswer(false)} key="B" className="rounded p-4 border border-red-300 text-red-300">
      John
    </button>,
    <button onClick={() => submitAnswer(true)} key="C" className="rounded p-4 border border-red-300 text-red-300">
      Numbers
    </button>,
    <button onClick={() => submitAnswer(false)} key="D" className="rounded p-4 border border-red-300 text-red-300">
      Mark
    </button>,
  ];

  return (
    <div className="mycontent">
      In which of the following books of the Bible would you <span className="text-red-300">NOT</span> find the Christmas story?
      <div className="mt-4 flex flex-col gap-4">{shuffle(answers)}</div>
    </div>
  );
};

export default Question;
