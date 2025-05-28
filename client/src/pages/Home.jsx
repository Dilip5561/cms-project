import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-[Poppins] ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-900'}`}>


      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-blue-700 text-white shadow">
        <div className="text-xl font-bold">🎓 SMS Portal</div>
        <nav className="flex gap-4 items-center">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Students</a>
          <a href="#" className="hover:underline">Teachers</a>
          <a href="#" className="hover:underline">Admin</a>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
  className="text-center py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

        <h1 className="text-4xl font-bold mb-4">Welcome to the Student Management System</h1>
        <p className="text-lg mb-6">Track, manage, and empower student progress with ease.</p>
        <a href="#login" className="bg-indigo-900 px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
          Login to Portal
        </a>
      </motion.section>

      {/* Features */}
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6">📚 Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {['📝 Add & Manage Students', '📈 Attendance & Performance', '📤 Generate Reports', '🔒 Secure Login'].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-sky-100 p-4 rounded-xl shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <motion.section
        className="bg-gray-100 dark:bg-gray-800 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">🚀 Our Achievements</h2>
        <div className="flex justify-center gap-12 text-center text-xl font-medium">
          <div><strong>1500+</strong> <br /> Students</div>
          <div><strong>100+</strong> <br /> Faculty</div>
          <div><strong>98%</strong> <br /> Satisfaction</div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4 text-center">
        <p>&copy; 2025 Student Management System | Built with ❤️</p>
        <div className="mt-2 flex justify-center gap-6">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
}
