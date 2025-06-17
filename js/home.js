document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  const leftX = document.getElementById('leftX');
  const leftY = document.getElementById('leftY');
  const centerX = document.getElementById('centerX');
  const centerY = document.getElementById('centerY');
  const rightX = document.getElementById('rightX');
  const rightY = document.getElementById('rightY');

  // 🎯 Transform on scroll
window.addEventListener("scroll", () => {
  const rect = hero.getBoundingClientRect();
  const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

  imgLeft.style.transform = `translate(${progress * 247}px, ${progress * 222}px)`;
  imgCenter.style.transform = `translate(${progress * -567}px, ${progress * 50}px)`;
  imgRight.style.transform = `translate(${progress * -1250}px, ${progress * 445}px)`;
});


  // ✅ Live label updater
  const updateLabel = (slider, label) => {
    label.textContent = slider.value;

    slider.addEventListener('input', () => {
      label.textContent = slider.value;
    });

    slider.addEventListener('change', () => {
      label.textContent = slider.value;
    });
  };

  // 🔁 Attach to all sliders
  updateLabel(leftX, document.getElementById('leftXVal'));
  updateLabel(leftY, document.getElementById('leftYVal'));
  updateLabel(centerX, document.getElementById('centerXVal'));
  updateLabel(centerY, document.getElementById('centerYVal'));
  updateLabel(rightX, document.getElementById('rightXVal'));
  updateLabel(rightY, document.getElementById('rightYVal'));
});
