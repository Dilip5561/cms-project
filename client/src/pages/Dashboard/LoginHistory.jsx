import React, { useEffect, useState } from 'react';

export default function LoginHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Login History</h2>
      <ul>
        {history.length === 0 && <li>No login history found.</li>}
        {history.map(({ email, dateTime }, i) => (
          <li key={i}>
            {email} logged in at {new Date(dateTime).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
