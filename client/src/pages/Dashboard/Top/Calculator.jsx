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

  // const goBack = () => navigate('/dashboard/top/home');

  return (
    <div style={styles.body}>
      {/* <button className="home" onClick={goBack} style={styles.home}>🔙</button> */}

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
    background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)',  // colorful gradient background
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    position: 'relative',
  },
  frame: {
    background: 'rgba(255, 255, 255, 0.25)', // glass effect
    borderRadius: 20,
    padding: 30,
    backdropFilter: 'blur(15px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fieldset: {
    border: '2px solid #4caf50',
    borderRadius: 15,
    padding: 15,
    width: 270,
    background: '#f8fffe',
    marginBottom: 25,
    textAlign: 'center',
    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.1)',
  },
  legend: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#388e3c',
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1a1a1a',
    background: '#e3f2fd',
    borderRadius: 8,
    padding: 12,
    marginTop: 5,
  },
  calculator: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 60px)',
    gap: 12,
  },
  button: {
    height: 60,
    fontSize: 20,
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    transition: 'transform 0.15s ease, background-color 0.3s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
  },
  number: {
    backgroundColor: '#ffffff',
    color: '#333',
  },
  operator: {
    background: 'linear-gradient(45deg, #4caf50, #81c784)',
    color: '#fff',
  },
  equal: {
    background: 'linear-gradient(to right, #007aff, #00c6ff)',
    color: '#fff',
  },
  reset: {
    background: 'linear-gradient(to right, #e53935, #e35d5b)',
    color: '#fff',
  },
  del: {
    background: 'linear-gradient(to right, #fdd835, #fbc02d)',
    color: '#000',
  },
  home: {
    position: 'absolute',
    padding: '10px 25px',
    top: 20,
    left: 20,
    fontSize: 26,
    cursor: 'pointer',
    backgroundColor: '#ffffff77',
    border: '1px solid #ccc',
    borderRadius: 12,
    backdropFilter: 'blur(5px)',
    boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
  },
};
