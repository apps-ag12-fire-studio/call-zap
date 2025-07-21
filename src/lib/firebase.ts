// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbOxUVcQ2nFpYIBPYGQJ-dEK98aGbtYCw",
  authDomain: "antonio-fogaca.firebaseapp.com",
  projectId: "antonio-fogaca",
  storageBucket: "antonio-fogaca.firebasestorage.app",
  messagingSenderId: "35712432630",
  appId: "1:35712432630:web:fc02ce0ec1e356af07afd7",
  measurementId: "G-1B9FWMZJVM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
