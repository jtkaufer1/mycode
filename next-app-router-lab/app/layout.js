// app/layout.js
import Sidebar from './@sidebar/page';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={styles.header}>
          <nav>
            <a href="/">Home</a>
            <a href="/about" style={styles.link}>About</a>
          </nav>
        </header>
        <div style={styles.container}>
          <section style={styles.sidebar}>
            <Sidebar />
          </section>
          <section style={styles.content}>
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}

const styles = {
  header: {
    backgroundColor: '#0070f3',
    padding: '10px',
    textAlign: 'center',
  },
  link: {
    marginLeft: '10px',
    color: 'white',
  },
  container: {
    display: 'flex',
  },
  sidebar: {
    width: '25%',
    padding: '10px',
    backgroundColor: '#f4f4f4',
  },
  content: {
    width: '75%',
    padding: '10px',
  },
};

