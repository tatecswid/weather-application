import { NavBar } from "./Navbar";
import { WeatherPage } from "./WeatherPage";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase-config';
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {  
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    !user && navigate("/login");

    return (
        <div>
            <NavBar />
            <WeatherPage/>
        </div>
    );
}