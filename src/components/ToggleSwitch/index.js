import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './toggle-switch.css';

const ToggleSwitch = ({ label, ...rest }) => (
  <div className='toggle-switch'>
    <Toggle {...rest} />
    <label>{label}</label>
  </div>
);

export default ToggleSwitch;
