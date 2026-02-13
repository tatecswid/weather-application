import { auth } from "../config/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { googleProvider } from "../config/firebase-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    return (
        <AuthContext.Provider value = { { user, loading, signUpUser, loginGoogleUser, loginUserEmailPassword, signUserOut } }>
            { children }
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export const signUpUser = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
}

export const loginUserEmailPassword = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
};

export const loginGoogleUser = async () => {
    signInWithPopup(auth, googleProvider);
};

export const signUserOut = async () => {
    signOut(auth);
};