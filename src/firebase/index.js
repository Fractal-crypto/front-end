// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
  

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClP5ZbPjlS_lhhiVrXY3Nqw7RS40EeA64",
  authDomain: "new-trading-24f28.firebaseapp.com",
  projectId: "new-trading-24f28",
  storageBucket: "new-trading-24f28.appspot.com",
  messagingSenderId: "59914060519",
  appId: "1:59914060519:web:2459c52510ef3f5ac45842",
  measurementId: "G-66LQ2W7R0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }
