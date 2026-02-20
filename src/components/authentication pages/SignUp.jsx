import { useRef } from "react"
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const SignUp = () => {
    const registerEmail = useRef("");
    const registerPassword = useRef("");
    const confirmPassword = useRef("");

    const { signUpUser } = useAuth();

    return (
        <div>
            <h1>Create Account</h1>
            <h4>Register Email</h4>
            <input type="email" onChange={ (e) => registerEmail.current = e.target.value } />
            
            <h4>Register Password</h4>
            <input type="password" onChange={ (e) => registerPassword.current = e.target.value } />
            <h4>Confirm Password</h4>
            <input type="password" onChange={ (e) => confirmPassword.current = e.target.value } />

            <br />
            <button onClick={() => confirmPassword === registerPassword && signUpUser(registerEmail.current, registerPassword.current)}> Create Account </button>
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
    );
}