import { useRef } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";

export const SignUp = () => {
    const registerEmail = useRef("");
    const registerPassword = useRef("");

    const register = async () => {
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    };
}