import React from 'react';
import './credit-link.css';

const CreditLink = ({ href, title }) => (
  <div className='credit-link'>
    <a href={href}>{title}</a>
  </div>
);

export default CreditLink;
