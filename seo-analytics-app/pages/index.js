import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function HomePage() {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <NextSeo
        title="Welcome to Quantum Store"
        description="Your one-stop shop for the latest in quantum and interstellar technology."
      />
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3em', color: '#333', marginBottom: '20px' }}>Welcome to Quantum Store</h1>
        <p style={{ fontSize: '1.5em', color: '#777' }}>Explore our range of advanced gadgets designed for the future.</p>
      </header>

      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2em', color: '#444' }}>Our Products</h2>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-around' }}>
          <li style={{ marginBottom: '15px', textAlign: 'center', maxWidth: '30%' }}>
            <Link href="/quantum-widget">
              <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <img src="https://static.alta3.com/images/quantum_widget.webp" alt="Quantum Widget" style={{ maxWidth: '20%', borderRadius: '10px' }} />
                <h3 style={{ marginTop: '15px', color: '#0070f3' }}>Quantum Widget</h3>
              </div>
            </Link>
          </li>
          <li style={{ marginBottom: '15px', textAlign: 'center', maxWidth: '30%' }}>
            <Link href="/interstellar-gadget">
              <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', cursor: 'pointer', transition: 'transform 0.3s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <img src="https://static.alta3.com/images/interstellar_gadget.webp" alt="Interstellar Gadget" style={{ maxWidth: '20%', borderRadius: '10px' }} />
                <h3 style={{ marginTop: '15px', color: '#0070f3' }}>Interstellar Gadget</h3>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '2em', color: '#444' }}>Contact Us</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }} style={{ marginTop: '30px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1.2em', color: '#555' }}>Name:</label>
            <input type="text" name="name" required style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ddd', marginTop: '10px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '1.2em', color: '#555' }}>Email:</label>
            <input type="email" name="email" required style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ddd', marginTop: '10px' }} />
          </div>
          <button type="submit" style={{ padding: '15px 30px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2em' }}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

