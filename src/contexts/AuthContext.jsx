import { auth } from "../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { googleProvider } from "../config/firebase-config";
import { useError } from "./ErrorContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const { resetError, errorDetected } = useError();

    const signUpUser = async (email, password) => {
        resetError();
        try { await createUserWithEmailAndPassword(auth, email, password); }
        catch(error) {
            console.log(error.code)
            switch(error.code) {
                case "auth/invalid-email":
                    errorDetected("Provide a valid email");
                    break;
                case "auth/email-already-in-use":
                    errorDetected("Email is already in use");
                    break;
                case "auth/weak-password":
                    errorDetected("Password must be at least 6 characters");
                    break;
            }
             
        }
    }

    const loginUserEmailPassword = async (email, password) => {
        resetError();
        try { await signInWithEmailAndPassword(auth, email, password); }
        catch(error) { errorDetected("Email and/or password is incorrect."); }
    };

    const loginGoogleUser = async () => {
        resetError();
        try { await signInWithPopup(auth, googleProvider); }
        catch(error) { errorDetected("Unable to authorize google login, please try again later."); }
    };

    const signUserOut = async () => {
        resetError();
        try{ await signOut(auth); }
        catch(error) { errorDetected("Unable to authorize sign-out, please try again later."); }
    };

    
    return (
        <AuthContext.Provider value = { { user, loading, signUpUser, loginGoogleUser, loginUserEmailPassword, signUserOut } }>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};