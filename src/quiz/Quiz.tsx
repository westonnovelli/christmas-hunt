import React from 'react';
import Question1 from './Question1';
import { QuizProvider, useQuizContext } from './QuixContext';
import Results from './Results';

const Quiz: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { stage } = useQuizContext();
  return (
    <>
      {stage === 0 && children}
      {stage === 1 && <Question1 />}
      {stage === 2 && <Question1 />}
      {stage === 3 && <Question1 />}
      {stage === 4 && <Question1 />}
      {stage === 5 && <Question1 />}
      {stage === 6 && <Results />}
    </>
  );
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QuizProvider>
    <Quiz>{children}</Quiz>
  </QuizProvider>
);

export default Wrapper;
