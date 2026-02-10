import { auth, googleProvider } from "../config/firebase-config";
import { signOut } from "firebase/auth";

// Component for the Navbar at the top of the screen
export const NavBar = () => {
    const signUserOut = () => {
        signOut(auth, googleProvider);
    };

    return (
        <div className="navbar">
            <p>Welcome {auth.currentUser?.displayName}</p>
            <button onClick={signUserOut}>Sign out</button>
        </div>
    );
};