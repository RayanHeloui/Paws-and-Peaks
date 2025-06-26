// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb1yerEIWp6bXxVi1azqrRoddFDue3a7U",
  authDomain: "pawsandpeaks.firebaseapp.com",
  projectId: "pawsandpeaks",
  storageBucket: "pawsandpeaks.firebasestorage.app",
  messagingSenderId: "637494651303",
  appId: "1:637494651303:web:081b5f7a50609db86a6e82",
  measurementId: "G-FFFW368Z2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
