import React from 'react';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

const Sleigh: React.FC = () => (
  <>
    <Title>Santa's Sleigh</Title>
    <div className="mycontent">
      <Paragraph>
        Take a video of the whole group singing
        <span className="rounded bg-orange-200 text-red-500 p-1 leading-6 mx-1">
          Jingle Bells
        </span>
        and text it to Weston.
      </Paragraph>
    </div>
  </>
);

export default Sleigh;
