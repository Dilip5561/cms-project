import React, { createContext, useState } from 'react';

// Create the context
export const StudentContext = createContext();

// Dummy initial students
const initialStudents = [
  {
    name: "Alice Johnson",
    regNumber: "2023A001",
    dob: "2002-05-12",
    address: "123 Main St, Chennai",
    phoneNumber: "9876543210",
    bloodGroup: "A+",
    department: "Computer Science",
    doj: "2023-06-01",
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ravi Kumar",
    regNumber: "2023A002",
    dob: "2001-11-22",
    address: "45 MG Road, Bangalore",
    phoneNumber: "9123456789",
    bloodGroup: "B+",
    department: "Mechanical",
    doj: "2023-06-02",
    photoUrl: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "Fatima Sheikh",
    regNumber: "2023A003",
    dob: "2002-03-19",
    address: "78 Park Ave, Hyderabad",
    phoneNumber: "9988776655",
    bloodGroup: "O-",
    department: "Electronics",
    doj: "2023-06-03",
    photoUrl: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

// Create the provider component
export function StudentProvider({ children }) {
  const [students, setStudents] = useState(initialStudents); // <-- default list

  const addStudent = (student) => {
    setStudents(prevStudents => [...prevStudents, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
