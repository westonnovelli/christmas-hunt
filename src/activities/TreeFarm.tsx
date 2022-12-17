import React from 'react';
import Paragraph from '../layout/Paragraph';
import Title from '../layout/Title';

const TreeFarm: React.FC = () => (
  <>
    <Title>Christmas Tree Farm</Title>
    <div className="mycontent">
      <Paragraph>
        Take a video of someone in your group putting on the winter clothes as{' '}
        <i className="text-red-300">fast</i> as possible. Text it to Weston.
      </Paragraph>
    </div>
  </>
);

export default TreeFarm;
