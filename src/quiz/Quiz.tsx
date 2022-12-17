import React from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import { QuizProvider, useQuizContext } from './QuizContext';
import Results from './Results';

const Quiz: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { stage } = useQuizContext();
  return (
    <>
      {stage === 0 && children}
      {stage === 1 && <Question1 />}
      {stage === 2 && <Question2 />}
      {stage === 3 && <Question3 />}
      {stage === 4 && <Question4 />}
      {stage === 5 && <Question5 />}
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
