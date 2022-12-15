import React from "react";
import Paragraph from "../layout/Paragraph";
import Title from "../layout/Title";
import Quiz from "../quiz/Quiz";
import StartQuiz from "../quiz/StartQuiz";

const Stables: React.FC = () => (
  <Quiz>
    <Title>Reindeer Stables</Title>
    <Paragraph>Complete the Christmas trivia quiz getting at least an 80%. Screen shot the "congrats" screen and text it to Weston.</Paragraph>
    <StartQuiz/>
  </Quiz>
);

export default Stables;
