// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHw6GzascixVj77_qeWVxbP0waENTg3EU",
  authDomain: "realtime-chat-app-69db8.firebaseapp.com",
  projectId: "realtime-chat-app-69db8",
  storageBucket: "realtime-chat-app-69db8.appspot.com",
  messagingSenderId: "682283846582",
  appId: "1:682283846582:web:75f8e4e376e5009a2a0f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
