import { NextSeo } from 'next-seo';
import { generateProductSEO } from '../utils/seo';
import Link from 'next/link'

export default function InterstellarGadget() {
  const productSEO = generateProductSEO({
    title: 'Interstellar Gadget',
    description: 'Explore the Interstellar Gadget, your essential companion for space exploration.',
    url: 'https://YOUR-AUX1-BASE-URL/interstellar-gadget',
    image: 'https://static.alta3.com/images/interstellar_gadget.webp',
  });

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <NextSeo {...productSEO} />
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3em', color: '#333', marginBottom: '20px' }}>Interstellar Gadget</h1>
        <p style={{ fontSize: '1.5em', color: '#777' }}>Your essential companion for space exploration.</p>
      </header>
      <section style={{ textAlign: 'center' }}>
        <img src="https://static.alta3.com/images/interstellar_gadget.webp" alt="Interstellar Gadget" style={{ maxWidth: '30%', borderRadius: '10px', marginBottom: '30px' }} />
        <p style={{ fontSize: '1.2em', color: '#555' }}>
          The Interstellar Gadget is engineered for those who venture beyond our planet.
          Its advanced features ensure you’re always prepared, no matter where your journey takes you.
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

