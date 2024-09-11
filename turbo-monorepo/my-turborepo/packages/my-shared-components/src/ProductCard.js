import React from 'react';

const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      textAlign: 'center',
      maxWidth: '300px',
      margin: '0 auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <h2 style={{ fontSize: '1.5em', margin: '15px 0 10px', color: '#333' }}>{title}</h2>
      <p style={{ color: '#777' }}>{description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{price}</p>
    </div>
  );
};

export default ProductCard;

