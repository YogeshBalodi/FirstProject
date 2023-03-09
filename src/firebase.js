// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDLuiezefImav5NuJEDqczd4AnJq3xBebU",
  authDomain: "firstproject0110.firebaseapp.com",
  projectId: "firstproject0110",
  storageBucket: "firstproject0110.appspot.com",
  messagingSenderId: "590784743195",
  appId: "1:590784743195:web:caf92d21b17c61c19ff5be",
  measurementId: "G-BWPGB4656W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export default app;
