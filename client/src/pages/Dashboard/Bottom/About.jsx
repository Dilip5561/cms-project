import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-6 py-12">
      <div className="bg-white rounded-3xl shadow-3xl p-12 max-w-3xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-8 text-blue-900 tracking-wide drop-shadow-md">
          About Us
        </h1>

        <p className="mb-10 text-gray-700 text-lg leading-relaxed max-w-xl mx-auto">
          Welcome to our CMS project! This application is designed to help you manage your content efficiently and intuitively.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4 text-blue-800 tracking-wide">
          Our Mission
        </h2>
        <p className="mb-10 text-gray-700 text-base leading-relaxed max-w-lg mx-auto">
          To provide a simple, powerful, and flexible content management solution for everyone.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-blue-800 tracking-wide">
          Contact
        </h2>
        <p className="text-gray-700 text-base max-w-md mx-auto">
          For more information, please contact us at{' '}
          <a
            href="https://mail.google.com/"
            className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors duration-200"
          >
            dilipfs001@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
