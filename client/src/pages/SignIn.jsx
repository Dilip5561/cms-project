import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'; // <-- Import SweetAlert2
import userService from '../service/UserService'; // ✅ Import your class-based service

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate using your class method
      userService.authenticate(email, password);

      // Update login context
      login(email);

      // Log login history
      const now = new Date().toISOString();
      const loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];
      loginHistory.push({ email, password, dateTime: now });
      localStorage.setItem('loginHistory', JSON.stringify(loginHistory));

      await Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!',
        confirmButtonText: 'OK',

      });

      setEmail('');
      setPassword('');

      // Navigate to dashboard
      navigate('/dashboard/about');

    } catch (err) {

      await Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: err.message,
        confirmButtonText: 'Try Again',

      });
    }
  };

  // Get and parse a JSON object from localStorage
  JSON.parse(localStorage.getItem('userDetails'));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In to Your Account</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
