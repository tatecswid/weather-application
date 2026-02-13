import { auth } from "../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { createContext, useContext } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { googleProvider } from "../config/firebase-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    return (
        <AuthContext.Provider value = { { user, loading, loginGoogleUser, loginUserEmailPassword, signUserOut } }>
            { children }
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export const loginUserEmailPassword = (email, password) => {
    
};

export const loginGoogleUser = () => {
    signInWithPopup(auth, googleProvider);
};

export const signUserOut = () => {
    signOut(auth, googleProvider);
};