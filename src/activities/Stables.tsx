import React from 'react';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';
import Quiz from '../quiz/Quiz';
import StartQuiz from '../quiz/StartQuiz';

const Stables: React.FC = () => (
  <Quiz>
    <Title>Reindeer Stables</Title>
    <div className="mycontent">
      <Paragraph>
        Complete the Christmas trivia quiz getting at least an <span className="text-amber-200">80%</span>. Screen shot
        the "congrats" screen and text it to Weston.
      </Paragraph>
      <div className="grid place-items-center mt-8"><StartQuiz /></div>
    </div>
  </Quiz>
);

export default Stables;
