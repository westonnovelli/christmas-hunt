import { nanoid } from 'nanoid';
import React from 'react';
import { computeScore, useQuizContext } from './QuixContext';

const THRESHOLD = 0.8;

const Results: React.FC = () => {
  const { answers, restartQuiz } = useQuizContext();

  const score = computeScore(answers);
  return (
    <>
      <h1>{(score * 100).toFixed(0)}%</h1>
      {score < THRESHOLD && <button onClick={restartQuiz}>Try again!</button>}
      {score >= THRESHOLD && (
        <>
          <h2>Congrats!</h2>
          <div>{nanoid(3)}</div>
        </>
      )}
    </>
  );
};

export default Results;
