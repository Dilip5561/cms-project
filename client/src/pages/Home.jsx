import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-12">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-6 text-center">
        Welcome to the Student Information Management CMS
      </h1>
      <p className="max-w-xl text-center text-lg text-blue-800 mb-8 leading-relaxed">
        Simplify and streamline your educational institution’s student record management with our easy-to-use, centralized platform.
      </p>
      <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
        Get Started
      </button>
    </div>
  );
}
