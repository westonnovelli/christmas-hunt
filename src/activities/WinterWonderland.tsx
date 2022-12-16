import React from 'react';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

const WinterWonderland: React.FC = () => (
  <>
    <Title>Winter Wonderland</Title>
    <div className="mycontent">
      <Paragraph>
        Write a <span className="text-amber-200">Jesus</span> acrostic on the provided paper and text a picture of it to
        Weston.
      </Paragraph>
      <Paragraph>
        Example: an <span className="text-amber-200">Joy</span> acrostic poem
        would be
      </Paragraph>
      <div className="grid place-items-center mt-4">
        <div className="flex flex-col">
          <div>
            <span className="text-amber-200">J</span>olly
          </div>
          <div>
            <span className="text-amber-200">O</span>utgoing
          </div>
          <div>
            <span className="text-amber-200">Y</span>ultide
          </div>
        </div>
      </div>
    </div>
  </>
);

export default WinterWonderland;
