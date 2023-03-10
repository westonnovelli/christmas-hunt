import React from 'react';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

const Frankincense: React.FC = () => {
  return (
    <>
      <Title>
        Frankincense and Myrrh Shop:{' '}
        <span className="text-red-300">We buy Gold!</span>
      </Title>
      <div className="mycontent">
        <Paragraph>
          Take a picture of the place in the{' '}
          <span className="text-red-300">Bible</span> with these
          (approximate) words
        </Paragraph>
        <div className="bg-emerald-600 p-4 text-emerald-100 rounded">
          <blockquote>
            For unto you is born this day in the city of David a Savior, who is
            Christ the Lord. And this will be a sign for you: you will find a
            baby wrapped in swaddling cloths and lying in a manger.
          </blockquote>
        </div>
        <Paragraph>Text the picture to Weston.</Paragraph>
      </div>
    </>
  );
};

export default Frankincense;
