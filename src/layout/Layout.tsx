import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-special-elite container">{children}</div>
);

export default Layout;
