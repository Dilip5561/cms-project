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

  // const goBack = () => {
  //   navigate('/dashboard/top/home');  // React Router navigation
  // };

  return (
    <div style={styles.body}>
      {/* <button className="home" onClick={goBack} style={styles.home}>🔙</button> */}

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
    background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    position: 'relative',
  },
  frame: {
    background: 'rgba(255, 255, 255, 0.3)',
    padding: '35px 50px',
    borderRadius: 25,
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -40,
  },
  count: {
    fontSize: 80,
    fontWeight: '900',
    color: '#1b2735',
    textShadow: '2px 2px 8px rgba(0,0,0,0.15)',
    marginBottom: 35,
    userSelect: 'none',
    fontVariantNumeric: 'tabular-nums',
  },
  home: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    border: 'none',
    borderRadius: 12,
    padding: '8px 20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    backdropFilter: 'blur(6px)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  start: {
    background: 'linear-gradient(45deg, #43e97b, #38f9d7)',
    color: '#fff',
    border: 'none',
    padding: '14px 28px',
    margin: 7,
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 14,
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(56, 249, 215, 0.6)',
    transition: 'background 0.4s ease, transform 0.2s ease',
  },
  stop: {
    background: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
    color: '#fff',
    border: 'none',
    padding: '14px 28px',
    margin: 7,
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 14,
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(255, 75, 43, 0.6)',
    transition: 'background 0.4s ease, transform 0.2s ease',
  },
  reset: {
    background: 'linear-gradient(45deg, #4776e6, #8e54e9)',
    color: '#fff',
    border: 'none',
    padding: '14px 28px',
    margin: 7,
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 14,
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(142, 84, 233, 0.6)',
    transition: 'background 0.4s ease, transform 0.2s ease',
  },
};

