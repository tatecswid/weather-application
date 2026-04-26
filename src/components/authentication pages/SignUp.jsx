import { useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useError } from "../../contexts/ErrorContext";

export const SignUp = () => {
    const registerEmail = useRef("");
    const registerPassword = useRef("");
    const confirmPassword = useRef("");

    const { signUpUser } = useAuth();
    const { hasError, errorMessage, resetError, errorDetected } = useError();
    useEffect(() => { resetError(); }, []);

    const validateSignUp = () => {
        if(registerPassword.current !== confirmPassword.current) {
            errorDetected("Passwords must match");
            return false;
        }
        return true;
    }

    return (
        <div className="signup-page">
            <div className="signup-wrapper">
                <h1>Create Account</h1>
                <h4>Register Email</h4>
                <input type="email" onChange={ (e) => registerEmail.current = e.target.value } />
                
                <h4>Register Password</h4>
                <input type="password" min={8} onChange={ (e) => registerPassword.current = e.target.value } />
                <h4>Confirm Password</h4>
                <input type="password" min={8} onChange={ (e) => confirmPassword.current = e.target.value }/>

                <button onClick={() =>  { console.log(validateSignUp())
                    validateSignUp() && signUpUser(registerEmail.current, registerPassword.current)
                    }}> Create Account </button>
                <p>Already have an account? <Link to="/login">Sign In</Link></p>
                {hasError && <p> { errorMessage.toString() } </p>}
            </div>
        </div>
    );
}