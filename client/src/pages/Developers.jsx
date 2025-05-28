import React from 'react';

export default function Developers() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Meet Our Team</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Passionate individuals working together to create impactful software solutions.
        </p>

        <div className="grid sm:grid-cols-2 gap-10">
          {/* Team Lead - Dilip */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transition hover:shadow-2xl">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-700">
              TL
            </div>
            <h2 className="text-xl font-semibold text-blue-700">Dilip</h2>
            <p className="text-gray-500 mb-3">Team Lead</p>
            <p className="text-sm text-gray-600 mb-4">
              Oversees the project development and ensures successful coordination among team members.
            </p>
            <div className="text-left">
              <h3 className="font-semibold text-gray-700">Skills:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>AI, ML, DL</li>
                <li>Data Science</li>
                <li>React Frontend Development</li>
              </ul>
            </div>
            <div className="mt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Team Member - Maharaja */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transition hover:shadow-2xl">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-700">
              MJ
            </div>
            <h2 className="text-xl font-semibold text-blue-700">Maharaja</h2>
            <p className="text-gray-500 mb-3">Team Member</p>
            <p className="text-sm text-gray-600 mb-4">
              Focuses on implementation, UI development, and integration of intelligent system features.
            </p>
            <div className="text-left">
              <h3 className="font-semibold text-gray-700">Skills:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>AI, ML, DL</li>
                <li>Data Science</li>
                <li>React Frontend Development</li>
              </ul>
            </div>
            <div className="mt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
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
