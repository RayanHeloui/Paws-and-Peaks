function initSubscribePopup() {
  const popup = document.getElementById("subscribe-popup");
  const closeBtn = document.getElementById("close-subscribe");

  if (!popup || !closeBtn) return;

  // Show after a delay
  setTimeout(() => {
    popup.classList.remove("hidden");
  }, 700);

  // Close on X button
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Close if clicking outside the popup
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });

  // Fake submit
  document
    .getElementById("subscribe-form-popup")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      popup.classList.add("hidden");
      alert("Thanks for subscribing!");
    });
}
