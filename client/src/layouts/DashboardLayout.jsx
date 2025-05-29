import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 text-xl font-bold border-b">My Dashboard</div>
        <nav className="p-4 space-y-2 text-gray-700">
          <Link to="/dashboard" className="block px-4 py-2 rounded hover:bg-blue-100">
            Home
          </Link>
          <Link to="/dashboard/developers" className="block px-4 py-2 rounded hover:bg-blue-100">
            Profile
          </Link>
          <Link to="/dashboard/about" className="block px-4 py-2 rounded hover:bg-blue-100">
            About
          </Link>
          {/* Add more links as pages are developed */}
          <Link to="/signin" className="block px-4 py-2 mt-4 text-red-600 hover:bg-red-100">
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Welcome back!</h1>
          <div className="text-sm text-gray-600">User Name</div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet /> {/* Renders the current nested route (like Dashboard, Profile, etc.) */}
        </main>
      </div>
    </div>
  );
}
