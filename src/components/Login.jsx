import { auth, provider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../App.css"
import googleLogo from "../pictures/googleLogo.png"

export const Login = () => {
    const signUserIn = async () => {
        const result = signInWithPopup(auth, provider);
    };

    return (
        <div className="login-page">
            <div className="login-wrapper">
                <h3>WEATHER DASHBOARD</h3>
                <button onClick={signUserIn}>
                    <img src={googleLogo} alt="google logo" width={20}/>
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};