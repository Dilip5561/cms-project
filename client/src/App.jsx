
import AuthProvider from './context/AuthProvider';
import { StudentProvider } from './context/StudentContext'; // ✅ Import the provider
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <StudentProvider>
        <AppRoutes />
      </StudentProvider>
    </AuthProvider>

  );
}

export default App;
