document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();

  // Admin email list (update as needed)
  const adminEmails = ["admin@pawsandpeaks.com", "admin@example.com"];

  if (adminEmails.includes(email)) {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "customer-dashboard.html";
  }
});
