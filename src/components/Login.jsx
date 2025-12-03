import { auth, provider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

export const Login = () => {
    const signUserIn = async () => {
        const result = signInWithPopup(auth,provider);
    };

    return (
        <button onClick={signUserIn}>LOGIN WITH GOOGLE</button>
    );
};