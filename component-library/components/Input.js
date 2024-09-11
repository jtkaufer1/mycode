import React, { forwardRef } from 'react';

 const Input = forwardRef(({ placeholder, style }, ref) => (
   <input ref={ref} placeholder={placeholder} style={{ ...defaultStyle, ...style }} />
 ));
 
 const defaultStyle = {
   padding: '10px',
   border: '1px solid #ccc',
   borderRadius: '4px',
   width: '100%',
 };
 
 export default Input;

