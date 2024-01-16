// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrvC9HvWiAqvfJyiAy6OsJqSw98wTPwPg",
  authDomain: "ema-john-simple-1e6ab.firebaseapp.com",
  projectId: "ema-john-simple-1e6ab",
  storageBucket: "ema-john-simple-1e6ab.appspot.com",
  messagingSenderId: "247397114822",
  appId: "1:247397114822:web:1c30650a0cb70e525808c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;