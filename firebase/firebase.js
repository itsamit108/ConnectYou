import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARSicVCH9RzlQGlqxal2lGSALJVebW1G0",
    authDomain: "connectyou-fc086.firebaseapp.com",
    projectId: "connectyou-fc086",
    storageBucket: "connectyou-fc086.appspot.com",
    messagingSenderId: "748095619091",
    appId: "1:748095619091:web:4d8273a1b31ec03d0d7fe6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
