import React, { useState } from 'react';

const initialCartItems = [
  { id: 1, name: 'Quantum Widget', price: 299.99, quantity: 1 },
  { id: 2, name: 'Interstellar Gadget', price: 499.99, quantity: 2 },
  { id: 3, name: 'Hyperloop Tuner', price: 149.99, quantity: 1 }
];

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ padding: '20px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5em', textAlign: 'center', color: '#333', marginBottom: '40px' }}>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#666' }}>Your cart is empty. <a href="/zone1" style={{ color: '#0070f3', textDecoration: 'underline', transition: 'color 0.2s' }}>Go add some products!</a></p>
      ) : (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} style={{ marginBottom: '15px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5em', color: '#0070f3' }}>{item.name}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    style={{ width: '60px', marginLeft: '10px', fontSize: '1em', padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }}
                  />
                </p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '1em', transition: 'background-color 0.2s' }}
                >
                  Remove Item
                </button>
              </li>
            ))}
          </ul>
          <h3 style={{ marginTop: '40px', fontSize: '2em', color: '#333', textAlign: 'center' }}>Total Cost: ${calculateTotal()}</h3>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button
              style={{ color: 'white', backgroundColor: 'green', border: 'none', padding: '15px 30px', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2em', transition: 'background-color 0.2s' }}
            >
              Proceed to Checkout
            </button>
          </div>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <p>
              <a href="/zone1" style={{ color: '#0070f3', fontSize: '1.2em', textDecoration: 'underline', transition: 'color 0.2s' }}>Continue Shopping (Zone 1)</a>
            </p>
            <p>
              <a href="/" style={{ color: '#0070f3', fontSize: '1.2em', textDecoration: 'underline', transition: 'color 0.2s' }}>Return to Home</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

