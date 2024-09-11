import React from 'react';
import ProductCard from 'my-shared-components/src/ProductCard';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', color: '#333' }}>Welcome to Becca's Fantastic Space Place</h1>
      <ProductCard
        title="Interstellar Gadget"
        description="A gadget from another galaxy with advanced technology."
        price="$499.99"
        imageUrl="https://static.alta3.com/images/interstellar_gadget.webp"
      />
    </div>
  );
};

export default Home;

