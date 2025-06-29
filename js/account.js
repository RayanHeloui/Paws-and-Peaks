import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { auth } from "./auth.js";

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const formTitle = document.getElementById('form-title');
const toggleText = document.getElementById('toggle-text');
const message = document.getElementById('auth-message');

// 🔄 Switch between login/register
window.toggleForm = function () {
  const isLogin = loginForm.style.display !== 'none';
  loginForm.style.display = isLogin ? 'none' : 'block';
  registerForm.style.display = isLogin ? 'block' : 'none';
  formTitle.textContent = isLogin ? 'Register' : 'Login';
  toggleText.textContent = isLogin ? 'Already have an account?' : "Don't have an account?";
  message.textContent = '';
};

// 🔐 Login
loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "account-dashboard.html";
    })
    .catch((err) => {
      message.textContent = err.message;
    });
});

// 🆕 Register
registerForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "account-dashboard.html";
    })
    .catch((err) => {
      message.textContent = err.message;
    });
});

// ✅ Auto-switch to register form if ?mode=signup is in URL
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'signup') {
    window.toggleForm();
  }
});
