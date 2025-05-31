import React, { createContext, useState } from 'react';

// Create the context
export const StudentContext = createContext();

// Create the provider component
export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  // Function to add a student to the list
  const addStudent = (student) => {
    setStudents(prevStudents => [...prevStudents, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
