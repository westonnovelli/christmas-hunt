import React from 'react';

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-center mb-8">{children}</h1>
);

export default Title;
