import React from 'react';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

const Inn: React.FC = () => (
  <>
    <Title>The Inn</Title>
    <div className="mycontent">
      <Paragraph>
        Take a photo of your team posed as the{' '}
        <span className="text-amber-200">nativity</span>. Everyone in your
        group must be in the photo (
        <span className="text-slate-200">
          hint! use the timer on your phone or come grab Molly or Weston
        </span>
        ).
      </Paragraph>
      <Paragraph>Text the picture to Weston.</Paragraph>
    </div>
  </>
);

export default Inn;
