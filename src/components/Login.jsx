import { useRef } from "react";
import { auth, googleProvider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../App.css"
import googleLogo from "../pictures/googleLogo.png"

// The login screen and the functionality to go with it using firebase auth sign in with popup:
export const Login = () => {
    const loginEmail = useRef("");
    const loginPassword = useRef("");

    const signUserIn = async () => {
        signInWithPopup(auth, googleProvider);
    };

    const register = async () => {

    };

    const login = async () => {

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
                <button onClick={signUserIn}>
                    <img src={googleLogo} alt="google logo" width={10}/>
                    <span>Sign in with Google</span>
                </button>
                <br />

                <p>Don't have an account? <a href="">Sign up</a></p>

            </div>
        </div>
    );
};