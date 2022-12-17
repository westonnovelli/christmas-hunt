import { useMatch } from '@tanstack/react-router';
import React from 'react';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

const Fireside: React.FC = () => {
  return (
    <>
      <Title>Fireside</Title>
      <div className="mycontent">
        <Paragraph>
          Take a video of your whole group naming the{' '}
          <span className="text-red-300">12 objects</span> for the
          <span className="rounded bg-emerald-600 text-emerald-100 p-1 leading-6 mx-1">
            12 days of Christmas
          </span>
          in <u>order</u> (e.g, 1 partridge in a pear tree). Text the video to
          Weston.
        </Paragraph>
      </div>
    </>
  );
};

export default Fireside;
