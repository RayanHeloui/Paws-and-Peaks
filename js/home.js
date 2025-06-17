document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  // Tweak panel values
  const leftX = document.getElementById('leftX');
  const leftY = document.getElementById('leftY');
  const rightX = document.getElementById('rightX');
  const rightY = document.getElementById('rightY');

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

    const lX = parseFloat(leftX.value);
    const lY = parseFloat(leftY.value);
    const rX = parseFloat(rightX.value);
    const rY = parseFloat(rightY.value);

    imgLeft.style.transform = `translate(${progress * lX}px, ${progress * lY}px)`;
    imgCenter.style.transform = `translate(0px, 0px)`; // static for now
    imgRight.style.transform = `translate(${progress * rX}px, ${progress * rY}px)`;
  });
});
