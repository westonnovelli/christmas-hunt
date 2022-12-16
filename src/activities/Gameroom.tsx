import React from 'react';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

const Gameroom: React.FC = () => (
  <>
    <Title>Reindeer Gameroom</Title>
    <div className="mycontent">
      <Paragraph>
        Find an <span className="text-amber-200">elf</span> and take a{' '}
        <span className="text-amber-200">group selfie</span> with it without
        moving it. <span className="text-amber-200">Everyone</span> in the
        group must be in the selfie. Text the picture to Weston.
      </Paragraph>
    </div>
  </>
);

export default Gameroom;
