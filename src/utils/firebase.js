// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-ntGq9S-sRA2khHRJCSiyfWA4PpJbfiI",
  authDomain: "nutrigen-65de7.firebaseapp.com",
  projectId: "nutrigen-65de7",
  storageBucket: "nutrigen-65de7.appspot.com",
  messagingSenderId: "357234796457",
  appId: "1:357234796457:web:0c3103c4bbc544088786b8",
  measurementId: "G-GT0WYTTCGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const db2 = getFirestore(app);



