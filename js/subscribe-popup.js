function initSubscribePopup() {
  const popup = document.getElementById("subscribe-popup");
  const closeBtn = document.getElementById("close-subscribe");

  if (!popup || !closeBtn) return;

 // Show after a delay
setTimeout(() => {
  popup.classList.add("visible"); // 👈 use 'visible' not 'remove hidden'
}, 700);

// Close on X button
closeBtn.addEventListener("click", () => {
  popup.classList.remove("visible");
});

// Close if clicking outside the popup
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("visible");
  }
});

// Fake submit
document
  .getElementById("subscribe-form-popup")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    popup.classList.remove("visible");
    alert("Thanks for subscribing!");
  });
}
