import { useEffect, useRef, useState } from 'react';

export default function Counter() {
	const [level, setLevel] = useState(10);
	const waterRef = useRef(null);

	useEffect(() => {
		if (waterRef.current) {
			waterRef.current.style.height = `${level}%`;
		}
	}, [level]);

	function handleIncr() {
		if (level < 100) setLevel(level + 10);
	}
	function handleDecr() {
		if (level > 0) setLevel(level - 10);
	}

	return (
		<div style={styles.counter}>
			<style>{css}</style>

			<div style={styles.jarCap}></div>

			<div style={styles.jar}>
				<div ref={waterRef} className="water-glow">
					{level}%
				</div>
			</div>

			<div style={styles.btnGroup}>
				<button style={{ ...styles.button, background: '#16a34a' }} onClick={handleIncr}>
					Fill
				</button>
				<button style={{ ...styles.button, background: '#dc2626' }} onClick={handleDecr}>
					Empty
				</button>
			</div>
		</div>
	);
}

// Inline styles
const styles = {
	counter: {
		margin: '20px',
		border: '2px solid #ddd',
		width: 'fit-content',
		padding: '30px',
		borderRadius: '12px',
		background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)',
		boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
		textAlign: 'center',
	},

	jar: {
		backgroundColor: '#e5e7eb',
		width: '70px',
		height: '150px',
		borderBottomLeftRadius: '15px',
		borderBottomRightRadius: '15px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		position: 'relative',
		overflow: 'hidden',
		margin: 'auto',
	},

	jarCap: {
		backgroundColor: '#7c3aed',
		width: '80px',
		height: '16px',
		margin: 'auto',
		marginBottom: '2px',
		borderTopLeftRadius: '10px',
		borderTopRightRadius: '10px',
	},

	btnGroup: {
		marginTop: '20px',
		display: 'flex',
		gap: '10px',
		justifyContent: 'center',
	},

	button: {
		color: '#fff',
		fontWeight: '600',
		padding: '8px 20px',
		border: 'none',
		borderRadius: '8px',
		cursor: 'pointer',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
		transition: 'transform 0.2s, box-shadow 0.3s',
	},
};

// Embedded CSS for animation
const css = `
.water-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #1e3a8a;
  font-weight: bold;
  text-align: center;
  line-height: 2;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: linear-gradient(145deg, #38bdf8, #60a5fa);
  transition: height 0.8s ease-in-out;
  overflow: hidden;
  z-index: 1;
}

.water-glow::before,
.water-glow::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 200%;
  height: 200%;
  transform: translate(-50%, -75%);
  border-radius: 46%;
  pointer-events: none;
}

.water-glow::before {
  background-color: rgba(174, 239, 255, 0.265);
  animation: water-animate 5s linear infinite;
}

.water-glow::after {
  background-color: rgba(79, 195, 247, 0.5);
  border-radius: 40%;
  animation: water-animate 10s linear infinite;
}

@keyframes water-animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
`;
