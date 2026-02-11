import './App.css';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';

import { WeatherPage } from './components/WeatherPage';
import { NavBar } from './components/Navbar';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard } from './components/Dashboard';

function App() {  
  return (
    <div class="entire-page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
