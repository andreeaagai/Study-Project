import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbtMwG3nlOP1xMawLGqYbQ2s5UG0zVxuI",
    authDomain: "intership-proiect.firebaseapp.com",
    projectId: "intership-proiect",
    storageBucket: "intership-proiect.firebasestorage.app",
    messagingSenderId: "144185132317",
    appId: "1:144185132317:web:4bfba4be96d9ad0bb14df4",
    measurementId: "G-1N8RFZ4PE5"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
