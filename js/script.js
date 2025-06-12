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
      window.location.href = 'home.html'; // Dev-only redirect
    } else {
      const subscribeWrapper = document.querySelector('.subscribe-wrapper');
      subscribeWrapper.innerHTML = `
        <div class="thank-you-box">Thanks for subscribing! 🐾</div>
      `;
    }
  });
});
