import React from 'react';

const universities = [
  {
    name: 'Harvard University',
    description: 'Located in Cambridge, Massachusetts, Harvard is one of the oldest and most prestigious universities in the world.',

    image: '/src/assets/Harvard.jpeg', // ✅ Fixed local image pat
  },
  {
    name: 'Stanford University',
    description: 'Situated in the heart of Silicon Valley, Stanford is known for innovation, entrepreneurship, and strong engineering programs.',

    image: '/src/assets/Stanford.jpeg', // ✅ Fixed local image path

  },
  {
    name: 'University of Oxford',
    description: 'A historic university in England, Oxford is known for its rigorous academics and long-standing traditions.',
    image: '/src/assets/Oxford.jpeg', // ✅ Fixed local image path

  },
];

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>World-Class Universities</h1>
      <p style={styles.subtitle}>Explore information about top global universities</p>
      
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
    padding: '40px 20px',
    background: 'linear-gradient(to right, #e0f7fa, #e1f5fe)',
    fontFamily: 'Segoe UI, sans-serif',
    minHeight: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#0d47a1',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 40,
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: 30,
    flexWrap: 'wrap',
  },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 150,
    objectFit: 'contain',
    marginBottom: 15,
  },
  uniName: {
    fontSize: 22,
    color: '#1a237e',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
};