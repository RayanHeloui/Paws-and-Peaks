console.log("Header loaded!");

document.addEventListener("click", function (e) {
  const iconWrappers = document.querySelectorAll(".icon-wrapper");
  let clickedInsidePopup = false;

  iconWrappers.forEach(wrapper => {
    const icon = wrapper.querySelector("a");
    const popup = wrapper.querySelector(".popup");

    if (icon.contains(e.target)) {
      // Hide all popups first
      document.querySelectorAll(".popup").forEach(p => p.classList.add("hidden"));
      // Toggle current popup
      popup.classList.toggle("hidden");
      clickedInsidePopup = true;
    } else if (popup.contains(e.target)) {
      clickedInsidePopup = true;
    }
  });

  // Clicked outside all popups and icons
  if (!clickedInsidePopup) {
    document.querySelectorAll(".popup").forEach(p => p.classList.add("hidden"));
  }
});
