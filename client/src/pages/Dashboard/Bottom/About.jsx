import React from 'react';

function About() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-3xl w-full text-center">
                <h1 className="text-4xl font-bold mb-6 text-blue-800">About Us</h1>
                <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                    Welcome to our CMS project! This application is designed to help you manage your content efficiently and intuitively.
                </p>
                
                <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Mission</h2>
                <p className="mb-8 text-gray-700 text-base leading-relaxed">
                    To provide a simple, powerful, and flexible content management solution for everyone.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-blue-700">Contact</h2>
                <p className="text-gray-700 text-base">
                    For more information, please contact us at admin@gmail.com
                </p>
            </div>
        </div>
    );
};

export default About;
