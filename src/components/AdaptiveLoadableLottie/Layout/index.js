import React from 'react';
import './layout.css';

const Layout = ({ children }) => (
  <div className='layout'>
    <h1>Lottie</h1>
    {children}
  </div>
);

export default Layout;
