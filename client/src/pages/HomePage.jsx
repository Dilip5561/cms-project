import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the CMS Dashboard</h1>
      <p style={styles.subtitle}>Select an option to continue</p>
      
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => navigate('/calculator')}>🧮 Calculator</button>
        <button style={styles.button} onClick={() => navigate('/dashboard')}>📊 Dashboard</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#555',
  },
  buttonGroup: {
    display: 'flex',
    gap: 20,
  },
  button: {
    padding: '12px 28px',
    fontSize: 18,
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
  },
};
