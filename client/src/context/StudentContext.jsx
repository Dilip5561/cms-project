import React, { createContext, useState } from 'react';

// 1️⃣ Create the Context
export const StudentContext = createContext();

// 2️⃣ Define 3 default students
const defaultStudents = [
  {
    name: "Akil",
    regNumber: "22BTAD005",
    dob: "2005-04-09",
    address: "Udumalaipet, India",
    phoneNumber: "9876543210",
    bloodGroup: "B+",
    department: "AI&DS",
    doj: "2022-08-01",
    photoUrl: "https://i.ytimg.com/vi/NHJRzLcnK-I/maxresdefault.jpg",
  },
  {
    name: "Maharaja",
    regNumber: "22BTAD037",
    dob: "2004-09-22",
    address: "Vilupuram, India",
    phoneNumber: "9876543211",
    bloodGroup: "A+",
    department: "AI&DS",
    doj: "2022-08-01",
    photoUrl: "https://vignette.wikia.nocookie.net/jackiechanadventures/images/e/ee/Episode_11.png/revision/latest?cb=20150411222551",
  },
  {
    name: "Dilip",
    regNumber: "22BTAD013",
    dob: "2001-04-10",
    address: "Coimbatore, India",
    phoneNumber: "8667090639",
    bloodGroup: "O+",
    department: "AI&DS",
    doj: "2022-08-01",
    photoUrl: "https://wallpapers.com/images/hd/high-quality-dilip-kumar-colorized-m80xbcatrm3rsdrk.jpg",
  }
];

// 3️⃣ Provide the context value
export function StudentProvider({ children }) {
  const [students, setStudents] = useState(defaultStudents);

  const addStudent = (student) => {
    setStudents(prevStudents => [...prevStudents, student]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
