// app/@sidebar/page.js
"use client"; // Enable client-side interactivity

import { useState } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('Overview');

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Sidebar Navigation</h2>
      <ul style={styles.list}>
        <li>
          <button
            style={activeSection === 'Overview' ? styles.activeButton : styles.button}
            onClick={() => setActiveSection('Overview')}
          >
            Overview
          </button>
        </li>
        <li>
          <button
            style={activeSection === 'Analytics' ? styles.activeButton : styles.button}
            onClick={() => setActiveSection('Analytics')}
          >
            Analytics
          </button>
        </li>
        <li>
          <button
            style={activeSection === 'Settings' ? styles.activeButton : styles.button}
            onClick={() => setActiveSection('Settings')}
          >
            Settings
          </button>
        </li>
      </ul>

      <div style={styles.content}>
        {activeSection === 'Overview' && <p>This is the overview section of the dashboard.</p>}
        {activeSection === 'Analytics' && <p>This is the analytics section with charts and data.</p>}
        {activeSection === 'Settings' && <p>This is the settings section for user preferences.</p>}
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    height: '100%',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
  },
  button: {
    padding: '10px',
    margin: '5px 0',
    width: '100%',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
  },
  activeButton: {
    padding: '10px',
    margin: '5px 0',
    width: '100%',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
  },
  content: {
    marginTop: '20px',
    fontSize: '1.2rem',
  },
};

