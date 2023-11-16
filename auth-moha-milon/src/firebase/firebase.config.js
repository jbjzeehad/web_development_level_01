// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADFgpCU6NfmCUO4WbPhhcXUVhS6_OBaNE",
    authDomain: "auth-moha-milon-1b040.firebaseapp.com",
    projectId: "auth-moha-milon-1b040",
    storageBucket: "auth-moha-milon-1b040.appspot.com",
    messagingSenderId: "986568376709",
    appId: "1:986568376709:web:1dd050dfb5c5b6d73b84ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;