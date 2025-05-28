import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Calculator() {
  const [res, setRes] = useState('');
  const navigate = useNavigate();

  const fn = (val) => {
    setRes((prev) => prev + val);
  };

  const cal = () => {
    try {
      // eslint-disable-next-line no-eval
      setRes(eval(res).toString());
    } catch (e) {
      alert('Error');
      setRes('');
    }
  };

  const reset = () => setRes('');
  const del = () => setRes((prev) => prev.slice(0, -1));

  const goBack = () => navigate('/dashboard');

  return (
    <div style={styles.body}>
      <button className="home" onClick={goBack} style={styles.home}>🔙</button>

      <div style={styles.frame}>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Result</legend>
          <p style={styles.result}>{res || '$$$$'}</p>
        </fieldset>

        <div style={styles.calculator}>
          {["(", ")", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0].map((val, i) => (
            <button
              key={i}
              className={typeof val === 'number' ? 'number' : 'operator'}
              onClick={() => fn(val)}
              style={{ ...styles.button, ...(typeof val === 'number' ? styles.number : styles.operator) }}
            >
              {val}
            </button>
          ))}

          <button onClick={cal} style={{ ...styles.button, ...styles.equal }}>=</button>
          <button onClick={del} style={{ ...styles.button, ...styles.del }}>⌫</button>
          <button onClick={reset} style={{ ...styles.button, ...styles.reset }}>♻️</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#4eb6dcb9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    position: 'relative',
  },
  frame: {
    backgroundColor: '#ffffffc1',
    padding: 30,
    borderRadius: 15,
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.902)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fieldset: {
    border: '2px solid #4CAF50',
    borderRadius: 10,
    padding: 15,
    width: 260,
    backgroundColor: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  legend: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4CAF50',
  },
  result: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
  },
  calculator: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 60px)',
    gap: 10,
  },
  button: {
    height: 60,
    fontSize: 20,
    border: 'none',
    borderRadius: 10,
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s ease',
  },
  number: {
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
  operator: {
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  equal: {
    backgroundColor: '#007bb5',
    color: '#fff',
  },
  reset: {
    backgroundColor: '#d32f2f',
    color: '#fff',
  },
  del: {
    backgroundColor: '#fbc02d',
    color: '#fff',
  },
  home: {
    position: 'absolute',
    padding: '10px 25px',
    top: 20,
    left: 20,
    fontSize: 24,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
  },
};
