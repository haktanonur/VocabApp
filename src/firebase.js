// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAstKXSWE2GAoQo_RMPtySuwycFkzM8JXQ",
    authDomain: "wordsproject-2a040.firebaseapp.com",
    projectId: "wordsproject-2a040",
    storageBucket: "wordsproject-2a040.appspot.com",
    messagingSenderId: "473978321782",
    appId: "1:473978321782:web:23d5a2c006999e9f309857",
    measurementId: "G-D2TSGCXYVK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };