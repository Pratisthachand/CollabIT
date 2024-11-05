// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "collabit-9027c.firebaseapp.com",
  projectId: "collabit-9027c",
  storageBucket: "collabit-9027c.firebasestorage.app",
  messagingSenderId: "265897683911",
  appId: "1:265897683911:web:bcc2b6a85ad0393c9c47e2",
  measurementId: "G-6GQ520FXHG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
