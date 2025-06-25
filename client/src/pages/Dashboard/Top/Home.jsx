import React from 'react';

const universities = [
  {
    name: 'Harvard University',
    description:
      'Located in Cambridge, Massachusetts, Harvard is one of the oldest and most prestigious universities in the world.',
    image: '/src/assets/Harvard.jpeg',
  },
  {
    name: 'Stanford University',
    description:
      'Situated in the heart of Silicon Valley, Stanford is known for innovation, entrepreneurship, and strong engineering programs.',
    image: '/src/assets/Stanford.jpeg',
  },
  {
    name: 'University of Oxford',
    description:
      'A historic university in England, Oxford is known for its rigorous academics and long-standing traditions.',
    image: '/src/assets/Oxford.jpeg',
  },
];

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🌍 World-Class Universities</h1>
        <p style={styles.subtitle}>Explore the best institutions across the globe</p>
      </div>

      <div style={styles.grid}>
        {universities.map((uni, index) => (
          <div key={index} style={styles.card}>
            <img src={uni.image} alt={uni.name} style={styles.image} />
            <h2 style={styles.uniName}>{uni.name}</h2>
            <p style={styles.description}>{uni.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '60px 20px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    fontFamily: '"Segoe UI", sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: 44,
    fontWeight: 800,
    color: '#fff',
    marginBottom: 10,
    textShadow: '2px 2px 5px rgba(0,0,0,0.2)',
  },
  subtitle: {
    fontSize: 18,
    color: '#fefefe',
    opacity: 0.9,
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 40,
  },
  card: {
    width: 320,
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 24,
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '2px solid rgba(255, 255, 255, 0.3)',
  },
  image: {
    width: '100%',
    height: 170,
    objectFit: 'cover',
    borderRadius: 12,
    marginBottom: 18,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  uniName: {
    fontSize: 24,
    fontWeight: 700,
    color: '#4a148c',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 1.6,
  },
};
