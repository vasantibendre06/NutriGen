// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6KQJkvkbKU5g8BXOQQd1hg6zUovj-7UI",
  authDomain: "nutrigen-1199d.firebaseapp.com",
  projectId: "nutrigen-1199d",
  storageBucket: "nutrigen-1199d.appspot.com",
  messagingSenderId: "576345444252",
  appId: "1:576345444252:web:fb122facf4508125404259",
  measurementId: "G-459GLRW51K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
