import './App.css';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/authentication pages/Login';
import { SignUp } from './components/authentication pages/SignUp';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from './utils/ProtectedRoutes';
import { AuthProvider } from './contexts/AuthContext';
import { PublicRoute } from './utils/PublicRoute';

function App() {  
  return (
    <div className={"entire-page"}>
      <BrowserRouter>
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
      </BrowserRouter>
      
    </div>
  );
}

export default App;
