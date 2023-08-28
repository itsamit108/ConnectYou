import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPTM-rxlAzzYnFmJx1-2x1jLvAz_YicnA",
    authDomain: "chat-app-5f346.firebaseapp.com",
    projectId: "chat-app-5f346",
    storageBucket: "chat-app-5f346.appspot.com",
    messagingSenderId: "738044155244",
    appId: "1:738044155244:web:8bfbe619e58f6aed230f49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
