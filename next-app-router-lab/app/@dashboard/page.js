// app/@dashboard/page.js
export default function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <p style={styles.paragraph}>This is the dashboard content.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
  },
};

