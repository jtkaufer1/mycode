// app/dashboard/page.js
export default function DashboardPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard Overview</h1>
      <p style={styles.paragraph}>
        This dashboard is part of a parallel routing setup in Next.js. The content you're seeing here
        is being rendered in parallel with the sidebar on the left.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
};

