document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const imgLeft = document.querySelector(".img-left");
  const imgCenter = document.querySelector(".img-center");
  const imgRight = document.querySelector(".img-right");

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

    // Animate to final positions
    imgLeft.style.transform = `translate(${progress * 400}px, ${progress * -100}px)`;
    imgCenter.style.transform = `translate(${progress * 0}px, ${progress * 0}px)`;
    imgRight.style.transform = `translate(${progress * -400}px, ${progress * 100}px)`;
  });
});

