import { auth, provider } from "../config/firebase-config";
import { signOut } from "firebase/auth";

export const WeatherPage = () => {
    const signUserOut = () => {
        const result = signOut(auth, provider);
    };

    return (
        <div>
            <p>Hi there wlecome</p>
            <button onClick={signUserOut}>Sign out</button>
        </div>
    );
};