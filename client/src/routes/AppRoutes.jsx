import { Routes, Route } from 'react-router-dom';  // NO BrowserRouter import here

import Home from '../pages/Home';
import About from '../pages/About';
import Developers from '../pages/Developers';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from '../routes/PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import Enroll from '../pages/Enroll';


export default function AppRoutes() {
  return (
    <Routes>
      <Route index="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      

      {/* Protected Route */}
      <Route
        path="/dashboard"
        element={(
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>)
        }
      >
        <Route path="/dashboard/developers" element={<Developers />} />
        <Route path="/dashboard/enrollstudent" element={<Enroll />} />
        <Route path="/dashboard/about" element={<About />} />
        </Route>

      {/* Fallback route */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}
