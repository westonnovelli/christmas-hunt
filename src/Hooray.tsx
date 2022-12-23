import React from 'react';
import Layout from './layout/Layout';
import Paragraph from './layout/Paragraph';
import Title from './layout/Title';

const Hooray: React.FC = () => (
  <Layout>
    <Title>Hooray!</Title>
    <div className="mycontent">
    <h2 className="text-center">You did it!</h2>
    <Paragraph>Please send a text to Weston with your team name (you can decide what it is).</Paragraph>
    </div>
  </Layout>
);

export default Hooray;
