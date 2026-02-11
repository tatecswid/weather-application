import { useRef } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const registerEmail = useRef("");
    const registerPassword = useRef("");

    const register = async () => {
        await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    };

    return (
        <div>
            <h1>Create Account</h1>
            <h4>Register Email</h4>
            <input />
            <h4>Register Password</h4>
            <input />
            <br />
            <button> Create Account </button>

            <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
    );
}