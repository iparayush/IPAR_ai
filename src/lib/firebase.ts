import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQZBxQm4-U-CK-LCQxH7Vs45urLQ3_4U0",
  authDomain: "ayushipar-4a8c5.firebaseapp.com",
  projectId: "ayushipar-4a8c5",
  storageBucket: "ayushipar-4a8c5.firebasestorage.app",
  messagingSenderId: "153361823712",
  appId: "1:153361823712:web:27ac2109be15af032add85",
  measurementId: "G-JM2VQ08R2W"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
