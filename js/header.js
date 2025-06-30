// /js/header.js
console.log("Header loaded!");

document.addEventListener("DOMContentLoaded", () => {
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

  window.addEventListener('scroll', () => {
    document.querySelectorAll('.popup').forEach(popup => {
      popup.classList.add('hidden');
    });
  });
});
