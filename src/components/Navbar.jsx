import { auth, provider } from "../config/firebase-config";
import { signOut } from "firebase/auth";

export const NavBar = () => {

    const signUserOut = () => {
        signOut(auth, provider);
    };

    return (
        <div className="navbar">
            <p>Welcome {auth.currentUser?.displayName}</p>
            <button onClick={signUserOut}>Sign out</button>
        </div>
    );
};