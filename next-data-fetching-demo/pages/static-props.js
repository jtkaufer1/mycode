export async function getStaticProps() {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await res.json();

return { props: { users } };
}

export default function StaticProps({ users }) {
return (
  <div style={{
    backgroundColor: '#f5f5f5',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }}>
    <h1 style={{ 
      fontSize: '2.5rem', 
      marginBottom: '20px', 
      textAlign: 'center',
      color: '#0070f3'
    }}>Static Site Generation</h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
      This page demonstrates how to fetch data at build time using <strong>getStaticProps</strong>. The data below is fetched from an external API during the build process.
    </p>
    <ul style={{
      listStyleType: 'none',
      padding: 0,
      textAlign: 'center',
    }}>
      {users.map(user => (
        <li key={user.id} style={{
          marginBottom: '10px',
          fontSize: '1.1rem',
          color: '#333',
        }}>
          {user.name}
        </li>
      ))}
    </ul>
  </div>
);
}


