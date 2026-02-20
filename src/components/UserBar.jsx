import { useAuth } from "../contexts/AuthContext";

// Component for the Navbar at the top of the screen
export const UserBar = () => {
    const { user, signUserOut } = useAuth();

    return (
        <div className="userbar">
            <p>Welcome {user?.displayName}</p>
            <button onClick={signUserOut}>Sign out</button>
        </div>
    );
};