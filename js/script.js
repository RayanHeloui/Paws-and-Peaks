document.addEventListener('DOMContentLoaded', () => {
  const subscribeForm = document.getElementById('subscribe-form');
  const emailInput = document.getElementById('email-input');
  
  const allowedEmails = ['rayan@pap.admin', 'nas@pap.admin'];

  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim().toLowerCase();

    if (!email || !email.includes('@')) {
      alert("Please enter a valid email address!");
      return;
    }

    if (allowedEmails.includes(email)) {
      window.location.href = 'html/home.html';
    } else {
      // Clear form and display a thank-you message instead of redirecting
      const subscribeWrapper = document.querySelector('.subscribe-wrapper');
      subscribeWrapper.innerHTML = `
        <p class="thank-you">Thanks for subscribing! 🐾 We'll be in touch soon.</p>
      `;
    }
  });
});
