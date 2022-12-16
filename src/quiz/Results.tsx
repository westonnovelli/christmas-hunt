import { nanoid } from 'nanoid';
import React from 'react';
import { computeScore, useQuizContext } from './QuixContext';

const THRESHOLD = 0.8;

const Results: React.FC = () => {
  const { answers, restartQuiz } = useQuizContext();

  const score = computeScore(answers);
  const success = score >= THRESHOLD;
  return (
    <>
      <h1 className="myTitle text-xl text-center place-self-center">
        {success ? 'Congrats!' : 'Welp'}
      </h1>
      <div className="mycontent text-center">
        <div className="text-5xl">{(score * 100).toFixed(0)}%</div>
        {!success && <button onClick={restartQuiz} className="bg-orange-200 rounded text-red-500 p-2 mt-8">Try again!</button>}
        {success && <div className="text-xs text-emerald-300" style={{fontSize: ".5rem"}}>{nanoid(3)}</div>}
      </div>
    </>
  );
};

export default Results;
