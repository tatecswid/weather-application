import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/authentication pages/Login';
import { SignUp } from './pages/authentication pages/SignUp';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from './utils/ProtectedRoutes';
import { AuthProvider } from './contexts/AuthContext';
import { PublicRoute } from './utils/PublicRoute';
import { ErrorProvider } from './contexts/ErrorContext';

function App() {  
  return (
    <div className={"entire-page"}>
      <BrowserRouter>
        <ErrorProvider>
          <AuthProvider>
            <Routes>
              <Route element={<ProtectedRoutes/>}>
                <Route path="/" element={<Dashboard />} />
              </Route>
              <Route element={<PublicRoute/>}>
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={<SignUp />}/>
              </Route>
            </Routes>
          </AuthProvider>
        </ErrorProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
