import React from 'react';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

const NorthPole: React.FC = () => (
  <>
    <Title>North Pole Post Office</Title>
    <div className="mycontent">
      <Paragraph>
        Take a video of someone telling the{' '}
        <span className="text-red-300">Christmas story</span> as{' '}
        <i className="text-red-300">dramatically</i> as possible. Text it to
        Weston.
      </Paragraph>
    </div>
  </>
);

export default NorthPole;
