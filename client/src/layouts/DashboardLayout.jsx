import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  const [sidebarVisible, setSidebarVisible] = useState(true); // toggle state

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar (conditionally rendered) */}
      {sidebarVisible && (
        <aside className="w-64 bg-white shadow-lg hidden md:block">
          
          <div className="p-6 text-xl font-bold border-b">Dashboard</div>
          <div className="p-6 text-xl font-bold border-b">LEVEL 10</div>
          <nav className="p-4 space-y-2 text-gray-700">
            <Link to="/dashboard/top/home" className="block px-4 py-2 rounded hover:bg-blue-100">
              Home
            </Link>
            <Link to="/dashboard/top/calculator" className="block px-4 py-2 rounded hover:bg-blue-100">
              Calculator
            </Link>
            <Link to="/dashboard/top/Stopwatch" className="block px-4 py-2 rounded hover:bg-blue-100">
              Stopwatch
            </Link>
            <Link to="/dashboard/bottom/enroll" className="block px-4 py-2 rounded hover:bg-blue-100">
              Enrollment
            </Link>
            <Link to="/dashboard/studentdetails" className="block px-4 py-2 rounded hover:bg-blue-100">
              Student Details
            </Link>
            <Link to="/dashboard/developers" className="block px-4 py-2 rounded hover:bg-blue-100">
              Profile
            </Link>
            <Link to="/dashboard/about" className="block px-4 py-2 rounded hover:bg-blue-100">
              About
            </Link>
            <Link to="/signin" className="block px-4 py-2 mt-4 text-red-600 hover:bg-red-100">
              Logout
            </Link>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
        <button
            onClick={() => setSidebarVisible(prev => !prev)}
            className="text-sm  text-black px-1 py-1 rounded hover:text-white hover:bg-black mr-2"
          >
            {sidebarVisible ? '<' : '>'}
          </button>
          <h1 className="text-lg font-semibold">Welcome 💙</h1>

          <div className="mx-auto font-bold text-xl">
            <span style={{ color: 'black' }}>LEVEL </span>
            <span style={{ color: 'red' }}>10</span>
          </div>

          {/* Toggle Button (one button for both actions) */}
          
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
