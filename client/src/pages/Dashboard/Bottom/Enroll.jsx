import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { StudentContext } from '../../../context/StudentContext'; // adjust path as needed

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
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white bg-opacity-90 shadow-2xl rounded-3xl p-12 ring-1 ring-indigo-300">
        <h1 className="text-center text-4xl font-extrabold mb-12 text-indigo-700 tracking-wide drop-shadow-md">
          Enroll New Student
        </h1>
        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Image URL Input + Preview */}
          <div className="text-center">
            <input 
              type="text"
              name="photoUrl"
              value={studentDetails.photoUrl}
              onChange={handleChange}
              placeholder="Enter Image URL"
              required
              className="w-full max-w-md mx-auto px-6 py-3 border-2 border-indigo-400 rounded-full shadow-lg focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-50 transition duration-300"
            />
            {studentDetails.photoUrl && (
              <img 
                src={studentDetails.photoUrl} 
                alt="Student Preview"
                className="mt-8 w-40 h-40 object-cover rounded-full mx-auto border-8 border-indigo-300 shadow-2xl drop-shadow-lg"
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
            className="w-full px-8 py-5 border-2 border-indigo-400 rounded-xl shadow-md focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-40 text-lg transition duration-300"
          />

          <input
            type="text"
            name="regNumber"
            value={studentDetails.regNumber}
            onChange={handleChange}
            placeholder="Registration Number"
            required
            className="w-full px-8 py-5 border-2 border-indigo-400 rounded-xl shadow-md focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-40 text-lg transition duration-300"
          />

          <input
            type="date"
            name="dob"
            value={studentDetails.dob}
            onChange={handleChange}
            required
            className="w-full px-8 py-5 border-2 border-indigo-400 rounded-xl shadow-md text-gray-700 focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-40 text-lg transition duration-300"
          />

          <textarea
            name="address"
            value={studentDetails.address}
            onChange={handleChange}
            placeholder="Address"
            rows="4"
            required
            className="w-full px-8 py-5 border-2 border-indigo-400 rounded-xl shadow-md resize-none focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-40 text-lg transition duration-300"
          ></textarea>

          <input
            type="text"
            name="phoneNumber"
            value={studentDetails.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-8 py-5 border-2 border-indigo-400 rounded-xl shadow-md focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-40 text-lg transition duration-300"
          />

          <select
            name="bloodGroup"
            value={studentDetails.bloodGroup}
            onChange={handleChange}
            required
            className="w-full px-8 py-5 border-2 border-indigo-400 rounded-xl shadow-md text-gray-700 focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-40 text-lg transition duration-300"
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
            className="w-full px-8 py-5 border-2 border-indigo-400 rounded-xl shadow-md focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-40 text-lg transition duration-300"
          />

          <input
            type="date"
            name="doj"
            value={studentDetails.doj}
            onChange={handleChange}
            required
            className="w-full px-8 py-5 border-2 border-indigo-400 rounded-xl shadow-md text-gray-700 focus:outline-none focus:ring-6 focus:ring-indigo-400 focus:ring-opacity-40 text-lg transition duration-300"
          />

          <div className="flex justify-center space-x-8">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold px-12 py-5 rounded-2xl shadow-xl focus:outline-none focus:ring-6 focus:ring-indigo-500 transition duration-300 transform hover:-translate-y-0.5"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-400 text-indigo-900 font-extrabold px-12 py-5 rounded-2xl shadow-inner focus:outline-none focus:ring-6 focus:ring-indigo-200 transition duration-300 transform hover:translate-y-0.5"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
