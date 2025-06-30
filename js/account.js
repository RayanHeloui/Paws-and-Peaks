import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { auth } from "./auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDb1yerEIWp6bXxVi1azqrRoddFDue3a7U",
  authDomain: "pawsandpeaks.firebaseapp.com",
  projectId: "pawsandpeaks",
  storageBucket: "pawsandpeaks.firebasestorage.app",
  messagingSenderId: "637494651303",
  appId: "1:637494651303:web:081b5f7a50609db86a6e82",
  measurementId: "G-FFFW368Z2D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const formTitle = document.getElementById('form-title');
const toggleText = document.getElementById('toggle-text');
const message = document.getElementById('auth-message');

window.toggleForm = function () {
  const isLogin = loginForm.style.display !== 'none';
  loginForm.style.display = isLogin ? 'none' : 'block';
  registerForm.style.display = isLogin ? 'block' : 'none';
  formTitle.textContent = isLogin ? 'Register' : 'Login';
  toggleText.textContent = isLogin ? 'Already have an account?' : "Don't have an account?";
  message.textContent = '';
};

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      // Admin redirect
      if (user.email.endsWith("@pawsandpeaks.com.au")) {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "account-dashboard.html";
      }
    })
    .catch((err) => {
      message.textContent = err.message;
    });
});

registerForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        createdAt: new Date()
      });
      window.location.href = "account-dashboard.html";
    })
    .catch((err) => {
      message.textContent = err.message;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'signup') {
    window.toggleForm();
  }
});
