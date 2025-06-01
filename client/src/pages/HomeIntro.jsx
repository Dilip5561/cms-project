import { Link } from 'react-router-dom';

export default function HomeIntro() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-300 px-4">
      <div className="bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/30 max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 animate-pulse drop-shadow-lg">
          Welcome to Student Info Management System
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Manage, analyze, and access student data efficiently using our modern CMS built with the MERN Stack.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/signin"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-white text-blue-700 border-2 border-blue-700 rounded-xl font-semibold shadow-md hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition transform duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
