// ✅ Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDb1yerEIWp6bXxVi1azqrRoddFDue3a7U",
  authDomain: "pawsandpeaks.firebaseapp.com",
  projectId: "pawsandpeaks",
  storageBucket: "pawsandpeaks.firebasestorage.app",
  messagingSenderId: "637494651303",
  appId: "1:637494651303:web:081b5f7a50609db86a6e82",
  measurementId: "G-FFFW368Z2D"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the Firebase Auth instance for use elsewhere
export const auth = getAuth(app);
