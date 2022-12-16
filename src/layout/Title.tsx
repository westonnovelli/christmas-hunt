import React from 'react';

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-center place-self-center myTitle text-xl">{children}</h1>
);

export default Title;
