// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5u3SYCOAI7AUo8nSa5O5YbxhuPgBaRMw",
  authDomain: "user-email-password-auth-3aa38.firebaseapp.com",
  projectId: "user-email-password-auth-3aa38",
  storageBucket: "user-email-password-auth-3aa38.appspot.com",
  messagingSenderId: "605500166609",
  appId: "1:605500166609:web:ca27ac07d17173576c50f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;