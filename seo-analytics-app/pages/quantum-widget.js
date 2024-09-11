import { NextSeo } from 'next-seo';
import { generateProductSEO } from '../utils/seo';
import Link from 'next/link'

export default function QuantumWidget() {
  const productSEO = generateProductSEO({
    title: 'Quantum Widget',
    description: 'Discover the Quantum Widget, a revolutionary device designed for quantum mechanics enthusiasts.',
    url: 'https://YOUR-AUX1-BASE-URL/quantum-widget',
    image: 'https://static.alta3.com/images/quantum_widget.webp',
  });

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <NextSeo {...productSEO} />
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3em', color: '#333', marginBottom: '20px' }}>Quantum Widget</h1>
        <p style={{ fontSize: '1.5em', color: '#777' }}>A revolutionary device for quantum mechanics enthusiasts.</p>
      </header>
      <section style={{ textAlign: 'center' }}>
        <img src="https://static.alta3.com/images/quantum_widget.webp" alt="Quantum Widget" style={{ maxWidth: '30%', borderRadius: '10px', marginBottom: '30px' }} />
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          The Quantum Widget is a state-of-the-art device designed to revolutionize the field of quantum mechanics.
          Its innovative features and cutting-edge technology make it a must-have for any enthusiast.
        </p>
        <button style={{ padding: '15px 30px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2em', marginTop: '30px' }}>
          Buy Now
        </button>
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link href="/" legacyBehavior>
            <a style={{ color: '#0070f3', textDecoration: 'underline', fontSize: '1.2em' }}>Return to Home</a>
          </Link>
        </div>
      </section>
    </div>
  );
}

