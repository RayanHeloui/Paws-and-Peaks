// 🔁 Toggle Between Login and Register Views
function toggleForm() {
  const login = document.getElementById('loginForm');
  const register = document.getElementById('registerForm');
  const title = document.getElementById('form-title');
  const toggleText = document.getElementById('toggle-text');

  if (login && register) {
    const isLoginHidden = login.style.display === 'none';
    login.style.display = isLoginHidden ? 'block' : 'none';
    register.style.display = isLoginHidden ? 'none' : 'block';
    title.textContent = isLoginHidden ? 'Login' : 'Register';
    toggleText.textContent = isLoginHidden ? "Don't have an account?" : "Already have an account?";
  }
}

// 🔐 Handle Registration
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.some(user => user.username === username)) {
    alert('Username already exists!');
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registered successfully!');
  window.location.href = 'account.html';
});

// 🔐 Handle Login
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const match = users.find(user => user.username === username && user.password === password);

  if (match) {
    localStorage.setItem('currentUser', JSON.stringify(match));
    alert('Login successful!');

    // 🔑 Admin check
    if (match.username === "admin123") {
      window.location.href = 'admin-dashboard.html';
    } else {
      window.location.href = 'account-dashboard.html';
    }
  } else {
    alert('Incorrect username or password!');
  }
});

// 🚪 Logout
function logout() {
  localStorage.removeItem('currentUser');
  window.location.reload();
}

// 👁️ Inject Nav UI Dynamically
window.addEventListener('load', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const nav = document.querySelector('nav');
  if (nav) {
    if (currentUser) {
      nav.innerHTML += `<span>Welcome, ${currentUser.username}</span> <button onclick="logout()">Logout</button>`;
    } else {
      nav.innerHTML += `<a href="account.html">Account</a>`;
    }
  }
});
