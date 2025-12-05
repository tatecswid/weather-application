import { auth, provider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../App.css"
import googleLogo from "../pictures/googleLogo.png"

// The login screen and the functionality to go with it:
export const Login = () => {
    const signUserIn = async () => {
        signInWithPopup(auth, provider);
    };

    return (
        <div className="login-page">
            <div className="login-wrapper">
                <h3>WEATHER DASHBOARD</h3>
                <button onClick={signUserIn}>
                    <img src={googleLogo} alt="google logo" width={30}/>
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};