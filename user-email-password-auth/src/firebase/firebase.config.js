// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAg1CO9Tu5ZA0LADVTcHUPiyeOIQs-1cLw",
    authDomain: "user-email-password-auth-b03cf.firebaseapp.com",
    projectId: "user-email-password-auth-b03cf",
    storageBucket: "user-email-password-auth-b03cf.appspot.com",
    messagingSenderId: "181560095926",
    appId: "1:181560095926:web:9037988f8071198e34a217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;