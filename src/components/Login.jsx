import { useEffect, useRef } from "react";
import { auth, googleProvider } from "../config/firebase-config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import "../App.css"
import googleLogo from "../pictures/googleLogo.png"
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

// The login screen and the functionality to go with it using firebase auth sign in with popup:
export const Login = () => {
    const loginEmail = useRef("");
    const loginPassword = useRef("");
    const {user, loginGoogleUser} = useAuth();

    const googleSignIn = async () => {
        loginGoogleUser();
    };

    const login = async () => {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    };


    return (
        <div className="login-page">
            
            <div className="login-wrapper">
                <h3>Weather Dashboard</h3>
                <p>Sign in to view your weather forecast</p>
                
                <h4>Email</h4>
                <input type="email" />
                
                <h4>Password</h4>
                <input type="password" />
                
                <br />
                <button>Sign In</button>
                <br />
                <button onClick={googleSignIn}>
                    <img src={googleLogo} alt="google logo" width={10}/>
                    <span>Sign in with Google</span>
                </button>
                <br />

                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>

            </div>
        </div>
    );
};