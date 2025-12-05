import './App.css';
import { Login } from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase-config';
import { WeatherPage } from './components/WeatherPage';
import { NavBar } from './components/Navbar';

function App() {

  const [user] = useAuthState(auth);

  if(!user) {
    return <Login />;
  }
  
  return (
    <div class="entire-page">
      <NavBar />
      <WeatherPage/>
    </div>
  );
}

export default App;
