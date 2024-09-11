// app/page.js
export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the App Router Lab!</h1>
      <p style={styles.paragraph}>In this lab, we will explore the features of Next.js App Router.</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

