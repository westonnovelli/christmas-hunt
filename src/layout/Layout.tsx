import React from 'react';
import './layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-special-elite container bg-emerald-500 h-screen text-slate-100 grid mygrid">
    {children}
  </div>
);

export default Layout;
