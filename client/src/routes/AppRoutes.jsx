import { Routes, Route } from 'react-router-dom'; 
import Home from '../pages/Dashboard/Top/Home';
import About from '../pages/Dashboard/Bottom/About';
import Developers from '../pages/Dashboard/Bottom/Developers';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from '../routes/PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import StudentDetails from '../pages/Dashboard/Bottom/StudentDetails';
import Calculator from '../pages/Dashboard/Top/Calculator';
import Enroll from '../pages/Dashboard/Bottom/Enroll';
import HomeIntro from '../pages/HomeIntro';
import Stopwatch from '../pages/Dashboard/Top/Stopwatch';
import Counter from '../pages/Dashboard/Top/Counter';




export default function AppRoutes() {
  return (
    <Routes>
      <Route index="/" element={<HomeIntro />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={(
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>)
        }
      >
        <Route path='/dashboard/top/home' element={<Home />} /> 
        <Route path="/dashboard/top/calculator" element={<Calculator />} />
        <Route path='/dashboard/top/stopwatch' element={<Stopwatch />} /> 
        <Route path='/dashboard/top/Counter' element={<Counter  />} />  
        <Route path="/dashboard/bottom/enroll" element={<Enroll />} />
        <Route path="/dashboard/studentdetails" element={<StudentDetails />} />
        <Route path="/dashboard/developers" element={<Developers />} />
        <Route path="/dashboard/about" element={<About />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}
