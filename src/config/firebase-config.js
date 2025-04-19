// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
import { GoogleAuthProvider } from "firebase/auth";  
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByY06suQqHU4xKBMI2tBoPNd0lKNUnE3E",
  authDomain: "expense-tracker-866f7.firebaseapp.com",
  projectId: "expense-tracker-866f7",
  storageBucket: "expense-tracker-866f7.firebasestorage.app",
  messagingSenderId: "287248018063",
  appId: "1:287248018063:web:b298e3f6b9a9f83c935efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
