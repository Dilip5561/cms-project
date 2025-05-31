import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function DashboardLayout() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-200 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-2xl hidden md:flex flex-col justify-between">
        <div>
          <div className="p-6 text-2xl font-extrabold border-b border-gray-200 text-blue-600">
            Dashboard
          </div>

          {/* Top Links */}
          <nav className="px-4 mt-6 space-y-2">
            <Link
              to="/dashboard/top/home"
              className={`block px-4 py-2 rounded-lg transition hover:bg-blue-100 ${
                isActive('/dashboard/top/home') ? 'bg-blue-200 font-semibold' : ''
              }`}
            >
              🏠 Home
            </Link>
            <Link
              to="/dashboard/top/calculator"
              className={`block px-4 py-2 rounded-lg transition hover:bg-blue-100 ${
                isActive('/dashboard/top/calculator') ? 'bg-blue-200 font-semibold' : ''
              }`}
            >
              🧮 Calculator
            </Link>
            <Link
              to="/dashboard/top/stopwatch"
              className={`block px-4 py-2 rounded-lg transition hover:bg-blue-100 ${
                isActive('/dashboard/top/stopwatch') ? 'bg-blue-200 font-semibold' : ''
              }`}
            >
              ⏱️ Stopwatch
            </Link>
          </nav>

          {/* Center Box (LEVEL 10) */}
          <div className="px-4 mt-6">
            <div className="text-center text-lg font-bold py-3 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 rounded-xl shadow-inner">
              LEVEL <span className="text-red-500">10</span>
            </div>
          </div>

          {/* Bottom Links */}
          <nav className="px-4 mt-6 space-y-2">
            <Link
              to="/dashboard/bottom/enroll"
              className={`block px-4 py-2 rounded-lg transition hover:bg-blue-100 ${
                isActive('/dashboard/bottom/enroll') ? 'bg-blue-200 font-semibold' : ''
              }`}
            >
              📝 Enrollment
            </Link>
            <Link
              to="/dashboard/studentdetails"
              className={`block px-4 py-2 rounded-lg transition hover:bg-blue-100 ${
                isActive('/dashboard/studentdetails') ? 'bg-blue-200 font-semibold' : ''
              }`}
            >
              🎓 Student Details
            </Link>
            <Link
              to="/dashboard/developers"
              className={`block px-4 py-2 rounded-lg transition hover:bg-blue-100 ${
                isActive('/dashboard/developers') ? 'bg-blue-200 font-semibold' : ''
              }`}
            >
              👨‍💻 Profile
            </Link>
            <Link
              to="/dashboard/about"
              className={`block px-4 py-2 rounded-lg transition hover:bg-blue-100 ${
                isActive('/dashboard/about') ? 'bg-blue-200 font-semibold' : ''
              }`}
            >
              ℹ️ About
            </Link>
            <Link
              to="/signin"
              className="block px-4 py-2 mt-4 text-red-600 hover:bg-red-100 rounded-lg transition"
            >
              🚪 Logout
            </Link>
          </nav>
        </div>

        <div className="text-center text-sm text-gray-400 p-4">
          © {new Date().getFullYear()} KAHE CMS
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-5 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Welcome 💙</h1>
          <div className="font-bold text-xl">
            <span className="text-black">LEVEL </span>
            <span className="text-red-500">10</span>
          </div>
          <div className="text-sm text-gray-600">Hey..!</div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-white shadow-inner">
          <Outlet />
        </main>
      </div>
    </div>
  );
}