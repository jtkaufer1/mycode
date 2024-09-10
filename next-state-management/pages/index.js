import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div style={{ padding: '40px', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Welcome to Next.js with Context API</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        This example demonstrates how to manage state using the Context API to toggle between light and dark modes.
      </p>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <ThemeToggle />
      </div>
    </div>
  );
}


