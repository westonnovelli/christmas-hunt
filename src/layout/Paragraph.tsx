import React from 'react';

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-center myParagraph">{children}</p>
);

export default Paragraph;
