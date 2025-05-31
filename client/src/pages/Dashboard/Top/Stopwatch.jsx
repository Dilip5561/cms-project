import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  };

  const goBack = () => {
    navigate('/dashboard/top/home');  // React Router navigation
  };

  return (
    <div style={styles.body}>
      <button className="home" onClick={goBack} style={styles.home}>🔙</button>

      <div style={styles.frame}>
        <p id="count" style={styles.count}>{count}</p>
        <div>
          <button id="start" onClick={start} style={styles.start}>Start</button>
          <button id="stop" onClick={stop} style={styles.stop}>Stop</button>
          <button id="reset" onClick={reset} style={styles.reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#76c7dad7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    position: 'relative',
  },
  frame: {
    backgroundColor: '#ffffffa1',
    padding: '30px 40px',
    borderRadius: 15,
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.891)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -40,
  },
  count: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  home: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 24,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none',
  },
  start: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    margin: 5,
    fontSize: 18,
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  stop: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    margin: 5,
    fontSize: 18,
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  reset: {
    backgroundColor: '#008CBA',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    margin: 5,
    fontSize: 18,
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};
