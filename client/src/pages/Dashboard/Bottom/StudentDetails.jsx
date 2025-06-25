import React, { useContext } from 'react';
import { StudentContext } from "../../../context/StudentContext";

export default function StudentDetails() {
  const { students } = useContext(StudentContext);

  if (students.length === 0) {
    return (
      <p className="text-center mt-20 text-lg text-indigo-600 font-semibold">
        No students enrolled yet.
      </p>
    );
  }

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {students.map((student, idx) => (
        <div
          key={idx}
          className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center
                     hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer"
        >
          <img
            src={student.photoUrl}
            alt={student.name}
            className="w-36 h-36 object-cover rounded-full border-8 border-indigo-300 shadow-xl mb-6"
          />
          <h2 className="text-2xl font-extrabold text-indigo-700 mb-4 tracking-wide">
            {student.name}
          </h2>
          <div className="text-left w-full space-y-2 text-gray-700 font-medium">
            <p><span className="font-semibold text-indigo-600">Registration No:</span> {student.regNumber}</p>
            <p><span className="font-semibold text-indigo-600">DOB:</span> {student.dob}</p>
            <p><span className="font-semibold text-indigo-600">Address:</span> {student.address}</p>
            <p><span className="font-semibold text-indigo-600">Phone:</span> {student.phoneNumber}</p>
            <p><span className="font-semibold text-indigo-600">Blood Group:</span> {student.bloodGroup}</p>
            <p><span className="font-semibold text-indigo-600">Department:</span> {student.department}</p>
            <p><span className="font-semibold text-indigo-600">Date of Joining:</span> {student.doj}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
