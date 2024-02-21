// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGyFif-oGi7mjhyAFAEfeBopG-I17E1bY",
  authDomain: "example-c2c88.firebaseapp.com",
  projectId: "example-c2c88",
  storageBucket: "example-c2c88.appspot.com",
  messagingSenderId: "948561935903",
  appId: "1:948561935903:web:75ee37ad5c18acfb60df2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
