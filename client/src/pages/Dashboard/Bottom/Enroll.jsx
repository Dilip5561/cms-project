import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { StudentContext } from '../../../context/StudentContext';

export default function Enroll() {
  const { addStudent } = useContext(StudentContext);

  const initialDetails = {
    photoUrl: '',
    name: '',
    regNumber: '',
    dob: '',
    address: '',
    phoneNumber: '',
    bloodGroup: '',
    department: '',
    doj: ''
  };

  const [studentDetails, setStudentDetails] = useState(initialDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({
      ...studentDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent(studentDetails);  // Add student to global list

    Swal.fire({
      title: 'Success!',
      text: 'Student enrolled successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    setStudentDetails(initialDetails);  // reset form
  };


  const handleReset = () => {
    setStudentDetails(initialDetails);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-10">
        <h1 className="text-center text-4xl font-extrabold mb-10 text-blue-700 tracking-wide">
          Enroll New Student
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Image URL Input + Preview */}
          <div className="text-center">
            <input 
              type="text"
              name="photoUrl"
              value={studentDetails.photoUrl}
              onChange={handleChange}
              placeholder="Enter Image URL"
              required
              className="w-full max-w-md mx-auto px-5 py-3 border border-blue-400 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            />
            {studentDetails.photoUrl && (
              <img 
                src={studentDetails.photoUrl} 
                alt="Student Preview"
                className="mt-6 w-36 h-36 object-cover rounded-full mx-auto border-4 border-blue-300 shadow-xl"
              />
            )}
          </div>

          <input
            type="text"
            name="name"
            value={studentDetails.name}
            onChange={handleChange}
            placeholder="Student Name"
            required
            className="w-full px-6 py-4 border border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <input
            type="text"
            name="regNumber"
            value={studentDetails.regNumber}
            onChange={handleChange}
            placeholder="Registration Number"
            required
            className="w-full px-6 py-4 border border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <input
            type="date"
            name="dob"
            value={studentDetails.dob}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 border border-blue-400 rounded-lg shadow-sm text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <textarea
            name="address"
            value={studentDetails.address}
            onChange={handleChange}
            placeholder="Address"
            rows="3"
            required
            className="w-full px-6 py-4 border border-blue-400 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          ></textarea>

          <input
            type="text"
            name="phoneNumber"
            value={studentDetails.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-6 py-4 border border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <select
            name="bloodGroup"
            value={studentDetails.bloodGroup}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 border border-blue-400 rounded-lg shadow-sm text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          >
            <option value="" disabled>Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <input
            type="text"
            name="department"
            value={studentDetails.department}
            onChange={handleChange}
            placeholder="Department"
            required
            className="w-full px-6 py-4 border border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <input
            type="date"
            name="doj"
            value={studentDetails.doj}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 border border-blue-400 rounded-lg shadow-sm text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <div className="flex justify-center space-x-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-semibold px-10 py-4 rounded-xl shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
