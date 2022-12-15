import React from 'react';
import { useQuizContext } from './QuixContext';
import shuffle from './shuffle';

const Question1: React.FC = () => {
  const { submitAnswer } = useQuizContext();

  const answers = [
    <button onClick={() => submitAnswer(false)} key="A">rats</button>,
    <button onClick={() => submitAnswer(true)} key="B">mice</button>,
    <button onClick={() => submitAnswer(false)} key="C">pirates</button>,
    <button onClick={() => submitAnswer(false)} key="D">nutcrackers</button>,
  ];

  return (
    <div>
      <span>In "The Nutcracker" what chases the children around the tree?</span>
      {shuffle(answers)}
    </div>
  );
};

export default Question1;
