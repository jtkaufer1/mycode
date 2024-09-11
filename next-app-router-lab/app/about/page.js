// app/about/page.js
export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About This Lab</h1>
      <p style={styles.paragraph}>
        Welcome to the App Router lab! This lab is designed to give you hands-on
        experience with Next.js’s new App Router, which introduces powerful new routing features.
      </p>
      <p style={styles.paragraph}>
        The routing is file-based, meaning every page you see is backed by a file in the <code>app</code> directory.
        The lab also explores how the App Router allows you to render different parts of your application in parallel.
      </p>
      <p style={styles.paragraph}>
        The Sidebar you see on the left is rendered in parallel with the main content. We will also explore how intercepting routes
        can be used for modals and other interactive UI.
      </p>
      <h2 style={styles.subtitle}>Key Features of the App Router</h2>
      <ul style={styles.list}>
        <li>File-based routing</li>
        <li>Server Components</li>
        <li>Dynamic routing</li>
        <li>Shared layouts</li>
        <li>Parallel and Intercepting routes</li>
      </ul>
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
  subtitle: {
    fontSize: '2rem',
    marginTop: '30px',
  },
  list: {
    fontSize: '1.2rem',
    listStyleType: 'circle',
    paddingLeft: '20px',
  },
};

