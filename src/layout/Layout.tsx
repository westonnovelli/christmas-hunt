import React from 'react';
import './layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-special-elite bg-emerald-800 h-screen text-slate-100">
    <div className="grid mygrid container">
    {children}
    </div>
  </div>
);

export default Layout;
