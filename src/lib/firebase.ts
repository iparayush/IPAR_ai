import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // This is intentionally left blank.
  // You should replace this with your project's Firebase configuration.
  // You can find it in the Firebase console.
  // e.g.
  // apiKey: "...",
  // authDomain: "...",
  // projectId: "...",
  // storageBucket: "...",
  // messagingSenderId: "...",
  // appId: "..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
