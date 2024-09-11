import React from 'react';
import ProductCard from 'my-shared-components/src/ProductCard';

const Home = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', color: '#333' }}>Welcome to Bill's Wacky Science Stuff</h1>
      <ProductCard
        title="Quantum Widget"
        description="A revolutionary widget that alters the fabric of reality."
        price="$299.99"
        imageUrl="https://static.alta3.com/images/quantum_widget.webp"
      />
    </div>
  );
};

export default Home;

