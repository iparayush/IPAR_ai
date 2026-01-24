// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);