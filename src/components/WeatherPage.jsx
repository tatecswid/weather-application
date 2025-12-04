import { auth, provider } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import { WeatherFetcher } from "./WeatherFetcher";

export const WeatherPage = () => {
    const signUserOut = () => {
        const result = signOut(auth, provider);
    };

    return (
        <div>
            <p>Welcome {auth.currentUser?.displayName}</p>
            <button onClick={signUserOut}>Sign out</button>
            <WeatherFetcher />
        </div>
    );
};