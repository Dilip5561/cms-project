import React from 'react';

export default function Developers() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 tracking-tight drop-shadow-md">
          Meet Our Team
        </h1>
        <p className="text-gray-700 mb-14 text-xl max-w-3xl mx-auto leading-relaxed">
          Passionate individuals working together to create impactful software solutions.
        </p>

        <div className="grid sm:grid-cols-2 gap-12">
          {/* Team Lead - Dilip */}
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-3xl duration-300 cursor-pointer"
            aria-label="Team Lead Dilip"
          >
            <img
              src="https://images.hdqwalls.com/wallpapers/lionel-messi-fifa-world-cup-qatar-4k-mu.jpg"
              alt="Dilip"
              className="w-28 h-28 mx-auto mb-6 rounded-full object-cover border-8 border-blue-300 shadow-lg"
            />
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{`Dilip`}</h2>
            <p className="text-indigo-600 font-semibold mb-4 tracking-wide">Team Lead</p>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Oversees the project development and ensures successful coordination among team members.
            </p>
            <div className="text-left">
              <h3 className="font-semibold text-blue-700 mb-2">Skills:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>AI, ML, DL</li>
                <li>Data Science</li>
                <li>React Frontend Development</li>
              </ul>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://github.com/Dilip5561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-700 hover:text-blue-900 font-semibold underline transition-colors duration-200"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Team Member - Maharaja */}
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-3xl duration-300 cursor-pointer"
            aria-label="Team Member Maharaja"
          >
            <img
              src="https://www.kemifilani.ng/wp-content/uploads/2023/01/Ronaldo-Al-Nassr9.jpg"
              alt="Maharaja"
              className="w-28 h-28 mx-auto mb-6 rounded-full object-cover border-8 border-blue-300 shadow-lg"
            />
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Maharaja</h2>
            <p className="text-indigo-600 font-semibold mb-4 tracking-wide">Team Member</p>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Focuses on implementation, UI development, and integration of intelligent system features.
            </p>
            <div className="text-left">
              <h3 className="font-semibold text-blue-700 mb-2">Skills:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>AI, ML, DL</li>
                <li>Data Science</li>
                <li>React Frontend Development</li>
              </ul>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://github.com/Maharajakumar04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-700 hover:text-blue-900 font-semibold underline transition-colors duration-200"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
