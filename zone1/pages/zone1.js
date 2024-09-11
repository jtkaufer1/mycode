import React from 'react';

const reviews = [
  {
    product: 'Quantum Widget',
    reviewer: 'Alice',
    rating: 5,
    review: 'This widget changed my life! Highly recommend for any quantum mechanics enthusiast.'
  },
  {
    product: 'Interstellar Gadget',
    reviewer: 'Bob',
    rating: 4,
    review: 'Very useful gadget, but the instructions were a bit hard to follow. Still worth it!'
  },
  {
    product: 'Hyperloop Tuner',
    reviewer: 'Charlie',
    rating: 3,
    review: 'It works well, but I expected more features for the price. Still, it’s a solid device.'
  }
];

const ReviewCard = ({ product, reviewer, rating, review }) => (
  <div style={{ border: '1px solid #ddd', padding: '20px', margin: '15px 0', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <h2 style={{ fontSize: '1.5em', color: '#0070f3' }}>{product}</h2>
    <p><strong>Reviewed by:</strong> {reviewer}</p>
    <p><strong>Rating:</strong> {rating} / 5</p>
    <p>{review}</p>
  </div>
);

export default function Zone1() {
  return (
    <div style={{ padding: '20px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5em', textAlign: 'center', color: '#333', marginBottom: '40px' }}>Product Reviews</h1>
      <p style={{ fontSize: '1.2em', textAlign: 'center', color: '#666', marginBottom: '40px' }}>Welcome to the Product Reviews section! Below are some reviews from our customers:</p>

      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>
          <a href="/zone2" style={{ color: '#0070f3', fontSize: '1.2em', textDecoration: 'underline', transition: 'color 0.2s' }}>Go to the Shopping Cart (Zone 2)</a>
        </p>
        <p>
          <a href="/" style={{ color: '#0070f3', fontSize: '1.2em', textDecoration: 'underline', transition: 'color 0.2s' }}>Return to Home</a>
        </p>
      </div>
    </div>
  );
}

