import React, { useState } from 'react';
import historyService from '../service/HistoryService';
import userService from '../service/UserService';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      userService.addUser(formData.email, formData.password);
      historyService.logActivity(formData.email, "Registered a new account");

      Swal.fire({
        icon: 'success',
        title: 'User registered successfully!',
        showConfirmButton: false,
        timer: 1500,
      });

      setFormData({ name: '', email: '', password: '' });

      setTimeout(() => {
        navigate('/signin');
      }, 1600);
    } catch (err) {
      if (err.message === "user already exists") {
        Swal.fire({
          icon: 'warning',
          title: 'User already exists!',
          text: 'Redirecting to login...',
          timer: 2000,
          showConfirmButton: false,
        });
        setTimeout(() => {
          navigate('/signin');
        }, 2100);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message,
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-300 px-4">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/30">
        <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-6 drop-shadow-md">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition transform duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account?{' '}
          <a href="/signin" className="text-blue-700 font-medium hover:underline">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}
