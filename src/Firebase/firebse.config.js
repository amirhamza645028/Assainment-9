import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5G1Bpm0CAp1bV14XVQmfs01IlYPjZygM",
  authDomain: "assainment-9-129f1.firebaseapp.com",
  projectId: "assainment-9-129f1",
  storageBucket: "assainment-9-129f1.appspot.com",
  messagingSenderId: "67568553603",
  appId: "1:67568553603:web:0a61ceb27ec51ab8b915b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;