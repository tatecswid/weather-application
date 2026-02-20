import "../../App.css";
import googleLogo from "../../pictures/googleLogo.png";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// The login screen and the functionality to go with it using firebase auth sign in with popup:
export const Login = () => {
    const loginEmail = useRef("");
    const loginPassword = useRef("");
    const {loginGoogleUser, loginUserEmailPassword} = useAuth();

    return (
        <div className="login-page">
            
            <div className="login-wrapper">
                <h3>Weather Dashboard</h3>
                <p>Sign in to view your weather forecast</p>
                
                <h4>Email</h4>
                <input type="email" onChange={ (e) => loginEmail.current = e.target.value } />
                
                <h4>Password</h4>
                <input type="password" onChange={ (e) => loginPassword.current = e.target.value } />
                
                <br />
                <button onClick={ () => loginUserEmailPassword(loginEmail.current, loginPassword.current) }>Sign In</button>
                <br />
                <button onClick={ loginGoogleUser }>
                    <img src={googleLogo} alt="google logo" width={10}/>
                    <span>Sign in with Google</span>
                </button>
                <br />

                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>

            </div>
        </div>
    );
};