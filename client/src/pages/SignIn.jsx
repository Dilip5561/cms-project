import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import userService from '../service/UserService';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      userService.authenticate(email, password);
      login(email);

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
      navigate('/dashboard/top/Home');
    } catch (err) {
      await Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: err.message,
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-300 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30">
        <h2 className="text-3xl font-extrabold text-center text-blue-900 drop-shadow-md">
          Sign In to Your Account
        </h2>

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
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm"
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
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition transform duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-700">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-700 font-medium hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
