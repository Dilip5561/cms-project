import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <h1 className="text-5xl font-bold text-blue-900 mb-6 text-center">Welcome to Student Info Management System</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Manage, analyze, and access student data efficiently using our modern CMS built with MERN Stack.
      </p>
      <div className="flex space-x-6">
        <Link
          to="/signin"
          className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition duration-200"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 border border-blue-700 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition duration-200"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
