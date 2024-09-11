import React, { forwardRef } from 'react';

const Button = forwardRef(({ onClick, children, style }, ref) => (
  <button ref={ref} onClick={onClick} style={{ ...defaultStyle, ...style }}>
    {children}
  </button>
));

const defaultStyle = {
  padding: '10px 20px',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Button;

