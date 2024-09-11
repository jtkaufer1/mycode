import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3em', textAlign: 'center', color: '#333', marginBottom: '40px' }}>Welcome to the E-Commerce Platform</h1>
      <p style={{ fontSize: '1.2em', textAlign: 'center', color: '#666', marginBottom: '60px' }}>
        Explore our platform, built using a modular, multi-zone architecture. Each zone operates independently, allowing for flexible development and deployment.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '12px', width: '45%', backgroundColor: '#f0f0f0', textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <h2 style={{ fontSize: '1.8em', color: '#0070f3' }}>Product Reviews (Zone 1)</h2>
          <p style={{ fontSize: '1em', color: '#555' }}>Read and explore reviews from our customers.</p>
          <Link href="/zone1" passHref>
            <div style={{ display: 'inline-block', marginTop: '20px', padding: '12px 30px', fontSize: '1em', color: '#fff', backgroundColor: '#0070f3', borderRadius: '6px', textDecoration: 'none', transition: 'background-color 0.2s' }}>
              Explore Reviews
            </div>
          </Link>
        </div>

        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '12px', width: '45%', backgroundColor: '#f0f0f0', textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <h2 style={{ fontSize: '1.8em', color: '#28a745' }}>Shopping Cart (Zone 2)</h2>
          <p style={{ fontSize: '1em', color: '#555' }}>View and manage items in your shopping cart.</p>
          <Link href="/zone2" passHref>
            <div style={{ display: 'inline-block', marginTop: '20px', padding: '12px 30px', fontSize: '1em', color: '#fff', backgroundColor: '#28a745', borderRadius: '6px', textDecoration: 'none', transition: 'background-color 0.2s' }}>
              View Cart
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

