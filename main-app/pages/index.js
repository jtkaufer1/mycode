import React, { useRef } from 'react';
import Button from 'component-library/components/Button';
import Input from 'component-library/components/Input';

export default function Home() {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Reusable Components Example</h1>
      <Input ref={inputRef} placeholder="Type something..." style={inputStyle} />
      <Button onClick={handleClick} style={buttonStyle}>Show Input Value</Button>
    </div>
  );
}

const containerStyle = {
  padding: '20px',
  height: '100vh',
  maxWidth: '400px',
  margin: '0 auto',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  marginBottom: '10px',
};

const buttonStyle = {
  width: '100%',
};

