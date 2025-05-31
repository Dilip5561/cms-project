import React, { useContext } from 'react';
import { StudentContext } from "../../../context/StudentContext";

export default function StudentDetails() {
  const { students } = useContext(StudentContext);

  if (students.length === 0) {
    return <p className="text-center mt-10">No students enrolled yet.</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((student, idx) => (
        <div key={idx} className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={student.photoUrl}
            alt={student.name}
            className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-300 mb-4"
          />
          <h2 className="text-xl font-semibold text-center mb-2">{student.name}</h2>
          <p><strong>Registration No:</strong> {student.regNumber}</p>
          <p><strong>DOB:</strong> {student.dob}</p>
          <p><strong>Address:</strong> {student.address}</p>
          <p><strong>Phone:</strong> {student.phoneNumber}</p>
          <p><strong>Blood Group:</strong> {student.bloodGroup}</p>
          <p><strong>Department:</strong> {student.department}</p>
          <p><strong>Date of Joining:</strong> {student.doj}</p>
        </div>
      ))}
    </div>
  );
}
