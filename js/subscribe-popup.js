document.addEventListener("DOMContentLoaded", () => {
  // Auto-show popup
  const popup = document.getElementById("subscribe-popup");
  popup.classList.add("visible");

  // Close button
  const closeBtn = document.getElementById("close-subscribe");
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("visible");
  });

  // Optionally: handle form submission here
  const form = document.getElementById("subscribe-form-popup");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    popup.classList.remove("visible");
  });
});
