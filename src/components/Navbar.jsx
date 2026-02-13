import { auth, googleProvider } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";

// Component for the Navbar at the top of the screen
export const NavBar = () => {
    const { user, signUserOut } = useAuth();

    return (
        <div className="navbar">
            <p>Welcome {user?.displayName}</p>
            <button onClick={signUserOut}>Sign out</button>
        </div>
    );
};