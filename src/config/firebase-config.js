// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA75lFe3F1F3KXj7BWDmAXFY0SWJAcvXGQ",
  authDomain: "weather-dashboard-aeab7.firebaseapp.com",
  projectId: "weather-dashboard-aeab7",
  storageBucket: "weather-dashboard-aeab7.firebasestorage.app",
  messagingSenderId: "181887738170",
  appId: "1:181887738170:web:1272b92b8fa26e35373003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();