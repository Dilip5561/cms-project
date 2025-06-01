import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const navLinkStyle = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? 'bg-gradient-to-r from-purple-200 to-pink-100 text-purple-900 font-bold shadow-md'
        : 'hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-100'
    }`;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-200">

      {/* Sidebar */}
      {sidebarVisible && (
        <aside className="w-64 bg-white/30 backdrop-blur-lg border-r border-white/40 shadow-lg hidden md:block transition-all duration-300">
          <div className="p-6 text-2xl font-extrabold text-center text-purple-900 border-b border-white/100 ">
            Dashboard
          </div>
          <div className="p-4 text-center font-bold text-lg text-pink-600 border-b border-white/100 shadow-inner shadow-pink-300">
            CONTEXTS
          </div>

          {/* Top Navigation */}
          <nav className="p-4 space-y-2 text-gray-800 font-medium">
            {[
              { name: 'Home', path: '/dashboard/top/home' },
              { name: 'Calculator', path: '/dashboard/top/calculator' },
              { name: 'Stopwatch', path: '/dashboard/top/Stopwatch' },
              { name: 'Counter', path: '/dashboard/top/Counter' },
            ].map((link, i) => (
              <NavLink key={i} to={link.path} className={navLinkStyle}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Level Info */}
        
          <div className="mx-auto w-full overflow-hidden text-center">
            <marquee behavior="scroll" direction="right" scrollamount="6" className="font-extrabold text-2xl">
              <span className="text-black animate-pulse mr-2">LEVEL</span>
              <span className="text-red-500 animate-pulse">10</span>
            </marquee>
          </div>

          {/* Bottom Navigation */}
          <nav className="p-4 space-y-2 text-gray-800 font-medium">
            {[
              { name: 'Enrollment', path: '/dashboard/bottom/enroll' },
              { name: 'Student Details', path: '/dashboard/studentdetails' },
              { name: 'Profile', path: '/dashboard/developers' },
              { name: 'About', path: '/dashboard/about' },
            ].map((link, i) => (
              <NavLink key={i} to={link.path} className={navLinkStyle}>
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/signin"
              className="block px-4 py-2 mt-4 text-red-600 hover:bg-red-100 rounded-lg transition-all"
            >
              Logout
            </NavLink>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white/30 backdrop-blur-lg shadow-md p-4 flex items-center justify-between border-b border-white/40">
          <button
            onClick={() => setSidebarVisible(prev => !prev)}
            className="text-lg font-bold text-purple-700 px-1 py-1 rounded hover:bg-black/10 hover:text-white transition-all"
          >
            {sidebarVisible ? '<' : '>'}
          </button>

          {/* Level 10 marquee with glow */}
          <div className="mx-auto font-bold text-2xl">
            <span className="text-black  text-2xl">LEVEL </span>
            <span className="text-red-500 animate-pulse text-2xl ">10</span>
          </div> 
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
