// layout.js

// Injects shared header + footer HTML and behavior
export function loadSharedLayout() {
  // Load header
  fetch("/html/header.html")
    .then(res => res.text())
    .then(data => {
      const headerEl = document.getElementById("header-container");
      if (headerEl) headerEl.innerHTML = data;
    })
    .then(() => initHeaderInteractions());

  // Load footer
  fetch("/html/footer.html")
    .then(res => res.text())
    .then(data => {
      const footerEl = document.getElementById("footer-container");
      if (footerEl) footerEl.innerHTML = data;
    });
}

// Initializes header-specific event listeners
function initHeaderInteractions() {
  document.addEventListener("click", function (e) {
    const iconWrappers = document.querySelectorAll(".icon-wrapper");
    let clickedInsidePopup = false;

    iconWrappers.forEach(wrapper => {
      const icon = wrapper.querySelector("a");
      const popup = wrapper.querySelector(".popup");

      if (icon && icon.contains(e.target)) {
        document.querySelectorAll(".popup").forEach(p => p.classList.add("hidden"));
        if (popup) popup.classList.toggle("hidden");
        clickedInsidePopup = true;
      } else if (popup && popup.contains(e.target)) {
        clickedInsidePopup = true;
      }
    });

    if (!clickedInsidePopup) {
      document.querySelectorAll(".popup").forEach(p => p.classList.add("hidden"));
    }
  });

  window.addEventListener("scroll", () => {
    document.querySelectorAll(".popup").forEach(popup => popup.classList.add("hidden"));
  });
}
